import React from 'react';
import './DocumentLinkIcon.css';

const DocumentLinkIcon = ({ docName, onClick }) => {
  return (
    <div className="document-icon" data-title={docName} onClick={onClick}>
      <svg width="24" height="24" viewBox="0 0 24 24">
        {/* Ícone de documento com canto dobrado, estilo line art */}
        <path 
          d="M6 2h9l5 5v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" 
          fill="none" 
          stroke="#6C5CE7" 
          strokeWidth="2" 
        />
        <polyline 
          points="15 2 15 7 20 7" 
          fill="none" 
          stroke="#6C5CE7" 
          strokeWidth="2" 
        />
      </svg>
    </div>
  );
};

export default DocumentLinkIcon;
