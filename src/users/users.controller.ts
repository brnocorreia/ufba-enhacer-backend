import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO, ResponseUserDTO } from './dtos/users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/new')
  create(@Body() userInfo: CreateUserDTO): Promise<ResponseUserDTO> {
    return this.usersService.create(userInfo);
  }
}
