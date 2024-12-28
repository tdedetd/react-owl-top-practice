'use client';

import { MenuItemsChildProps } from './MenuItemsChild.props';
import styles from './MenuItemsChild.module.css';
import classNames from 'classnames';

export function MenuItemsChild({ items }: MenuItemsChildProps): JSX.Element {
  const itemsList = items.map((item) => {
    const childrenList = item.children ? (
      <ul className={styles.childern}>
        {item.children.map((child) => {
          const childLabelClassName = classNames(
            styles.childLabel,
            { [styles.childLabelSelected]: child.selected }
          );
          return <li className={childLabelClassName} key={child.label}>{child.label}</li>;
        })}
      </ul>
    ) : <></>;

    return (
      <li className={styles.li} key={item.label}>
        <p className={styles.item}>{item.label}</p>
        {childrenList}
      </li>
    );
  });

  return (
    <ul className={styles.ul}>{itemsList}</ul>
  );
}
