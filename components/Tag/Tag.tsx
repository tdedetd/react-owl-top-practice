import classNames from 'classnames';
import { TagProps } from './Tag.props';
import styles from './Tag.module.css';

const sizeClasses: Record<TagProps['size'], string> = {
  large: styles.tagLarge,
  normal: '',
};

const colorClasses: Record<TagProps['color'], string> = {
  gray: styles.tagGray,
  green: styles.tagGreen,
  red: styles.tagRed,
  white: styles.tagWhite,
  purple: styles.tagPurple,
};

export function Tag({ color, size, children, className, ...props }: TagProps): JSX.Element {
  const spanClassName = classNames(...[
    styles.tag,
    sizeClasses[size],
    colorClasses[color],
    className
  ].filter(Boolean));

  return <span className={spanClassName} {...props}>{children}</span>;
}
