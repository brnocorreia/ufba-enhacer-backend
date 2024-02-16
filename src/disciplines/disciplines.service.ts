import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  CreateDisciplineDTO,
  ResponseDisciplineDTO,
} from './dtos/disciplines.dto';
import { Discipline } from '@prisma/client';
import {
  DepartmentNotFound,
  DisciplineNotFound,
  NameNotFound,
} from 'src/errors/http.exceptions';

@Injectable()
export class DisciplinesService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(discipline: CreateDisciplineDTO): Promise<Discipline> {
    return this.prismaService.discipline.create({
      data: { ...discipline },
    });
  }

  async getDisciplineByCode(code: string): Promise<Discipline> {
    const discipline = await this.prismaService.discipline.findUnique({
      where: {
        code: code,
      },
    });
    return !discipline
      ? Promise.reject(new DisciplineNotFound(code))
      : discipline;
  }

  async getDisciplinesByDept(
    department: string,
  ): Promise<ResponseDisciplineDTO[]> {
    const disciplines = await this.prismaService.discipline.findMany({
      where: {
        department: {
          contains: department,
        },
      },
      orderBy: {
        code: 'asc',
      },
      select: {
        code: true,
        name: true,
        workload: true,
        department: true,
        program: true,
        objective: true,
        content: true,
        bibliography: true,
      },
    });

    return disciplines.length === 0
      ? Promise.reject(new DepartmentNotFound(department))
      : disciplines;
  }

  async getDisciplinesByName(name: string): Promise<ResponseDisciplineDTO[]> {
    const disciplines = await this.prismaService.discipline.findMany({
      where: {
        name: {
          contains: name,
          mode: 'insensitive',
        },
      },
      orderBy: {
        name: 'asc',
      },
      select: {
        code: true,
        name: true,
        workload: true,
        department: true,
        program: true,
        objective: true,
        content: true,
        bibliography: true,
      },
    });
    return disciplines.length === 0
      ? Promise.reject(new NameNotFound(name))
      : disciplines;
  }
}
