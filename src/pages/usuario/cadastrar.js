import NavbarPrincipal from "../components/NavbarPrincipal"
import styles from '@/styles/usuario.module.css'

export default function PaginaCadastrar(){
    return(
        <>
        <NavbarPrincipal/>
        <div className={styles.usuario}>
            <div className={styles.container}>
                <form>
                <fieldset>
                    <h1 className={styles.titulo}>Cadastrar Usuário</h1>
                </fieldset>
                <fieldset>
                    <div>
                    <label id='label'>Name:</label>
                    <input type="text" style={{width: 370}}/>
                    </div>
                  
                </fieldset>
                <fieldset>
                    <div>
                    <label id='label'>Tipo de usuário:</label>
                    <input type="text" style={{width: 370}}/>
                    </div>
                   
                </fieldset>
                
                <fieldset>
                    <div>   
                    <a href="listar">
                  <button type="submit" className={styles.button} style={{ marginLeft: 500 }} >
                    Confirmar
                  </button>
                </a>                                  
                    </div>
                
                </fieldset>
                </form>
            </div>
        </div></>
    )
}