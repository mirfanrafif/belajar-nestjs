import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseFilters,
} from '@nestjs/common';
import { UserDto } from './users.dto';
import { User } from '../core/repository/user-repository/users.entity';
import { UsersService } from './users.service';
import { DbexceptionFilter } from 'src/utils/dbexception-filter.filter';

@Controller('users')
@UseFilters(DbexceptionFilter)
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
  find(@Param('id', ParseIntPipe) id: number) {
    return this.service.findById(id);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() newUser: UserDto) {
    return this.service.update(id, newUser);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.service.delete(id);
  }
}
