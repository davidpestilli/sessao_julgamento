import * as go from 'gojs';
import { updateSubNodeColors } from './SubNodeSelectionHandler';

export function updateLowerDiagramData(diagram, data) {
  if (!diagram) return;

  console.log("🔁 Atualizando LowerFlowchart...");
  console.log("📊 Dados recebidos para atualização:", data);

  if (diagram.isTransactionInProgress) {
    console.warn("⚠️ Uma transação ainda ativa! Cancelando antes de atualizar...");
    diagram.rollbackTransaction();
  }

  if (!data || !data.nodeDataArray || data.nodeDataArray.length === 0) {
    console.log("⚠️ Nenhum nó disponível. Limpando o diagrama.");
    diagram.clear();
    return;
  }

  const updateModel = () => {
    if (diagram.isTransactionInProgress) {
      console.warn("⚠️ Transação ainda ativa! Agendando nova tentativa...");
      setTimeout(updateModel, 50);
      return;
    }
    console.log("🛠️ Resetando e atualizando o modelo do diagrama...");
    diagram.model = new go.GraphLinksModel(data.nodeDataArray, data.linkDataArray);
    updateSubNodeColors(diagram, null);
    console.log("✅ LowerFlowchart atualizado com sucesso!");
  };

  setTimeout(updateModel, 50);
}
