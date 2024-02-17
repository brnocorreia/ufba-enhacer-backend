import { IsNotEmpty } from 'class-validator';

export class CreateCourseDTO {
  @IsNotEmpty()
  code: number;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  shift: string;

  @IsNotEmpty()
  min_duration: number;

  @IsNotEmpty()
  max_duration: number;

  @IsNotEmpty()
  legal_base: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  ob_workload: number;

  @IsNotEmpty()
  op_workload: number;

  @IsNotEmpty()
  ac_workload: number;
}
