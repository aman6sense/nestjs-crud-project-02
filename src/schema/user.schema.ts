

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { UserType } from 'src/model/user.userType.enum';


export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {

    @Prop({ type: String, required: [true, "First name is required"] })
    fname: string;

    @Prop({ type: String, required: [true, "Last Name is required"] })
    lname: string;

    @Prop({ type: String, required: [true, "Email is required"] })
    email: string;

    @Prop({ type: String, required: [true, "Password is required"] })
    password: string;

    @Prop({ type: String, enum: [UserType] })
    userType: UserType



}


export const userSchema = SchemaFactory.createForClass(User);
