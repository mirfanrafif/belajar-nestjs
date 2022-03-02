import { Injectable } from '@nestjs/common';
import { UserDto } from './users.dto';
import { User } from '../core/repository/user-repository/users.entity';

@Injectable()
export class UserFactoryService {
  createUser(userDto: UserDto) {
    const user = new User();
    user.nama = userDto.nama;
    user.nohp = userDto.nohp;
    return user;
  }
}