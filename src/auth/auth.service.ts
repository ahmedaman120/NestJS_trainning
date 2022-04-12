import { Injectable } from '@nestjs/common';
import { User, Bookmark } from '@prisma/client'
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
