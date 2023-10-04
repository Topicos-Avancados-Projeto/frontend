import ListarDispositivo from "../components/ListarDispositivo"
import NavbarPrincipal from "../components/NavbarPrincipal"
 telas-broker

import styles from '@/styles/Broker.module.css'
 main

export default function PaginaRemover(){
    return(
    <><NavbarPrincipal/>
 telas-broker
    <fieldset className="fundolistar">
        <fieldset className="linhastabela">
            <ListarDispositivo />        
            <ListarDispositivo />        
            <ListarDispositivo />        
            <ListarDispositivo />        
            <div className="deseja"><a href="cadastrar">Deseja adicionar um novo dispositivo?</a></div>
        </fieldset>
    </fieldset></>

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
main
    
    )
}