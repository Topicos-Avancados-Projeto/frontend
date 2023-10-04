import ListarDispositivo from "../components/ListarDispositivo"
import NavbarPrincipal from "../components/NavbarPrincipal"
 telas-broker

import styles from '@/styles/Broker.module.css'
 main

export default function PaginaListar(){
    return(
    <>
    <NavbarPrincipal/>
telas-broker
    <fieldset className="fundolistar">
        <fieldset className="linhastabela">

    <div className={styles.broker}>
    <fieldset className={styles.fundolistar}>
        <fieldset className={styles.linhastabela}>
 main
            <ListarDispositivo />        
            <ListarDispositivo />        
            <ListarDispositivo />        
            <ListarDispositivo />        
 telas-broker
            <div className="deseja"><a href="cadastrar">Deseja adicionar um novo dispositivo?</a></div>
        </fieldset>
    </fieldset>

            <div className={styles.deseja}><a href="cadastrar">Deseja adicionar um novo dispositivo?</a></div>
        </fieldset>
    </fieldset>
    </div>
 main
    </>
    )
}