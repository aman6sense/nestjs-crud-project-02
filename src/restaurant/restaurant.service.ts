import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatRestaurantDto } from 'src/dto/createRestaurantDto';
import { Restaurant } from 'src/schema/restaurand.schema';
import { UserDocument } from 'src/schema/user.schema';

@Injectable()
export class RestaurantService {

    constructor(@InjectModel(Restaurant.name) private restaurantModel: Model<UserDocument>) { }

    async createUser(createUserDto: CreatRestaurantDto) {

        const restaursnt = await this.restaurantModel.create(createUserDto);

        return restaursnt;
    }

}
