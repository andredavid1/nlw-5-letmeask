/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import React, { ButtonHTMLAttributes } from 'react';

import '../styles/button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

// eslint-disable-next-line max-len
export function Button({ isOutlined = false, ...props }: ButtonProps): React.ReactNode {
  return (
    <button
      type="button"
      className={`button ${isOutlined ? 'outlined' : ''}`}
      {...props}
    />
  );
}
