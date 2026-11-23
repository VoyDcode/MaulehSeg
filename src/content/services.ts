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
  PROVISÓRIO: foto gratuita do Unsplash (licença Unsplash, uso livre e sem
  atribuição obrigatória), só até o Maurício mandar uma foto do próprio serviço.
  Limpeza de fachada unsplash.com/photos/xNQzjCjnUmU
*/
import limpezaAvif640 from '../assets/images/services/limpeza-fachada-cordas-640.avif'
import limpezaAvif1024 from '../assets/images/services/limpeza-fachada-cordas-1024.avif'
import limpezaWebp640 from '../assets/images/services/limpeza-fachada-cordas-640.webp'
import limpezaWebp1024 from '../assets/images/services/limpeza-fachada-cordas-1024.webp'

// Fotos de trabalhos da MaulehSeg enviadas pelo Maurício (novembro), recortadas em 3:2
import pinturaAvif640 from '../assets/images/services/pintura-estrutura-galpao-cordas-640.avif'
import pinturaAvif1024 from '../assets/images/services/pintura-estrutura-galpao-cordas-1024.avif'
import pinturaWebp640 from '../assets/images/services/pintura-estrutura-galpao-cordas-640.webp'
import pinturaWebp1024 from '../assets/images/services/pintura-estrutura-galpao-cordas-1024.webp'

import manutencaoAvif640 from '../assets/images/services/manutencao-reparo-fachada-cordas-640.avif'
import manutencaoAvif899 from '../assets/images/services/manutencao-reparo-fachada-cordas-899.avif'
import manutencaoWebp640 from '../assets/images/services/manutencao-reparo-fachada-cordas-640.webp'
import manutencaoWebp899 from '../assets/images/services/manutencao-reparo-fachada-cordas-899.webp'

// Conforme o portfólio da empresa.
// PROVISÓRIO: confirmar os resumos com o Maurício.
export const services: ContentItem[] = [
  {
    slug: 'resgate-tecnico-industrial',
    title: 'Resgate técnico industrial',
    summary:
      'Fornecemos equipe de resgate devidamente capacitada para a sua empresa ou se preferir realizamos o treinamento da sua equipe de trabalhadores.',
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
    image: cardImage(
      'Profissional suspenso por cordas, com uma lata de tinta, pintando a estrutura metálica da cobertura de um galpão',
      `${pinturaAvif640} 640w, ${pinturaAvif1024} 1024w`,
      `${pinturaWebp640} 640w, ${pinturaWebp1024} 1024w`,
      pinturaWebp1024,
      1024,
    ),
  },
  {
    slug: 'manutencao-predial',
    title: 'Manutenção predial',
    summary: 'Reparos e manutenção em fachadas, telhados e estruturas, com acesso seguro aos pontos mais altos do prédio.',
    image: cardImage(
      'Profissional de capacete suspenso por cordas fazendo reparo na fachada de um prédio, com a cidade ao fundo',
      `${manutencaoAvif640} 640w, ${manutencaoAvif899} 899w`,
      `${manutencaoWebp640} 640w, ${manutencaoWebp899} 899w`,
      manutencaoWebp899,
      899,
    ),
  },
]
