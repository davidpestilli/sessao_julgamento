// src/data/subFlowchartData.js
const subFlowchartData = {
  config: {
    nodeDataArray: [
      { key: 'sub-config-1', text: 'Órgãos de Gabinete e Secretaria' },
      { key: 'sub-config-2', text: 'Associação de Magistrados ao órgão julgador' },
      { key: 'sub-config-3', text: 'Definição da ordem dos Gabinetes no colegiado' },
      { key: 'sub-config-4', text: 'Configuração dos agrupamentos do órgão' }
    ],
    linkDataArray: [
      { from: 'sub-config-1', to: 'sub-config-2' },
      { from: 'sub-config-2', to: 'sub-config-3' },
      { from: 'sub-config-3', to: 'sub-config-4' }
    ]
  },
  cronograma: {
    nodeDataArray: [
      { key: 'sub-cron-1', text: 'Cronograma Padrão' },
      { key: 'sub-cron-2', text: 'Definição de datas limites' },
      { key: 'sub-cron-3', text: 'Cronograma de Sessões de Julgamento' },
      { key: 'sub-cron-4', text: 'Calendário de Sessões de Julgamento' }
    ],
    linkDataArray: [
      { from: 'sub-cron-1', to: 'sub-cron-2' },
      { from: 'sub-cron-2', to: 'sub-cron-3' },
      { from: 'sub-cron-3', to: 'sub-cron-4' }
    ]
  },
  preparacao: {
    nodeDataArray: [
      { key: 'sub-prep-1', text: 'Pauta' },
      { key: 'sub-prep-2', text: 'Status da Sessão e Recursos' },
      { key: 'sub-prep-3', text: 'Painel da Sessão de Julgamento' },
      { key: 'sub-prep-4', text: 'Impedimentos' },
      { key: 'sub-prep-5', text: 'Quórum e Composição' },
      { key: 'sub-prep-6', text: 'Geração da Pauta e Intimação' },
      { key: 'sub-prep-7', text: 'Publicação' },
      { key: 'sub-prep-8', text: 'Relatório Geral da Sessão de Julgamento' },
      { key: 'sub-prep-9', text: 'Alteração de Data/Hora da Sessão' },
      { key: 'sub-prep-10', text: 'Aditamento' },
      { key: 'sub-prep-11', text: 'Pedidos de Sustentação Oral e Preferência' }
    ],
    linkDataArray: [
      { from: 'sub-prep-1', to: 'sub-prep-2' },
      { from: 'sub-prep-2', to: 'sub-prep-3' },
      { from: 'sub-prep-3', to: 'sub-prep-4' },
      { from: 'sub-prep-4', to: 'sub-prep-5' },
      { from: 'sub-prep-5', to: 'sub-prep-6' },
      { from: 'sub-prep-6', to: 'sub-prep-7' },
      { from: 'sub-prep-7', to: 'sub-prep-8' },
      { from: 'sub-prep-8', to: 'sub-prep-9' },
      { from: 'sub-prep-9', to: 'sub-prep-10' },
      { from: 'sub-prep-10', to: 'sub-prep-11' }
    ]
  },
  durante: {
    nodeDataArray: [
      { key: 'sub-dur-1', text: 'Abrir a Sessão' },
      { key: 'sub-dur-2', text: 'Exibição dos Itens em Julgamento' },
      { key: 'sub-dur-3', text: 'Tela de Resumo do Item da Sessão' },
      { key: 'sub-dur-4', text: 'Atualizar Resultados da Sessão' },
      { key: 'sub-dur-5', text: 'Automação dos Julgamentos Unânimes' },
      { key: 'sub-dur-6', text: 'Confirmar Previsão de Resultado' },
      { key: 'sub-dur-7', text: 'Lançamento dos Eventos de Julgamento' },
      { key: 'sub-dur-8', text: 'Visualizar Resumo da Sessão de Julgamento' },
      { key: 'sub-dur-9', text: 'Visualizar Estatísticas da Sessão de Julgamento' },
      { key: 'sub-dur-10', text: 'Encerrar a Sessão' }
    ],
    linkDataArray: [
      { from: 'sub-dur-1', to: 'sub-dur-2' },
      { from: 'sub-dur-2', to: 'sub-dur-3' },
      { from: 'sub-dur-3', to: 'sub-dur-4' },
      { from: 'sub-dur-4', to: 'sub-dur-5' },
      { from: 'sub-dur-5', to: 'sub-dur-6' },
      { from: 'sub-dur-6', to: 'sub-dur-7' },
      { from: 'sub-dur-7', to: 'sub-dur-8' },
      { from: 'sub-dur-8', to: 'sub-dur-9' },
      { from: 'sub-dur-9', to: 'sub-dur-10' }
    ]
  },
  pos: {
    nodeDataArray: [
      { key: 'sub-pos-1', text: 'Pedido de Vista' },
      { key: 'sub-pos-2', text: 'Julgamento Sobrestado (Art. 942 CPC)' },
      { key: 'sub-pos-3', text: 'Julgamento Adiado e Retirado de Pauta' },
      { key: 'sub-pos-4', text: 'Conferência da Sessão de Julgamento' },
      { key: 'sub-pos-5', text: 'Encerramento da Ata' },
      { key: 'sub-pos-6', text: 'Retificação de Ata' }
    ],
    linkDataArray: [
      { from: 'sub-pos-1', to: 'sub-pos-2' },
      { from: 'sub-pos-2', to: 'sub-pos-3' },
      { from: 'sub-pos-3', to: 'sub-pos-4' },
      { from: 'sub-pos-4', to: 'sub-pos-5' },
      { from: 'sub-pos-5', to: 'sub-pos-6' }
    ]
  }
};

export default subFlowchartData;
