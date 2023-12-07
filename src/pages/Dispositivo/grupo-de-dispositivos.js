import ListarGrupos from "../components/ListarGrupos";
import NavbarPrincipal from "../components/NavbarPrincipal";
import styles from '@/styles/Listar.module.css'

export default function GrupoDeDispositivos() {
  return (
    <>
      <NavbarPrincipal />
      <fieldset className={styles.listar}>
          <ListarGrupos/>
          <div>
            <a href="cadastrar">Deseja adicionar um novo grupo?</a>
          </div>
      </fieldset>
    </>
  );
}

