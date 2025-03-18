import * as go from 'gojs';
import { marked } from 'marked';

export const createUpperNodeTemplate = (onNodeSelect) => {
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
                node.findObject("SHAPE").stroke = "#2C3E50"; // Azul escuro na borda ao passar o mouse
                node.diagram.commitTransaction("hover");
            },
            mouseLeave: (e, node) => {
                node.diagram.startTransaction("hover");
                node.scale = 1.0;
                node.findObject("SHAPE").stroke = "#34495E"; // Mantém a borda azul escuro padrão
                node.diagram.commitTransaction("hover");
            },
            click: (e, node) => {
                if (onNodeSelect) onNodeSelect(node.data);
            }
        },
        $(go.Shape, "RoundedRectangle", {
            name: "SHAPE",
            fill: "#D4EDDA", // Azul bem claro
            stroke: "#34495E", // Azul escuro na borda
            strokeWidth: 3,
            width: 180,
            height: 100,
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
            maxSize: new go.Size(120, NaN), // 🔹 Define uma largura máxima para forçar a quebra
        },
        new go.Binding("text", "text", (text) => {
            return marked.parse(text).replace(/<\/?[^>]+(>|$)/g, ""); // Remove tags HTML
        }))
    );
};
