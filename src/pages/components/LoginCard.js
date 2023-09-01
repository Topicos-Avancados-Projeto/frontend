import styles from '../../styles/LoginCard.module.css'

export default function LoginCard({ titulo, children }){
    return (
        <div className={styles.card}>
            <h1 className={styles.titulo}>{titulo}</h1>
            {children}
        </div>
    )
}