import * as go from 'gojs';
import { updateSubNodeColors } from './SubNodeSelectionHandler';
import { marked } from 'marked';

export const createSubNodeTemplate = (setSelectedNode) => {
    const $ = go.GraphObject.make;
    return $(go.Node, "Auto",
        {
            selectionAdorned: false,
            shadowOffset: new go.Point(6, 6),
            shadowColor: "rgba(0, 0, 0, 0.2)",
            shadowBlur: 15,
            mouseEnter: (e, node) => {
                node.diagram.startTransaction("hover");
                node.scale = 1.08;
                node.findObject("SHAPE").stroke = "#7D3C98"; // Roxo escuro ao passar o mouse
                node.diagram.commitTransaction("hover");
            },
            mouseLeave: (e, node) => {
                node.diagram.startTransaction("hover");
                node.scale = 1.0;
                node.findObject("SHAPE").stroke = "#8E44AD"; // Roxo escuro padrão
                node.diagram.commitTransaction("hover");
            },
            click: (e, node) => {
                if (setSelectedNode) {
                    setSelectedNode(node.data);
                }
                console.log(`🖱️ Nó clicado na LowerFlowchart: ${node.data.key}`);
                updateSubNodeColors(node.diagram, node.data.key);
            }
        },
        $(go.Shape, "RoundedRectangle", {
            name: "SHAPE",
            fill: "#B2FF59", // Roxo bem claro
            stroke: "#8E44AD", // Roxo escuro na borda
            strokeWidth: 3,
            width: 220,
            height: 170,
            parameter1: 15, // ✅ Define o raio do arredondamento
            parameter2: 15, // ✅ Define o raio do arredondamento
        }),
        $(go.TextBlock, {
            margin: new go.Margin(5,10,5,10), // Espaçamento interno
            font: "bold 18px sans-serif", // 🔹 Negrito adicionado
            textAlign: "center", // 🔹 Centraliza horizontalmente
            verticalAlignment: go.Spot.Center, // 🔹 Centraliza verticalmente
            alignment: go.Spot.Center, // 🔹 Alinhamento no centro do nó
            wrap: go.TextBlock.WrapFit, // 🔹 Quebra de texto automática
            maxSize: new go.Size(160, NaN), // 🔹 Define uma largura máxima para forçar a quebra
        },
        new go.Binding("text", "text", (text) => {
            return marked.parse(text).replace(/<\/?[^>]+(>|$)/g, ""); // Remove tags HTML
        }))
    );
};
