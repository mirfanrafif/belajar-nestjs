import { Body, Controller, Post } from '@nestjs/common';
import { DocumentMessage, ImageMessage, TextMessage } from './chat.dto';
import { ChatService } from './chat.service';

@Controller('message')
export class ChatController {
  constructor(private service: ChatService) {}

  @Post()
  handleIncomingMessage(
    @Body() data: TextMessage | ImageMessage | DocumentMessage,
  ) {
    console.log(data);
  }
}
