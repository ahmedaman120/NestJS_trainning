import { Module } from '@nestjs/common';
// import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthControler } from './auth.controler';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthControler],
  providers: [AuthService],
})
export class AuthModule {}
