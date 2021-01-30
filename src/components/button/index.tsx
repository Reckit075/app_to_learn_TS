import React, { FC } from 'react';
import styles from './index.module.scss';

interface IButtonType {
 text: string;
 type: 'button' | 'submit';
}
/* eslint-disable react/button-has-type */
const Button: FC<IButtonType & React.HtmlHTMLAttributes<HTMLButtonElement>> = ({ text, type, className, onClick }: IButtonType & React.HtmlHTMLAttributes<HTMLButtonElement>) => {
 return (
  <button onClick={onClick} type={type} className={`${styles.btn} + ${className}`}>
   {text}
  </button>
 );
};
/* eslint-enable react/button-has-type */
export default Button;
