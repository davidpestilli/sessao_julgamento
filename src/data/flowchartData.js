// src/data/flowchartData.js
const flowchartData = {
    nodeDataArray: [
        { key: 'config', text: 'Configuração do Colegiado' },
        { key: 'cronograma', text: 'Cronograma da Sessão' },
        { key: 'preparacao', text: 'Preparação da Sessão' },
        { key: 'durante', text: 'Durante a Sessão' },
        { key: 'pos', text: 'Pós-Sessão' }
    ],
    linkDataArray: [
        { from: 'config', to: 'cronograma' },
        { from: 'cronograma', to: 'preparacao' },
        { from: 'preparacao', to: 'durante' },
        { from: 'durante', to: 'pos' }
    ]
};

export default flowchartData;
