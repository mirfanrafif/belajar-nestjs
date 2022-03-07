import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiResponse,
  DocumentMessage,
  ImageMessage,
  MessageRequest,
  MessageRequestData,
  SendMessageResponseData,
  TextMessage,
} from './chat.dto';
import { ChatService } from './chat.service';

@Controller('message')
export class ChatController {
  constructor(private service: ChatService) {}

  @Post('webhook')
  handleIncomingMessage(
    @Body() data: TextMessage | ImageMessage | DocumentMessage,
  ) {
    console.log(data);
  }

  @Post()
  sendMessage(
    @Body() request: MessageRequest,
  ): ApiResponse<SendMessageResponseData> {
    return this.service.sendMessage(request);
  }
}
