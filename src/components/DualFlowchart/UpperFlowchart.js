// src/components/DualFlowchart/UpperFlowchart.js
import React, { useRef, useEffect } from 'react';
import * as go from 'gojs';
import flowchartData from '../../data/flowchartData';
import { updateUpperNodeColors } from './UpperNodeSelectionHandler';
import { createUpperNodeTemplate } from './UpperNodeTemplate';

const UpperFlowchart = ({ onNodeSelect }) => {
  const diagramRef = useRef(null);
  const diagramInstance = useRef(null);
  const selectedNodeRef = useRef(null); // 🔥 Evita re-renderizações

  useEffect(() => {
    if (diagramInstance.current) {
      console.log("⚠️ Diagrama UpperFlowchart já inicializado, evitando recriação!");
      return;
    }

    console.log("🎨 Criando o diagrama UpperFlowchart...");

    const $ = go.GraphObject.make;
    const container = diagramRef.current;

    const diagram = $(go.Diagram, container, {
      'undoManager.isEnabled': true,
      layout: $(go.LayeredDigraphLayout, { direction: 0, layerSpacing: 50 }),
      padding: new go.Margin(10, 10, 10, 10),
    });

    diagramInstance.current = diagram;

    diagram.nodeTemplate = createUpperNodeTemplate((nodeData) => {
      if (onNodeSelect) {
        if (selectedNodeRef.current === nodeData.key) {
          onNodeSelect(null);
          updateUpperNodeColors(diagramInstance.current, null);
          selectedNodeRef.current = null;
        } else {
          onNodeSelect(nodeData);
          updateUpperNodeColors(diagramInstance.current, nodeData.key);
          selectedNodeRef.current = nodeData.key;
        }
      }
    });

    diagram.model = new go.GraphLinksModel(flowchartData.nodeDataArray, flowchartData.linkDataArray);

    console.log("✅ Diagrama UpperFlowchart criado!");

    diagram.addDiagramListener("BackgroundSingleClicked", () => {
      selectedNodeRef.current = null;
      updateUpperNodeColors(diagramInstance.current, null);
    });

  }, []);

  return <div className="flowchart-diagram" ref={diagramRef}></div>;
};

export default UpperFlowchart;
