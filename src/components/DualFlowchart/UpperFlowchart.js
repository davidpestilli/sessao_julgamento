import React, { useRef, useEffect, useState } from 'react';
import * as go from 'gojs';
import flowchartData from '../../data/flowchartData';
import { updateUpperNodeColors } from './UpperNodeSelectionHandler';
import { createUpperNodeTemplate } from './UpperNodeTemplate';
import NodeModal from './NodeModal';
import DocumentLinkIcon from './DocumentLinkIcon'; // Certifique-se de ajustar o caminho se necessário

const UpperFlowchart = ({ onNodeSelect, selectedUpperNode, setSelectedUpperNode, isUpperModalOpen, setIsUpperModalOpen }) => {
  const diagramRef = useRef(null);
  const diagramInstance = useRef(null);
  const [buttonKey, setButtonKey] = useState(0);

  // Funções para abrir os links dos documentos
  const handleIconClick1 = () => {
    window.open('https://link1.com', '_blank');
  };

  const handleIconClick2 = () => {
    window.open('https://link2.com', '_blank');
  };

  const handleIconClick3 = () => {
    window.open('https://link3.com', '_blank');
  };

  const handleIconClick4 = () => {
    window.open('https://link4.com', '_blank');
  };

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
    {/* Título da upper flowchart */}
    <div className="upper-chart-title">Fluxo Geral da Sessão de Julgamento</div>
    
    {/* Diagrama do fluxograma */}
    <div className="flowchart-diagram" ref={diagramRef}></div>

    {/* Container para os 4 ícones, posicionados no canto direito e centralizados verticalmente */}
    <div className="icon-container">
      <DocumentLinkIcon docName="Basico 2G - Aula 22 - Sessão de Julgamento - Secretaria" onClick={handleIconClick1} />
      <DocumentLinkIcon docName="Basico 2G - Aula 23 -  Sessão de Julgamento documento - Gabinete" onClick={handleIconClick2} />
      <DocumentLinkIcon docName="Dia 06 - Sessão de Julgamento" onClick={handleIconClick3} />
      <DocumentLinkIcon docName="Sessao_Julgamento dia 14.03.25" onClick={handleIconClick4} />
    </div>

    {selectedUpperNode && (
      <button key={buttonKey} className="content-button" onClick={handleButtonClick}>
        Conteúdo
      </button>
    )}

      <NodeModal
        isOpen={isUpperModalOpen}
        onClose={() => setIsUpperModalOpen(false)}
        onModalClose={() => setSelectedUpperNode(null)}
        content={selectedUpperNode ? selectedUpperNode.text : "Nenhum nó selecionado"}
        description={selectedUpperNode ? selectedUpperNode.description : "Sem detalhes disponíveis."}
        nodeKey={selectedUpperNode ? selectedUpperNode.key : null}
        isUpperChart={true}
      />
    </div>
  );
};

export default UpperFlowchart;
