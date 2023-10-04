import ListarDispositivo from "../components/ListarDispositivo"
import NavbarPrincipal from "../components/NavbarPrincipal"
import styles from '@/styles/Broker.module.css'

export default function PaginaListar(){
    return(
    <>
    <NavbarPrincipal/>
    <div className={styles.broker}>
    <fieldset className={styles.fundolistar}>
        <fieldset className={styles.linhastabela}>
            <ListarDispositivo />        
            <ListarDispositivo />        
            <ListarDispositivo />        
            <ListarDispositivo />        
            <div className={styles.deseja}><a href="cadastrar">Deseja adicionar um novo dispositivo?</a></div>
        </fieldset>
    </fieldset>
    </div>
    </>
    )
}