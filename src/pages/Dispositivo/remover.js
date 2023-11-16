import ListarDispositivoADM from "../components/ListarDispositivoADM"
import NavbarPrincipal from "../components/NavbarPrincipal"
import styles from '@/styles/usuario.module.css'


export default function PaginaListar() {
    return (
        <>
            <NavbarPrincipal />
            <div className={styles.usuario}>
                <fieldset className={styles.fundolistar}>
                    <fieldset className={styles.linhastabela}>
                        <ListarDispositivoADM />
                        <div className={styles.quadrado}>
                            <p className={styles.quadradop}>ALERTA!</p>
                            <p className={styles.quadradop}>
                                Atenção! Essa ação removerá esse dispositivo
                                PERMANENTEMENTE do nosso sistema    
                                Deseja continuar?
                            </p>
                            <a href='listar'>
                                <button className={styles.botaoConfirmar}>Confirmar</button>
                            </a>
                        </div>
                    </fieldset>
                </fieldset>
            </div>
        </>
    )

}