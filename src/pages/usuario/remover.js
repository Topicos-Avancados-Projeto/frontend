import NavbarPrincipal from "../components/NavbarPrincipal"
import styles from '@/styles/usuario.module.css'
import { useRouter } from "next/router"
import router from "next/router"

export default function PaginaListar() {
    const {query} = useRouter();
    const removeData = async()=>{
        const response = await fetch(`http://localhost:3003/user/${query.id}`,{
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('Authorization')
            }
        });
        if(!response.ok){
            console.error('Erro ao fazer a solicitação HTTP.');
        }
        router.push('/usuario/listar')
    }
    const handleRemove= ()=>{
        removeData();
    }

    return (
        <>
            <NavbarPrincipal />
            <div className={styles.usuario}>
                <fieldset className={styles.fundolistar}>
                    <fieldset className={styles.linhastabela}>
                        <div className={styles.quadrado}>
                            <p className={styles.quadradop}>ALERTA!</p>
                            <p className={styles.quadradop}>
                                Atenção! Essa ação removerá esse dispositivo
                                PERMANENTEMENTE do nosso sistema    
                                Deseja continuar?
                            </p>
                            <a>
                                <button className={styles.botaoConfirmar} onClick={handleRemove}>Confirmar</button>
                            </a>
                        </div>
                    </fieldset>
                </fieldset>
            </div>
        </>
    )

}