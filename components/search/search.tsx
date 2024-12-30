'use client';

import { SearchProps } from './Search.props';
import styles from './Search.module.css';
import { FormEventHandler, useRef } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { Button } from '../Button/Button';

export function Search({
  className,
  disabled,
  onSerchSubmit,
  ...props
}: SearchProps): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (typeof inputRef.current?.value !== 'undefined') {
      onSerchSubmit?.(inputRef.current.value);
    }
  };

  return (
    <form
      className={classNames([styles.root, className].filter(Boolean))}
      onSubmit={onSubmit}
    >
      <input
        className={styles.input}
        name='query'
        type='text'
        placeholder='Поиск...'
        disabled={disabled}
        ref={inputRef}
        {...props}
      />
      <Button
        color='primary'
        className={styles.button}
        type='submit'
        disabled={disabled}
      >
        <Image
          src='/svg/search.svg'
          alt='lens'
          width={15}
          height={15}
        ></Image>
      </Button>
    </form>
  );
}
