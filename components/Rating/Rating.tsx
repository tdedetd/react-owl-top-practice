'use client';

import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';
import StarSvg from '@/public/svg/star.svg';
import { colorPrimary } from '@/utils/constants/colors/color-primary';
import { colorStarEmpty } from '@/utils/constants/colors/color-star-empty';
import { useState } from 'react';
import { colorMenuGray } from '@/utils/constants/colors/color-menu-gray';
import { isRate } from '@/utils/functions/typeguards/is-rate';

export function Rating({ editable = false, rate, className, onRateSelect, ...props }: RatingProps): JSX.Element {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const getColor = (index: number): typeof colorPrimary | typeof colorStarEmpty | typeof colorMenuGray => {
    return hoverIndex === null
      ? (rate ?? 0) > index ? colorPrimary : colorStarEmpty
      : hoverIndex >= index ? colorMenuGray : colorStarEmpty;
  }

  const selectRate = (index: number): void => {
    const rate = index + 1;
    if (isRate(rate)) {
      onRateSelect?.(rate);
    }
  }

  const divClass = `${styles.container}${className ? ` ${className}` : ''}`;
  const array = Array(5).fill(null);

  return (
    <div className={divClass} {...props}>
      {editable ? array.map((_, i) => (
        <button
          key={i}
          className={styles.button}
          onFocus={() => setHoverIndex(i)}
          onBlur={() => setHoverIndex(null)}
          onMouseOver={() => setHoverIndex(i)}
          onMouseLeave={() => setHoverIndex(null)}
          onClick={() => selectRate(i)}
        >
          <StarSvg className={styles.svg} fill={getColor(i)}></StarSvg>
        </button>
      )) : array.map((_, i) => (
        <div key={i} className={styles.item}>
          <StarSvg className={styles.svg} fill={getColor(i)}></StarSvg>
        </div>
      ))}
    </div>
  );
}
