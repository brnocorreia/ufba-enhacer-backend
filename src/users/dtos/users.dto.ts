import { Status } from '@prisma/client';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDTO {
  @IsNotEmpty()
  @MinLength(2)
  first_name: string;

  @IsNotEmpty()
  @MinLength(2)
  last_name: string;

  @IsNotEmpty()
  @MinLength(3)
  username: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;
}

export class ResponseUserDTO {
  id: string;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  status: Status;
  isAdmin: boolean;
  created_at: Date;
  updated_at: Date;
}
