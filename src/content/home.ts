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

export const homeContent: HomeContent = {
  hero: {
    title: 'Sua equipe protegida, sua empresa em conformidade',
    subtitle:
      'Consultoria em segurança do trabalho, laudos técnicos e treinamentos em Normas Regulamentadoras para reduzir riscos, evitar autuações e fortalecer a cultura de prevenção.',
    primaryAction: { label: 'Conheça nossos serviços', href: paths.services },
    secondaryAction: { label: 'Quem é a MaulehSeg', href: `#${aboutId}` },
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
    title: 'Prevenção feita por quem conhece a rotina da sua operação',
    text: 'Vamos até a sua empresa, acompanhamos o dia a dia de cada atividade e identificamos os riscos reais do trabalho. A partir disso, entregamos documentação técnica e treinamentos que funcionam na prática, e não apenas no papel.',
    action: { label: 'Conheça nossa história', href: paths.about },
  },
  focus: {
    title: 'Nosso foco',
    text: [
      { text: 'Trabalhamos para que cada colaborador ' },
      { text: 'volte para casa em segurança', highlight: true },
      { text: ' e para que a sua empresa esteja sempre em dia com as NRs e o eSocial.' },
    ],
    stats: [
      { value: '+15', label: 'Anos de experiência' },
      { value: '+50', label: 'Empresas atendidas' },
      { value: '+1000', label: 'Profissionais treinados' },
    ],
  },
  clients: {
    title: 'Clientes',
    items: clients,
  },
}
