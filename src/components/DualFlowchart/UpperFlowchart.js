import React, { useRef, useEffect, useState } from 'react';
import * as go from 'gojs';
import flowchartData from '../../data/flowchartData';
import { updateUpperNodeColors } from './UpperNodeSelectionHandler';
import { createUpperNodeTemplate } from './UpperNodeTemplate';
import NodeModal from './NodeModal';

const UpperFlowchart = ({ onNodeSelect, selectedUpperNode, setSelectedUpperNode, isUpperModalOpen, setIsUpperModalOpen }) => {
  const diagramRef = useRef(null);
  const diagramInstance = useRef(null);
  const [buttonKey, setButtonKey] = useState(0);

  useEffect(() => {
    if (diagramInstance.current) {
      console.log("⚠️ UpperFlowchart: Diagrama já inicializado.");
      return;
    }

    const $ = go.GraphObject.make;
    const container = diagramRef.current;
    const diagram = $(go.Diagram, container, {
      'undoManager.isEnabled': true,
      layout: $(go.LayeredDigraphLayout, { direction: 0, layerSpacing: 50 }),
      padding: new go.Margin(10, 10, 10, 10),
    });

    diagramInstance.current = diagram;

    // Cria o template do nó com o callback que atualiza a seleção e a cor
    diagram.nodeTemplate = createUpperNodeTemplate((nodeData) => {
      console.log("🔔 Nó da upper chart clicado:", nodeData);
      setSelectedUpperNode(nodeData);
      onNodeSelect(nodeData);
      updateUpperNodeColors(diagram, nodeData.key);
      // Atualiza o buttonKey para forçar a re-montagem do botão e disparar a animação
      setButtonKey(Date.now());
    });

    diagram.model = new go.GraphLinksModel(flowchartData.nodeDataArray, flowchartData.linkDataArray);

    diagram.addDiagramListener("BackgroundSingleClicked", () => {
      setSelectedUpperNode(null);
      updateUpperNodeColors(diagram, null);
    });
  }, [onNodeSelect, setSelectedUpperNode]);

  const handleButtonClick = () => {
    console.log("📌 UpperFlowchart: Botão 'Conteúdo' pressionado.");
    setIsUpperModalOpen(true);
  };

  return (
    <div className="flowchart-container">
      <div className="flowchart-diagram" ref={diagramRef}></div>
      {selectedUpperNode && (
        <button key={buttonKey} className="content-button" onClick={handleButtonClick}>
          Conteúdo
        </button>
      )}
      <NodeModal
        isOpen={isUpperModalOpen}
        onClose={() => setIsUpperModalOpen(false)}
        content={selectedUpperNode ? `Informações sobre o nó: ${selectedUpperNode.text}` : "Nenhum nó selecionado"}
      />
    </div>
  );
};

export default UpperFlowchart;
