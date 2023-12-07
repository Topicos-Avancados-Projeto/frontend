import ListarDispositivoADM from "../components/ListarDispositivoADM"
import NavbarPrincipal from "../components/NavbarPrincipal"
import styles from '@/styles/usuario.module.css'
import {useState, useEffect} from 'react'

export default function PaginaListar(){
    const [data, setData] = useState([]);
    useEffect(()=>{
        const fetchData= async()=>{
            const response = await fetch('http://localhost:3003/user',{
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+ localStorage.getItem('Authorization')
                }
            })
            if(!response.ok){
                console.error('Erro ao fazer a solicitação HTTP');
            }
            const users = await response.json();
            setData(users);
        }
        fetchData();
    })
    return(
    <>
    <NavbarPrincipal/>
    <div className={styles.usuario}>
    <fieldset className={styles.fundolistar}>
        <fieldset className={styles.linhastabela}>
            {data?.map((user)=>(
                ListarDispositivoADM(user)
            ))}
            <div className={styles.deseja}><a href="cadastrar">Deseja adicionar um novo usuário?</a></div>
        </fieldset>
    </fieldset>
    </div>
    </>
    )
}