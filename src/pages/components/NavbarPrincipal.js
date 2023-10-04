import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGear } from "@fortawesome/free-solid-svg-icons";
import styles from '../../styles/NavbarPrincipal.module.css';
import Modal from "./Modal";
import tela_principal from "../tela_principal";

export default function NavbarPrincipal({ onOpenModal }) {
    return (

        <nav className={styles.navbar}>
            <ul className={styles.link_items}>
                <li className={`${styles.dropdown} ${styles.spaceRight}`}>
                    <span>☰</span>
                    <ul className={styles.dropdownContent}>
                        <li>
                            <h2 className={styles.lh2}>Broker</h2>
                        </li>

                        <li>
                            <Link href="/broker/cadastrar">
                                Cadastrar
                            </Link>
                        </li>
                        <li>
                            <Link href="/broker/listar">
                                Listar
                            </Link>
                        </li>
                        <li>
                            <Link href="/broker/detalhar">
                                Detalhar
                            </Link>
                        </li>
                        <li>
                            <Link href="/broker/editar">
                                Editar
                            </Link>
                        </li>
                        <li>
                            <Link href="/broker/remover">
                                Remover
                            </Link>
                        </li>
                        <li>
                            <Link href="/broker/testar">
                                Testar
                            </Link>

                            <Link href="/usuario/listar">
                                <h1 className={styles.lh2}>Usuário</h1>
                            </Link>


                        </li>
                    </ul>
                </li>
                <li className={`${styles.logo} ${styles.spaceL2}`}>
                    <h1>IOT</h1>
                </li>
                <li className={styles.spaceLeft}>
                    <button onClick={onOpenModal}>
                        Sair
                    </button>
                </li>
                <li>
                    <Link href="/atualizar_dados">
                        <FontAwesomeIcon icon={faUserGear} style={{ color: "#ffffff" }} />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

