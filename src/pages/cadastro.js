import React, { useState } from 'react';
import CadastroCard from "./components/CadastroCard"
import styles from '@/styles/Cadastro.module.css'
import Input from "./components/input"
import Button from "./components/CadastroButton"
import NavbarCadastro from "./components/NavbarCadastro"
import Link from 'next/link';
import router from "next/router"

export default function Cadastro() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dia, setDia] = useState('');
    const [mes, setMes] = useState('');
    const [ano, setAno]= useState('');

    const sendRequest = async (url, data) => {
        try {
            const response = await fetch('http://localhost:3003/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                console.log('Operação realizada com sucesso!');
                if (response.ok) {

                    router.push('/login');
                }
            } else {
                console.error('Erro na operação. Verifique os dados e tente novamente.');
            }
        } catch (error) {
            console.error('Erro na operação:', error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const date_of_birth = dia+"/"+mes+"/"+ano;
        const data = {
            name,
            cpf,
            email,
            password,
            date_of_birth
        };
        sendRequest('http://localhost:3003/cadastro', data);
    };

    return (
        <div className={styles.styles}>
            <NavbarCadastro />
            <div className={styles.background}>
                <div className="background-image"></div>
                <CadastroCard titulo="Cadastre-se">
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <label>Nome</label>
                        <Input 
                        id="nameCad"
                        type="text" 
                        placeholder="Digite seu nome" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}/>
                        <label>CPF</label>
                        <Input type="text" 
                        id="cpfCad"
                        placeholder="Enter a value" 
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}/>
                        <label>Email</label>
                        <Input type="email" 
                        id="emailCad"
                        placeholder="Enter an email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                        <label>Password</label>

                        <Input
                        id="passCad"
                            type={passwordVisible ? 'text' : 'password'}
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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
                            id="diaCad"
                                style={{padding: '20px' }}
                                type="number"
                                placeholder="Dia"
                                onChange={(e)=>setDia(e.target.value)}
                            />                          
                            <input
                            style={{padding: '20px' }}
                            id="mesCad"
                                type="text"
                                placeholder="Mês"
                                onChange={(e)=>setMes(e.target.value)}
                            />                            
                            <input
                            style={{padding: '20px' }}
                            id="anoCad"
                                type="number"
                                placeholder="Ano"
                                onChange={(e)=>setAno(e.target.value)}
                            />
                        </form>

                            <Button id="cadastrarBut" type="submit">Cadastrar</Button>


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

