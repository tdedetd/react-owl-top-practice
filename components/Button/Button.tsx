import classNames from 'classnames';
import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import ArrowSvg from '@/public/svg/arrow.svg';
import { colorBlock } from '@/utils/constants/colors/color-block';
import { colorForeground } from '@/utils/constants/colors/color-foreground';

const colorClasses: Record<ButtonProps['color'], string> = {
  primary: styles.buttonPrimary,
  white: styles.buttonWhite,
};

function getArrowFillColor(disabled: boolean, color: ButtonProps['color']): typeof colorBlock | typeof colorForeground {
  return (!disabled && color === 'white') ? colorForeground : colorBlock;
}

export function Button({ children, color, className, arrow = false, ...props }: ButtonProps): JSX.Element {
  const buttonClass = classNames(...[
    styles.button,
    colorClasses[color],
    className
  ].filter(Boolean));

  return (
    <button
      className={buttonClass}
      {...props}
    >
      {children}
      {arrow && (
        <span className={styles.arrowContainer}>
          <ArrowSvg fill={getArrowFillColor(props.disabled ?? false, color)}></ArrowSvg>
        </span>
      )}
    </button>
  );
}
