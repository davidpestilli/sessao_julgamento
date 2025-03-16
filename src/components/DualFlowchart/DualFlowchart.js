import React, { useState } from 'react';
import UpperFlowchart from './UpperFlowchart';
import LowerFlowchart from './LowerFlowchart';
import './DualFlowchart.css';

const DualFlowchart = () => {
  const [selectedUpperNode, setSelectedUpperNode] = useState(null);
  const [isUpperModalOpen, setIsUpperModalOpen] = useState(false);
  const [resetKey, setResetKey] = useState(0); // Para forçar re-render

  const resetFlowcharts = () => {
    console.log("🔄 Resetando fluxogramas...");
    setSelectedUpperNode(null);
    setIsUpperModalOpen(false);
    setResetKey(Date.now()); // Gera uma nova chave para recriar os componentes
  };

  return (
    <div className="dual-flowchart-container">
      {/* Botão Reset com alto z-index */}
      <div className="reset-container" onClick={resetFlowcharts}>
        🔄
        <span>Resetar</span>
      </div>

      {/* Watermark blockers para cobrir mensagens do GoJS */}
      <div className="watermark-blocker blocker-top"></div>
      <div className="watermark-blocker blocker-bottom"></div>

      {/* Upper e Lower Charts - Agora com a chave para re-renderizar */}
      <div className="upper-flowchart-container">
        <UpperFlowchart
          key={resetKey} // 🚀 Força a recriação do UpperFlowchart
          onNodeSelect={(node) => {
            console.log("Upper node selected:", node);
            setSelectedUpperNode(node);
          }}
          selectedUpperNode={selectedUpperNode}
          setSelectedUpperNode={setSelectedUpperNode}
          isUpperModalOpen={isUpperModalOpen}
          setIsUpperModalOpen={setIsUpperModalOpen}
        />
      </div>
      <div className="lower-flowchart-container">
        <LowerFlowchart key={resetKey} selectedUpperNodeKey={selectedUpperNode ? selectedUpperNode.key : null} />
      </div>
    </div>
  );
};

export default DualFlowchart;
