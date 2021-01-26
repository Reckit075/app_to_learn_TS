import React, { FC } from "react";
import { useForm } from "react-hook-form";
import Button from '../button/index'
import createUserApi from '../../API/users'
import styles from "./index.module.scss";

interface IFormInput {
    name: String;
    password: String;
}

interface IFormType {
    url: string,
    type: 'register' | 'login'
}

const Form: FC<IFormType> = ({ url, type }) => {
    function createUser(name: String, password: String, url: string): any {
        return (
            createUserApi<{ name: String, password: String, url: string }>(name, password, url)
                .then(() => {
                    alert("utworzono/zalogowano użytkownika")
                })
                .catch(error => {
                    console.error(error)
                }))
    }

    const { register, handleSubmit, errors } = useForm<IFormInput>()

    const onSubmit= (data: IFormInput) => {
        if(type === 'register') createUser(data.name, data.password, `http://localhost:3001/users/${url}`);
        if (type === 'login')createUser(data.name, data.password, `http://localhost:3001/users/${url}`);
    }
     
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.wrapper}>
            <input
                type="text"
                name="name"
                placeholder="name"
                ref={register({
                    required: "PASSWORD REQUIRED",
                    minLength: 8,
                    maxLength: 30,
                })}
            />
            {errors.name && (
                <p className={styles.error}>Your name input required to be more than 8 and less than 30</p>
            )}
            <input
                type="password"
                name="password"
                placeholder="password"
                ref={register({
                    required: "PASSWORD REQUIRED",
                    minLength: 8,
                    maxLength: 30,
                })}
            />
            {errors.password && (
                <p className={styles.error}>Your password input required to be more than 8 and less than 30</p>
            )}

            <Button text={type}/>
        </form>
    );
};

export default Form;
