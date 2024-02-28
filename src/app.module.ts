import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { DisciplinesModule } from './disciplines/disciplines.module';
import { CoursesModule } from './courses/courses.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [PrismaModule, DisciplinesModule, CoursesModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
