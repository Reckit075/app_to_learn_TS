import React, {FC} from 'react';
import classes from './index.module.scss'

interface IItemType {
  title: string;
  author: string;
  description: string;
}

const Item: FC<IItemType> = ({title, author, description}) => {
  
  return (
      <div className={classes.item}>
            <span>{title}</span>
            <span>{author}</span>
            <span>{description}</span>
      </div>
    )
}

export default Item;