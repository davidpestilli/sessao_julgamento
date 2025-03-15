// src/components/DualFlowchart/UpperFlowchart.js
import React, { useRef, useEffect } from 'react';
import * as go from 'gojs';
import flowchartData from '../../data/flowchartData';

const UpperFlowchart = ({ onNodeSelect }) => {
    const diagramRef = useRef(null);
    const diagramInstance = useRef(null);

    useEffect(() => {
        const $ = go.GraphObject.make;
        const container = diagramRef.current;

        console.log("UpperFlowchart está sendo renderizado");
        console.log("Container encontrado:", diagramRef.current);

        if (diagramInstance.current) {
            diagramInstance.current.div = null;
        }
        const diagram = $(go.Diagram, container, {
            'undoManager.isEnabled': true,
            layout: $(go.LayeredDigraphLayout, { direction: 0, layerSpacing: 50 }),
            padding: new go.Margin(10, 10, 10, 10),
        });

        console.log("Diagrama criado:", diagram);

        diagramInstance.current = diagram;

        // Template dos nós com comportamento de zoom, mudança de cor e callback na seleção
        diagram.nodeTemplate = $(
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
                if (onNodeSelect) {
                    onNodeSelect(node.data);
                }
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

        diagram.model = new go.GraphLinksModel(
            flowchartData.nodeDataArray,
            flowchartData.linkDataArray
        );

        console.log("Dados do fluxo:", flowchartData);


        // Limpa a seleção ao clicar no fundo
        diagram.addDiagramListener("BackgroundSingleClicked", (e) => {
            if (onNodeSelect) {
                onNodeSelect(null);
            }
        });

        return () => {
            diagram.div = null;
        };
    }, [onNodeSelect]);

    return <div className="flowchart-diagram" ref={diagramRef}></div>;
};

export default UpperFlowchart;
