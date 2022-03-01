import { Injectable } from '@nestjs/common';
import { User } from './users.model';

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

  getAll(): User[] {
    return this.users;
  }

  create(user: User) {
    this.users.push(user);
  }
}
