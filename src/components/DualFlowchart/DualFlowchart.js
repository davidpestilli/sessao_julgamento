import React, { useState } from 'react';
import UpperFlowchart from './UpperFlowchart';
import LowerFlowchart from './LowerFlowchart';
import './DualFlowchart.css';

const DualFlowchart = () => {
  const [selectedNode, setSelectedNode] = useState(null);
  const [upperFlowchartKey, setUpperFlowchartKey] = useState(0);

  const resetFlowcharts = () => {
    setSelectedNode(null);
    setUpperFlowchartKey(prevKey => prevKey + 1);
  };

  return (
    <div className="dual-flowchart-container">
      <div className="reset-container" onClick={resetFlowcharts}>
        🔄
        <span>Resetar</span>
      </div>
      
      {/* 🔳 Bloqueando os textos de avaliação */}
      <div className="watermark-blocker blocker-top"></div>
      <div className="watermark-blocker blocker-bottom"></div>

      <div className="upper-flowchart-container">
        <UpperFlowchart key={upperFlowchartKey} onNodeSelect={setSelectedNode} />
      </div>
      <div className="lower-flowchart-container">
        <LowerFlowchart key={upperFlowchartKey} selectedUpperNodeKey={selectedNode ? selectedNode.key : null} />
      </div>
    </div>
  );
};

export default DualFlowchart;
