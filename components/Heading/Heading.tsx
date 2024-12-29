import { HeadingProps } from './Heading.props';
import styles from './Heading.module.css';
import classNames from 'classnames';

const levelClassMapper: Record<HeadingProps['level'], string> = {
  2: 'h2',
  3: 'h3',
};

export function Heading({ children, level, className, ...props }: HeadingProps): JSX.Element {
  const headingClass = classNames(...[
    styles.h,
    styles[levelClassMapper[level]],
    className
  ].filter(Boolean));

  if (level === 2) {
    return (
      <h2 className={headingClass} {...props}>{children}</h2>
    );
  } else {
    return (
      <h3 className={headingClass} {...props}>{children}</h3>
    );
  }
}
