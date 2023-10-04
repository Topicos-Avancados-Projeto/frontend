import Link from "next/link";
import styles from '../../styles/NavbarCadastro.module.css'

export default function NavbarCadastro(){
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