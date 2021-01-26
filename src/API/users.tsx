import React from 'react'

function createUserApi<T>(name: String, password: String,url: string): Promise<T> {
    return fetch(url, {
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
            return response.json() as Promise<T>
        })
}

export default createUserApi
