// src/components/DualFlowchart/UpperNodeSelectionHandler.js
export function updateUpperNodeColors(diagram, selectedKey) {
    const defaultColor = "#70A1FF"; // 🔵 Azul claro para os nós padrão
    const gray = "#BDC3C7"; // 🔘 Cinza para os não selecionados

    console.log(`🎨 Atualizando cores do UpperFlowchart: Nó selecionado -> ${selectedKey}`);

    diagram.startTransaction("updateColors");
    diagram.nodes.each(node => {
      const shape = node.findObject("SHAPE");
      if (shape) {
        shape.fill = selectedKey && node.data.key !== selectedKey ? gray : defaultColor;
      }
    });
    diagram.commitTransaction("updateColors");
}
