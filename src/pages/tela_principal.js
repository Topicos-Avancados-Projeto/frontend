import Head from "next/head"
import NavbarPrincipal from "./components/NavbarPrincipal"
import Modal from "./components/modal"
import { useState } from "react";

export default function tela_principal(){
    const [isModalOpen, setIsModalOpen] = useState(false);

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
        <NavbarPrincipal onOpenModal={handleOpenModal} />
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
        </>
    )
}