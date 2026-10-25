import heroAvif1024 from '../assets/images/home/hero-treinamento-fabrica-1024.avif'
import heroWebp1024 from '../assets/images/home/hero-treinamento-fabrica-1024.webp'
import heroAvif1600 from '../assets/images/home/hero-treinamento-fabrica-1600.avif'
import heroWebp1600 from '../assets/images/home/hero-treinamento-fabrica-1600.webp'
import heroAvif640 from '../assets/images/home/hero-treinamento-fabrica-640.avif'
import heroWebp640 from '../assets/images/home/hero-treinamento-fabrica-640.webp'
import { paths } from '../paths'
import type { HomeContent } from '../types/content'
import { clients } from './clients'

const aboutId = 'sobre'

// PROVISÓRIO: textos aguardando o conteúdo oficial do cliente.
export const homeContent: HomeContent = {
  hero: {
    title: 'Construindo seu futuro com precisão e expertise',
    subtitle: 'Nós iluminamos sua visão de vida e somos criativos, agregando inovação tecnológica e construção.',
    primaryAction: { label: 'Saiba mais', href: paths.services },
    secondaryAction: { label: 'Aprenda brevemente sobre nós', href: `#${aboutId}` },
    image: {
      src: heroWebp1600,
      sources: [
        { type: 'image/avif', srcSet: `${heroAvif640} 640w, ${heroAvif1024} 1024w, ${heroAvif1600} 1600w` },
        { type: 'image/webp', srcSet: `${heroWebp640} 640w, ${heroWebp1024} 1024w, ${heroWebp1600} 1600w` },
      ],
      sizes: '100vw',
      width: 1600,
      height: 900,
      alt: 'Instrutor da MaulehSeg conduzindo um treinamento de segurança com trabalhadores dentro de uma fábrica',
    },
  },
  about: {
    id: aboutId,
    title: 'Frase de impacto sobre quem é a empresa',
    text: 'Espaço para 2 ou 3 frases sobre a origem, a experiência e a forma de atuação da empresa. Conteúdo a ser enviado pelo cliente.',
    action: { label: 'Entenda nossa história', href: paths.about },
  },
  focus: {
    title: 'Nosso foco',
    text: [
      { text: 'Espaço para a frase que resume ' },
      { text: 'o foco da empresa', highlight: true },
      { text: ', com um trecho em destaque como este.' },
    ],
    stats: [
      { value: '80%', label: 'Indicador A' },
      { value: '99%', label: 'Indicador B' },
      { value: '100%', label: 'Indicador C' },
    ],
  },
  clients: {
    title: 'Clientes',
    items: clients,
  },
}
