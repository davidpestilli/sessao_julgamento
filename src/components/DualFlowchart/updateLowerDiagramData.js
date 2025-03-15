import * as go from 'gojs';
import { updateSubNodeColors } from './SubNodeSelectionHandler';

/**
 * Atualiza os dados do LowerFlowchart sem recriar o diagrama.
 * @param {go.Diagram} diagram - Instância do diagrama GoJS.
 * @param {Object} data - Dados do fluxo a serem atualizados.
 * @param {Object} selectedNode - Nó atualmente selecionado.
 */
export function updateLowerDiagramData(diagram, data, selectedNode) {
  if (!diagram) return;

  console.log("🔁 Atualizando LowerFlowchart...");

  setTimeout(() => {
    diagram.startTransaction("updateModel");

    diagram.model.mergeNodeDataArray(data ? data.nodeDataArray : []);

    if (data && data.linkDataArray) {
      const updatedLinks = data.linkDataArray.map((link, index) => ({
        ...link,
        key: link.key || `link-${index}-${link.from}-${link.to}`,
      }));
      diagram.model.mergeLinkDataArray(updatedLinks);
    }

    diagram.commitTransaction("updateModel");

    console.log("✅ LowerFlowchart atualizado com sucesso!");

    // 🔥 Garante que ao trocar de fluxo, todos os nós começam verdes
    updateSubNodeColors(diagram, null);
  }, 0);
}
