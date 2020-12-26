import React, {useState} from 'react';

export const useModal = () => {
    const [form, setForm] = useState({
        title: 'title',
        author: 'author',
        description: 'description',
    });

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(form)
        // creating new item in item collection state
    }

    return {
        form,
        handleFormChange,
        handleSubmit,
    }
}