import React, {FC} from 'react';
import Logo from './logo.png';
import styles from './index.module.scss';

const Header:FC = () =>{
  
  return(
      <div className={styles.header}>
        <img src={Logo} alt=""/>
      </div>
  )
}

export default Header;