import React, { useState } from 'react';
import LoginCard from "./components/LoginCard"
import styles from '@/styles/Login.module.css'
import Input from "./components/input"
import Button from "./components/button"
import NavbarLogin from "./components/NavbarLogin"
import Link from 'next/link';


  export default function Login(){
   const [passwordVisible, setPasswordVisible] = useState(false);

   const login = async () => {
       try {
         const data = await api.patch('/login', { email: '', senha: '' });
         localStorage.setItem('token', JSON.stringify(data));

         const response = await axios.post('/login', {
            cpf: '123.090.678-23', 
            senha: 'Senha1*', 
          });

          const { authorization } = response.headers;

          localStorage.setItem('token', authorization);

          window.location.href = '/tela_principal';

      } catch (error) {
         console.error("Erro ao fazer login:", error);
      }
   };
   
   return(
      <div className={styles.styles}>
         <NavbarLogin/>
      <div className={styles.background}>
      <div className= "background-image"></div>
         <LoginCard titulo="Login">
            <form className={styles.form}>
               <label>CPF</label>
               <Input type="number" placeholder="Enter a value"/>
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
                   <Link href="/tela_principal"> 
                     <Button>Entrar</Button>
                   </Link>
            </form>
           </LoginCard>
      </div>
   </div>
   )
  }

