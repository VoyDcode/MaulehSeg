import { paths } from '../paths'
import type { ListingPageContent } from '../types/content'
import { consulting } from './consulting'
import { contactCta } from './navigation'
import { pages } from './pages'

import consultorAvif640 from '../assets/images/consulting/chamada-consultor-640.avif'
import consultorAvif1024 from '../assets/images/consulting/chamada-consultor-1024.avif'
import consultorWebp640 from '../assets/images/consulting/chamada-consultor-640.webp'
import consultorWebp1024 from '../assets/images/consulting/chamada-consultor-1024.webp'

// Mesmo layout de Serviços e Treinamentos.
// Fica separado de consulting.ts porque navigation.ts importa a lista (evita import circular).
// O botão de orçamento leva para a página /contato, o mesmo destino do "Fale conosco".
const budgetAction = { label: 'Solicitar orçamento', href: contactCta.href }

export const consultingPage: ListingPageContent = {
  hero: {
    // PROVISÓRIO: confirmar título com o cliente
    title: 'Consultoria em segurança do trabalho para a sua operação',
    text: pages.consulting.description,
    action: budgetAction,
  },
  list: {
    title: 'Nossas consultorias',
    basePath: paths.consulting,
    items: consulting,
  },
  cta: {
    eyebrow: 'Fale com um consultor',
    // PROVISÓRIO: confirmar textos com o cliente
    title: 'Sua empresa em dia',
    highlight: 'com as NRs.',
    text: 'Conte como funciona a sua operação e quais são as dificuldades. A MaulehSeg avalia o cenário e propõe o acompanhamento certo para a sua empresa.',
    action: budgetAction,
    image: {
      src: consultorWebp1024,
      sources: [
        { type: 'image/avif', srcSet: `${consultorAvif640} 640w, ${consultorAvif1024} 1024w` },
        { type: 'image/webp', srcSet: `${consultorWebp640} 640w, ${consultorWebp1024} 1024w` },
      ],
      sizes: '(min-width: 1024px) 50vw, 100vw',
      width: 1024,
      height: 768,
      // PROVISÓRIO: confirmar que é o Maurício (fotos 4 e 5 do handoff)
      alt: 'Maurício, fundador da MaulehSeg, sorrindo em sua mesa de trabalho',
    },
  },
}
