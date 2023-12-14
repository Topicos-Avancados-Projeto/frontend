import NavbarPrincipal from "../components/NavbarPrincipal"
import styles from '@/styles/Broker.module.css'
import {useState} from 'react'
import router from "next/router"

async function getId(){
}

export default function PaginaCadastrar(){
    const [cleansession, setCleanSession] = useState(false);
    const [user_id, setID] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('mjhvgh');
    const [broker_port, setPort] = useState(0);
    const [broker_host, setHost] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [lastwilltopic, setLastWillTopic] = useState('');
    const [lastwillqos, setLastWillQoS] = useState(0);
    const [lastwillmessage, setLastWillMessage] = useState('');
    const [lastwillretain, setLastWillRetain] = useState(false);
    const [keepalive, setKeepAlive] = useState(0);

    const sendRequest = async(data)=>{
        const response = await fetch('http://localhost:3003/broker_client',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('Authorization')
            },
            body: JSON.stringify(data)
        });
        if(!response.ok){
            console.error('Erro na operação. Verifique os dados e tente novamente.');
        }else{
            console.log('Cadastro realizado com sucesso')
            router.push('/broker/listar');
        }
    }

    const handleSubmit = (e) =>{
        const data={
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
            lastwillmessage,
            keepalive
        }
        data.broker_port = parseInt(data.broker_port)
        data.lastwillqos = parseInt(data.lastwillqos)
        data.keepalive = parseInt(data.keepalive)
        console.log(JSON.stringify(data));
        sendRequest(data);
    }

    const getId = async()=>{
        const response = await fetch('http://localhost:3003/login',{
            headers:{
                'Authorization': localStorage.getItem('Authorization')
            }
        });
        if(!response.ok){
            console.error('Erro ao fazer a solicitação HTTP');
        }
        const data = response.json();
        setID(data.id);
    }

    return(
        <div>
        <NavbarPrincipal/>
        <div className={styles.broker}>
            <div className={styles.container}>
                <form onSubmit={handleSubmit}>
                <fieldset>
                    <h3 className={styles.titulo}>Broker</h3>
                </fieldset>
                <fieldset>
                    <div>
                    <label id='label'>Name</label>
                    <input type="text" style={{width: 370}} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div>
                    <label id='label'>Port</label>
                    <input type="number" style={{width: 70}} onChange={(e) => setPort(e.target.value)}/>
                    </div>
                    <div>
                    <label id='label'>Host</label>
                    <input type="text" onChange={(e) => setHost(e.target.value)}/>
                    <button type="button" className={styles.button} style={{marginLeft: 30}} onClick={handleSubmit}>Connect</button>
                    </div>
                </fieldset>
                <fieldset>
                    <div>
                    <label id='label'>Username</label>
                    <input type="text" style={{width: 250}} onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div>
                    <label id='label'>Password</label>
                    <input type="text" onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div>
                    <label id='label'>Keep Alive</label>
                    <input type="number" style={{width: 190}} onChange={(e) => setKeepAlive(e.target.value)}/>
                    </div>
                    <div>
                    <label id='label'>Clean Session</label>
                    <input type="checkbox" style={{width: 40}} onClick={(e) => setCleanSession(!cleansession)}/>
                    </div>
                </fieldset>
                <fieldset>
                    <div>
                    <label id='label'>Last-Will Topic</label>
                    <input type="text" style={{width: 450, marginRight: 75}} onChange={(e) => setLastWillTopic(e.target.value)}/>
                    </div>
                    <div> 
                    <label id='label'>Last-Will QoS</label>
                    <input type="number" min="0" max="2" style={{width: 150}} onChange={(e) => setLastWillQoS(e.target.value)}/>
                    </div>
                    <div style={{paddingLeft:75}}>
                    <label id='label'>Last-Will Retain</label>
                    <input type="checkbox" style={{width: 40}} onClick={(e) => setLastWillRetain(!lastwillretain)}/> 
                    </div>
                </fieldset>
                <fieldset>
                    <div>
                    <label id='label'>Last-Will Message</label>
                    <input type="text"style={{width: 900}} onChange={(e) => setLastWillMessage(e.target.value)}/>
                    </div>
                </fieldset>
                </form>
            </div>
        </div>
        </div>
    )
}