import React, {FC} from 'react';
import styles from './index.module.scss';

interface IButtonType{
    text:string
}

const Button:FC<IButtonType> = ({text}) =>{
    return(
        <button className={styles.btn}>{text}</button>
    );
}

export default Button