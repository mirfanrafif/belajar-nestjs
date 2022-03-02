import { Module } from '@nestjs/common';
import { createConnection } from 'typeorm';
import { DATABASE_CONNECTION } from './database.constant';

const connection = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: async () => createConnection(),
  },
];

@Module({
  providers: [...connection],
  exports: [...connection],
})
export class DatabaseModule {}
