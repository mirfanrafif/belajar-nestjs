import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { USERS_REPOSITORY } from '../core/repository/user-repository/user.constant';
import { UserDto } from './users.dto';
import { User } from '../core/repository/user-repository/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USERS_REPOSITORY)
    private userRepository: Repository<User>,
  ) {}

  getAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  create(userDto: UserDto) {
    const user = new User();
    user.nama = userDto.nama;
    user.nohp = userDto.nohp;
    user.username = userDto.username;
    user.password = userDto.password;
    return this.userRepository.save(user);
  }

  findById(id: number) {
    return this.userRepository.findOneOrFail(id);
  }

  async update(id: number, newUser: UserDto) {
    const user = await this.userRepository.findOneOrFail(id);
    user.nama = newUser.nama;
    user.nohp = newUser.nohp;
    user.username = newUser.username;
    user.password = newUser.password;
    return this.userRepository.save(user);
  }

  async delete(id: number) {
    this.userRepository.findOneOrFail(id);
    return this.userRepository.delete(id);
  }
}
