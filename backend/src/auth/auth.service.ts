import {
    BadRequestException,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import*as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';


@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ){}
    async register(registerDto: RegisterDto){
        const existingUser = await this.usersService.findByEmail(
            registerDto.email,
        );
        if(existingUser){
            throw new BadRequestException('Email already Exist');
        }
        const hashedPassword = await bcrypt.hash(
            registerDto.password,
            10
        );
        const user = await this.usersService.create({
            ...registerDto,
            password: hashedPassword,
        });
        const token = this.jwtService.sign({
            id: user.id,
            email: user.email,
            role: user.role,
        });
        return{
            message: 'Registration Successful',
            token,
            user,
        };
    }
    async login(loginDto: LoginDto){
        const user = await this.usersService.findByEmail(
            loginDto.email,
        );
        if(!user){
            throw new UnauthorizedException('Invalid Credentials');
        }
        const isPasswordMatched = await bcrypt.compare(
            loginDto.password,
            user.password,
        );
        if(isPasswordMatched){
            throw new UnauthorizedException('Invalid Password,Try again');

        }
        const token = this.jwtService.sign({
            id: user.id,
            email:user.email,
            role: user.role,

        });
        return{
            message: 'Login Successful',
            token,
            user,
        };
    }
}
