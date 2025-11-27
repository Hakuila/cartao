import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class InvoicesService {
  constructor(private prisma: PrismaService) {}

  findByCustomer(customerId: string) {
    return this.prisma.invoice.findMany({
      where: { customerId },
      include: { payments: true },
      orderBy: [{ year: 'desc' }, { month: 'desc' }],
    });
  }

  getCurrentInvoice(customerId: string) {
    const now = new Date();
    return this.prisma.invoice.findFirst({
      where: { customerId, month: now.getMonth() + 1, year: now.getFullYear() },
      include: { payments: true },
    });
  }
}
