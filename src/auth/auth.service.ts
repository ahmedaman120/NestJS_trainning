import { Injectable } from '@nestjs/common';
import { User, Bookmark } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service';
import { Iuser } from './user';
import * as argo from 'argon2'

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService){}
  signin() {
    return {
      msg: 'sign in info',
    };
  }

  async signup(us: Iuser) {
    //generate password hash
    const hass = await argo.hash(us.password);

    // save password after hashing 
    const u = await this.prisma.user.create({
      data: {
        email: us.email,
        hash: hass,
        firstName: us.firstname ,
        lastName: us.lastname
      },
      select: {
        id: true,
        email: true,
        firstName: true
      }
    })
    //return message to confirm sining up is complete

    return {
      msg: 'sign up info',
      user: u
    };
  }
}
