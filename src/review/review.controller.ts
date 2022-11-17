import { Controller } from '@nestjs/common';

import { Body, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreatReviewDto } from 'src/dto/createReviewDto';
import { ReviewService } from './review.service';

@Controller('review')
export class ReviewController {
    constructor(private readonly reviewService: ReviewService) { }


    @UseGuards(AuthGuard(
        'jwt'
    ))
    @Post()
    async createReview(@Body() createReviewDto: CreatReviewDto) {

        return this.reviewService.createReview(createReviewDto);
    }



    @UseGuards(AuthGuard(
        'jwt'
    ))

    @Get('/top-review')
    async getTopReviewRestaurantIds() {

        return this.reviewService.getTopReviewRestaurantIds();
    }


}
