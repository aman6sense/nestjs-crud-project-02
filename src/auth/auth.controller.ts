import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { SignInUserDto } from 'src/dto/signInUserDto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('/signIn')
    signIn(@Body() signInUserDto: SignInUserDto): Promise<{ accessToken: string }> {

        return this.authService.signIn(signInUserDto);
    }


    @Post('/test')
    @UseGuards(AuthGuard())
    test(@Req() req) {

        // console.log("req ;: ", req);
        return "from auth"
    }

}
