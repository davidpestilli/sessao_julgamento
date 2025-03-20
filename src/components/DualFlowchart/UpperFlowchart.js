import React, { useRef, useEffect, useState } from 'react';
import * as go from 'gojs';
import flowchartData from '../../data/flowchartData';
import { updateUpperNodeColors } from './UpperNodeSelectionHandler';
import { createUpperNodeTemplate } from './UpperNodeTemplate';
import NodeModal from './NodeModal';
import DocumentLinkIcon from './DocumentLinkIcon'; // Certifique-se de ajustar o caminho se necessário
import LeftSideIcon from './LeftSideIcon'; // ícones específicos para o lado esquerdo
import DevContactModal from './DevContactModal'; // Importa o modal de contato

const UpperFlowchart = ({ onNodeSelect, selectedUpperNode, setSelectedUpperNode, isUpperModalOpen, setIsUpperModalOpen }) => {
  const diagramRef = useRef(null);
  const diagramInstance = useRef(null);
  const [buttonKey, setButtonKey] = useState(0);
  const [isDevModalOpen, setIsDevModalOpen] = useState(false); // Estado para o modal de contato

  // Funções para abrir os links dos documentos
  const handleIconClick1 = () => {
    window.open('https://tjsp.sharepoint.com/:w:/t/GRP_SJ7/ERoeGBUBLYVJhOoqZJG1uxUB1FuYPOyu0wrJ5iBy4OSk5A?e=hrQJrl', '_blank');
  };

  const handleIconClick2 = () => {
    window.open('https://tjsp.sharepoint.com/:w:/t/GRP_SJ7/EQmHU5MtFetLlVofgrUXWsIBXFglhJvBaL70IJoFNcviJQ?e=Qf0CWm', '_blank');
  };

  const handleIconClick3 = () => {
    window.open('https://tjsp.sharepoint.com/:w:/t/GRP_SJ7/EfwfzX7OlNRPhMx7YVlbl38BTl-gxVgZ4JfcQ-xwMJAeLg?e=Li2Guu', '_blank');
  };

  const handleIconClick4 = () => {
    window.open('https://tjsp.sharepoint.com/:w:/t/GRP_SJ7/EXMVTQsLA-5Oh9VjMFbDJJABQNGpRYqXmlCcnpDkxYtSLA?e=aELSeD', '_blank');
  };

  // Funções para os ícones específicos do container esquerdo
  const handleCompanionApp = () => {
    window.open('https://davidpestilli.github.io/teste_gabs/', '_blank');
  };

  const handleBugReport = () => {
    window.open('https://tjsp.sharepoint.com/:l:/t/GRP_SJ7/FC6N8h1VeMlPonRfSeKstQIBXg7IBR0NmDfXZjKpqzQXgg?nav=OGUxZWZhOTMtZTI4MS00NTYzLWE3NzEtNzE3OWMxNWE3MjI0', '_blank');
  };

  // Alteração: em vez de abrir um link, abre o modal de contato
  const handleContactDevelopers = () => { setIsDevModalOpen(true); };

  const handleChatGPT1 = () => {
    window.open('https://chatgpt.com/g/g-67d027ddf5488191a1c7207dd4a7d2a8-guia-eproc-tribunais', '_blank');
  };

  const handleChatGPT2 = () => {
    window.open('https://chatgpt.com/g/g-677bcc1e5d5c819196bed92c853f2837-guia-eproc-sao-paulo', '_blank');
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

      {/* Container para os ícones à esquerda */}
      <div className="icon-container-left">
        <LeftSideIcon iconType="companion" docName="Gerenciador de Testes" onClick={handleCompanionApp} />
        <LeftSideIcon iconType="bug" docName="Relatar Bugs" onClick={handleBugReport} />
        <LeftSideIcon iconType="contact" docName="Contato" onClick={handleContactDevelopers} />
        <LeftSideIcon iconType="chatgpt" docName="ChatGPT SP" onClick={handleChatGPT1} />
        <LeftSideIcon iconType="chatgpt" docName="ChatGPT Tribunais" onClick={handleChatGPT2} />
      </div>

    {/* Container para os 4 ícones, posicionados no canto direito e centralizados verticalmente */}
    <div className="icon-container">
      <DocumentLinkIcon docName="Basico 2G - Aula 22 - SC - Sessão de Julgamento - Secretaria" onClick={handleIconClick1} />
      <DocumentLinkIcon docName="Basico 2G - Aula 23 -  SC - Sessão de Julgamento documento - Gabinete" onClick={handleIconClick2} />
      <DocumentLinkIcon docName="Sexta Aula - Sessão de Julgamento - SP - JEC/Col. Recursal" onClick={handleIconClick3} />
      <DocumentLinkIcon docName="Sessao_Julgamento - Teams - dia 14.03.25 SP/SC" onClick={handleIconClick4} />
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

            {/* Modal de Contato com os Desenvolvedores */}
            <DevContactModal isOpen={isDevModalOpen} onClose={() => setIsDevModalOpen(false)} />
    </div>
  );
};

export default UpperFlowchart;
