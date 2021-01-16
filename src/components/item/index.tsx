import React, { FC } from 'react';
import styles from './index.module.scss';
import TrashCan from './trashCan.svg';

interface IItemType {
 title: string;
 author: string;
 description: string;
}

const Item: FC<IItemType> = ({ title, author, description }: IItemType) => {
 return (
  <div className={styles.itemContainer}>
   <h2 className={styles.itemHeader}>
    <span className={styles.title}>{title}</span>
    <span className={styles.author}>{author}</span>
   </h2>
   <span className={styles.description}>{description}</span>
   <img src={TrashCan} alt="" className={styles.delete} />
  </div>
 );
};

export default Item;
