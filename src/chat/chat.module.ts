import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ChatRepositoryModule } from 'src/core/repository/chat-repository/chat-repository.module';
import { ChatController } from './chat.controller';
import { ChatGateway } from './chat.gateway';
import { ChatService } from './chat.service';

@Module({
  providers: [ChatGateway, ChatService],
  controllers: [ChatController],
  imports: [
    HttpModule.register({
      baseURL: 'https://sambi.wablas.com',
    }),
    ChatRepositoryModule,
  ],
})
export class ChatModule {}
