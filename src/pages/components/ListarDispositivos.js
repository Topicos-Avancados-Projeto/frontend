import styles from '@/styles/usuario.module.css'

export default function ListarDispositivo(dispositivo) {
    return (
        <fieldset className={styles.divs}>
            <div>
                <label className={styles.nomes}>{dispositivo.name}</label>
            </div>
            <div>
                <a href={`remover?id=${dispositivo._id}`}>
                    <button><img src="/images/lixo.png" /></button>
                </a>
                <a href={`editar?id=${dispositivo._id}`}>
                <button><img src="/images/lapis.png" /></button>
                </a>
                <a href={`./detalhar?id=${dispositivo._id}`}>
                    <button><img src="/images/lupa.png" /></button>
                </a>
            </div>
        </fieldset>
    )
}               