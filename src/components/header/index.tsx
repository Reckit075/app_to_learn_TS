import React, { FC } from 'react';
import Logo from './logo.png';
import styles from './index.module.scss';

const Header: FC = () => {
 return (
  <header className={styles.header}>
   <img src={Logo} alt="" className={styles.logoImage} />
  </header>
 );
};

export default Header;
