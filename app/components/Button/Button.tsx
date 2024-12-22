import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import classnames from 'classnames';

export function Button({ children, appearance, className, ...props }: ButtonProps): JSX.Element {
  const buttonClass = classnames(
    className,
    styles.btn,
    { [styles.gray]: appearance === 'gray' },
    { [styles.primary]: appearance === 'primary' }
  );

  return (
    <button
      className={buttonClass}
      {...props}
    >{children}</button>
  );
}
