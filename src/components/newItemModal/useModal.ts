import React, { useState } from 'react';

export const useModal = () => {
 const [form, setForm] = useState({
  title: '',
  author: '',
  description: '',
 });

 const handleFormChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
  setForm({
   ...form,
   [e.target.name]: e.target.value,
  });
 };

 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // creating new item in item collection state
 };

 return {
  form,
  handleFormChange,
  handleSubmit,
 };
};
