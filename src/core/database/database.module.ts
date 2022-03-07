import { Module } from '@nestjs/common';
import { createConnection } from 'typeorm';
import { Chat } from '../repository/chat-repository/chat.entity';
import { Menu } from '../repository/menu-repository/menu.entity';
import { User } from '../repository/user-repository/users.entity';
import { DATABASE_CONNECTION } from './database.constant';

const connection = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: async () =>
      createConnection({
        database: process.env.DB_DATABASE,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        type: 'mysql',
        host: process.env.DB_HOST,
        entities: [Menu, User, Chat],
        synchronize: true,
      }),
  },
];

@Module({
  providers: [...connection],
  exports: [...connection],
})
export class DatabaseModule {}
