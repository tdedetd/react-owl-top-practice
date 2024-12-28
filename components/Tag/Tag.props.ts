import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  color: 'white' | 'gray' | 'green' | 'red';
  children: ReactNode;
  size: 'normal' | 'large';
}
