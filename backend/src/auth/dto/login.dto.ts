import { IsEmail, IsString, MinLength,IsNotEmpty } from 'class-validator';

export class LoginDto {
    @IsNotEmpty({ message: 'Email cannot be empty' })
  @IsEmail({}, { message: 'Invalid email structure format' })
  email!: string;

  @IsNotEmpty({ message: 'Password cannot be empty' })
  @IsString()
  @MinLength(6, { message: ' At least 6 characters' })
  password!: string;
}