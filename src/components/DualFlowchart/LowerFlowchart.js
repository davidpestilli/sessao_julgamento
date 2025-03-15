import React, { useRef, useEffect } from 'react';
import subFlowchartData from '../../data/subFlowchartData';
import { initializeLowerDiagram } from './initializeLowerDiagram';
import { updateLowerDiagramData } from './updateLowerDiagramData';

const LowerFlowchart = ({ selectedUpperNodeKey }) => {
  const diagramRef = useRef(null);
  const diagramInstance = useRef(null);
  const selectedNodeRef = useRef(null);

  console.log("🔄 LowerFlowchart renderizou! Nó selecionado no UpperFlowchart:", selectedUpperNodeKey);

  useEffect(() => {
    if (diagramInstance.current) {
      console.log("⚠️ Diagrama LowerFlowchart já inicializado, evitando recriação!");
      return;
    }

    diagramInstance.current = initializeLowerDiagram(diagramRef, (node) => {
      selectedNodeRef.current = node;
    });
  }, []);

  useEffect(() => {
    if (!diagramInstance.current) {
      console.log("⚠️ LowerFlowchart: Tentativa de atualização antes da inicialização.");
      return;
    }

    console.log("🔁 Atualizando LowerFlowchart com o nó selecionado:", selectedUpperNodeKey);

    const data = selectedUpperNodeKey ? subFlowchartData[selectedUpperNodeKey] : null;

    if (!data) {
      console.log("⚠️ LowerFlowchart: Nenhum dado encontrado para a chave selecionada.");
      return;
    }

    updateLowerDiagramData(diagramInstance.current, data, selectedNodeRef.current);
  }, [selectedUpperNodeKey]);

  return <div className="flowchart-diagram" ref={diagramRef}></div>;
};

export default LowerFlowchart;
