import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { USERS_REPOSITORY } from './user.constant';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      nama: 'Irfan',
      nohp: '082338819564',
    },
    {
      id: 2,
      nama: 'Rafif',
      nohp: '082338819556',
    },
  ];

  constructor(
    @Inject(USERS_REPOSITORY)
    private userRepository: Repository<User>,
  ) {}

  getAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  create(user: User) {
    this.users.push(user);
  }
}
