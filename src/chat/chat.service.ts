import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { AxiosError, AxiosResponse } from 'axios';
import { CHAT_REPOSITORY } from 'src/core/repository/chat-repository/chat.constant';
import { Chat } from 'src/core/repository/chat-repository/chat.entity';
import { Repository } from 'typeorm';
import {
  ApiResponse,
  MessageRequest,
  SendMessageResponseData,
} from './chat.dto';
import { ChatGateway } from './chat.gateway';

@Injectable()
export class ChatService {
  constructor(
    private http: HttpService,
    private gateway: ChatGateway,
    @Inject(CHAT_REPOSITORY) repository: Repository<Chat>,
  ) {}

  sendMessage(
    data: MessageRequest,
  ): ApiResponse<SendMessageResponseData | null> {
    let result: ApiResponse<SendMessageResponseData | null>;
    this.http
      .post('/api/v2/send-bulk/text', data, {
        headers: {
          Authorization:
            'f7b8lBzoaGXSvX2JkZwycD8ZT1Yk6bIrRXQ1E7h1sEIk2pq0WFdwUhcQvedZ7pkb',
        },
      })
      .subscribe({
        next: (value: AxiosResponse<ApiResponse<SendMessageResponseData>>) => {
          console.log(value.data.data);
          result = value.data;
        },
        error: (value: AxiosError<ApiResponse<null>>) => {
          console.log(value.response.data);
          result = value.response.data;
        },
      });
    return result;
  }

  saveChat() {}
}
