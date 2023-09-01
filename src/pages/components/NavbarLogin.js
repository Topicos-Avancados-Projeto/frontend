import Link from "next/link";
import styles from '../../styles/NavbarLogin.module.css'

export default function NavbarLogin(){
    return(
        <nav className={styles.navbar}>
            <div>
                <h1>IOT</h1>
              </div>
            <ul className={styles.link_items}>
                <li>
                    <Link href="/">
                            Home
                    </Link>
                </li>
            </ul>
        </nav>
    )
}