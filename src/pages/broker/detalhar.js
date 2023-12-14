import { useRouter } from "next/router"
import NavbarPrincipal from "../components/NavbarPrincipal"
import styles from '@/styles/Broker.module.css'
import {useState, useEffect} from 'react'

export default function PaginaDetalhar(){
  const [data, setData] = useState([]);
    const {query} = useRouter();
    useEffect(()=>{
    const getData = async()=>{
      const response = await fetch(`http://localhost:3003/broker_client/${query.id}`,{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('Authorization')
        }
      });
      if(!response.ok){
        console.error('Erro ao fazer a solicitação HTTP.');
      }else{
        const broker = await response.json();
        setData(broker);
      }
    }
    getData();
  })
    return (
    <>
    <NavbarPrincipal/>
    <div className={styles.broker}>
      <div className={styles.container}>
      <form>
        <fieldset>
          <h3 id='titulo'>Broker</h3>
        </fieldset>
        <fieldset>
          <div>
            <label id='label'>Name</label>
            <input value={data.name} type="text" style={{width: 370}}/>
          </div>
          <div>
            <label id='label'>Port</label>
            <input value={data.broker_port} type="number" style={{width: 70}}/>
          </div>
          <div>
            <label id='label'>Host</label>
            <input value={data.broker_host} type="text" style={{width: 380}}/>
          </div>
        </fieldset>
        <fieldset>
          <div>
            <label id='label'>Username</label>
            <input value={data.username} type="text" style={{width: 250}}/>
          </div>
          <div>
            <label id='label'>Password</label>
            <input value={data.password} type="text"/>
          </div>
          <div>
            <label id='label'>Keep Alive</label>
            <input value={data.keepalive} type="number" style={{width: 190}}/>
          </div>
          <div>
            <label id='label'>Clean Session</label>
            <input checked={data.cleansession} type="checkbox" style={{width: 40}}/>
          </div>
        </fieldset>
        <fieldset>
          <div>
            <label id='label'>Last-Will Topic</label>
            <input value={data.lastwilltopic} type="text" style={{width: 450, marginRight: 75}}/>
          </div>
          <div> 
            <label id='label'>Last-Will QoS</label>
            <input value={data.lastwillqos} type="number" min="0" max="2" style={{width: 150}}/>
          </div>
          <div style={{paddingLeft:75}}>
            <label id='label'>Last-Will Retain</label>
            <input checked={data.lastwillretain} type="checkbox" style={{width: 40}}/> 
          </div>
        </fieldset>
        <fieldset>
          <div>
          <label id='label'>Last-Will Message</label>
          <input value={data.lastwillmessage} type="text"style={{width: 900}}/>
          </div>
        </fieldset>
      </form>
  </div></div>
  </>
    )
}