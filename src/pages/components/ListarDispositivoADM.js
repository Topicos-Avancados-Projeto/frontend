import styles from '@/styles/usuario.module.css'

export default function ListarDispositivo() {
    return (
        <fieldset className={styles.divs}>
            <div>
                <label className={styles.nomes}>Dispositivo ux-776</label>
            </div>
            <div>
                <a href='remover'>
                    <button><img src="/images/lixo.png" /></button>
                </a>
                <a href="editar">
                    <button><img src="/images/lapis.png" /></button>
                </a>
                <a href="./detalhar">
                    <button><img src="/images/lupa.png" /></button>
                </a>

            </div>
        </fieldset>
    )
}