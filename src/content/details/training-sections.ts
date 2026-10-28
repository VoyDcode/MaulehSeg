import type { DetailSection } from '../../types/content'

/*
  Textos das páginas de treinamento (/treinamentos/:slug).
  Os dados das normas (cargas horárias, prazos, conteúdos) seguem o texto vigente
  das NRs publicado pelo Ministério do Trabalho e Emprego, conferido em outubro de 2026.
  PROVISÓRIO: o Maurício precisa revisar o formato dos cursos (carga horária que ele
  oferece, prática, certificado) antes de publicar.
*/
export const trainingSections: Record<string, DetailSection[]> = {
  'nr-05-cipa': [
    {
      title: 'O que é a CIPA',
      paragraphs: [
        'A Comissão Interna de Prevenção de Acidentes e de Assédio (CIPA) é formada por representantes da empresa e dos empregados. Pela NR-05, o objetivo da comissão é prevenir acidentes e doenças do trabalho, tornando o trabalho compatível com a preservação da vida e a promoção da saúde do trabalhador.',
        'Entre as atribuições da CIPA estão acompanhar a identificação de perigos e a avaliação de riscos, inspecionar os ambientes de trabalho, acompanhar a análise de acidentes e propor soluções, e promover a SIPAT todos os anos. Nas empresas que não precisam ter CIPA, um representante nomeado assume esse papel.',
      ],
    },
    {
      title: 'Como é o treinamento',
      paragraphs: [
        'Os membros da CIPA, titulares e suplentes, precisam ser treinados antes da posse. A carga horária mínima depende do grau de risco do estabelecimento: 8 horas no grau 1, 12 horas no grau 2, 16 horas no grau 3 e 20 horas no grau 4. O representante nomeado também passa pelo treinamento.',
      ],
      list: [
        'Estudo do ambiente, das condições de trabalho e dos riscos do processo produtivo',
        'Investigação e análise de acidentes',
        'Princípios de higiene do trabalho e prevenção de doenças',
        'Noções da legislação trabalhista e previdenciária sobre segurança e saúde',
        'Inclusão de pessoas com deficiência e reabilitados',
        'Prevenção e combate ao assédio sexual e a outras formas de violência no trabalho',
        'Organização e funcionamento da CIPA',
      ],
    },
  ],

  'nr-06-epi': [
    {
      title: 'O que é a NR-06',
      paragraphs: [
        'A NR-06 trata dos Equipamentos de Proteção Individual (EPI): capacetes, luvas, óculos, protetores auriculares, calçados, cintos de segurança e outros dispositivos de uso individual que protegem o trabalhador contra os riscos da atividade. Todo EPI precisa ter Certificado de Aprovação (CA), o documento que autoriza a venda e o uso do equipamento no Brasil.',
        'A empresa deve fornecer o EPI adequado ao risco, de graça e em perfeito estado, além de exigir e registrar o uso, trocar o equipamento danificado ou perdido e orientar e treinar os trabalhadores. A escolha considera a atividade, os riscos avaliados no PGR e o conforto de quem vai usar. O EPI complementa as proteções coletivas, não as substitui.',
      ],
    },
    {
      title: 'Como é o treinamento',
      paragraphs: [
        'O treinamento mostra, na prática, como escolher, vestir, ajustar e conservar os equipamentos usados em cada função. O conteúdo é adaptado aos EPIs e aos riscos da sua empresa.',
      ],
      list: [
        'Riscos da atividade e o EPI indicado para cada um',
        'Uso e ajuste corretos de cada equipamento',
        'Limitações de proteção dos EPIs',
        'Higienização, guarda e conservação',
        'Quando e como pedir a troca',
        'O que é o CA e como conferir se está válido',
        'Deveres da empresa e do trabalhador',
      ],
    },
  ],

  'nr-10-seguranca-em-eletricidade': [
    {
      title: 'O que é a NR-10',
      paragraphs: [
        'A NR-10 define as medidas de controle e os sistemas preventivos para proteger quem trabalha, direta ou indiretamente, com instalações elétricas e serviços com eletricidade, da geração e distribuição até o consumo, em todas as etapas: projeto, construção, montagem, operação e manutenção.',
        'Só trabalhadores autorizados pela empresa podem intervir em instalações elétricas. A autorização depende de qualificação ou capacitação, de aptidão no exame de saúde e do treinamento de segurança exigido pela norma.',
      ],
    },
    {
      title: 'Como é o treinamento',
      paragraphs: [
        'O curso básico tem carga horária mínima de 40 horas. Quem trabalha no Sistema Elétrico de Potência (SEP) ou perto dele faz também o curso complementar, de 40 horas. A reciclagem é a cada dois anos e sempre que houver troca de função ou de empresa, retorno de afastamento por mais de três meses ou mudanças importantes nas instalações.',
      ],
      list: [
        'Riscos da eletricidade: choque elétrico, arco elétrico e queimaduras',
        'Medidas de controle, com desenergização e bloqueio',
        'Normas técnicas e regulamentações aplicáveis',
        'Equipamentos de proteção coletiva e individual',
        'Rotinas de trabalho, procedimentos e documentação das instalações',
        'Riscos adicionais, como altura, umidade e áreas classificadas',
        'Prevenção e combate a incêndios',
        'Acidentes de origem elétrica e primeiros socorros',
      ],
    },
  ],

  'nr-11-movimentacao-de-materiais': [
    {
      title: 'O que é a NR-11',
      paragraphs: [
        'A NR-11 estabelece regras de segurança para a operação de equipamentos de transporte, movimentação e armazenagem de materiais, como empilhadeiras, pontes rolantes, talhas, guindastes e transportadores, e para o manuseio e a armazenagem de materiais.',
        'Pela norma, o operador de equipamento com força motriz própria precisa receber treinamento específico, dado pela empresa, e só pode operar portando, em local visível, um cartão de identificação com nome e foto. O cartão vale por um ano e, para renovar, o trabalhador passa por exame de saúde completo.',
      ],
    },
    {
      title: 'Como é o treinamento',
      paragraphs: [
        'O treinamento junta teoria e prática no equipamento que o operador vai usar, com foco em evitar tombamentos, quedas de carga e atropelamentos dentro da empresa.',
      ],
      list: [
        'Tipos de equipamento e seus limites de carga',
        'Inspeção diária antes do uso',
        'Estabilidade, centro de gravidade e capacidade nominal',
        'Operação segura em rampas, corredores e docas',
        'Empilhamento e armazenagem corretos',
        'Sinalização e convivência com pedestres',
        'Abastecimento e recarga de baterias',
      ],
    },
  ],

  'nr-12-maquinas-e-equipamentos': [
    {
      title: 'O que é a NR-12',
      paragraphs: [
        'A NR-12 define requisitos de segurança para máquinas e equipamentos em todas as fases, do projeto ao sucateamento, para prevenir acidentes e doenças do trabalho. Ela trata de proteções fixas e móveis, dispositivos de parada de emergência, sistemas de segurança, sinalização e procedimentos de trabalho.',
        'A operação, a manutenção, a inspeção e as demais intervenções em máquinas só podem ser feitas por trabalhadores habilitados, qualificados, capacitados ou autorizados para isso.',
      ],
    },
    {
      title: 'Como é o treinamento',
      paragraphs: [
        'A capacitação acontece antes de o trabalhador assumir a função, no horário de trabalho e sem custo para ele. O conteúdo segue o Anexo II da NR-12, e a carga horária é definida pela empresa de forma que a atividade seja feita com segurança. A parte prática pode ser feita na própria máquina que o trabalhador vai operar.',
      ],
      list: [
        'Riscos da máquina e as proteções contra cada um',
        'Como funcionam as proteções e por que não removê-las',
        'O que fazer quando uma proteção está danificada',
        'Princípios de segurança na operação',
        'Riscos mecânicos, elétricos e outros',
        'Métodos de trabalho seguros e permissão de trabalho',
        'Bloqueio de energias para inspeção, limpeza, lubrificação e manutenção',
      ],
    },
  ],

  'nr-17-ergonomia': [
    {
      title: 'O que é a NR-17',
      paragraphs: [
        'A NR-17 estabelece as diretrizes para adaptar as condições de trabalho às características dos trabalhadores, com conforto, segurança, saúde e bom desempenho. Ela trata do levantamento e transporte de cargas, do mobiliário e dos equipamentos dos postos de trabalho, das condições do ambiente e da organização do trabalho.',
        'A empresa deve fazer a Avaliação Ergonômica Preliminar (AEP) das situações de trabalho e, quando necessário, a Análise Ergonômica do Trabalho (AET), sempre ouvindo os trabalhadores. Os resultados entram no PGR, com um plano de ação.',
      ],
    },
    {
      title: 'Como é o treinamento',
      paragraphs: [
        'O treinamento ensina a reconhecer os riscos ergonômicos do dia a dia e a prevenir dores, lesões e afastamentos. O conteúdo é ajustado à rotina da sua empresa, seja no escritório, na produção ou na logística.',
      ],
      list: [
        'Postura e ajuste do posto de trabalho',
        'Levantamento, transporte e descarga manual de cargas',
        'Pausas e alternância de tarefas',
        'Uso de computador e mobiliário',
        'Ferramentas manuais e esforço físico',
        'Sinais de alerta de LER/DORT',
      ],
    },
  ],

  'nr-18-construcao-civil': [
    {
      title: 'O que é a NR-18',
      paragraphs: [
        'A NR-18 trata da segurança e da saúde no trabalho na indústria da construção, incluindo obras novas, demolições, reformas e manutenções. Ela define medidas para o canteiro, escavações, estruturas, andaimes, plataformas, instalações elétricas provisórias e as demais etapas da obra.',
        'Desde 2022, o canteiro de obras precisa de um Programa de Gerenciamento de Riscos (PGR) próprio, que substituiu o antigo PCMAT e deve ser atualizado conforme a obra avança.',
      ],
    },
    {
      title: 'Como é o treinamento',
      paragraphs: [
        'Todo trabalhador da obra passa pelo treinamento inicial, de no mínimo 4 horas, antes de começar as atividades, e pelo treinamento periódico a cada dois anos. Funções específicas, como operação de máquinas e trabalho em altura, pedem capacitações próprias.',
      ],
      list: [
        'Condições e meio ambiente de trabalho no canteiro',
        'Riscos de cada função e como preveni-los',
        'Uso adequado dos EPIs',
        'Proteções coletivas existentes na obra',
        'Andaimes, plataformas e trabalho em altura',
        'Ordem, limpeza e sinalização do canteiro',
      ],
    },
  ],

  'nr-20-inflamaveis': [
    {
      title: 'O que é a NR-20',
      paragraphs: [
        'A NR-20 estabelece requisitos para a segurança e a saúde no trabalho com inflamáveis e combustíveis, da extração e produção ao armazenamento, transferência, manuseio e manipulação. Ela vale para todo o ciclo de vida da instalação: projeto, construção, montagem, operação, manutenção, inspeção e desativação.',
        'As instalações são divididas em classes, conforme a atividade e a quantidade armazenada, e precisam de prontuário, análise de riscos, plano de prevenção e controle de vazamentos e plano de resposta a emergências.',
      ],
    },
    {
      title: 'Como é o treinamento',
      paragraphs: [
        'O curso depende da classe da instalação e do contato do trabalhador com o processo. Vai da Iniciação, de 3 horas, para quem só circula na área, aos cursos Básico, Intermediário, Avançado e Específico, com cargas horárias de 4 a 32 horas e cursos de atualização periódicos.',
      ],
      list: [
        'Características e propriedades de inflamáveis e combustíveis',
        'Fontes de ignição e como controlá-las',
        'Riscos de incêndio e explosão',
        'Permissão de trabalho em áreas com inflamáveis',
        'Procedimentos em vazamentos e emergências',
        'Equipamentos de proteção e de combate a incêndio',
      ],
    },
  ],

  'nr-23-brigada-de-incendio': [
    {
      title: 'O que é a NR-23',
      paragraphs: [
        'A NR-23 determina que toda organização adote medidas de prevenção contra incêndios de acordo com a legislação estadual e as normas técnicas aplicáveis. Também exige saídas de emergência suficientes, sinalizadas e desobstruídas, e que todos os trabalhadores conheçam os equipamentos de combate a incêndio, os alarmes e os procedimentos de abandono seguro.',
        'Em São Paulo, a brigada de incêndio segue as Instruções Técnicas do Corpo de Bombeiros e a ABNT NBR 14276, que definem quantos brigadistas a edificação precisa e qual formação cada um deve ter.',
      ],
    },
    {
      title: 'Como é o treinamento',
      paragraphs: [
        'A formação junta teoria e prática. Os brigadistas aprendem a prevenir incêndios, combater princípios de incêndio com extintores e hidrantes, conduzir o abandono da área e prestar os primeiros socorros até a chegada do socorro especializado.',
      ],
      list: [
        'Teoria do fogo e prevenção de incêndios',
        'Classes de incêndio e agentes extintores',
        'Uso de extintores e hidrantes',
        'Abandono de área e pontos de encontro',
        'Primeiros socorros',
        'Plano de emergência da edificação',
      ],
    },
  ],

  'nr-33-espacos-confinados': [
    {
      title: 'O que é a NR-33',
      paragraphs: [
        'Espaço confinado é qualquer área que não foi projetada para ocupação humana contínua, tem meios limitados de entrada e saída e onde existe ou pode existir atmosfera perigosa, como tanques, silos, galerias, poços e tubulações. A NR-33 define como identificar esses espaços, controlar os riscos e organizar a entrada com segurança.',
        'Cada entrada exige uma Permissão de Entrada e Trabalho (PET), emitida pelo supervisor de entrada, com teste da atmosfera antes do início, um vigia do lado de fora e uma equipe de emergência e salvamento pronta para agir.',
      ],
    },
    {
      title: 'Como é o treinamento',
      paragraphs: [
        'A carga horária depende da função: 16 horas para trabalhadores autorizados e vigias e 40 horas para supervisores de entrada, com capacitação periódica anual de 8 horas. Pelo menos metade do tempo é de prática.',
      ],
      list: [
        'Reconhecimento e controle de espaços confinados',
        'Avaliação e monitoramento da atmosfera',
        'Funções do trabalhador autorizado, do vigia e do supervisor de entrada',
        'Emissão e encerramento da PET',
        'Ventilação, bloqueios e isolamento de energias',
        'Equipamentos de proteção e de resgate, como o tripé',
        'Procedimentos de emergência e salvamento',
      ],
    },
  ],

  'nr-35-trabalho-em-altura': [
    {
      title: 'O que é a NR-35',
      paragraphs: [
        'A NR-35 considera trabalho em altura toda atividade feita acima de 2 metros do nível inferior, onde há risco de queda. Ela estabelece os requisitos de planejamento, organização e execução para proteger quem trabalha nessas condições, direta ou indiretamente.',
        'O trabalho só pode ser feito por trabalhador capacitado e formalmente autorizado pela empresa, com análise de risco, sistemas de proteção contra quedas e procedimentos de emergência e resgate definidos.',
      ],
    },
    {
      title: 'Como é o treinamento',
      paragraphs: [
        'O treinamento inicial tem no mínimo 8 horas, com teoria e prática, e acontece antes de o trabalhador começar a atividade. A cada dois anos, ele passa pelo treinamento periódico, também de no mínimo 8 horas.',
      ],
      list: [
        'Normas e regulamentos aplicáveis ao trabalho em altura',
        'Análise de risco e condições impeditivas',
        'Riscos potenciais e medidas de prevenção e controle',
        'Sistemas, equipamentos e procedimentos de proteção coletiva',
        'EPIs: seleção, inspeção, conservação e limites de uso',
        'Acidentes típicos em trabalhos em altura',
        'Condutas em emergências, com noções de resgate e primeiros socorros',
      ],
    },
  ],

  'nbr-16710-resgate-tecnico': [
    {
      title: 'O que é a NBR 16710',
      paragraphs: [
        'A ABNT NBR 16710 trata do resgate técnico industrial em altura e em espaços confinados: as técnicas para chegar até um trabalhador ferido ou preso, estabilizá-lo e levá-lo para um local seguro. A norma tem duas partes. A primeira define os requisitos de qualificação do profissional; a segunda traz diretrizes para quem oferece o treinamento e para os instrutores.',
        'Ela organiza o resgate em níveis de qualificação, do profissional que atua na operação ao que lidera a equipe, e é usada como referência para capacitar as equipes de emergência e salvamento previstas na NR-33 e na NR-35.',
      ],
    },
    {
      title: 'Como é o treinamento',
      paragraphs: [
        'A formação é principalmente prática, com simulações em altura e em espaço confinado que reproduzem situações reais de resgate. O nível e a carga horária são definidos conforme a função de cada participante na equipe.',
      ],
      list: [
        'Avaliação da cena e dos riscos do resgate',
        'Sistemas de ancoragem e de cordas',
        'Sistemas de vantagem mecânica para içamento',
        'Resgate em suspensão e em espaço confinado',
        'Uso de tripé, macas e equipamentos de resgate',
        'Atendimento inicial à vítima',
        'Trabalho em equipe e comunicação durante o resgate',
      ],
    },
  ],
}
