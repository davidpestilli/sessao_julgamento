// src/components/DualFlowchart/SubNodeTemplate.js
import * as go from 'gojs';

export const createSubNodeTemplate = (setSelectedNode) => {
  const $ = go.GraphObject.make;
  return $(
    go.Node,
    "Auto",
    {
      selectionAdorned: false,
      shadowOffset: new go.Point(4, 4),
      shadowColor: "rgba(0, 0, 0, 0.15)",
      shadowBlur: 10,
      mouseEnter: (e, node) => {
        node.diagram.startTransaction("hover");
        node.scale = 1.05;
        node.findObject("SHAPE").stroke = "#3182ce";
        node.diagram.commitTransaction("hover");
      },
      mouseLeave: (e, node) => {
        node.diagram.startTransaction("hover");
        node.scale = 1.0;
        node.findObject("SHAPE").stroke = "#4a5568";
        node.diagram.commitTransaction("hover");
      },
      click: (e, node) => {
        node.diagram.startTransaction("pressed");
        node.scale = 0.95;
        node.diagram.commitTransaction("pressed");
        setTimeout(() => {
          node.diagram.startTransaction("pressed");
          node.scale = 1.05;
          node.diagram.commitTransaction("pressed");
        }, 100);
        setSelectedNode(node.data);
      }
    },
    $(go.Shape, "RoundedRectangle", {
      name: "SHAPE",
      fill: "#38A169",
      stroke: "#4a5568",
      strokeWidth: 2,
    }),
    $(go.TextBlock, {
      margin: 10,
      font: "14px sans-serif",
      textAlign: "center",
      wrap: go.TextBlock.WrapFit,
      minSize: new go.Size(100, 30),
      verticalAlignment: go.Spot.Center,
    }, new go.Binding("text", "text"))
  );
};
