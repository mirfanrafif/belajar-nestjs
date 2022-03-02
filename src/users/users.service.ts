import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { USERS_REPOSITORY } from './user.constant';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USERS_REPOSITORY)
    private userRepository: Repository<User>,
  ) {}

  getAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  create(user: User) {
    return this.userRepository.save(user);
  }

  findById(id: string) {
    return this.userRepository.findOne(id);
  }
}
