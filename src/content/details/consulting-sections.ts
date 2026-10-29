import type { DetailSection } from '../../types/content'

/*
  Textos das páginas de consultoria (/consultoria/:slug).
  As referências seguem a NR-01 (GRO e PGR) e a NR-04 (SESMT).
  PROVISÓRIO: o Maurício precisa confirmar o escopo de cada consultoria antes de publicar.
*/
export const consultingSections: Record<string, DetailSection[]> = {
  'gestao-em-seguranca-do-trabalho': [
    {
      title: 'O que é a gestão em segurança do trabalho',
      paragraphs: [
        'É a organização de tudo o que a empresa precisa fazer para prevenir acidentes e doenças e cumprir as NRs: identificar perigos, avaliar riscos, definir as medidas de controle e acompanhar se elas estão funcionando. A base é o Gerenciamento de Riscos Ocupacionais (GRO) da NR-01, registrado no Programa de Gerenciamento de Riscos (PGR).',
        'Com uma consultoria, a empresa ganha um olhar técnico de fora, entende onde está em relação às normas e passa a ter um plano claro do que fazer primeiro.',
      ],
    },
    {
      title: 'Como funciona',
      paragraphs: [
        'O trabalho começa com um diagnóstico na empresa e segue com um plano de ação com prazos e responsáveis, revisado periodicamente.',
      ],
      list: [
        'Diagnóstico da situação atual frente às NRs',
        'Apoio na elaboração e atualização do PGR',
        'Plano de ação com prioridades e prazos',
        'Programa de treinamentos obrigatórios',
        'Inspeções de segurança e acompanhamento',
        'Apoio à CIPA e na investigação de acidentes',
      ],
    },
  ],

  'equipe-sesmt': [
    {
      title: 'O que é o SESMT',
      paragraphs: [
        'O Serviço Especializado em Segurança e em Medicina do Trabalho (SESMT) é a equipe de profissionais que a NR-04 exige conforme o grau de risco e o número de empregados da empresa: técnicos e engenheiros de segurança do trabalho, médicos, enfermeiros e técnicos ou auxiliares de enfermagem do trabalho.',
        'É o SESMT que cuida da prevenção no dia a dia: acompanha os riscos, orienta os trabalhadores, apoia a CIPA e participa da investigação de acidentes.',
      ],
    },
    {
      title: 'Como a MaulehSeg ajuda',
      paragraphs: [
        'A MaulehSeg disponibiliza profissionais de segurança do trabalho para compor ou reforçar o SESMT de indústrias e construtoras, seja para atender ao dimensionamento da norma, cobrir períodos de obra ou de parada, ou dar suporte em atividades específicas.',
      ],
      list: [
        'Técnicos de segurança do trabalho no local',
        'Acompanhamento diário das frentes de trabalho',
        'Emissão e controle de permissões de trabalho',
        'Diálogos de segurança e integração de novos trabalhadores',
        'Inspeções e relatórios',
        'Apoio em obras e paradas de manutenção',
      ],
    },
  ],

  'atividades-de-alto-risco': [
    {
      title: 'O que são atividades de alto risco',
      paragraphs: [
        'São trabalhos em que uma falha pode causar acidentes graves, como trabalho em altura, entrada em espaços confinados, trabalhos a quente, movimentação de cargas e intervenções em máquinas e instalações elétricas. Elas se concentram nas paradas de manutenção, quando muitas equipes trabalham ao mesmo tempo e com prazo curto.',
        'Para essas atividades, as NRs exigem análise de risco, permissão de trabalho, profissionais capacitados e procedimentos de emergência definidos antes do início.',
      ],
    },
    {
      title: 'Como a MaulehSeg apoia',
      paragraphs: [
        'A MaulehSeg participa do planejamento e acompanha a execução em campo, com profissionais de segurança e, quando necessário, equipe de resgate de prontidão.',
      ],
      list: [
        'Planejamento de segurança da parada ou da obra',
        'Análises de risco e permissões de trabalho',
        'Acompanhamento das frentes de trabalho em campo',
        'Equipe de resgate em altura e em espaço confinado',
        'Integração e orientação das equipes contratadas',
        'Relatórios ao final de cada etapa',
      ],
    },
  ],
}
