import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Injectable()
export class TransactionsService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateTransactionDto) {
    return this.prisma.transaction.create({ data });
  }

  findByCustomer(customerId: string) {
    return this.prisma.transaction.findMany({
      where: { customerId },
      orderBy: { createdAt: 'desc' },
    });
  }
}
