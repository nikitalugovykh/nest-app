import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProductModel } from '../product/product.model/product.model';
import { ReviewModel } from './review.model/review.model';

@Controller('review')
export class ReviewController {
  @Post('create')
  async create(@Body() dto: Omit<ReviewModel, '_id'>) {

  }
  @Delete(':id')
  async delete(@Param() id: string) {

  }
  @Get('byProduct/:productId')
  async getByProduct(@Param('productId') productId: string){}

}
