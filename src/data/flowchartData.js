// src/data/flowchartData.js
const flowchartData = {
    nodeDataArray: [
        { key: 'start', text: 'Start' },
        { key: 'config', text: 'Configuração do Colegiado' },
        { key: 'cronograma', text: 'Cronograma da Sessão' },
        { key: 'preparacao', text: 'Preparação da Sessão' },
        { key: 'durante', text: 'Durante a Sessão' },
        { key: 'pos', text: 'Pós-Sessão' },
        { key: 'finish', text: 'Finish' },
    ],
    linkDataArray: [
        { from: 'start', to: 'config' },
        { from: 'config', to: 'cronograma' },
        { from: 'cronograma', to: 'preparacao' },
        { from: 'preparacao', to: 'durante' },
        { from: 'durante', to: 'pos' },
        { from: 'pos', to: 'finish' },
    ],
};

export default flowchartData;