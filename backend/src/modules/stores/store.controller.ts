import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Delete,
} from '@nestjs/common';
import { StoreService } from './store.service';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';

@Controller('stores')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Post()
  create(@Body() data: CreateStoreDto) {
    return this.storeService.create(data);
  }

  @Get()
  findAll() {
    return this.storeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.storeService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateStoreDto) {
    return this.storeService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.storeService.remove(id);
  }

  // Extra —— listar produtos da loja
  @Get(':id/products')
  listProducts(@Param('id') id: string) {
    return this.storeService.listProducts(id);
  }

  // Extra —— listar clientes da loja
  @Get(':id/customers')
  listCustomers(@Param('id') id: string) {
    return this.storeService.listCustomers(id);
  }
}
