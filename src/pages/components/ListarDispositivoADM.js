import styles from '@/styles/usuario.module.css'

export default function ListarDispositivo(user) {
    return (
        <fieldset className={styles.divs}>
            <div>
                <label className={styles.nomes}>{user.name}</label>
            </div>
            <div>
                <a href={`remover?id=${user._id}`}>
                    <button><img src="/images/lixo.png" /></button>
                </a>
            </div>
        </fieldset>
    )
}               
/*                <a href={`editar?id=${user.id}`}>
                <button><img src="/images/lapis.png" /></button>
                </a>
                <a href={`./detalhar?id=${user._id}`}>
                    <button><img src="/images/lupa.png" /></button>
                </a>*/