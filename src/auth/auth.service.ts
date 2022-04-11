import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signin() {
    return {
      msg: 'sign in info',
    };
  }

  signup() {
    return {
      msg: 'sign up info',
    };
  }
}
