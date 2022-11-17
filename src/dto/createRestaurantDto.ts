import { IsNotEmpty } from "class-validator";


export class CreatRestaurantDto {

    @IsNotEmpty({ message: "Name can't be empry" })
    readonly name: string;

    @IsNotEmpty({ message: "Please privide your email" })
    readonly email: string;

    @IsNotEmpty({ message: "Please privide your address" })
    readonly address: string;


    @IsNotEmpty({ message: "Please provide owner ref and name" })
    readonly owner: string;



}
