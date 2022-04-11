import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthControler {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup() {}

  @Post('signin')
  signin() {}
}
