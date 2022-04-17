import { Module, Global } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from './prisma.service';
import { PrismaController } from './prisma.controller';


@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
  controllers: [PrismaController],
})
export class PrismaModule extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: 'postgresql://postgres:postgres@localhost:5431/nest?schema=public',
        },
      },
    });
  }
}
