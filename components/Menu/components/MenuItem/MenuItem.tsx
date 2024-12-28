import { MenuItemProps } from './MenuItem.props';
import styles from './MenuItem.module.css';
import BookSvg from '../../../../public/svg/book.svg';
import BoxSvg from '../../../../public/svg/box.svg';
import CloudSvg from '../../../../public/svg/cloud.svg';
import GraduationHatSvg from '../../../../public/svg/graduation-hat.svg';
import { MenuIcons } from '../../models/menu-icons.enum';
import classNames from 'classnames';
import { MenuItemsChild } from './components/MenuItemsChild/MenuItemsChild';

const iconComponentsMapper: Record<MenuIcons, (fill: string) => JSX.Element> = {
  [MenuIcons.BOOK]: (fill) => <BookSvg fill={fill} />,
  [MenuIcons.BOX]: (fill) => <BoxSvg fill={fill} />,
  [MenuIcons.CLOUD]: (fill) => <CloudSvg fill={fill} />,
  [MenuIcons.GRADUATION_HAT]: (fill) => <GraduationHatSvg fill={fill} />,
};

export function MenuItem({ item, expanded, onClick }: MenuItemProps): JSX.Element {
  const icon = iconComponentsMapper[item.svg](item.selected ? '#7653FC' : '#787D85');
  const buttonClass = classNames(
    styles.button,
    { [styles.titleSelected]: item.selected }
  );

  const childrenItems = expanded && item.children?.length ? (
    <div className={styles.children}>
      <MenuItemsChild items={item.children}></MenuItemsChild>
    </div>
  ) : <></>;

  return (
    <>
      {/* TODO: or link */}
      <button className={buttonClass} onClick={onClick}>
        {icon}
        <p className={styles.title}>{item.label}</p>
      </button>

      {childrenItems}
    </>
  );
}
