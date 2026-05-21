import { IsEmail, IsNotEmpty, IsString, MinLength, IsIn, registerDecorator, ValidationArguments, ValidationOptions } from 'class-validator';

export function IsValidRole(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'IsValidRole',
      target: object.constructor as Function,
      propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, _args: ValidationArguments) {
          return typeof value === 'string' && ['programmer', 'coach'].includes(value.toLowerCase());
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} must be either Programmer or Coach`;
        },
      },
    });
  };
}

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
  @IsValidRole({ message: 'Role must be either Programmer or Coach' })
  role: 'Programmer' | 'Coach';
}