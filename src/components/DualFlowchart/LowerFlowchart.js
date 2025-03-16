import React, { useRef, useEffect, useState } from 'react';
import subFlowchartData from '../../data/subFlowchartData';
import { initializeLowerDiagram } from './initializeLowerDiagram';
import { updateLowerDiagramData } from './updateLowerDiagramData';
import NodeModal from './NodeModal';

const LowerFlowchart = ({ selectedUpperNodeKey }) => {
  const diagramRef = useRef(null);
  const diagramInstance = useRef(null);
  const [selectedNode, setSelectedNode] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [buttonKey, setButtonKey] = useState(0); // para acionar a animação

  console.log("🔄 LowerFlowchart renderizou! Nó selecionado (upper):", selectedUpperNodeKey);

  useEffect(() => {
    if (diagramInstance.current) {
      console.log("⚠️ LowerFlowchart: Diagrama já inicializado.");
      return;
    }

    // Inicializa o diagrama da lower chart
    diagramInstance.current = initializeLowerDiagram(diagramRef, (nodeData) => {
      console.log("🔔 Nó da lower chart clicado:", nodeData);
      setSelectedNode(nodeData);
      // Atualiza o key para acionar a animação do botão
      setButtonKey(Date.now());
    });
  }, []);

  useEffect(() => {
    if (!diagramInstance.current) {
      console.log("⚠️ LowerFlowchart: Tentativa de atualização antes da inicialização.");
      return;
    }

    console.log("🔍 Buscando dados para a chave selecionada:", selectedUpperNodeKey);

    if (!selectedUpperNodeKey) {
      console.log("⚠️ Nenhuma chave selecionada. O diagrama será limpo.");
      updateLowerDiagramData(diagramInstance.current, { nodeDataArray: [], linkDataArray: [] });
      // Não alteramos selectedNode aqui
      return;
    }

    const data = subFlowchartData[selectedUpperNodeKey];

    if (!data) {
      console.log(`🚨 ERRO: Nenhum dado encontrado para a chave '${selectedUpperNodeKey}'. Verifique 'subFlowchartData.js'.`);
      return;
    }

    console.log("✅ Dados encontrados para o nó selecionado:", data);
    updateLowerDiagramData(diagramInstance.current, data);
    // NÃO seleciona automaticamente nenhum nó – espera a ação do usuário.
  }, [selectedUpperNodeKey]);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="flowchart-container">
      <div className="flowchart-diagram" ref={diagramRef}></div>
      {selectedNode && (
        // Usamos a propriedade key para forçar uma re-montagem e disparar a animação
        <button key={buttonKey} className="content-button" onClick={handleButtonClick}>
          Conteúdo
        </button>
      )}
      <NodeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        content={selectedNode ? `Informações sobre o nó: ${selectedNode.text}` : "Nenhum nó selecionado"}
      />
    </div>
  );
};

export default LowerFlowchart;
