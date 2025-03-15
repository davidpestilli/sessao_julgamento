// src/components/DualFlowchart/SubNodeSelectionHandler.js
export function updateSubNodeColors(diagram, selectedKey) {
    const green = "#38A169";
    const gray = "#718096";
  
    diagram.nodes.each(node => {
      const shape = node.findObject("SHAPE");
      if (shape) {
        shape.fill = !selectedKey ? green : (node.data.key === selectedKey ? green : gray);
      }
    });
  }
  