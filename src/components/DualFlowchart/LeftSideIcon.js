import React from 'react';
import './LeftSideIcon.css';

const LeftSideIcon = ({ iconType, docName, onClick }) => {
  let svgContent;
  switch(iconType) {
    case 'companion':
      // Ícone para o aplicativo web companion (ex: smartphone)
      svgContent = (
        <svg width="24" height="24" viewBox="0 0 24 24">
          <rect x="6" y="2" width="12" height="20" rx="2" ry="2" fill="none" stroke="#6C5CE7" strokeWidth="2" />
          <circle cx="12" cy="18" r="1" fill="#6C5CE7" />
        </svg>
      );
      break;
    case 'bug':
      // Ícone para relatar bugs (ex: um inseto estilizado)
      svgContent = (
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M12 2v2" fill="none" stroke="#6C5CE7" strokeWidth="2" />
          <path d="M12 20v2" fill="none" stroke="#6C5CE7" strokeWidth="2" />
          <path d="M5 8l2 2" fill="none" stroke="#6C5CE7" strokeWidth="2" />
          <path d="M17 8l-2 2" fill="none" stroke="#6C5CE7" strokeWidth="2" />
          <circle cx="12" cy="12" r="4" fill="none" stroke="#6C5CE7" strokeWidth="2" />
        </svg>
      );
      break;
    case 'contact':
      // Ícone para contato (ex: envelope)
      svgContent = (
        <svg width="24" height="24" viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="16" rx="2" ry="2" fill="none" stroke="#6C5CE7" strokeWidth="2" />
          <polyline points="3,4 12,13 21,4" fill="none" stroke="#6C5CE7" strokeWidth="2" />
        </svg>
      );
      break;
    case 'chatgpt':
      // Ícone para o ChatGPT (ex: balão de diálogo)
      svgContent = (
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M4 4h16v12H5.17L4 17.17V4z" fill="none" stroke="#6C5CE7" strokeWidth="2" />
        </svg>
      );
      break;
    default:
      // Ícone padrão (caso nenhum tipo seja definido)
      svgContent = (
        <svg width="24" height="24" viewBox="0 0 24 24">
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
      );
      break;
  }

  return (
    <div className="left-side-icon" data-title={docName} onClick={onClick}>
      {svgContent}
    </div>
  );
};

export default LeftSideIcon;
