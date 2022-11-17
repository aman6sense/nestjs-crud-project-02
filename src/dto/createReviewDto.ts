import { IsNotEmpty } from "class-validator";


export class CreatReviewDto {

    @IsNotEmpty({ message: "Name can't be empry" })
    readonly review: number;

    @IsNotEmpty({ message: "Please privide your email" })
    readonly comment: string;

    @IsNotEmpty({ message: "Please provide restaurant ref and name" })
    readonly restaurant: string;

    @IsNotEmpty({ message: "Please provide customer ref and name" })
    readonly customer: string;



}
