import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import classnames from 'classnames';
import ArrowSvg from './arrow.svg';

export function Button({ children, appearance, arrow = 'none', className, ...props }: ButtonProps): JSX.Element {
  const buttonClass = classnames(
    className,
    styles.btn,
    { [styles.gray]: appearance === 'gray' },
    { [styles.primary]: appearance === 'primary' }
  );

  const arrowClass = classnames(
    styles.arrow,
    { [styles['arrow_down']]: arrow === 'down' },
    { [styles['arrow_right']]: arrow === 'right' },
  );

  return (
    <button
      className={buttonClass}
      {...props}
    >
      {children}
      {arrow !== 'none' ? (
        <span className={styles['arrow-container']}>
          <span className={arrowClass}>
            <ArrowSvg />
          </span>
        </span>
      ) : <></>}
    </button>
  );
}
