import ListarDispositivo from "../components/ListarDispositivo";
import NavbarPrincipal from "../components/NavbarPrincipal";
import styles from '@/styles/Broker.module.css';

export default function PaginaRemover() {
  return (
    <>
      <NavbarPrincipal />
      <div className={styles.broker}>
        <div className={styles.fundolistar}>
          <div className={styles.linhastabela}>
            <ListarDispositivo />
            <ListarDispositivo />
            <ListarDispositivo />
            <ListarDispositivo />
            <div className={styles.deseja}>
              <a href="cadastrar">Deseja adicionar um novo dispositivo?</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

