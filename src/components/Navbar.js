import styles from "@/styles/components/Navbar.module.css";

export default function Navbar() {

    return(
        <nav className={styles.navBox}>
            <div className={styles.logoBox}>
                <a href="/"><h1>Shopping-list app</h1></a>
            </div>
            <ul className={styles.linkBox}>
                <li><a href="/add">Add</a></li>
            </ul>
        </nav>
    )
}