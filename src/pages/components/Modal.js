import { useState } from 'react';
import styles from '../../styles/Modal.module.css';
import Link from 'next/link';

const Modal = ({ isOpen, onClose }) => {
  const handleSair = () => {
    window.location.href = "/";
  };

  const handleVoltar = () => {
    window.location.href = "/tela_principal";
  };

  if (!isOpen) return null; 

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2>Deseja sair do sistema?</h2>
        <button className={styles.butt} onClick={handleSair}>
          Sair
        </button>
        <button className={styles.butt} onClick={handleVoltar}>
          <Link href="/tela_principal">Voltar</Link>
        </button>
      </div>
    </div>
  );
};

export default Modal;



