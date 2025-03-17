import React from 'react';
import './NodeModal.css';

const DisplayModal = ({ isOpen, onClose, title, content }) => {
    if (!isOpen) return null;

    // Converter quebras de linha e bullet points em HTML
    const formattedContent = content
        .replace(/\n/g, "<br>") // Mantém quebras de linha
        .replace(/•\s/g, "<li>") // Converte bullet points para <li>
        .replace(/\r/g, ""); // Remove quebras extras

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>×</button>
                <h2 className="modal-title">{title}</h2>
                <p className="modal-text" dangerouslySetInnerHTML={{ __html: formattedContent }}></p>
            </div>
        </div>
    );
};

export default DisplayModal;
