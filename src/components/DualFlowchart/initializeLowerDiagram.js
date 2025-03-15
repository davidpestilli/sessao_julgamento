import * as go from 'gojs';
import { createSubNodeTemplate } from './SubNodeTemplate';
import { updateSubNodeColors } from './SubNodeSelectionHandler';

export function initializeLowerDiagram(diagramRef, setSelectedNode) {
  console.log("🎨 Criando o diagrama LowerFlowchart...");

  const $ = go.GraphObject.make;
  const container = diagramRef.current;

  const diagram = $(go.Diagram, container, {
    'undoManager.isEnabled': true,
    layout: $(go.LayeredDigraphLayout, { direction: 0, layerSpacing: 50 }),
    padding: new go.Margin(10, 10, 10, 10),
  });

  diagram.model = new go.GraphLinksModel();
  diagram.model.linkKeyProperty = "key";

  diagram.nodeTemplate = createSubNodeTemplate(setSelectedNode);

  console.log("✅ Diagrama LowerFlowchart criado com sucesso!");

  // 🔥 Garante que ao clicar fora, os nós voltam ao roxo
  diagram.addDiagramListener("BackgroundSingleClicked", () => {
    console.log("🖱️ Clique no fundo do LowerFlowchart → Resetando cores.");
    setSelectedNode(null);
    updateSubNodeColors(diagram, null);
  });

  return diagram;
}
