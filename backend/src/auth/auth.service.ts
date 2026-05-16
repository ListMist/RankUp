import {
    BadRequestException,
    Injectable,
    UnauthorizedException,
    Inject,
    forwardRef,
} from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import*as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { User } from 'src/users/entities/user.entity';


@Injectable()
export class AuthService {
    constructor(
        @Inject(forwardRef(()=>UsersService))
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
        if(!isPasswordMatched){
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
            user:{
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
        };
    }
}
