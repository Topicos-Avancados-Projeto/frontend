import Head from "next/head";
import NavbarPrincipal from "./components/NavbarPrincipal";
import Modal from "@/pages/components/Modal";
import { useState, useEffect } from "react";
import Link from "next/link";
import router from 'next/router'

export default function tela_principal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const [id, setId] = useState('');
  const [name, setName] = useState(data.name);
  const [cpf, setCpf] = useState(data.cpf);
  const [email, setEmail] = useState(data.email);
  const [date_of_birth, setAniversario] = useState(data.date_of_birth)
  const [dia, setDia] = useState('');
  const [mes, setMes] = useState('');
  const [ano, setAno] = useState('');
  useEffect(()=>{
    const getId = async()=>{
      const response = await fetch(`http://localhost:3003/login`, {
        headers:{
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+ localStorage.getItem('Authorization')
        }
      });
      if(!response.ok){
        console.error('Erro ao fazer a solicitação HTTP.');
      }else{
        const user = await response.json();
        setId(user.id)
      }
    }
    getId();

    const getData = async()=>{
      const response = await fetch(`http://localhost:3003/user/${id}`,{
        headers:{
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+ localStorage.getItem('Authorization')
        }
      });
      if(!response.ok){
        console.error('Erro ao fazer a solicitação HTTP.');
      }else{
        const user = await response.json();
        setData(user);
        setDia(data.date_of_birth?.split('/', 1));
        setMes(data.date_of_birth?.split('/', 2)[1]);
        setAno(data.date_of_birth?.split('/', 3)[2]);
      }
    }

    getData();
  })

  const sendRequest = async(data)=>{
    const response = await fetch(`http://localhost:3003/user/${id}`,{
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
      router.push('/tela_principal')
    }
  }

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e)=>{
    setAniversario(dia+'/'+mes+'/'+ano)
    const data = {
      name,
      cpf,
      email,
      date_of_birth
    }
    sendRequest(data);
  }

  return (
    <>
      <Head>
        <title>IOT - Tela Principal</title>
      </Head>
      <div>
        <NavbarPrincipal onOpenModal={handleOpenModal} />
        <div className="container" style={{ textAlign: "center" }}>
          <form>
            <fieldset>
              <legend>
                <h1 className="title" id="titulo">
                  DADOS DA CONTA
                </h1>
              </legend>
            </fieldset>
            <div style={{ margin: "30px 0" }}>
              <label htmlFor="nome" id="label">
                Nome
              </label>
              <input placeholder={data.name} type="text" id="nome" style={{ width: 370 }} onChange={(e)=> setName(e.target.value)}/>
            </div>
            <div style={{ margin: "30px 0" }}>
              <label htmlFor="cpf" id="label">
                CPF
              </label>
              <input placeholder={data.cpf} type="number" id="cpf" style={{ width: 300 }} onChange={(e)=>setCpf(e.target.value)}/>
            </div>
            <div style={{ margin: "30px 0" }}>
              <label htmlFor="email" id="label">
                Email
              </label>
              <input placeholder={data.email} type="text" id="email" style={{ width: 300 }} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div style={{ margin: "20px 0" }}>
              <label id="label">Data de nascimento</label>
              <div className="form2">
                <input
                  style={{ padding: "1px" }}
                  type="number"
                  placeholder={dia}
                  onChange={(e)=>setDia(e.target.value)}
                />
                <input
                  style={{ padding: "1px" }}
                  type="text"
                  placeholder={mes}
                  onChange={(e)=>setMes(e.target.value)}
                />
                <input
                  style={{ padding: "1px" }}
                  type="number"
                  placeholder={ano}
                  onChange={(e)=>setAno(e.target.value)}
                />
              </div>
            </div>
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <Link href="/tela_principal">
                <button type="submit" id="botao" style={{ margin: "15px" }}>
                  Cancelar
                </button>
              </Link>
              <Link href="/tela_principal">
                <button type="submit" id="botao" style={{ margin: "15px" }} onClick={handleSubmit}>
                  Atualizar
                </button>
              </Link>
            </div>
          </form>
        </div>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </>
  );
}
