import { IsNotEmpty } from "class-validator";


export class CreateUserDto {

    @IsNotEmpty({ message: "First name can't be empry" })
    readonly fname: string;

    @IsNotEmpty({ message: "Last name can't be empry" })
    readonly lname: string;

    @IsNotEmpty({ message: "Please privide your email" })
    readonly email: string;

    @IsNotEmpty({ message: "Please privide your address" })
    readonly address: string;

    readonly password: string;
}
