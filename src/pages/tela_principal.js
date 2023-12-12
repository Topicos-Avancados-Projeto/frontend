import Head from "next/head"
import NavbarPrincipal from "./components/NavbarPrincipal"
import Modal from "./components/Modal.js"
import { useState } from "react";


export default function tela_principal(){
    const [isModalOpen, setIsModalOpen] = useState(false);

    const fetchData = async()=>{
    try{
      const token = localStorage.getItem('Authorization');
      const response = await fetch('http://localhost:3003/login', {
        method: 'GET',
        headers:{
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
      });

      if (response.ok){
        const infos = await response.json()
        console.log(infos);
        return infos.name;
      }
    } catch(error){
      console.log("erro")
    }
  };
  const infos = fetchData();
    const handleOpenModal = () => {
        setIsModalOpen(true);
      };
    
      const handleCloseModal = () => {
        setIsModalOpen(false);
      };
    return(
        <>
        <Head>
             <title>IOT - Tela Principal</title>
        </Head>
        <div>
        <NavbarPrincipal onOpenModal={handleOpenModal}/>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
        </>
    )
}