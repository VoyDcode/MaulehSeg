import type { PageInfo } from '../types/content'

// Descrições usadas nos metadados (SEO) de cada página.
export const pages = {
  home: {
    title: 'Página inicial',
    description:
      'MaulehSeg: consultoria em segurança do trabalho, PGR, laudos técnicos, eSocial SST e treinamentos em NRs para empresas que levam a prevenção a sério.',
  },
  about: {
    title: 'Quem Somos',
    description:
      'Conheça a MaulehSeg, consultoria em segurança do trabalho que une conhecimento técnico e presença em campo para proteger pessoas e empresas.',
  },
  services: {
    title: 'Serviços',
    description:
      'Resgate técnico industrial e serviços em locais de difícil acesso por cordas: linha de vida, limpeza de fachada, pintura e manutenção predial.',
  },
  trainings: {
    title: 'Treinamentos',
    description:
      'Treinamentos práticos em NRs, como NR-35, NR-33, NR-10, NR-12 e brigada de incêndio (NR-23), além de resgate técnico conforme a NBR 16710.',
  },
  consulting: {
    title: 'Consultoria',
    description:
      'Gestão em segurança do trabalho, equipes de SESMT para indústrias e construtoras e suporte a atividades de alto risco, como paradas de manutenção.',
  },
  contact: {
    title: 'Fale conosco',
    description:
      'Solicite um orçamento de serviços em altura, treinamentos em NRs ou consultoria em segurança do trabalho. Fale com a MaulehSeg pelo formulário, WhatsApp ou e-mail.',
  },
  notFound: {
    title: 'Página não encontrada',
    description: 'O endereço acessado não existe ou foi alterado.',
  },
} satisfies Record<string, PageInfo>
