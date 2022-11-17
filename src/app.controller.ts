import { Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';



@Controller('app')
export class AppController {
    constructor() { }

    @Post('/auth/login')
    @UseGuards(AuthGuard("local"))
    async login() {
        console.log("hit");

        return "Login route "
    }

















}
