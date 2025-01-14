"use client";

import {useEffect, useState} from 'react';  
import styles from '@/styles/components/Form.module.css';

export default function Form({submitLink, buttonText, data}) {

    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [price, setPrice] = useState(0);

    useEffect(() => {
        if(data) {
            setName(data.name);
            setLink(data.link);
            setPrice(data.price);
        }
    }, []);

    const handleClick = async (e) => {
        e.preventDefault();
        const postData = {name, link, price: Number(price)};
        if (data) {
            postData.id = data.id;
        }
        const response = await fetch(submitLink, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        });
        console.log(response)
    }

    return (
        <form className={styles.formContainer}>
            <label htmlFor="name" className={styles.formLabel}>Name</label>
            <input id="name" className={styles.formInput}  type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <label htmlFor="link" className={styles.formLabel}>Link</label>
            <input id="link" className={styles.formInput}  type="text" value={link} onChange={(e) => setLink(e.target.value)}/>
            <label htmlFor="price" className={styles.formLabel}>Price</label>
            <input id="price" className={styles.formInput} type="number" value={price} onChange={(e) => setPrice(e.target.value)}/>
            <button onClick={handleClick} className={styles.formButton}>{buttonText}</button>
        </form>
    );

}