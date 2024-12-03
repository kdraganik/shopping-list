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
            <form>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                <label htmlFor="link">Link</label>
                <input id="link" type="text" value={link} onChange={(e) => setLink(e.target.value)}/>
                <label htmlFor="price">Price</label>
                <input id="price" type="number" value={price} onChange={(e) => setPrice(e.target.value)}/>
                <button onClick={handleClick}>Add</button>
            </form>
        </div>
    )
}