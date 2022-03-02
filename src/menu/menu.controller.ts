import { Controller, Get } from '@nestjs/common';
import { Menu } from 'src/core/repository/menu-repository/menu.entity';
import { MenuService } from './menu.service';

@Controller('menu')
export class MenuController {
  constructor(private service: MenuService) {}

  @Get()
  getAll() {
    return this.service.getAll();
  }
}
