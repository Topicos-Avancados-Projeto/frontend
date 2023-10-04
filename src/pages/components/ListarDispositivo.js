 telas-broker
export default function ListarDispositivo(){
    return(
        <fieldset className="divs">
                <div>
                    <label className="nomes">Dispositivo ux-776</label>

import styles from '@/styles/Broker.module.css'

export default function ListarDispositivo(){
    return(
        <fieldset className={styles.divs}>
                <div>
                    <label className={styles.nomes}>Dispositivo ux-776</label>
 main
                </div>
                <div>
                    <button><img src="/images/lixo.png" /></button>
                    <a href= "editar"><button><img src="/images/lapis.png" /></button></a>
                    <a href="detalhar"><button><img src="/images/lupa.png"/></button></a>
                    <button><img src="/images/computador.png" /></button>
                </div>
            </fieldset>
    )
}