"use client"

import styles from "@/styles/Add.module.css";
import Form from "@/components/Form";

export default function Add() {

    return (
        <div className={styles.container}>
            <h1>Add page</h1>
            <Form submitLink="/api/addToList" buttonText="Add" />
        </div>
    )
}