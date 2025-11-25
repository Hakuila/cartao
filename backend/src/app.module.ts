import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';

import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { StoresModule } from './modules/stores/store.module';
import { ProductModule } from './modules/product/product.module';
import { CustomersModule } from './modules/customers/customers.module';
import { TransactionsModule } from './modules/transactions/transactions.module';
import { InvoicesModule } from './modules/invoices/invoices.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { OrdersModule } from './modules/orders/orders.module';

@Module({
  imports: [
    PrismaModule,      // Conexão com o banco via Prisma
    AuthModule,
    UsersModule,
    StoresModule,
    ProductModule,     // <<--- Módulo de produtos ativo
    CustomersModule,
    OrdersModule,
    TransactionsModule,
    InvoicesModule,
    PaymentsModule,
  ],
})
export class AppModule {}
