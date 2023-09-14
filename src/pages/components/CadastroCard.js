import styles from '../../styles/CadastroCard.module.css'

export default function CadastroCard({ titulo, children }){
    return (
        <div className={styles.card}>
            <h1 className={styles.titulo}>{titulo}</h1>
            {children}
        </div>
    )
}