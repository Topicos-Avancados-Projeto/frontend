import React, { useState } from 'react';
import LoginCard from "./components/LoginCard"
import styles from '@/styles/Login.module.css'
import Input from "./components/input"
import Button from "./components/button"
import NavbarLogin from "./components/NavbarLogin"
import router from 'next/router';

  export default function Login(){
   const [passwordVisible, setPasswordVisible] = useState(false);
   const [cpf, setCpf] = useState(''); 
   const [password, setSenha] = useState('');

   const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3003/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            cpf,
            password
          })
        });
        if (response.ok) {
          const auth = response.headers.get("Authorization").toString();
          localStorage.setItem('Authorization', auth);
          console.log('Login realizado com sucesso!');
          router.push('/tela_principal')
        } else {
          console.error('Erro ao fazer a solicitação HTTP.');
        }
     } catch (error) {
       console.error('Erro ao fazer a solicitação HTTP:', error);
     }
   };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    fetchData(); 
  };
   
   return(
      <div className={styles.styles}>
         <NavbarLogin/>
      <div className={styles.background}>
      <div className= "background-image"></div>
         <LoginCard titulo="Login">
            <form className={styles.form} onSubmit={handleSubmit}>
               <label>CPF</label>
               <Input id="cpf" type="text" placeholder="Enter a value" onChange={(e) => setCpf(e.target.value)}/>
               <label>Password</label>
               
                  <Input
                  id="senha"
                  type={passwordVisible ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setSenha(e.target.value)}
                   />
  
                  <button
                   type="button"
                   onClick={() => setPasswordVisible(!passwordVisible)}
                   >
                   {passwordVisible ? 'Ocultar Senha' : 'Mostrar Senha'}
                   </button>
                     <Button id='submitBt' type="submit">Entrar</Button>
            </form>
           </LoginCard>
      </div>
   </div>
   )
  }

