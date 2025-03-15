// src/components/DualFlowchart/LowerFlowchart.js
import React, { useRef, useEffect, useState } from 'react';
import * as go from 'gojs';
import subFlowchartData from '../../data/subFlowchartData';
import { createSubNodeTemplate } from './SubNodeTemplate';
import { updateSubNodeColors } from './SubNodeSelectionHandler';

const LowerFlowchart = ({ selectedUpperNodeKey }) => {
  const diagramRef = useRef(null);
  const diagramInstance = useRef(null);
  const [selectedNode, setSelectedNode] = useState(null);

  useEffect(() => {
    const $ = go.GraphObject.make;
    const container = diagramRef.current;
    if (diagramInstance.current) {
      diagramInstance.current.div = null;
    }
    const diagram = $(go.Diagram, container, {
      'undoManager.isEnabled': true,
      layout: $(go.LayeredDigraphLayout, { direction: 0, layerSpacing: 50 }),
      padding: new go.Margin(10, 10, 10, 10),
    });
    diagramInstance.current = diagram;
    diagram.nodeTemplate = createSubNodeTemplate(setSelectedNode);

    // Carrega os dados do subfluxo a partir da chave do nó selecionado
    const data = selectedUpperNodeKey && subFlowchartData[selectedUpperNodeKey];
    if (data) {
      diagram.model = new go.GraphLinksModel(
        data.nodeDataArray,
        data.linkDataArray
      );
    } else {
      diagram.model = new go.GraphLinksModel([], []);
    }

    diagram.addDiagramListener("BackgroundSingleClicked", () => {
      setSelectedNode(null);
    });

    return () => {
      diagram.div = null;
    };
  }, [selectedUpperNodeKey]);

  useEffect(() => {
    if (diagramInstance.current) {
      updateSubNodeColors(diagramInstance.current, selectedNode ? selectedNode.key : null);
    }
  }, [selectedNode]);

  return (
    <div className="flowchart-diagram" ref={diagramRef}></div>
  );
};

export default LowerFlowchart;
