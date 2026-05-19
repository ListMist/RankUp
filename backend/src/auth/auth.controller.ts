import { Controller, Post,Body } from '@nestjs/common';
import { AuthService } from './auth.service';
@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
    ){}

    @Post('register')
    async register(@Body() body:any){
        const register = await this.authService.register(body);
         return register;
    }

    @Post('login')
    async login(@Body() body: any){
       const login = await this.authService.login(body);
       return login;
    }



}