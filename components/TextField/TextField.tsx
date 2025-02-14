import { TextFieldProps } from './TextField.props';
import styles from './TextField.module.css';
import classNames from 'classnames';

export function TextField({ className, ...props }: TextFieldProps): JSX.Element {
  const fieldClassName = classNames(...[
    styles.field,
    className,
  ].filter(Boolean));

  if (props.type === 'textarea') {
    return (
      <textarea
        className={fieldClassName}
        {...props}
      ></textarea>
    );
  } else {
    const { type, ...inputProps } = props;
    return (
      <input
        className={fieldClassName}
        type={type}
        {...inputProps}
      />
    );
  }
}
