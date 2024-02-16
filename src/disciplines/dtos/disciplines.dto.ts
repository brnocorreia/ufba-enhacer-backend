import { IsNotEmpty } from 'class-validator';

export class CreateDisciplineDTO {
  @IsNotEmpty()
  code: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  workload: number;

  @IsNotEmpty()
  department: string;

  program: string;

  objective: string;

  content: string;

  bibliography: string;
}

export class ResponseDisciplineDTO {
  code: string;
  name: string;
  workload: number;
  department: string;
  program: string;
  objective: string;
  content: string;
  bibliography: string;
}
