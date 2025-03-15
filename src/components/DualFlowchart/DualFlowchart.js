// src/components/DualFlowchart/DualFlowchart.js
import React, { useState } from 'react';
import UpperFlowchart from './UpperFlowchart';
import LowerFlowchart from './LowerFlowchart';
import './DualFlowchart.css';

const DualFlowchart = () => {
  const [selectedNode, setSelectedNode] = useState(null);

  return (
    <div className="dual-flowchart-container">
      <div className="upper-flowchart-container">
        <UpperFlowchart onNodeSelect={(nodeData) => setSelectedNode(nodeData)} />
      </div>
      <div className="lower-flowchart-container">
        <LowerFlowchart selectedUpperNodeKey={selectedNode ? selectedNode.key : null} />
      </div>
    </div>
  );
};

export default DualFlowchart;
