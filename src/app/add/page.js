"use client"

import styles from "@/styles/Add.module.css";
import { useState } from "react";

export default function Add() {

    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [price, setPrice] = useState(0);

    const handleClick = async (e) => {
        e.preventDefault();
        const data = {name, link, price: Number(price)};
        console.log(data);
        const response = await fetch('/api/addToList', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        console.log(response)
    }

    return (
        <div className={styles.container}>
            <h1>Add page</h1>
            <form className={styles.formContainer}>
                <label htmlFor="name" className={styles.formLabel}>Name</label>
                <input id="name" className={styles.formInput}  type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                <label htmlFor="link" className={styles.formLabel}>Link</label>
                <input id="link" className={styles.formInput}  type="text" value={link} onChange={(e) => setLink(e.target.value)}/>
                <label htmlFor="price" className={styles.formLabel}>Price</label>
                <input id="price" className={styles.formInput} type="number" value={price} onChange={(e) => setPrice(e.target.value)}/>
                <button onClick={handleClick} className={styles.formButton}>Add</button>
            </form>
        </div>
    )
}