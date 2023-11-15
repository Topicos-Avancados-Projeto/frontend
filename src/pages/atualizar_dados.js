import Head from "next/head"
import NavbarPrincipal from "./components/NavbarPrincipal"
import Modal from "@/pages/components/Modal"
import { useState } from "react";
import Link from "next/link";

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
        <div className='container'>
            <form>
            <fieldset>
                <h3 className='tittle' id='titulo'>DADOS DA CONTA</h3>
            </fieldset><br/>
            <fieldset>
                <div>
                <label id='label'>Nome</label>
                <input type="text" style={{width: 300}}/>
                </div>
                <div>
                <label id='label'>Sobrenome</label>
                <input type="text" style={{width: 300}}/>
                </div>
            </fieldset><br />
            <fieldset>
                <div>
                <label id='label'>CPF</label>
                <input type="number" style={{width: 300}}/>
                </div>
                <div>
                <label id='label'>Endereço</label>
                <input type="text" style={{width: 300}}/>
                </div>
            </fieldset><br />
            <fieldset>
                <div>
                <label id='label'>Email</label>
                <input type="text" style={{width: 300}}/>
                </div>
                <div>
                <label id='label'>Celular</label>
                <input type="number" style={{width: 150}}/>
                </div>
            </fieldset><br />
            <fieldset>
            <div>
                <label id='label'>Data de nascimento</label>
                <ul className='form2'>                            
                            <input   
                                style={{padding: '1px' }}                         
                                type="number"
                                placeholder="Dia"                                                        
                            />                          
                            <input
                            style={{padding: '1px' }}
                                type="text"
                                placeholder="Mês"                                                           
                            />                          
                            <input
                            style={{padding: '1px' }}
                                type="number"
                                placeholder="Ano"                                       
                            />
                </ul>
            </div>
            </fieldset><br />
            <fieldset>
                <div>
                <label id='label'>Login</label>
                <input type="text" style={{width: 300}}/>
                </div>
                <div>
                <label id='label'>Senha</label>
                <input type="text" style={{width: 150}}/>
                </div>
            </fieldset><br />
            <fieldset>
                <div>
                    <Link href="/tela_principal"><button type="submit" id="botao" style={{marginLeft: 150}}>Cancelar</button></Link>
                </div>
                <div>
                    <Link href="/tela_principal"><button type="submit" id="botao" style={{marginLeft: 30}}>Atualizar</button></Link>
                </div>
            </fieldset>
            </form>
        </div>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>

        </>
    )
}