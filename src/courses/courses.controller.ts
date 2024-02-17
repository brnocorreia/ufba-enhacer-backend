import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDTO } from './dtos/courses.dto';
import { Course } from '@prisma/client';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  create(@Body() course: CreateCourseDTO): Promise<Course> {
    return this.coursesService.create(course);
  }

  @Get('/all')
  getAllCourses(): Promise<Course[]> {
    return this.coursesService.getAllCourses();
  }

  @Get()
  getCoursesByName(@Query('name') name: string): Promise<Course[]> {
    return this.coursesService.getCourseByName(name);
  }

  @Get('/:code/details')
  getCourseByCode(@Param('code') code: string): Promise<Course> {
    const toIntCode = parseInt(code);
    return this.coursesService.getCourseByCode(toIntCode);
  }
}
