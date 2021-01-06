import React, { FC } from 'react';
import styles from './index.module.scss';

interface IButtonType {
  text: string;
  type: 'button' | 'submit';
}
/* eslint-disable react/button-has-type */
const Button: FC<IButtonType> = ({ text, type }: IButtonType) => {
  return (
    <button type={type} className={styles.btn}>
      {text}
    </button>
  );
};
/* eslint-enable react/button-has-type */
export default Button;
