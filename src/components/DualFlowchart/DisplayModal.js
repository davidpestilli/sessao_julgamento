import React from 'react';
import { marked } from 'marked';
import './NodeModal.css';

const DisplayModal = ({ isOpen, onClose, title, content }) => {
    if (!isOpen) return null;

    // Converter Markdown para HTML
    const formattedContent = marked(content || "");

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>×</button>
                <h2 className="modal-title">{title}</h2>
                <div className="modal-text" dangerouslySetInnerHTML={{ __html: formattedContent }}></div>
            </div>
        </div>
    );
};

export default DisplayModal;
