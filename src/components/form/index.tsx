import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import Button from 'shared/button';
import { createUserApi, loginUserApi } from 'API/users';
import { useHistory } from 'react-router';
import styles from './index.module.scss';

interface IFormInput {
 name: string;
 password: string;
}

interface IFormType {
 type: 'register' | 'login';
}

const Form: FC<IFormType> = ({ type }: IFormType) => {
 const history = useHistory();

 function createUser(name: string, password: string): any {
  return createUserApi(name, password)
   .then(() => {
    alert('utworzono użytkownika');
   })
   .catch((error) => {
    console.error(error);
   });
 }
 function loginUser(name: string, password: string): any {
  return loginUserApi(name, password)
   .then(() => {
    alert('zalogowano użytkownika');
   })
   .catch((error) => {
    localStorage.setItem('token', 'token');
    history.push('/collections');
    console.error(error);
   });
 }

 const { register, handleSubmit, errors } = useForm<IFormInput>();

 const onSubmit = (data: IFormInput) => {
  if (type === 'register') createUser(data.name, data.password);
  if (type === 'login') loginUser(data.name, data.password);
 };

 return (
  <form onSubmit={handleSubmit(onSubmit)} className={styles.wrapper}>
   <input
    type="text"
    name="name"
    placeholder="name"
    ref={register({
     required: 'NAME REQUIRED',
     minLength: 8,
     maxLength: 30,
    })}
   />
   {errors.name && <p className={styles.error}>Your name input required to be more than 8 and less than 30</p>}
   <input
    type="password"
    name="password"
    placeholder="password"
    ref={register({
     required: 'PASSWORD REQUIRED',
     minLength: 8,
     maxLength: 30,
    })}
   />
   {errors.password && <p className={styles.error}>Your password input required to be more than 8 and less than 30</p>}

   <Button type="submit" text={type} />
  </form>
 );
};

export default Form;
