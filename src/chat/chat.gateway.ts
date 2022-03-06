import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';

@WebSocketGateway({
  cors: true,
  namespace: 'chats',
})
export class ChatGateway {
  @SubscribeMessage('chat')
  handleChat(@MessageBody() data: string) {
    console.log(data);
    return data;
  }
}
