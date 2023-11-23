import NavbarPrincipal from "../components/NavbarPrincipal";
import styles from '@/styles/Broker.module.css'
import {useRouter} from 'next/router'
import {useState, useEffect} from 'react'
import router from 'next/router'

export default function PaginaEditar(){
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

  const [cleansession, setCleanSession] = useState(data.cleansession);
  const [user_id, setID] = useState(data.user_id);
  const [name, setName] = useState(data.name);
  const [description, setDescription] = useState(data.description);
  const [broker_port, setPort] = useState(data.broker_port);
  const [broker_host, setHost] = useState(data.broker_host);
  const [username, setUsername] = useState(data.username);
  const [password, setPassword] = useState(data.password);
  const [lastwilltopic, setLastWillTopic] = useState(data.lastwilltopic);
  const [lastwillqos, setLastWillQoS] = useState(data.lastwillqos);
  const [lastwillretain, setLastWillRetain] = useState(data.lastwillretain);
  const [keepalive, setKeepAlive] = useState(data.keepalive);


  const sendRequest = async(data)=>{
    const response = await fetch(`http://localhost:3003/broker_client/${query.id}`, {
      method: 'PATCH',
      headers:{
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('Authorization')
      },
      body: JSON.stringify(data),
    });
    if(!response.ok){
      console.error('Erro ao fazer a solicitação HTTP.');
    }else{
      console.log('Informações alteradas');
      router.push('/broker/listar')
    }
  }

  //tipos number: broker_port, lastwillqos e keepalive
  const handleSubmit = (e)=>{
    const data = {
      user_id,
      cleansession,
      name,
      description,
      broker_port,
      broker_host,
      username,
      password,
      lastwilltopic,
      lastwillqos,
      lastwillretain,
      keepalive
    }
    data.broker_port = parseInt(data.broker_port)
    data.lastwillqos = parseInt(data.lastwillqos)
    data.keepalive = parseInt(data.keepalive)
    console.log(JSON.stringify(data));
    sendRequest(data);
  }
    return(
    <>
    <NavbarPrincipal/>
    <div className={styles.broker}>
      <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h3 id='titulo'>Broker</h3>
        </fieldset>
        <fieldset>
          <div>
            <label id='label'>Name</label>
            <input placeholder={data.name} type="text" style={{width: 370}} onChange={(e)=> setName(e.target.value)}/>
          </div>
          <div>
            <label id='label'>Port</label>
            <input placeholder={data.broker_port} type="number" style={{width: 70}} onChange={(e)=> setPort(e.target.value)}/>
          </div>
          <div>
            <label id='label'>Host</label>
            <input placeholder={data.broker_host} type="text" style={{width: 380}} onChange={(e)=> setHost(e.target.value)}/>
            <button type="button" className={styles.button} style={{marginLeft: 30}} onClick={handleSubmit}>Editar</button>
          </div>
        </fieldset>
        <fieldset>
          <div>
            <label id='label'>Username</label>
            <input placeholder={data.username} type="text" style={{width: 250}} onChange={(e)=> setUsername(e.target.value)}/>
          </div>
          <div>
            <label id='label'>Password</label>
            <input placeholder={data.password} type="text" onChange={(e)=> setPassword(e.target.value)}/>
          </div>
          <div>
            <label id='label'>Keep Alive</label>
            <input placeholder={data.keepalive} type="number" style={{width: 190}} onChange={(e)=> setKeepAlive(e.target.value)}/>
          </div>
          <div>
            <label id='label'>Clean Session</label>
            <input checked={data.cleansession} type="checkbox" style={{width: 40}} onChange={(e)=> setCleanSession(!cleansession)}/>
          </div>
        </fieldset>
        <fieldset>
          <div>
            <label id='label'>Last-Will Topic</label>
            <input placeholder={data.lastwilltopic} type="text" style={{width: 450, marginRight: 75}} onChange={(e)=> setLastWillTopic(e.target.value)}/>
          </div>
          <div> 
            <label id='label'>Last-Will QoS</label>
            <input placeholder={data.lastwillqos} type="number" min="0" max="2" style={{width: 150}} onChange={(e)=> setLastWillQoS(e.target.value)}/>
          </div>
          <div style={{paddingLeft:75}}>
            <label id='label'>Last-Will Retain</label>
            <input checked={data.lastwillretain} type="checkbox" style={{width: 40}} onChange={(e)=> setLastWillRetain(!lastwillretain)}/> 
          </div>
        </fieldset>
      </form>
    </div>
    </div>
  </>
    )
}