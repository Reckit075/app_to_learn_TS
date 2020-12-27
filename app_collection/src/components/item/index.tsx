import React, {FC} from 'react';

type ItemType = {
  title: string,
  author: string,
  description: string
}

const Item: FC<ItemType> = ({title, author, description}) =>{
  
  return(
      <div className="item">
            <span>{title}</span>
            <span>{author}</span>
            <span>{description}</span>
      </div>
  )
}

export default Item;