import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { MenuItemFirst } from '../../models/menu.models';

export interface MenuItemProps {
  item: MenuItemFirst;
  expanded?: boolean;
  onClick?: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>['onClick'];
}
