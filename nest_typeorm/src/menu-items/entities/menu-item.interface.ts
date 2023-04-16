import { MenuItem } from './menu-item.entity';

export interface IMenuItem extends MenuItem {
  children: IMenuItem[];
}
