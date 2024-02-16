import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { DisciplinesService } from './disciplines.service';
import { Discipline } from '@prisma/client';
import {
  CreateDisciplineDTO,
  ResponseDisciplineDTO,
} from './dtos/disciplines.dto';

@Controller('disciplines')
export class DisciplinesController {
  constructor(private readonly disciplinesService: DisciplinesService) {}

  decodeQueryParam = (p) => decodeURIComponent(p.replace(/\+/g, ' '));

  @Post()
  create(@Body() discipline: CreateDisciplineDTO): Promise<Discipline> {
    return this.disciplinesService.create(discipline);
  }

  @Get('/:code/details')
  getDisciplineByCode(@Param('code') code): Promise<Discipline> {
    return this.disciplinesService.getDisciplineByCode(code);
  }

  @Get('/departments')
  getDisciplinesByDept(
    @Query('dept') department: string,
  ): Promise<ResponseDisciplineDTO[]> {
    return this.disciplinesService.getDisciplinesByDept(department);
  }
}
