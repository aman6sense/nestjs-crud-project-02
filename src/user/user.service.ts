import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/dto/createUserDto';
import { UserType } from 'src/model/user.userType.enum';
import { User, UserDocument } from 'src/schema/user.schema';

@Injectable()
export class UserService {

    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

    async createUser(createUserDto: CreateUserDto) {

        const userDoc = { ...createUserDto };

        const email = userDoc.email;
        const exist = await this.userModel.findOne({ email: email });

        userDoc['userType'] = userDoc['userType'] ? userDoc['userType'] : UserType.CUSTOMER;



        let password = userDoc['password'];
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(password, salt);

        userDoc['password'] = hash;

        if (exist) {
            return false;
        }
        else {
            const user = await this.userModel.create(userDoc);
            
            const userObj = user.toObject();
            delete userObj.password;

            return userObj;
        }


    }
    async getUserByEmail(email: string) {

        const user = this.userModel.findOne({ email: email });

        return user;
    }


}
