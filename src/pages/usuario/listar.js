import ListarDispositivoADM from "../components/ListarDispositivoADM"
import NavbarPrincipal from "../components/NavbarPrincipal"
import styles from '@/styles/usuario.module.css'

export default function PaginaListar(){
    return(
    <>
    <NavbarPrincipal/>
    <div className={styles.usuario}>
    <fieldset className={styles.fundolistar}>
        <fieldset className={styles.linhastabela}>
            <ListarDispositivoADM />        
            <ListarDispositivoADM />        
            <ListarDispositivoADM />        
            <ListarDispositivoADM />        
            <div className={styles.deseja}><a href="cadastrar">Deseja adicionar um novo usuário?</a></div>
        </fieldset>
    </fieldset>
    </div>
    </>
    )
}