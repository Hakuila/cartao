import { Controller, Get, Param } from '@nestjs/common';
import { InvoicesService } from './invoices.service';

@Controller('invoices')
export class InvoicesController {
  constructor(private readonly service: InvoicesService) {}

  @Get(':customerId')
  findByCustomer(@Param('customerId') customerId: string) {
    return this.service.findByCustomer(customerId);
  }

  @Get('current/:customerId')
  getCurrent(@Param('customerId') customerId: string) {
    return this.service.getCurrentInvoice(customerId);
  }
}
