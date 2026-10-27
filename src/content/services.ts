import type { ContentItem } from '../types/content'
import { cardImage } from './card-image'

import resgateAvif640 from '../assets/images/services/resgate-suspensao-640.avif'
import resgateAvif1024 from '../assets/images/services/resgate-suspensao-1024.avif'
import resgateWebp640 from '../assets/images/services/resgate-suspensao-640.webp'
import resgateWebp1024 from '../assets/images/services/resgate-suspensao-1024.webp'

import cordasAvif640 from '../assets/images/services/acesso-por-cordas-fachada-640.avif'
import cordasWebp640 from '../assets/images/services/acesso-por-cordas-fachada-640.webp'

import linhaAvif640 from '../assets/images/services/linha-de-vida-escada-640.avif'
import linhaAvif1024 from '../assets/images/services/linha-de-vida-escada-1024.avif'
import linhaWebp640 from '../assets/images/services/linha-de-vida-escada-640.webp'
import linhaWebp1024 from '../assets/images/services/linha-de-vida-escada-1024.webp'

// Conforme o portfólio da empresa.
// PROVISÓRIO: confirmar os resumos com o Maurício. Limpeza de fachada, pintura e
// manutenção predial ainda não têm foto própria (o card mostra o capacete da marca).
export const services: ContentItem[] = [
  {
    slug: 'resgate-tecnico-industrial',
    title: 'Resgate técnico industrial',
    summary:
      'Resgate de trabalhadores em altura e em espaços confinados, com plano de resgate pensado para a sua operação.',
    image: cardImage(
      'Profissional suspenso por cordas em treino de resgate, acompanhado por um instrutor',
      `${resgateAvif640} 640w, ${resgateAvif1024} 1024w`,
      `${resgateWebp640} 640w, ${resgateWebp1024} 1024w`,
      resgateWebp1024,
      1024,
    ),
  },
  {
    slug: 'acesso-por-cordas',
    title: 'Serviços de acesso por cordas',
    summary:
      'Serviços em fachadas, estruturas e locais de difícil acesso usando técnicas de acesso por cordas, sem depender de andaimes.',
    image: cardImage(
      'Profissional com capacete trabalhando suspenso por cordas na fachada de um prédio',
      `${cordasAvif640} 640w`,
      `${cordasWebp640} 640w`,
      cordasWebp640,
      640,
    ),
  },
  {
    slug: 'linha-de-vida',
    title: 'Instalação de linha de vida',
    summary:
      'Projeto e instalação de linhas de vida e pontos de ancoragem para trabalho em altura, de acordo com a NR-35.',
    image: cardImage(
      'Profissional em uma escada presa a uma linha de vida instalada sob a cobertura de um galpão',
      `${linhaAvif640} 640w, ${linhaAvif1024} 1024w`,
      `${linhaWebp640} 640w, ${linhaWebp1024} 1024w`,
      linhaWebp1024,
      1024,
    ),
  },
  {
    slug: 'limpeza-de-fachada',
    title: 'Limpeza de fachada',
    summary: 'Limpeza de fachadas e vidros em prédios comerciais, residenciais e industriais, com equipe de acesso por cordas.',
  },
  {
    slug: 'pintura-interna-e-externa',
    title: 'Pintura interna e externa',
    summary: 'Pintura de fachadas, estruturas metálicas e áreas internas, inclusive em pontos altos e de difícil acesso.',
  },
  {
    slug: 'manutencao-predial',
    title: 'Manutenção predial',
    summary: 'Reparos e manutenção em fachadas, telhados e estruturas, com acesso seguro aos pontos mais altos do prédio.',
  },
]
