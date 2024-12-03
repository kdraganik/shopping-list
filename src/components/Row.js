import styles from '@/styles/components/Row.module.css';

export default function Row({name, link, price}) {
 return (
    <div className={styles.row}>
        <div>
          <input type="checkbox" />
        </div>
        <div>{name}</div>
        <div><a href={link}>{link}</a></div>
        <div>{price} zł</div>
        <div>
          <span className={styles.action}>✏️</span>
          <span className={styles.action}>🗑️</span>
        </div>
    </div>
 )
}