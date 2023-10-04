import React, { useState } from 'react';
import CadastroCard from "./components/CadastroCard"
import styles from '@/styles/Cadastro.module.css'
import Input from "./components/input"
import Button from "./components/CadastroButton"
import NavbarCadastro from "./components/NavbarCadastro"
import Link from 'next/link';


export default function Cadastro() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const cadastro = async () => {
         try {
            const data = await api.patch('/cadastro', { email: '', senha: '' });
            localStorage.setItem('token', JSON.stringify(data));


            const response = await axios.post('/cadastro', {
                nome: "Thiago",
                cpf: "123.090.678-23",
                email: "thiagoprofessor@gmail.com",
                senha: "Senha1*"
            });

            if (response.status === 201) {
                console.log('Cadastro bem-sucedido');
                localStorage.setItem('token', response.data.token);
              } else {
                console.error('Erro ao fazer cadastro:', response.data.msg);
              }
        } catch (error) {
            console.error("Erro ao fazer cadastro:", error);
        }
    };
    return (
        <div className={styles.styles}>
            <NavbarCadastro />
            <div className={styles.background}>
                <div className="background-image"></div>
                <CadastroCard titulo="Cadastre-se">
                    <form className={styles.form}>
                        <label>Nome</label>
                        <Input type="string" placeholder="Digite seu nome" />
                        <label>CPF</label>
                        <Input type="number" placeholder="Enter a value" />
                        <label>Email</label>
                        <Input type="string" placeholder="Enter an email" />
                        <label>Password</label>

                        <Input
                            type={passwordVisible ? 'text' : 'password'}
                            placeholder="Enter your password"
                        />

                        <button
                            type="button"
                            onClick={() => setPasswordVisible(!passwordVisible)}
                        >
                            {passwordVisible ? 'Ocultar Senha' : 'Mostrar Senha'}
                        </button>

                            <label>Data de nascimento</label>
                        <form className={styles.form2}>                            
                            <input   
                                style={{padding: '20px' }}                         
                                type="number"
                                placeholder="Dia"                                                        
                            />                          
                            <input
                            style={{padding: '20px' }}
                                type="text"
                                placeholder="Mês"                                                           
                            />                            
                            <input
                            style={{padding: '20px' }}
                                type="number"
                                placeholder="Ano"                                       
                            />
                        </form>

                        <Link href="/tela_principal">
                            <Button>Entrar</Button>
                        </Link>


                        <div className={styles.cadastrado}>
                        <Link href="/login">
                            Já possui uma conta?
                        </Link> 
                        </div>
                    </form>
                    
                </CadastroCard>
            </div>
        </div>
    )
}

