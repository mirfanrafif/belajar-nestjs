import { Module } from '@nestjs/common';
import { DATABASE_CONNECTION } from 'src/core/database/database.constant';
import { DatabaseModule } from 'src/core/database/database.module';
import { Connection } from 'typeorm';
import { MENU_REPOSITORY } from './menu.constant';
import { Menu } from './menu.entity';

const menuProvider = [
  {
    provide: MENU_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(Menu),
    inject: [DATABASE_CONNECTION],
  },
];
@Module({
  imports: [DatabaseModule],
  providers: [...menuProvider],
  exports: [...menuProvider],
})
export class MenuRepositoryModule {}
