import ListarDispositivo from "../components/ListarDispositivo";
import NavbarPrincipal from "../components/NavbarPrincipal";
import styles from '@/styles/Listar.module.css';
import {useState, useEffect} from 'react';

export default function PaginaListar() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    const fetchData = async()=>{
      const response = await fetch('http://localhost:3003/broker_client',{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer  ' + localStorage.getItem('Authorization')
        },
      });
      if(!response.ok){
        console.error('Erro ao fazer a solicitação HTTP');
      }
      const brokers = await response.json();
      setData(brokers)    
    }
    fetchData();
  });
  return (
    <>
      <NavbarPrincipal />
      <fieldset className={styles.listar}>
        {data?.map((broker) =>(
          ListarDispositivo(broker)
        ))}
          <div>
            <a href="cadastrar">Deseja adicionar um novo dispositivo?</a>
          </div>
      </fieldset>
    </>
  );
}