"use client"

import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Row from "@/components/Row";
import { useEffect, useState } from "react";

export default function Home() {

  useEffect(() => {
    fetch('/api/getList')
      .then(response => response.json())
      .then(data => setItemes(data));
  }, []);

  const [itemes, setItemes] = useState([]);

  return (
    <div className={styles.container}>
      <h1>Home page</h1>
      <Header />
      {itemes.map((item, index) => <Row key={index} id={item._id} name={item.name} link={item.link} price={item.price} />)}
    </div>
  );
}