import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { Connection } from 'typeorm';
import { UsersController } from './users.controller';
import { User } from './users.entity';
import { UsersService } from './users.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: 'USERS_REPOSITORY',
      useFactory: (connection: Connection) => connection.getRepository(User),
      inject: ['DATABASE_CONNECTION'],
    },
  ],
})
export class UsersModule {}
