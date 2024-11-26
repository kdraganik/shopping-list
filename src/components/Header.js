import styles from "@/styles/components/Header.module.css";

export default function Header() {

    return(
        <div className={styles.header}>
            <div>Zakupione?</div>
            <div>Produkt</div>
            <div>Link</div>
            <div>Cena</div>
            <div>Akcja</div>
        </div>
    )
}