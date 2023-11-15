import ListarDispositivo from "../components/ListarDispositivo";
import NavbarPrincipal from "../components/NavbarPrincipal";
import styles from '@/styles/Listar.module.css'

export default function PaginaRemover() {
  return (
    <>
      <NavbarPrincipal />
      <fieldset className={styles.listar}>
          <ListarDispositivo/>
          <div>
            <a href="cadastrar">Deseja adicionar um novo dispositivo?</a>
          </div>
      </fieldset>
    </>
  );
}

