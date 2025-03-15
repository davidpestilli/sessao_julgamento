// src/data/subFlowchartData.js
const subFlowchartData = {
    start: {
      nodeDataArray: [
        { key: 'sub-start-1', text: 'Sub Início 1' },
        { key: 'sub-start-2', text: 'Sub Início 2' },
        { key: 'sub-start-3', text: 'Sub Início 3' }
      ],
      linkDataArray: [
        { from: 'sub-start-1', to: 'sub-start-2' },
        { from: 'sub-start-2', to: 'sub-start-3' }
      ]
    },
    config: {
      nodeDataArray: [
        { key: 'sub-config-1', text: 'Sub Configuração 1' },
        { key: 'sub-config-2', text: 'Sub Configuração 2' }
      ],
      linkDataArray: [
        { from: 'sub-config-1', to: 'sub-config-2' }
      ]
    },
    cronograma: {
      nodeDataArray: [
        { key: 'sub-cron-1', text: 'Sub Cronograma 1' },
        { key: 'sub-cron-2', text: 'Sub Cronograma 2' },
        { key: 'sub-cron-3', text: 'Sub Cronograma 3' }
      ],
      linkDataArray: [
        { from: 'sub-cron-1', to: 'sub-cron-2' },
        { from: 'sub-cron-2', to: 'sub-cron-3' }
      ]
    },
    preparacao: {
      nodeDataArray: [
        { key: 'sub-prep-1', text: 'Sub Preparação 1' },
        { key: 'sub-prep-2', text: 'Sub Preparação 2' }
      ],
      linkDataArray: [
        { from: 'sub-prep-1', to: 'sub-prep-2' }
      ]
    },
    durante: {
      nodeDataArray: [
        { key: 'sub-dur-1', text: 'Sub Durante 1' },
        { key: 'sub-dur-2', text: 'Sub Durante 2' },
        { key: 'sub-dur-3', text: 'Sub Durante 3' }
      ],
      linkDataArray: [
        { from: 'sub-dur-1', to: 'sub-dur-2' },
        { from: 'sub-dur-2', to: 'sub-dur-3' }
      ]
    },
    pos: {
      nodeDataArray: [
        { key: 'sub-pos-1', text: 'Sub Pós 1' },
        { key: 'sub-pos-2', text: 'Sub Pós 2' }
      ],
      linkDataArray: [
        { from: 'sub-pos-1', to: 'sub-pos-2' }
      ]
    },
    finish: {
      nodeDataArray: [
        { key: 'sub-finish-1', text: 'Sub Final 1' },
        { key: 'sub-finish-2', text: 'Sub Final 2' }
      ],
      linkDataArray: [
        { from: 'sub-finish-1', to: 'sub-finish-2' }
      ]
    }
  };
  
  export default subFlowchartData;
  