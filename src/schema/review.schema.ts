

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Restaurant } from './restaurand.schema';
import { User } from './user.schema';


export type ReviewDocument = Review & Document;

@Schema({ timestamps: true })
export class Review {

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' })
    restaurant: Restaurant;


    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    customer: User;


    @Prop({ type: Number })
    review: number;

    @Prop({ type: String })
    comment: string;


}


export const ReviewSchema = SchemaFactory.createForClass(Review);
