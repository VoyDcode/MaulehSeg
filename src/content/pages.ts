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
      'PGR, LTCAT, laudos de insalubridade e periculosidade, eSocial SST e assessoria mensal em segurança do trabalho para manter sua empresa em conformidade.',
  },
  trainings: {
    title: 'Treinamentos',
    description:
      'Treinamentos em Normas Regulamentadoras, como NR-35, NR-10, NR-33, CIPA e brigada de incêndio, com conteúdo prático para capacitar sua equipe.',
  },
  notFound: {
    title: 'Página não encontrada',
    description: 'O endereço acessado não existe ou foi alterado.',
  },
} satisfies Record<string, PageInfo>
