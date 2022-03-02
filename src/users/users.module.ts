import { Module } from '@nestjs/common';
import { UserRepositoryModule } from 'src/core/repository/user-repository/user-repository.module';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [UserRepositoryModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
