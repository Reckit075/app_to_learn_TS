import React, {FC} from 'react';
import Logo from './logo.svg';
import styles from './index.module.scss';

const Footer:FC = () =>{
  
  return(
      <div className={styles.footer}>
        <a href="https://github.com/Reckit075/app_to_learn_TS" className={styles.linkContainer}>
          <img src={Logo} alt=""/>
            <span className={styles.text}>Sprawdź naszego githuba</span>
          <img src={Logo} alt=""/>
        </a>
      </div>
  )
}

export default Footer;