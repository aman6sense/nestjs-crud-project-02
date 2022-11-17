

import { Prop,Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from './user.schema';



export type RestaurantDocument = Restaurant & Document;

@Schema({ timestamps: true })
export class Restaurant {



    @Prop({ type: String, required: [true, "Name is required"] })
    name: string;



    @Prop({ type: String, required: [true, "Email is required"] })
    email: string;
    @Prop({ type: String })
    address: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    owner: User;


}


export const restaurantSchema = SchemaFactory.createForClass(Restaurant);
