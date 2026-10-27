import type { ContentItem } from '../types/content'
import { cardImage } from './card-image'

import gestaoAvif640 from '../assets/images/consulting/gestao-mesa-640.avif'
import gestaoAvif1024 from '../assets/images/consulting/gestao-mesa-1024.avif'
import gestaoWebp640 from '../assets/images/consulting/gestao-mesa-640.webp'
import gestaoWebp1024 from '../assets/images/consulting/gestao-mesa-1024.webp'

import sesmtAvif640 from '../assets/images/consulting/sesmt-equipe-fabrica-640.avif'
import sesmtAvif1024 from '../assets/images/consulting/sesmt-equipe-fabrica-1024.avif'
import sesmtWebp640 from '../assets/images/consulting/sesmt-equipe-fabrica-640.webp'
import sesmtWebp1024 from '../assets/images/consulting/sesmt-equipe-fabrica-1024.webp'

import riscoAvif640 from '../assets/images/consulting/alto-risco-cordas-640.avif'
import riscoAvif1024 from '../assets/images/consulting/alto-risco-cordas-1024.avif'
import riscoWebp640 from '../assets/images/consulting/alto-risco-cordas-640.webp'
import riscoWebp1024 from '../assets/images/consulting/alto-risco-cordas-1024.webp'

// Conforme o portfólio da empresa.
// PROVISÓRIO: confirmar os resumos com o Maurício.
export const consulting: ContentItem[] = [
  {
    slug: 'gestao-em-seguranca-do-trabalho',
    title: 'Gestão em segurança do trabalho',
    summary:
      'Acompanhamento da segurança do trabalho da sua empresa, com diagnóstico, plano de ação e apoio no cumprimento das NRs.',
    image: cardImage(
      'Consultor de capacete e óculos de proteção preenchendo documentos em uma mesa de escritório',
      `${gestaoAvif640} 640w, ${gestaoAvif1024} 1024w`,
      `${gestaoWebp640} 640w, ${gestaoWebp1024} 1024w`,
      gestaoWebp1024,
      1024,
    ),
  },
  {
    slug: 'equipe-sesmt',
    title: 'Equipe especializada de SESMT',
    summary:
      'Profissionais de segurança do trabalho para compor ou reforçar o SESMT de indústrias e construtoras.',
    image: cardImage(
      'Profissional de segurança orientando um grupo de trabalhadores de capacete dentro de uma fábrica',
      `${sesmtAvif640} 640w, ${sesmtAvif1024} 1024w`,
      `${sesmtWebp640} 640w, ${sesmtWebp1024} 1024w`,
      sesmtWebp1024,
      1024,
    ),
  },
  {
    slug: 'atividades-de-alto-risco',
    title: 'Suporte a atividades de alto risco',
    summary:
      'Planejamento e acompanhamento de atividades críticas, como paradas de manutenção, trabalho em altura e espaços confinados.',
    image: cardImage(
      'Profissional com capacete e protetor auricular operando cordas de segurança ao lado de uma estrutura industrial',
      `${riscoAvif640} 640w, ${riscoAvif1024} 1024w`,
      `${riscoWebp640} 640w, ${riscoWebp1024} 1024w`,
      riscoWebp1024,
      1024,
    ),
  },
]
