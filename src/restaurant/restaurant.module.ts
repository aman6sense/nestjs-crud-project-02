import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Restaurant, restaurantSchema } from 'src/schema/restaurand.schema';
import { RestaurantController } from './restaurant.controller';
import { RestaurantService } from './restaurant.service';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Restaurant.name, schema: restaurantSchema }
  ])],
  controllers: [RestaurantController],
  providers: [RestaurantService],
})
export class RestaurantModule {}
