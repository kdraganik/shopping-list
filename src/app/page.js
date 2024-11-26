"use client"

import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Row from "@/components/Row";
import { useState } from "react";

export default function Home() {

  const [itemes, setItemes] = useState([]);
  

  return (
    <div className={styles.container}>
      <h1>Home page</h1>
      <Header />
      {itemes.map((item, index) => <Row key={index} name={item.name} link={item.link} price={item.price} />)}
    </div>
  );
}