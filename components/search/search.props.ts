import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export type SearchProps = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'name' | 'type' | 'placeholder'
> & {
  onSerchSubmit?: (query: string) => void;
};
