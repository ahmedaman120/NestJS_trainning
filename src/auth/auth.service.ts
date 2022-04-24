import { ForbiddenException, Injectable } from '@nestjs/common';
// import { User, Bookmark } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service';
import { Iuser } from './user';
import * as argo from 'argon2';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
 async signin(user: Iuser) {
    //find  the user by email'
    const u = this.prisma.user.findUnique({
      where: {
        email: user.email,
      }
    })
    // if user does not exist throw exception
    if (!u) throw new ForbiddenException('Credintials incorrect');

    //compare password
    const pwMatch = await argo.verify((await u).hash, user.password);
    //if password incorrect throw exception
    if (!pwMatch) throw new ForbiddenException('Credintials incorrect');
    //send back the user
    delete (await u).hash;
    return {
      msg: 'sign in info',
      user: u,
    };
  }

  async signup(us: Iuser) {
    try {
      //generate password hash
      const hass = await argo.hash(us.password);

      // save password after hashing
      const u = await this.prisma.user.create({
        data: {
          email: us.email,
          hash: hass,
          firstName: us.firstname,
          lastName: us.lastname,
        },
        select: {
          id: true,
          email: true,
          firstName: true,
        },
      });
      //return message to confirm sining up is complete

      return {
        msg: 'sign up info',
        user: u,
      };
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}
