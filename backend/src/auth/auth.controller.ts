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
         return {
      success: true,
      message: 'User registered successfully',
      data: {
        id: register.id,
        name: register.name,
        email: register.email,
        role: register.role,
      },
    };
    }

    @Post('login')
    async login(@Body() body: any){
       const login = await this.authService.login(body);
      return {
    success: true,
    message: 'Logged in successfully',
    data: {
      token: login.token,
      user: login.user,
    },
  };
    }



}