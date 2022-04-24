import { Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request, Body } from '@nestjs/common';
import { Iuser } from './user';

@Controller('auth')
export class AuthControler {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() user: Iuser) {
    console.log(user);
    return this.authService.signup(user);
  }

  @Post('signin')
  signin() {
    return this.authService.signin();
  }
}
