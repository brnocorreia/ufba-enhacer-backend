import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDTO, ResponseUserDTO } from './dtos/users.dto';
import { Prisma } from '@prisma/client';
import { UniqueUserViolation } from 'src/errors/http.exceptions';
import * as bcrypt from 'bcrypt';
import config from '../config/config';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(userInfo: CreateUserDTO): Promise<ResponseUserDTO> {
    try {
      const hashPass = await bcrypt.hash(
        userInfo.password,
        config.HASH_SALT_ROUNDS,
      );
      const newUser = await this.prismaService.user.create({
        data: { ...userInfo, password: hashPass },
        select: {
          id: true,
          first_name: true,
          last_name: true,
          username: true,
          email: true,
          status: true,
          isAdmin: true,
          created_at: true,
          updated_at: true,
        },
      });
      return newUser;
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          throw new UniqueUserViolation();
        }
        throw e;
      }
    }
  }
}
