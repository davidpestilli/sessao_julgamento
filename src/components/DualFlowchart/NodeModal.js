import React from 'react';
import './NodeModal.css';

const NodeModal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>Detalhes do Nó</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default NodeModal;
