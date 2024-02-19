import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCourseDTO } from './dtos/courses.dto';
import { Course, Prisma } from '@prisma/client';
import {
  CourseNotFound,
  NameNotFound,
  UniqueCourseViolation,
} from 'src/errors/http.exceptions';

@Injectable()
export class CoursesService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(course: CreateCourseDTO): Promise<Course> {
    try {
      const response = await this.prismaService.course.create({
        data: { ...course },
      });
      return response;
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          throw new UniqueCourseViolation(course.name); // Mudar erro
        }
        throw e;
      }
    }
  }

  async getAllCourses(): Promise<Course[]> {
    return this.prismaService.course.findMany({ orderBy: { name: 'asc' } });
  }

  async getCourseByCode(code: number): Promise<Course> {
    const course = await this.prismaService.course.findUnique({
      where: {
        code: code,
      },
    });

    return !course ? Promise.reject(new CourseNotFound(code)) : course;
  }

  async getCourseByName(name: string): Promise<Course[]> {
    const response = await this.prismaService.course.findMany({
      where: {
        name: {
          contains: name,
          mode: 'insensitive',
        },
      },
      orderBy: {
        name: 'asc',
      },
    });

    return response.length === 0
      ? Promise.reject(new NameNotFound(name))
      : response;
  }
}
