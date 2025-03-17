import * as go from 'gojs';
import { updateSubNodeColors } from './SubNodeSelectionHandler';
import { marked } from 'marked';

export const createSubNodeTemplate = (setSelectedNode) => {
  const $ = go.GraphObject.make;
  return $(go.Node, "Auto",
    {
      selectionAdorned: false,
      shadowOffset: new go.Point(4, 4),
      shadowColor: "rgba(0, 0, 0, 0.15)",
      shadowBlur: 10,
      mouseEnter: (e, node) => {
        node.diagram.startTransaction("hover");
        node.scale = 1.05;
        node.findObject("SHAPE").stroke = "#5D3F6A"; // 🔮 Roxo escuro na borda
        node.diagram.commitTransaction("hover");
      },
      mouseLeave: (e, node) => {
        node.diagram.startTransaction("hover");
        node.scale = 1.0;
        node.findObject("SHAPE").stroke = "#5D3F6A"; // Mantém borda roxo escuro
        node.diagram.commitTransaction("hover");
      },
      click: (e, node) => {
        if (setSelectedNode) {
          setSelectedNode(node.data);
        }
        console.log(`🖱️ Nó clicado na LowerFlowchart: ${node.data.key}`);
        
        // 🔥 Atualiza as cores corretamente ao selecionar um nó
        updateSubNodeColors(node.diagram, node.data.key);
      }
    },
    $(go.Shape, "RoundedRectangle", {
      name: "SHAPE",
      fill: "#9B59B6", // 🟣 Roxo Suave
      stroke: "#5D3F6A", // 🔮 Borda Roxo Escuro
      strokeWidth: 2,
    }),
    $(go.TextBlock, {
      margin: new go.Margin(5,10,5,10),
      font: "14px sans-serif",
      textAlign: "center",
      wrap: go.TextBlock.WrapFit, // 🔥 Habilita a quebra de texto automática
      maxSize: new go.Size(120, NaN), // 🔥 Define uma largura máxima para forçar a quebra
      verticalAlignment: go.Spot.Center,
      alignment: go.Spot.Center,
  },
  new go.Binding("text", "text", (text) => {
      return marked.parse(text).replace(/<\/?[^>]+(>|$)/g, ""); // Remove tags HTML
  }))
    
  );
};
