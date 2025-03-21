import React from 'react';
import './LeftSideIcon.css';

const LeftSideIcon = ({ iconType, docName, onClick }) => {
  let svgContent;
  switch(iconType) {
    case 'companion':
      // Ícone para o App Companion (exemplo: smartphone estilizado)
      svgContent = (
        <svg width="32" height="32" viewBox="0 0 24 24">
          <rect x="5" y="1" width="14" height="22" rx="2" ry="2" fill="none" stroke="#6C5CE7" strokeWidth="2.5" />
          <circle cx="12" cy="20" r="1.5" fill="#6C5CE7" />
        </svg>
      );
      break;
    case 'bug':
      // Ícone para relatar bugs (um inseto estilizado)
      svgContent = (
        <svg width="32" height="32" viewBox="0 0 24 24">
          <path d="M12 2v2" fill="none" stroke="#6C5CE7" strokeWidth="2.5" />
          <path d="M12 20v2" fill="none" stroke="#6C5CE7" strokeWidth="2.5" />
          <path d="M5 8l2 2" fill="none" stroke="#6C5CE7" strokeWidth="2.5" />
          <path d="M17 8l-2 2" fill="none" stroke="#6C5CE7" strokeWidth="2.5" />
          <circle cx="12" cy="12" r="4" fill="none" stroke="#6C5CE7" strokeWidth="2.5" />
        </svg>
      );
      break;
    case 'contact':
      // Ícone para contato (envelope moderno)
      svgContent = (
        <svg width="32" height="32" viewBox="0 0 24 24">
          <rect x="2" y="4" width="20" height="16" rx="2" ry="2" fill="none" stroke="#6C5CE7" strokeWidth="2.5" />
          <polyline points="2,4 12,13 22,4" fill="none" stroke="#6C5CE7" strokeWidth="2.5" />
        </svg>
      );
      break;
    case 'chatgpt':
      // Ícone para ChatGPT (balão de diálogo)
      svgContent = (
        <svg width="32" height="32" viewBox="0 0 24 24">
          <path d="M3 3h18v12H5.17L3 17.17V3z" fill="none" stroke="#6C5CE7" strokeWidth="2.5" />
        </svg>
      );
      break;
    default:
      // Ícone padrão
      svgContent = (
        <svg width="32" height="32" viewBox="0 0 24 24">
          <path 
            d="M6 2h9l5 5v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" 
            fill="none" 
            stroke="#6C5CE7" 
            strokeWidth="2.5" 
          />
          <polyline 
            points="15 2 15 7 20 7" 
            fill="none" 
            stroke="#6C5CE7" 
            strokeWidth="2.5" 
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
