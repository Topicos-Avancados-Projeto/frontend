import ListarDispositivo from "../components/ListarDispositivos"
import NavbarPrincipal from "../components/NavbarPrincipal"
import styles from '@/styles/Dispositivo.module.css'
import {useState, useEffect} from 'react';

export default function PaginaListar(){

    const [data, setData] = useState([]);
    useEffect(()=>{
        const fetchData= async()=>{
            const response = await fetch('http://localhost:3003/device',{
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+ localStorage.getItem('Authorization')
                }
            })
            if(!response.ok){
                console.error('Erro ao fazer a solicitação HTTP');
            }
            const dispositivos = await response.json();
            setData(dispositivos);
        }
        fetchData();
    })
    return(
    <>
    <NavbarPrincipal/>
    <div className={styles.dispositivo}>
    <fieldset className={styles.fundolistar}>
        <fieldset className={styles.linhastabela}>
            {data?.map((dispositivo)=>(
                ListarDispositivo(dispositivo)
            ))}
            <div className={styles.deseja}><a href="cadastrar">Deseja adicionar um novo dispositivo?</a></div>
        </fieldset>
    </fieldset>
    </div>
    </>
    )
}