// import styles from './index.module.scss';
import classNames from 'classnames';
import { forwardRef } from 'react';

/* eslint-disable-next-line */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info'
    | 'dark'
    | 'light';
  outline?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, className, outline, ...props }: Readonly<ButtonProps>, _ref) => {
    const btnClasses = classNames(
      'btn',
      variant && `btn-${variant}`,
      outline && `btn-outline-${variant}`,
      className && className
    );
    return (
      <button {...props} className={btnClasses}>
        {props.children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
