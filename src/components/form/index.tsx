import React, { FC } from "react";
import { useForm } from "react-hook-form";
import styles from "./index.module.scss";

interface IFormInput {
    name: String;
    password: String;
}

const Form: FC = () => {
    
    const { register, handleSubmit, errors } = useForm<IFormInput>();
    const onSubmit = (data: IFormInput) => console.log(data);
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

            <input type="submit" className={styles.btn} />
        </form>
    );
};

export default Form;
