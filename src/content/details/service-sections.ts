import type { DetailSection } from '../../types/content'

/*
  Textos das páginas de serviço (/servicos/:slug).
  As exigências citadas seguem a NR-33 e a NR-35 (inclusive os Anexos I e II da NR-35).
  PROVISÓRIO: o Maurício precisa confirmar como cada serviço é feito na prática
  (etapas, o que está incluso, equipe de prontidão) antes de publicar.
*/
export const serviceSections: Record<string, DetailSection[]> = {
  'resgate-tecnico-industrial': [
    {
      title: 'O que é o resgate técnico industrial',
      paragraphs: [
        'É o conjunto de técnicas para retirar com segurança um trabalhador ferido, que passou mal ou ficou preso em altura ou dentro de um espaço confinado, como tanques, silos e galerias. Quando a queda é contida pelo cinto, cada minuto em suspensão conta: por isso a resposta precisa ser rápida e planejada antes de o trabalho começar.',
        'A NR-33 e a NR-35 exigem que a empresa tenha procedimentos de emergência e resgate e uma equipe preparada para executá-los sempre que houver trabalho em altura ou em espaço confinado.',
      ],
    },
    {
      title: 'Como a MaulehSeg trabalha',
      paragraphs: [
        'A MaulehSeg analisa a atividade e o local, monta o plano de resgate junto com a sua equipe e pode manter resgatistas de prontidão durante os trabalhos de maior risco, como paradas de manutenção.',
      ],
      list: [
        'Análise dos cenários de emergência',
        'Plano de resgate para cada frente de trabalho',
        'Equipe de resgate de prontidão',
        'Equipamentos de resgate e de ancoragem',
        'Simulados com a equipe da empresa',
      ],
    },
  ],

  'acesso-por-cordas': [
    {
      title: 'O que é o acesso por cordas',
      paragraphs: [
        'É uma técnica de trabalho em altura em que o profissional sobe, desce e se desloca usando cordas, sempre conectado a pelo menos duas cordas presas em pontos de ancoragem independentes. Ela permite chegar a fachadas, estruturas e pontos de difícil acesso sem montar andaimes nem usar plataformas.',
        'O acesso por cordas segue o Anexo I da NR-35: os profissionais precisam ser certificados, a equipe tem no mínimo duas pessoas, sendo uma delas o supervisor, e cada frente de trabalho tem um plano de resgate. Com ventos acima de 40 km/h, o trabalho é interrompido.',
      ],
    },
    {
      title: 'Onde pode ser usado',
      paragraphs: [
        'Como a montagem é rápida e ocupa pouco espaço, o acesso por cordas costuma reduzir o prazo do serviço e a interferência na rotina do prédio ou da fábrica.',
      ],
      list: [
        'Inspeções em fachadas, estruturas e tanques',
        'Limpeza e pintura de fachadas',
        'Reparos e vedações em pontos altos',
        'Manutenção em estruturas industriais',
        'Instalação de telas, placas e sinalização',
      ],
    },
  ],

  'linha-de-vida': [
    {
      title: 'O que é a linha de vida',
      paragraphs: [
        'A linha de vida é um sistema de ancoragem: um cabo ou trilho fixado na estrutura, ao qual o trabalhador conecta o cinto de segurança para se deslocar em altura protegido contra quedas. Ela é usada em telhados, coberturas, pontes rolantes, plataformas e acessos a máquinas.',
        'Pela NR-35, o sistema de ancoragem definitivo precisa ter projeto e instalação sob responsabilidade de um profissional legalmente habilitado, inspeção inicial depois de instalado e inspeções periódicas em intervalos de até 12 meses.',
      ],
    },
    {
      title: 'Como a MaulehSeg trabalha',
      paragraphs: [
        'Do levantamento no local à entrega, a linha de vida é dimensionada para a estrutura existente e para o número de trabalhadores que vão usá-la ao mesmo tempo, com a documentação que a norma exige.',
      ],
      list: [
        'Visita técnica e levantamento da estrutura',
        'Projeto do sistema de ancoragem',
        'Instalação por equipe capacitada',
        'Inspeção inicial e documentação',
        'Inspeções periódicas e manutenção',
      ],
    },
  ],

  'limpeza-de-fachada': [
    {
      title: 'Como é a limpeza de fachada',
      paragraphs: [
        'A limpeza de fachadas e vidros remove poeira, poluição, fungos e manchas que desgastam o revestimento e prejudicam a aparência do prédio. Com acesso por cordas, a equipe chega a toda a fachada sem andaimes e com menos interferência na rotina do edifício.',
        'O método e os produtos são escolhidos conforme o revestimento, como vidro, cerâmica, pastilha, ACM, pedra ou concreto aparente, para limpar sem danificar.',
      ],
    },
    {
      title: 'Como a MaulehSeg trabalha',
      paragraphs: [
        'Antes do serviço, a equipe avalia a fachada, define os pontos de ancoragem e isola a área abaixo da frente de trabalho para proteger quem passa.',
      ],
      list: [
        'Prédios comerciais, residenciais e industriais',
        'Vidros, esquadrias e revestimentos',
        'Remoção de manchas, fungos e poluição',
        'Isolamento e sinalização da área',
        'Equipe de acesso por cordas',
      ],
    },
  ],

  'pintura-interna-e-externa': [
    {
      title: 'Pintura em altura e em locais de difícil acesso',
      paragraphs: [
        'A MaulehSeg faz pintura de fachadas, estruturas metálicas e áreas internas, inclusive em pontos altos de galpões, reservatórios e estruturas industriais. Com acesso por cordas, a pintura chega a lugares onde andaimes seriam caros ou difíceis de montar.',
        'A preparação da superfície faz parte do serviço: limpeza, raspagem, tratamento de trincas e de pontos de ferrugem e aplicação de fundo, para a pintura durar mais.',
      ],
    },
    {
      title: 'O que pode ser pintado',
      paragraphs: [
        'O tipo de tinta e o sistema de pintura são definidos conforme a superfície e a exposição ao sol e à chuva.',
      ],
      list: [
        'Fachadas e empenas de prédios',
        'Estruturas metálicas, coberturas e treliças',
        'Galpões e áreas internas com pé-direito alto',
        'Caixas-d’água, tanques e reservatórios',
      ],
    },
  ],

  'manutencao-predial': [
    {
      title: 'O que inclui a manutenção predial',
      paragraphs: [
        'Reparos e manutenção em fachadas, telhados, calhas e estruturas, com acesso seguro aos pontos mais altos do prédio. A manutenção feita no tempo certo evita infiltrações, queda de revestimentos e gastos maiores no futuro.',
        'Com acesso por cordas, a equipe chega aos pontos de reparo sem andaimes e com menos interferência na rotina de moradores e funcionários.',
      ],
    },
    {
      title: 'Serviços mais comuns',
      paragraphs: [
        'Os serviços podem ser pontuais ou fazer parte de um plano de manutenção preventiva do prédio.',
      ],
      list: [
        'Recuperação de fachadas e rejuntes',
        'Tratamento de trincas e infiltrações',
        'Vedação de esquadrias e juntas',
        'Limpeza e reparo de calhas e telhados',
        'Fixação e troca de revestimentos soltos',
        'Inspeção de fachadas',
      ],
    },
  ],
}
