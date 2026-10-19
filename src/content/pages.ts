import type { PageInfo } from '../types/content'

// PROVISÓRIO: descrições usadas nos metadados (SEO) de cada página.
export const pages = {
  home: {
    title: 'Página inicial',
    description: 'Descrição provisória da página inicial da MaulehSeg.',
  },
  about: {
    title: 'Quem Somos',
    description: 'Descrição provisória da página Quem Somos.',
  },
  services: {
    title: 'Serviços',
    description: 'Descrição provisória da página de serviços.',
  },
  trainings: {
    title: 'Treinamentos',
    description: 'Descrição provisória da página de treinamentos.',
  },
  notFound: {
    title: 'Página não encontrada',
    description: 'O endereço acessado não existe ou foi alterado.',
  },
} satisfies Record<string, PageInfo>
