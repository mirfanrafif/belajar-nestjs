import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from './users.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @Get()
  getAll(): Promise<User[]> {
    return this.service.getAll();
  }

  @Post()
  create(@Body() user: User) {
    this.service.create(user);
  }
}
