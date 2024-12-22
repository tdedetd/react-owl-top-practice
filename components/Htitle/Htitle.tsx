import { ReactNode } from 'react';
import { HtitleProps } from './Htitle.props';
import styles from './Htitle.module.css';

const tagElementMapper: Record<HtitleProps['tag'], (children: ReactNode) => JSX.Element> = {
  h1: (children) => <h1 className={styles.h1}>{children}</h1>,
  h2: (children) => <h2 className={styles.h2}>{children}</h2>,
  h3: (children) => <h3 className={styles.h3}>{children}</h3>,
};

export function Htitle({ children, tag }: HtitleProps): JSX.Element {
  return tagElementMapper[tag](children);
}
