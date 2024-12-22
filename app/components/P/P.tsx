import classNames from 'classnames';
import { PProps } from './P.props';
import styles from './P.module.css';

export function P({ children, size, className, ...props }: PProps): JSX.Element {
  const pClassName = classNames(
    className,
    { [styles.small]: size === 's' },
    { [styles.medium]: size === 'm' },
    { [styles.large]: size === 'l' },
  );
  return <p className={pClassName} {...props}>{children}</p>
}
