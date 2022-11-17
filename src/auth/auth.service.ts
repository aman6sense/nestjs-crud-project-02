import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { SignInUserDto } from 'src/dto/signInUserDto';
import { UserService } from 'src/user/user.service';
import { JwtPayload } from './jwt.payload.interface';



@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService, private userService: UserService) { }


    async signIn(signInUserDto: SignInUserDto): Promise<{ accessToken: string }> {

        const email = signInUserDto.email;

        const user = await this.userService.getUserByEmail(email);

        // console.log("got user: ", user);
        // console.log("enter user: ", signInUserDto);


        const isMatch = await bcrypt.compare(signInUserDto.password, user.password);

        if (signInUserDto.email && signInUserDto.password && signInUserDto.email == user.email && isMatch) {
            const payload: JwtPayload = { email };

            const accessToken: string = await this.jwtService.sign(payload);

            return { accessToken };
        }
        else {
            throw new UnauthorizedException("please check your ligin credentials");
        }
    }







}
