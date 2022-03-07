import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
@WebSocketGateway({
  cors: true,
  namespace: 'chats',
})
export class ChatGateway {
  @SubscribeMessage('chat')
  handleChat(@MessageBody() data: string) {
    console.log(data);
    this.server.emit('chat', data);
    return data;
  }

  @WebSocketServer()
  server: Server;
}
