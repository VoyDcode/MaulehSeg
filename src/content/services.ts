import type { ContentItem } from '../types/content'
import { cardImage, stockCardPhoto } from './card-image'

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

/*
  PROVISÓRIO: fotos gratuitas do Unsplash (licença Unsplash, uso livre e sem
  atribuição obrigatória), só até o Maurício mandar fotos dos próprios serviços.
  Montagem de linha de vida unsplash.com/photos/umJz4M-iCOw
  Limpeza de fachada unsplash.com/photos/xNQzjCjnUmU
  Pintura unsplash.com/photos/8J4ciksM2OQ · Manutenção predial unsplash.com/photos/IiHDQ75iu80
*/
import montagemAvif640 from '../assets/images/services/montagem-linha-de-vida-telhado-640.avif'
import montagemAvif1024 from '../assets/images/services/montagem-linha-de-vida-telhado-1024.avif'
import montagemWebp640 from '../assets/images/services/montagem-linha-de-vida-telhado-640.webp'
import montagemWebp1024 from '../assets/images/services/montagem-linha-de-vida-telhado-1024.webp'

import limpezaAvif640 from '../assets/images/services/limpeza-fachada-cordas-640.avif'
import limpezaAvif1024 from '../assets/images/services/limpeza-fachada-cordas-1024.avif'
import limpezaWebp640 from '../assets/images/services/limpeza-fachada-cordas-640.webp'
import limpezaWebp1024 from '../assets/images/services/limpeza-fachada-cordas-1024.webp'

import pinturaAvif640 from '../assets/images/services/pintura-parede-cordas-640.avif'
import pinturaAvif1024 from '../assets/images/services/pintura-parede-cordas-1024.avif'
import pinturaWebp640 from '../assets/images/services/pintura-parede-cordas-640.webp'
import pinturaWebp1024 from '../assets/images/services/pintura-parede-cordas-1024.webp'

import manutencaoAvif640 from '../assets/images/services/manutencao-telhado-640.avif'
import manutencaoAvif1024 from '../assets/images/services/manutencao-telhado-1024.avif'
import manutencaoWebp640 from '../assets/images/services/manutencao-telhado-640.webp'
import manutencaoWebp1024 from '../assets/images/services/manutencao-telhado-1024.webp'

// Conforme o portfólio da empresa.
// PROVISÓRIO: confirmar os resumos com o Maurício.
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
      'Projeto e instalação de linhas de vida definitivas e pontos de ancoragem para trabalho em altura, de acordo com a NR-35.',
    image: cardImage(
      'Profissional em uma escada presa a uma linha de vida instalada sob a cobertura de um galpão',
      `${linhaAvif640} 640w, ${linhaAvif1024} 1024w`,
      `${linhaWebp640} 640w, ${linhaWebp1024} 1024w`,
      linhaWebp1024,
      1024,
    ),
  },
  {
    // Pedido do cliente: serviço separado da instalação (linha de vida provisória, montada para um serviço)
    // PROVISÓRIO: confirmar com o Maurício a diferença entre os dois serviços
    slug: 'montagem-de-linha-de-vida',
    title: 'Montagem de linha de vida',
    summary:
      'Linhas de vida provisórias montadas para obras, reformas e paradas de manutenção, e retiradas ao fim do serviço.',
    ...stockCardPhoto(
      'Dois trabalhadores com cinto de segurança presos a cordas sobre um telhado',
      montagemAvif640,
      montagemAvif1024,
      montagemWebp640,
      montagemWebp1024,
    ),
  },
  {
    slug: 'limpeza-de-fachada',
    title: 'Limpeza de fachada',
    summary: 'Limpeza de fachadas e vidros em prédios comerciais, residenciais e industriais, com equipe de acesso por cordas.',
    ...stockCardPhoto(
      'Profissional de capacete descendo por cordas na fachada envidraçada de um prédio',
      limpezaAvif640,
      limpezaAvif1024,
      limpezaWebp640,
      limpezaWebp1024,
    ),
  },
  {
    slug: 'pintura-interna-e-externa',
    title: 'Pintura interna e externa',
    summary: 'Pintura de fachadas, estruturas metálicas e áreas internas, inclusive em pontos altos e de difícil acesso.',
    ...stockCardPhoto(
      'Pintor de capacete preso a uma corda pintando uma parede alta',
      pinturaAvif640,
      pinturaAvif1024,
      pinturaWebp640,
      pinturaWebp1024,
    ),
  },
  {
    slug: 'manutencao-predial',
    title: 'Manutenção predial',
    summary: 'Reparos e manutenção em fachadas, telhados e estruturas, com acesso seguro aos pontos mais altos do prédio.',
    ...stockCardPhoto(
      'Profissional de capacete e cinto de segurança sobre o telhado de um prédio',
      manutencaoAvif640,
      manutencaoAvif1024,
      manutencaoWebp640,
      manutencaoWebp1024,
    ),
  },
]
