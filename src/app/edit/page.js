"use client"

import styles from "@/styles/Edit.module.css";
import Form from "@/components/Form";
import { useSearchParams } from "next/navigation";

export default function Edit() {

  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const name = searchParams.get('name');
  const link = searchParams.get('link');
  const price = searchParams.get('price');
  console.log(id, name, link, price);

  return (
    <div className={styles.container}>
      <h1>Edit page</h1>
      <Form submitLink="/api/editList" buttonText="Edit" data={{id, name, link, price}} />
    </div>
  );
}