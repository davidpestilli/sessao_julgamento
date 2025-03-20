import React from 'react';
import './DevContactModal.css';

const DevContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h2 className="modal-title">Contato com os Desenvolvedores</h2>
        <div className="modal-text">
          <p><strong>Dev 1:</strong> Marcio do Nascimento</p>
          <p><strong>Email:</strong> marcionascimento@tjsp.jus.br</p>
          <p><strong>Dev 2:</strong> Sandra Cristina Pamio Lopes</p>
          <p><strong>Email:</strong> sandrapamio@tjsp.jus.br</p>
          <p><strong>Dev 3:</strong> David de Souza Dichirico Pestilli</p>
          <p><strong>Email:</strong> dpestilli@tjsp.jus.br</p>
        </div>
      </div>
    </div>
  );
};

export default DevContactModal;
