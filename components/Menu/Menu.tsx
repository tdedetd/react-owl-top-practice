'use client';

import { useState } from 'react';
import { MenuItem } from './components/MenuItem/MenuItem';
import { menu } from './constants/menu';
import styles from './Menu.module.css';

export function Menu(): JSX.Element {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const menuItems = menu.map((item, i) => {
    return (
      <li className={styles.li} key={item.label}>
        <MenuItem
          item={item}
          expanded={i === expandedIndex}
          onClick={() => setExpandedIndex(i)}
        ></MenuItem>
      </li>
    );
  });

  return (
    <nav>
      <ul>{menuItems}</ul>
    </nav>
  );
}
