import NavbarPrincipal from "../components/NavbarPrincipal"
import styles from '@/styles/usuario.module.css'

export default function PaginaCadastrar(){

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch('http://localhost:3003/user', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name,
              tipoUsuario,
            }),
          });
    
          const data = await response.json();
          console.log(data);
        } catch (error) {
            console.error('Erro ao fazer a solicitação HTTP:', error);
        }
      };

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