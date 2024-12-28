import { MenuIcons } from '../models/menu-icons.enum';
import { MenuItemFirst } from '../models/menu.models';

export const menu: MenuItemFirst[] = [
  {
    label: 'Курсы',
    selected: true,
    svg: MenuIcons.GRADUATION_HAT,
    children: [
      {
        label: 'ДИЗАЙН',
        children: [
          {
            label: 'Photoshop',
            selected: true,
          },
          {
            label: 'AfterEffect',
            selected: false,
          },
          {
            label: 'Illustrator',
            selected: false,
          },
          {
            label: 'Figma',
            selected: false,
          },
        ],
      },
      {
        label: 'РАЗРАБОТКА'
      },
      {
        label: 'АНАЛИТИКА'
      },
      {
        label: 'МАРКЕТИНГ'
      },
    ],
  },
  {
    label: 'Сервисы',
    selected: false,
    svg: MenuIcons.CLOUD,
  },
  {
    label: 'Книги',
    selected: false,
    svg: MenuIcons.BOOK,
  },
  {
    label: 'Товары',
    selected: false,
    svg: MenuIcons.BOX,
  },
];
