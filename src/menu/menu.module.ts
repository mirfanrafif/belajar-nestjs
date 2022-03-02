import { Module } from '@nestjs/common';
import { MenuRepositoryModule } from 'src/core/repository/menu-repository/menu-repository.module';
import { MenuController } from './menu.controller';
import { MenuService } from './menu.service';

@Module({
  imports: [MenuRepositoryModule],
  controllers: [MenuController],
  providers: [MenuService],
})
export class MenuModule {}
