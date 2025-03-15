// src/components/DualFlowchart/SubNodeSelectionHandler.js
export function updateSubNodeColors(diagram, selectedKey) {
  const defaultColor = "#9B59B6"; // 🟣 Roxo para os nós padrão
  const gray = "#BDC3C7"; // 🔘 Cinza para os não selecionados

  console.log(`🎨 Atualizando cores na LowerFlowchart: Nó selecionado -> ${selectedKey}`);

  diagram.startTransaction("updateColors");
  diagram.nodes.each(node => {
    const shape = node.findObject("SHAPE");
    if (shape) {
      shape.fill = selectedKey && node.data.key !== selectedKey ? gray : defaultColor;
    }
  });
  diagram.commitTransaction("updateColors");
}
