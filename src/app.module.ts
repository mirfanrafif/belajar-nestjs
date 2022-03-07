import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MenuModule } from './menu/menu.module';
import { AuthModule } from './auth/auth.module';
import { ChatModule } from './chat/chat.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UsersModule,
    MenuModule,
    AuthModule,
    ChatModule,
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
