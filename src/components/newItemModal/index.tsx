import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import validators from './validators';
import styles from './index.module.scss';
import Button from '../button';

interface INewItemModal {
 onClick: React.MouseEventHandler<HTMLDivElement>;
 type: 'item' | 'collection';
}

const NewItemModal: FC<INewItemModal> = ({ onClick, type }: INewItemModal) => {
 const { titleValidator, authorValidator, descriptionValidator } = validators;

 type NewItem = {
  title: string;
  author: string;
  description: string;
 };

 const { register, handleSubmit, errors } = useForm<NewItem>();

 const path = type === 'item' ? 'itemURL' : 'collectionURL';

 const submitHandler = handleSubmit((data) => {
  axios({
   method: 'post',
   url: path,
   data,
  });
 });

 const handleModalClose = (e: React.MouseEvent<HTMLDivElement>) => {
  return e.target === e.currentTarget ? onClick(e) : null;
 };

 return (
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events
  <div id="modalBG" tabIndex={0} role="button" onClick={handleModalClose} className={styles.modalContainer}>
   <form className={styles.modalForm} onSubmit={submitHandler}>
    <h2>Nowy przedmiot</h2>
    <div className={styles.inputsContainer}>
     <div className={styles.formField}>
      <label htmlFor="title">
       <input placeholder="Tytuł" className={styles.input} name="title" id="title" ref={register(titleValidator)} />
      </label>
      <div className={styles.error}>{errors.title && `${errors.title.message}`}</div>
     </div>
     <div className={styles.formField}>
      <label htmlFor="author">
       <input placeholder="Autor" className={styles.input} name="author" id="author" ref={register(authorValidator)} />
      </label>
      <div className={styles.error}>{errors.author && `${errors.author.message}`}</div>
     </div>
     <div className={styles.formField}>
      <label htmlFor="description">
       <textarea placeholder="Opis" className={`${styles.input} ${styles.textarea}`} name="description" id="description" ref={register(descriptionValidator)} />
      </label>
      <div className={styles.error}>{errors.description && `${errors.description.message}`}</div>
     </div>
    </div>

    <Button type="submit" text="dodaj" className={styles.button} />
   </form>
  </div>
 );
};

export default NewItemModal;
