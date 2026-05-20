import { IsEmail, IsNotEmpty, IsString, MinLength, IsIn } from 'class-validator';

export class RegisterDto {
  @IsString()
  @IsNotEmpty({ message: 'Name cannot be blank' })
  name: string;

  @IsEmail({}, { message: 'Invalid email structure format' })
  email: string;

  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  password: string;

  @IsString()
  @IsIn(['Programmer', 'Coach'], { message: 'Role must be either Programmer or Coach' })
  role: 'Programmer' | 'Coach';
}