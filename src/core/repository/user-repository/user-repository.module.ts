import { Module } from '@nestjs/common';
import { DATABASE_CONNECTION } from 'src/core/database/database.constant';
import { DatabaseModule } from 'src/core/database/database.module';
import { USERS_REPOSITORY } from 'src/core/repository/user-repository/user.constant';
import { User } from 'src/users/users.entity';
import { Connection } from 'typeorm';

const userProvider = [
  {
    provide: USERS_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(User),
    inject: [DATABASE_CONNECTION],
  },
];

@Module({
  imports: [DatabaseModule],
  providers: [...userProvider],
  exports: [...userProvider],
})
export class UserRepositoryModule {}
