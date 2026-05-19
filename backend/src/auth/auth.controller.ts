import { Controller, Get } from '@nestjs/common';

@Controller('auth')
export class AuthController {

@Get('test')
getTest(){
return{status:'yeahhh,Working'};
}
}