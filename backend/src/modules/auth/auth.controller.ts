import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import * as bcrypt from 'bcrypt';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() body: any) {
    const passwordHash = await bcrypt.hash(body.password, 10);

    return this.usersService.createUser(
      body.email,
      passwordHash,
      body.role,
    );
  }
}
