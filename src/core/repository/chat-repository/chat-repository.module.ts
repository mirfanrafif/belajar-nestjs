import { Module } from '@nestjs/common';
import { DATABASE_CONNECTION } from 'src/core/database/database.constant';
import { DatabaseModule } from 'src/core/database/database.module';
import { Connection } from 'typeorm';
import { CHAT_REPOSITORY } from './chat.constant';
import { Chat } from './chat.entity';

const chatProviders = [
  {
    provide: CHAT_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(Chat),
    inject: [DATABASE_CONNECTION],
  },
];

@Module({
  imports: [DatabaseModule],
  providers: [...chatProviders],
  exports: [...chatProviders],
})
export class ChatRepositoryModule {}
