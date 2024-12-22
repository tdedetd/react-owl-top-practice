import { ReactNode } from 'react';

export interface HtitleProps {
  children: ReactNode;
  tag: 'h1' | 'h2' | 'h3';
}
