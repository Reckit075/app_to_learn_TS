import React, {FC} from 'react';
import styles from './index.module.scss';
import Item from '../item/'
import Button from '../button/'

interface IItemsContainerType{
    collectionTitle:string
}

const ItemsContainer:FC<IItemsContainerType> = ({collectionTitle}) =>{
    return(
        <div>
            <h1 className={styles.title}>Kolekcja:<span>{collectionTitle}</span></h1>
            <Item title='Królestwo' author='Jo Nasebo' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique justo, vel commodo lorem interdum. Tortor dui eu laoreet tortor in pretium.'/>
            <Item title='Królestwo' author='Jo Nasebo' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique justo, vel commodo lorem interdum. Tortor dui eu laoreet tortor in pretium.'/>
            <Button text={'add new Item'} />
        </div>
    );
}

export default ItemsContainer