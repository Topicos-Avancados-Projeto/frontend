import styles from '../../styles/input.module.css'

export default function Input(props){
    return(
        <input className={styles.input} {...props}/>
    )
}