import { Body, Controller, Logger, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto } from 'src/dto/createUserDto';
import { UserService } from './user.service';



@Controller('user')
export class UserController {


    private logger = new Logger('Usercontroller');

    constructor(private readonly userService: UserService) { }

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto) {

        const result = await this.userService.createUser(createUserDto);


        if (!result) {

            this.logger.verbose('User is duplicate');

            return "Duplicate email found"
        }

        return result;


    }

    @Post('/test')
    @UseGuards(AuthGuard(
        'jwt'
    ))
    test(@Req() req) {
        console.log("in user");

        // console.log("req ;: ", req);
        return "got it ";
    }

}
