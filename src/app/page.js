import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Home page</h1>
      <div className={styles.header}>
        <div>Zakupione?</div>
        <div>Produkt</div>
        <div>Link</div>
        <div>Cena</div>
        <div>Akcja</div>
      </div>
      <div className={styles.row}>
        <div>
          <input type="checkbox" />
        </div>
        <div>Nazwa sdiuhdfi</div>
        <div>https://link.pl</div>
        <div>200zł</div>
        <div>
          <span className={styles.action}>✏️</span>
          <span className={styles.action}>🗑️</span>
        </div>
      </div>
      <div className={styles.row}>
        <div>
          <input type="checkbox" />
        </div>
        <div>Nazwa sdiuhdfi</div>
        <div>https://link.pl</div>
        <div>200zł</div>
        <div>
          <span className={styles.action}>✏️</span>
          <span className={styles.action}>🗑️</span>
        </div>
      </div>
    </div>
  );
}