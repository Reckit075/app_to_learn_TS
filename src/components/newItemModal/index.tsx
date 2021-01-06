import React, { FC } from 'react';
import { useModal } from './useModal';
import styles from './index.module.scss';

const NewItemModal: FC = () => {
  const { form, handleFormChange, handleSubmit } = useModal();

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title <input value={form.title} onChange={handleFormChange} name="title" id="title" />
        </label>

        <label htmlFor="author">
          Author <input value={form.author} onChange={handleFormChange} name="author" id="author" />
        </label>

        <label htmlFor="description">
          Description <input value={form.description} onChange={handleFormChange} name="description" id="description" />
        </label>

        <button type="submit">Dodaj</button>
      </form>

      <p>{form.title}</p>
      <p>{form.author}</p>
      <p>{form.description}</p>
    </>
  );
};

export default NewItemModal;
