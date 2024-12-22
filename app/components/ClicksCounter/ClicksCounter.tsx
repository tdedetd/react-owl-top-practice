'use client'

import { ClicksCounterProps } from './ClicksCounter.props';
import { Button } from '../Button/Button';
import React from 'react';

export function ClicksCounter({ min = 1, max = 10 }: ClicksCounterProps): JSX.Element {
  const [clicksCount, setClicksCount] = React.useState(min);

  const increaseCount = () => {
    if (clicksCount < max) {
      setClicksCount(clicksCount + 1);
    }
  };

  const decreaseCount = () => {
    if (clicksCount > min) {
      setClicksCount(clicksCount - 1);
    }
  };

  return (
    <>
      <div>
        <Button appearance='primary' onClick={increaseCount}>+</Button>
        <Button appearance='gray' onClick={decreaseCount}>-</Button>
      </div>
      <p>{clicksCount}</p>
    </>
  );
}
