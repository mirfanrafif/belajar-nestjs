import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './core/database/database.module';
import { MenuModule } from './menu/menu.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, DatabaseModule, MenuModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
