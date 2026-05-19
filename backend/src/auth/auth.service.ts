import { 
    Injectable,
    BadRequestException,
 } from '@nestjs/common';
 import { JwtService } from '@nestjs/jwt';
 import * as bcrypt from 'bcryptjs';
 import { UsersService } from '../users/users.service';



@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService : JwtService,
    ){}

    async register(data: any){
        const exists =await this.usersService.findByEmail(
            data.email,
        );
        if(exists){
            throw new BadRequestException('User already exists');
        }
        const hashedPassword = await bcrypt.hash(
            data.password,
            10,
        );
        const user = await this.usersService.Create({
            ...data,
            password: hashedPassword,
        });
        return user;
    }
    async login(data:any){
        const user =await this.usersService.findByEmail(
            data.email,
        );
        if(!user){
            throw new BadRequestException('Register first');

        }
        const matched = await bcrypt.compare(
            data.password,
            user.password,
        );
        if(!matched){
            throw new BadRequestException('Incorrect Password');

        }
        const token = this.jwtService.sign({
            id: user.id,
            email: user.email,
            role: user.role
        });
        return {
            token,
            user,
        };
    }

}
