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

export class NameNotFound extends HttpException {
  constructor(name: string) {
    super(
      `Unable to find something with name: ${name}. Try a different one.`,
      HttpStatus.NOT_FOUND,
    );
  }
}

export class UniqueCourseViolation extends HttpException {
  constructor(name: string) {
    super(`Course with name: ${name} already exists.`, HttpStatus.BAD_REQUEST);
  }
}

export class CourseNotFound extends HttpException {
  constructor(code: number) {
    super(
      `Unable to find a course with code: ${code}. Try a different one.`,
      HttpStatus.NOT_FOUND,
    );
  }
}

export class UniqueUserViolation extends HttpException {
  constructor() {
    super(
      `User already registered. Try a different email or username`,
      HttpStatus.BAD_REQUEST,
    );
  }
}

export class UserNotFound extends HttpException {
  constructor(key: string, value: string) {
    super(
      `Unable to find a user with ${key}: ${value}. Try a different one.`,
      HttpStatus.NOT_FOUND,
    );
  }
}
