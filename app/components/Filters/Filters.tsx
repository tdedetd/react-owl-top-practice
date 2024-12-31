'use client';

import { FiltersProps } from './Filters.props';
import { SortTypes } from './models/sort-types.enum';
import styles from './Filters.module.css';
import Image from 'next/image';

const sortTypeItems: { type: SortTypes, name: string }[] = [
  { name: 'По рейтингу ', type: SortTypes.Rating },
  { name: 'По цене ', type: SortTypes.Price },
];

export function Filters({ sortType, setSortType }: FiltersProps): JSX.Element {
  return (
    <div className={styles.container}>{sortTypeItems.map((item) => {
      const isSelected = item.type === sortType;
      const buttonClass = `${styles.button}${isSelected ? ` ${styles.buttonSelected}` : ''}`;

      return (
        <button
          key={item.type}
          className={buttonClass}
          disabled={isSelected}
          onClick={() => setSortType?.(item.type)}
        >
          {isSelected && (
            <Image
              src='/svg/sort.svg'
              alt='sort'
              width={20}
              height={13}
            />
          )}
          {item.name}
        </button>
      );
    })}</div>
  );
}
