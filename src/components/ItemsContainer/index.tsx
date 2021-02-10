import React, { FC, useState } from 'react';
import Button from 'shared/button';
import Item from './item';
import styles from './index.module.scss';
import NewItemModal from '../newItemModal';

interface IItemsContainerType {
 collectionTitle: string;
}

const ItemsContainer: FC<IItemsContainerType> = ({ collectionTitle }: IItemsContainerType) => {
 const [isModalOpen, setIsModalOpen] = useState(false);

 const handleModalState = () => {
  setIsModalOpen(!isModalOpen);
 };
 return (
  <>
   <div>
    <h1 className={styles.title}>
     Kolekcja:<span>{collectionTitle}</span>
    </h1>
    <Item
     title="Królestwo"
     author="Jo Nasebo"
     description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique justo, vel commodo lorem interdum. Tortor dui eu laoreet tortor in pretium."
    />
    <Item
     title="Królestwo"
     author="Jo Nasebo"
     description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique justo, vel commodo lorem interdum. Tortor dui eu laoreet tortor in pretium."
    />
    <Item
     title="Królestwo"
     author="Jo Nasebo"
     description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique justo, vel commodo lorem interdum. Tortor dui eu laoreet tortor in pretium."
    />
    <Item
     title="Królestwo"
     author="Jo Nasebo"
     description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique justo, vel commodo lorem interdum. Tortor dui eu laoreet tortor in pretium."
    />
    <Button onClick={() => setIsModalOpen(true)} type="button" text="add new Item" className={styles.button} />
   </div>
   {isModalOpen ? <NewItemModal type="item" onClick={handleModalState} /> : null}
  </>
 );
};

export default ItemsContainer;
