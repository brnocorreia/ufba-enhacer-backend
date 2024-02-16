import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { DisciplinesModule } from './disciplines/disciplines.module';

@Module({
  imports: [PrismaModule, DisciplinesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
