import { HttpException, HttpStatus } from '@nestjs/common';

export class DisciplineNotFound extends HttpException {
  constructor(code: string) {
    super(
      `Unable to find a discipline with code: ${code}. Try a different one.`,
      HttpStatus.NOT_FOUND,
    );
  }
}

export class DepartmentNotFound extends HttpException {
  constructor(dept: string) {
    super(
      `Unable to find a discipline with department: ${dept}. Try a different one.`,
      HttpStatus.NOT_FOUND,
    );
  }
}
