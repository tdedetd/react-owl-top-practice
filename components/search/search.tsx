'use client'

import { SearchProps } from './search.props';
import styles from './search.module.css';
import { FormEventHandler, useRef } from 'react';
import Image from 'next/image';

export function Search({
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
    <form className={styles.root} onSubmit={onSubmit}>
      <input
        className={styles.input}
        name='query'
        type='text'
        placeholder='Поиск...'
        disabled={disabled}
        ref={inputRef}
        {...props}
      />
      <button
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
      </button>
    </form>
  );
}
