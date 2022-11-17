import { Controller } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';

import { Body, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreatRestaurantDto } from 'src/dto/createRestaurantDto';

@Controller('restaurant')
export class RestaurantController {
    constructor(private readonly restaurantService: RestaurantService) { }


    @UseGuards(AuthGuard(
        'jwt'
    ))
    @Post()
    async createRestaurant(@Body() createRestaurantDto: CreatRestaurantDto) {

        return this.restaurantService.createUser(createRestaurantDto);
    }


}
