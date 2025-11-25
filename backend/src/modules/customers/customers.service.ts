import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './entities/customer.entity';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private readonly repository: Repository<Customer>,
  ) {}

  create(dto: CreateCustomerDto) {
    const customer = this.repository.create(dto);
    return this.repository.save(customer);
  }

  findAll() {
    return this.repository.find();
  }

  async findOne(id: number) {
    const customer = await this.repository.findOne({ where: { id } });
    if (!customer) throw new NotFoundException('Customer not found');
    return customer;
  }

  async update(id: number, dto: UpdateCustomerDto) {
    const customer = await this.findOne(id);
    Object.assign(customer, dto);
    return this.repository.save(customer);
  }

  async remove(id: number) {
    const customer = await this.findOne(id);
    await this.repository.delete(id);
    return { message: 'Customer deleted successfully' };
  }
}
