import ListarGrupos from "../components/ListarGrupos";
import NavbarPrincipal from "../components/NavbarPrincipal";
import styles from '@/styles/Listar.module.css'
import { useState, useEffect} from 'react'

export default function GrupoDeDispositivos() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    const fetchData = async()=>{
      const response = await fetch('http://localhost:3003/device_group',{
        headers:{
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+ localStorage.getItem('Authorization')
        }
      })
      if(!response.ok){
        console.error('Erro ao fazer a solicitação HTTP.');
      }
      const groups = await response.json();
      setData(groups);
    }
    fetchData();
  })
  return (
    <>
      <NavbarPrincipal />
      <fieldset className={styles.listar}>
          {data?.map((group)=>(
            ListarGrupos(group)
          ))}
          <div>
            <a href="cadastrar">Deseja adicionar um novo grupo?</a>
          </div>
      </fieldset>
    </>
  );
}

