import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';

@Injectable()
export class StoreService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateStoreDto) {
    return this.prisma.store.create({
      data: {
        name: data.name,
      },
    });
  }

  async findAll() {
    return this.prisma.store.findMany();
  }

  async findOne(id: string) {
    const store = await this.prisma.store.findUnique({
      where: { id },
    });

    if (!store) throw new NotFoundException('Loja não encontrada');

    return store;
  }

  async update(id: string, data: UpdateStoreDto) {
    return this.prisma.store.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    return this.prisma.store.delete({
      where: { id },
    });
  }

  async listProducts(storeId: string) {
    await this.ensureExists(storeId);

    return this.prisma.product.findMany({
      where: { storeId },
    });
  }

  async listCustomers(storeId: string) {
    await this.ensureExists(storeId);

    return this.prisma.customer.findMany({
      where: { storeId },
      include: {
        user: true,
      },
    });
  }

  private async ensureExists(storeId: string) {
    const exists = await this.prisma.store.findUnique({
      where: { id: storeId },
    });

    if (!exists) throw new NotFoundException('Loja não encontrada');
  }
}
