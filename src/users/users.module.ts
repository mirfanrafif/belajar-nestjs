import { Module } from '@nestjs/common';
import { UserRepositoryModule } from 'src/core/repository/user-repository/user-repository.module';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserFactoryService } from './user-factory.service';

@Module({
  imports: [UserRepositoryModule],
  controllers: [UsersController],
  providers: [UsersService, UserFactoryService, UserFactoryService],
})
export class UsersModule {}
