import { paths } from '../paths'
import type { ListingPageContent } from '../types/content'
import { contactCta } from './navigation'
import { pages } from './pages'
import { trainings } from './trainings'

import chamadaAvif640 from '../assets/images/trainings/chamada-treino-pratico-640.avif'
import chamadaAvif900 from '../assets/images/trainings/chamada-treino-pratico-900.avif'
import chamadaWebp640 from '../assets/images/trainings/chamada-treino-pratico-640.webp'
import chamadaWebp900 from '../assets/images/trainings/chamada-treino-pratico-900.webp'

// Mesmo layout de Serviços (wireframe 04 = 03 com outros textos).
// Fica separado de trainings.ts porque navigation.ts importa a lista (evita import circular).
// O botão de orçamento leva para a página /contato, o mesmo destino do "Fale conosco".
const budgetAction = { label: 'Solicitar orçamento', href: contactCta.href }

export const trainingsPage: ListingPageContent = {
  hero: {
    // PROVISÓRIO: confirmar título com o cliente
    title: 'Treinamentos em NRs com teoria e prática',
    text: pages.trainings.description,
    action: budgetAction,
  },
  list: {
    title: 'Nossos treinamentos',
    basePath: paths.trainings,
    items: trainings,
  },
  cta: {
    eyebrow: 'Agende o treinamento',
    // PROVISÓRIO: confirmar textos com o cliente
    title: 'Sua equipe treinada,',
    highlight: 'pronta para agir.',
    text: 'Conte quantas pessoas precisam ser treinadas e em quais normas. A MaulehSeg monta a turma e leva o treinamento até a sua empresa.',
    action: budgetAction,
    image: {
      src: chamadaWebp900,
      sources: [
        { type: 'image/avif', srcSet: `${chamadaAvif640} 640w, ${chamadaAvif900} 900w` },
        { type: 'image/webp', srcSet: `${chamadaWebp640} 640w, ${chamadaWebp900} 900w` },
      ],
      sizes: '(min-width: 1024px) 50vw, 100vw',
      width: 900,
      height: 675,
      alt: 'Instrutor ajudando um aluno a ajustar o equipamento de cordas durante um treino prático',
    },
  },
}
