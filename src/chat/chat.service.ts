import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { AxiosError, AxiosResponse } from 'axios';
import { CHAT_REPOSITORY } from 'src/core/repository/chat-repository/chat.constant';
import { Chat } from 'src/core/repository/chat-repository/chat.entity';
import { Repository } from 'typeorm';
import {
  ApiResponse,
  MessageRequest,
  MessageResponse,
  SendMessageResponseData,
} from './chat.dto';
import { ChatGateway } from './chat.gateway';

@Injectable()
export class ChatService {
  constructor(
    private http: HttpService,
    private gateway: ChatGateway,
    @Inject(CHAT_REPOSITORY) private chatRepository: Repository<Chat>,
  ) {}

  sendMessage(
    messageRequest: MessageRequest,
  ): ApiResponse<SendMessageResponseData | null> {
    let result: ApiResponse<SendMessageResponseData | null>;
    const { salesId, ...data } = messageRequest;
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

          const messageResponse: MessageResponse[] =
            value.data.data.message.map((message) => ({
              consumerNumber: message.phone,
              senderId: salesId.toString(),
              message: message.message,
              messageId: message.id,
              status: message.status,
            }));
          this.gateway.sendMessage(messageResponse);
          this.saveChat(messageResponse);
          result = value.data;
        },
        error: (value: AxiosError<ApiResponse<null>>) => {
          console.log(value.response.data);
          result = value.response.data;
        },
      });
    return result;
  }

  saveChat(messageResponses: MessageResponse[]) {
    messageResponses.forEach((messageResponse) => {
      this.chatRepository.save({
        chatId: messageResponse.messageId,
        consumerNumber: messageResponse.consumerNumber,
        message: messageResponse.message,
        senderId: messageResponse.senderId,
        created_date: Date(),
      });
    });
  }
}
