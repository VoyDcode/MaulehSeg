import { paths } from '../paths'
import type { ListingPageContent } from '../types/content'
import { contactCta } from './navigation'
import { pages } from './pages'
import { services } from './services'

import escritorioAvif640 from '../assets/images/services/orcamento-escritorio-640.avif'
import escritorioAvif1024 from '../assets/images/services/orcamento-escritorio-1024.avif'
import escritorioWebp640 from '../assets/images/services/orcamento-escritorio-640.webp'
import escritorioWebp1024 from '../assets/images/services/orcamento-escritorio-1024.webp'

// Fica separado de services.ts porque navigation.ts importa a lista de serviços
// (juntar os dois criaria import circular).
// O botão de orçamento leva para a página /contato, o mesmo destino do "Fale conosco".
const budgetAction = { label: 'Solicitar orçamento', href: contactCta.href }

export const servicesPage: ListingPageContent = {
  hero: {
    // PROVISÓRIO: confirmar título com o cliente
    title: 'Segurança em altura para cada necessidade',
    text: pages.services.description,
    action: budgetAction,
  },
  list: {
    title: 'Nossos serviços',
    basePath: paths.services,
    items: services,
  },
  cta: {
    eyebrow: 'Agende o orçamento',
    // PROVISÓRIO: confirmar textos com o cliente
    title: 'Seu serviço em altura,',
    highlight: 'feito com segurança.',
    text: 'Conte o que precisa ser feito e onde. A MaulehSeg avalia o local e indica a forma mais segura de executar o serviço.',
    action: budgetAction,
    image: {
      src: escritorioWebp1024,
      sources: [
        { type: 'image/avif', srcSet: `${escritorioAvif640} 640w, ${escritorioAvif1024} 1024w` },
        { type: 'image/webp', srcSet: `${escritorioWebp640} 640w, ${escritorioWebp1024} 1024w` },
      ],
      sizes: '(min-width: 1024px) 50vw, 100vw',
      width: 1024,
      height: 768,
      // PROVISÓRIO: confirmar que é o Maurício (fotos 4 e 5 do handoff)
      alt: 'Maurício, fundador da MaulehSeg, trabalhando no escritório',
    },
  },
}
