import { Injectable } from '@nestjs/common';
import { Axios } from 'axios';
import { ChatGateway } from './chat.gateway';

@Injectable()
export class ChatService {
  constructor(private axios: Axios, private gateway: ChatGateway) {}
}
