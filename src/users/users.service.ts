import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { USERS_REPOSITORY } from '../core/repository/user-repository/user.constant';
import { UserFactoryService } from './user-factory.service';
import { UserDto } from './users.dto';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USERS_REPOSITORY)
    private userRepository: Repository<User>,
    private factory: UserFactoryService,
  ) {}

  getAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  create(userDto: UserDto) {
    const user = this.factory.createUser(userDto);
    return this.userRepository.save(user);
  }

  findById(id: string) {
    return this.userRepository.findOne(id);
  }
}
