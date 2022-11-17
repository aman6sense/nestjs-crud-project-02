import { Module } from '@nestjs/common';

import { RestaurantModule } from './restaurant/restaurant.module';
import { ReviewModule } from './review/review.module';

import { UserModule } from './user/user.module';

import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';



@Module({
  imports: [
    UserModule,
    RestaurantModule,
    ReviewModule,
    MongooseModule.forRoot('mongodb+srv://restaurantreview:restaurantreview@cluster0.d0akukp.mongodb.net/?retryWrites=true&w=majority'),
    AuthModule,


  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
