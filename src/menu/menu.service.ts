import { Inject, Injectable } from '@nestjs/common';
import { MENU_REPOSITORY } from 'src/core/repository/menu-repository/menu.constant';
import { Menu } from 'src/core/repository/menu-repository/menu.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MenuService {
  constructor(@Inject(MENU_REPOSITORY) private repository: Repository<Menu>) {}

  getAll(): Promise<Menu[]> {
    return this.repository.find();
  }
}
