import React, { FC } from 'react';
import githubLogo from './githubLogo.svg';
import styles from './index.module.scss';

const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      <a href="https://github.com/Reckit075/app_to_learn_TS" className={styles.linkContainer}>
        <img src={githubLogo} alt="" />
        <span className={styles.text}>Sprawdź naszego githuba</span>
        <img src={githubLogo} alt="" />
      </a>
    </div>
  );
};

export default Footer;
