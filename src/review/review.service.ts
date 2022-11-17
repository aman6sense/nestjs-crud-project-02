import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatReviewDto } from 'src/dto/createReviewDto';
import { Review, ReviewDocument } from 'src/schema/review.schema';

@Injectable()
export class ReviewService {

    constructor(@InjectModel(Review.name) private reviewModel: Model<ReviewDocument>) { }

    async createReview(createReviewDto: CreatReviewDto) {

        const review = await this.reviewModel.create(createReviewDto);

        return review;
    }

    async getTopReviewRestaurantIds() {

        const review = await this.reviewModel.find({}).sort({ review: -1 })

        return review;
    }

}
