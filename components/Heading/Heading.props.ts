import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface HeadingProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  children: ReactNode;
  level: 2 | 3;
}
