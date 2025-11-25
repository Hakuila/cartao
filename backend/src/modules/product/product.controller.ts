import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Delete,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post(':storeId')
  create(
    @Param('storeId') storeId: string,
    @Body() data: CreateProductDto,
  ) {
    return this.productService.create(storeId, data);
  }

  @Get(':storeId')
  findAll(@Param('storeId') storeId: string) {
    return this.productService.findAll(storeId);
  }

  @Get('one/:id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateProductDto) {
    return this.productService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(id);
  }
}
