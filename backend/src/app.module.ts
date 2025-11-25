import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { StoresModule } from './modules/stores/stores.module';
import { TransactionsModule } from './modules/transactions/transactions.module';
import { InvoicesModule } from './modules/invoices/invoices.module';
import { PaymentsModule } from './modules/payments/payments.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => {
        const url = process.env.DATABASE_URL || 'postgres://user:pass@localhost:5432/cartao';
        return {
          type: 'postgres',
          url,
          synchronize: false, // use migrations in production
          autoLoadEntities: true,
        };
      },
    }),
    AuthModule,
    UsersModule,
    StoresModule,
    TransactionsModule,
    InvoicesModule,
    PaymentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
