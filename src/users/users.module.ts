import { Module } from '@nestjs/common';
import { DATABASE_CONNECTION } from 'src/database/database.constant';
import { DatabaseModule } from 'src/database/database.module';
import { Connection } from 'typeorm';
import { USERS_REPOSITORY } from './user.constant';
import { UsersController } from './users.controller';
import { User } from './users.entity';
import { UsersService } from './users.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: USERS_REPOSITORY,
      useFactory: (connection: Connection) => connection.getRepository(User),
      inject: [DATABASE_CONNECTION],
    },
  ],
})
export class UsersModule {}
