import { HttpModule, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from 'src/entities/accounts.entity';
import { BalanceToWithdraw } from 'src/entities/balanceToWithdraw.entity';
import { Product } from 'src/entities/product.entity';
import { Service } from 'src/entities/service.entity';
import { User } from 'src/entities/user.entity';
import { AccountRepository } from 'src/repositories/accounts.repository';
import { BalanceToWithdrawRepository } from 'src/repositories/balanceToWidraw.repository';
import { CustomerRepository } from 'src/repositories/customer.repository';
import { ProductRepository } from 'src/repositories/product.repository';
import { ServiceRepository } from 'src/repositories/service.repository';
import { UserRepository } from 'src/repositories/user.repository';
import { Transaction } from 'src/entities/transaction.entity';
import { TransactionRepository } from 'src/repositories/transaction.repository';

@Module({
  providers: [UserService],
  controllers: [UserController],
  imports: [
    HttpModule.register({
      timeout: 10000,
      maxRedirects: 5,
    }),
    TypeOrmModule.forFeature([User, Account, User, Transaction, BalanceToWithdraw, Product, Service, ProductRepository, ServiceRepository, CustomerRepository, AccountRepository, UserRepository, TransactionRepository, BalanceToWithdrawRepository ])
  ],
})
export class UserModule {}
