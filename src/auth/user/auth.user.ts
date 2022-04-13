import { IsAlpha, IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class Iuser {
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  password: string;

  @IsAlpha()
  firstname: string;
  @IsAlpha()
  lastname: string;
}
