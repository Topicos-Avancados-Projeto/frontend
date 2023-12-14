import { useRouter } from "next/router"
import ListarDispositivoADM from "../components/ListarDispositivoADM"
import NavbarPrincipal from "../components/NavbarPrincipal"
import styles from '@/styles/usuario.module.css'
import router from "next/router";


export default function PaginaListar() {
    const {query} = useRouter();
    const removeData = async()=>{
        const response = await fetch(`http://localhost:3003/device/${query.id}`,{
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('Authorization')
            }
        });
        if(!response.ok){
            console.error('Erro ao fazer a solicitação HTTP.');
        }else{
            router.push('/Dispositivo/listar')
        }
    }
    const handleClick = ()=>{
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
                                <button className={styles.botaoConfirmar} onClick={handleClick}>Confirmar</button>
                            </a>
                        </div>
                    </fieldset>
                </fieldset>
            </div>
        </>
    )

}