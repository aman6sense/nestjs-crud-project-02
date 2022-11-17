import { IsNotEmpty } from "class-validator";


export class SignInUserDto {

    @IsNotEmpty({ message: "Email can't be empry" })
    readonly email: string;

    @IsNotEmpty({ message: "Please privide your password" })
    readonly password: string;
}
