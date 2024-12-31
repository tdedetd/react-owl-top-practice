'use client';

import { SearchProps } from './Search.props';
import styles from './Search.module.css';
import { FormEventHandler, useRef } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { Button } from '../Button/Button';
import { TextField } from '../TextField/TextField';

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
      <TextField
        type='text'
        className={styles.input}
        name='query'
        placeholder='Поиск...'
        disabled={disabled}
        ref={inputRef}
        {...props}
      ></TextField>

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
