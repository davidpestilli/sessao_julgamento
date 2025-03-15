import * as go from 'gojs';

export const createUpperNodeTemplate = (onNodeSelect) => {
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
                node.findObject("SHAPE").stroke = "#1E3799"; // Azul escuro na borda
                node.diagram.commitTransaction("hover");
            },
            mouseLeave: (e, node) => {
                node.diagram.startTransaction("hover");
                node.scale = 1.0;
                node.findObject("SHAPE").stroke = "#1E3799"; // Mantém borda azul escuro
                node.diagram.commitTransaction("hover");
            },
            click: (e, node) => {
                if (onNodeSelect) onNodeSelect(node.data);
            }
        },
        $(go.Shape, "RoundedRectangle", {
            name: "SHAPE",
            fill: "#70A1FF", // 🔵 Azul Claro
            stroke: "#1E3799", // 🔷 Borda Azul Escuro
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
