import classes from '*.module.css';
import React, {useState} from 'react';
import {useModal} from './useModal';
import './index.scss';

export const NewItemModal = () => {

    const {form, handleFormChange, handleSubmit} = useModal()

    return (
    
    <>
    <form onSubmit={handleSubmit}>
    <label htmlFor="title">Title</label>
    <input value={form.title} onChange={handleFormChange} name="title" id="title" />

    <label htmlFor="author">Author</label>
    <input value={form.author} onChange={handleFormChange} name="author" id="author" />

    <label htmlFor="description">Description</label>
    <input value={form.description} onChange={handleFormChange} name="description" id="description" />

    <button type="submit">Dodaj</button>
    </form>
    
    <p>{form.title}</p>
    <p>{form.author}</p>
    <p>{form.description}</p>
    </>
)};