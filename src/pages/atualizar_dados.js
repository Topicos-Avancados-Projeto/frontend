import Head from "next/head";
import NavbarPrincipal from "./components/NavbarPrincipal";
import Modal from "@/pages/components/Modal";
import { useState } from "react";
import Link from "next/link";

export default function tela_principal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
              <input type="text" id="nome" style={{ width: 370 }} />
            </div>
            <div style={{ margin: "30px 0" }}>
              <label htmlFor="sobrenome" id="label">
                Sobrenome
              </label>
              <input type="text" id="sobrenome" style={{ width: 300 }} />
            </div>
            <div style={{ margin: "30px 0" }}>
              <label htmlFor="cpf" id="label">
                CPF
              </label>
              <input type="number" id="cpf" style={{ width: 300 }} />
            </div>
            <div style={{ margin: "30px 0" }}>
              <label htmlFor="endereco" id="label">
                Endereço
              </label>
              <input type="text" id="endereco" style={{ width: 300 }} />
            </div>
            <div style={{ margin: "30px 0" }}>
              <label htmlFor="email" id="label">
                Email
              </label>
              <input type="text" id="email" style={{ width: 300 }} />
            </div>
            <div style={{ margin: "20px 0" }}>
              <label htmlFor="celular" id="label">
                Celular
              </label>
              <input type="number" id="celular" style={{ width: 150 }} />
            </div>
            <div style={{ margin: "20px 0" }}>
              <label id="label">Data de nascimento</label>
              <div className="form2">
                <input
                  style={{ padding: "1px" }}
                  type="number"
                  placeholder="Dia"
                />
                <input
                  style={{ padding: "1px" }}
                  type="text"
                  placeholder="Mês"
                />
                <input
                  style={{ padding: "1px" }}
                  type="number"
                  placeholder="Ano"
                />
              </div>
            </div>
            <div style={{ margin: "30px 0" }}>
              <label htmlFor="login" id="label">
                Login
              </label>
              <input type="text" id="login" style={{ width: 300 }} />
            </div>
            <div style={{ margin: "10px 0" }}>
              <label htmlFor="senha" id="label">
                Senha
              </label>
              <input type="text" id="senha" style={{ width: 150 }} />
            </div>
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <Link href="/tela_principal">
                <button type="submit" id="botao" style={{ margin: "15px" }}>
                  Cancelar
                </button>
              </Link>
              <Link href="/tela_principal">
                <button type="submit" id="botao" style={{ margin: "15px" }}>
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
