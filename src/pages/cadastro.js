import React, { useState } from 'react';
import CadastroCard from "./components/CadastroCard"
import styles from '@/styles/Cadastro.module.css'
import Input from "./components/input"
import Button from "./components/CadastroButton"
import NavbarCadastro from "./components/NavbarCadastro"
import Link from 'next/link';


export default function Cadastro() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const cadastrar = async () => {
        try {
            const response = await fetch('http://localhost:3003', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nome,
                    cpf,
                    email,
                    senha,
                }),
            });

            if (response.ok) {
                console.log('Cadastro realizado com sucesso!');
            } else {
                console.error('Erro ao cadastrar. Verifique os dados e tente novamente.');
            }
        } catch (error) {
            console.error('Erro ao realizar o cadastro:', error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        cadastrar(); 
    };

    return (
        <div className={styles.styles}>
            <NavbarCadastro />
            <div className={styles.background}>
                <div className="background-image"></div>
                <CadastroCard titulo="Cadastre-se">
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <label>Nome</label>
                        <Input type="string" 
                        placeholder="Digite seu nome" 
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}/>
                        <label>CPF</label>
                        <Input type="number" 
                        placeholder="Enter a value" 
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}/>
                        <label>Email</label>
                        <Input type="string" 
                        placeholder="Enter an email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                        <label>Password</label>

                        <Input
                            type={passwordVisible ? 'text' : 'password'}
                            placeholder="Enter your password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
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
                            <Button type="submit">Entrar</Button>
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

