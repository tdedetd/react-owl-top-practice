import { MenuIcons } from './menu-icons.enum';

export interface MenuItemFirst {
  label: string;
  svg: MenuIcons;
  selected: boolean;
  children?: MenuItemSecond[];
}

export interface MenuItemSecond {
  label: string;
  children?: MenuItemThird[];
}

export interface MenuItemThird {
  label: string;
  selected: boolean;
}
