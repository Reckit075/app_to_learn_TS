import React from 'react'

function createUserApi(name: string, password: string): Promise<void> {
    return fetch('http://localhost:3001/users/register', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "name": name.trim(),
            "password": password.trim()
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json()
        })
}
function loginUserApi(name: string, password: string): Promise<void> {
    return fetch('http://localhost:3001/users/login', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "name": name.trim(),
            "password": password.trim()
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json()
        })
}

export {createUserApi,loginUserApi}
