import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserDto } from './users.dto';
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
  create(@Body() userDto: UserDto) {
    return this.service.create(userDto);
  }

  @Get(':id')
  find(@Param('id') id: string) {
    return this.service.findById(id);
  }
}
