import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseFilters,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UserRequestDto } from './users.dto';
import { UsersService } from './users.service';
import { DbexceptionFilter } from 'src/utils/dbexception-filter.filter';
import { JwtAuthGuard } from 'src/auth/auth.guard';

@Controller('users')
@UseFilters(DbexceptionFilter)
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private service: UsersService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  getAll() {
    return this.service.getAll();
  }

  @Post()
  create(@Body() userDto: UserRequestDto) {
    return this.service.create(userDto);
  }

  @Get(':id')
  find(@Param('id', ParseIntPipe) id: number) {
    return this.service.findById(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() newUser: UserRequestDto,
  ) {
    return this.service.update(id, newUser);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.service.delete(id);
  }
}
