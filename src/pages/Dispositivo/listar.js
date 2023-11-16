import ListarDispositivoADM from "../components/ListarDispositivoADM"
import NavbarPrincipal from "../components/NavbarPrincipal"
import styles from '@/styles/Dispositivo.module.css'

export default function PaginaListar(){
    return(
    <>
    <NavbarPrincipal/>
    <div className={styles.dispositivo}>
    <fieldset className={styles.fundolistar}>
        <fieldset className={styles.linhastabela}>
            <ListarDispositivoADM />        
            <ListarDispositivoADM />        
            <ListarDispositivoADM />        
            <ListarDispositivoADM />        
            <div className={styles.deseja}><a href="cadastrar">Deseja adicionar um novo dispositivo?</a></div>
        </fieldset>
    </fieldset>
    </div>
    </>
    )
}