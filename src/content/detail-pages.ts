import { paths } from '../paths'
import type { ContentItem, DetailPageContent, ResponsiveImage } from '../types/content'
import { consulting } from './consulting'
import { consultingPage } from './consulting-page'
import { consultingSections } from './details/consulting-sections'
import { serviceSections } from './details/service-sections'
import { trainingSections } from './details/training-sections'
import { homeContent } from './home'
import { services } from './services'
import { servicesPage } from './services-page'
import { trainings } from './trainings'

import resgateAvif640 from '../assets/images/about/resgate-ar-livre-640.avif'
import resgateAvif1024 from '../assets/images/about/resgate-ar-livre-1024.avif'
import resgateWebp640 from '../assets/images/about/resgate-ar-livre-640.webp'
import resgateWebp1024 from '../assets/images/about/resgate-ar-livre-1024.webp'

/*
  Conteúdo do template de detalhe (frame "Projetos Template" do Figma).
  Fica separado das listas porque navigation.ts importa services, trainings e
  consulting: assim os textos longos só carregam nas páginas de detalhe.
*/

// PROVISÓRIO: o Figma também lista estados atendidos ("São Paulo, Rio de Janeiro..."). Confirmar com o cliente.
const areasOfWork = 'Áreas de atuação: resgate técnico, acesso por cordas, treinamentos em NRs e consultoria em segurança do trabalho'

const photosOf = (items: ContentItem[]) => items.flatMap((item) => (item.image ? [item.image] : []))

const resgateArLivre: ResponsiveImage = {
  src: resgateWebp1024,
  sources: [
    { type: 'image/avif', srcSet: `${resgateAvif640} 640w, ${resgateAvif1024} 1024w` },
    { type: 'image/webp', srcSet: `${resgateWebp640} 640w, ${resgateWebp1024} 1024w` },
  ],
  sizes: '100vw',
  width: 1024,
  height: 768,
  alt: 'Profissional de capacete, viseira e protetor auricular operando um sistema de cordas durante um resgate ao ar livre',
}

const factoryTraining = homeContent.hero.image ? [homeContent.hero.image] : []

// PROVISÓRIO: textos da faixa de contato e galerias montadas com as fotos que já temos.
// O ideal é cada serviço ter as próprias fotos de obra (como no Figma).
export const serviceDetailPage: DetailPageContent = {
  label: 'Serviços',
  basePath: paths.services,
  items: services,
  sections: serviceSections,
  gallery: [...photosOf(services), resgateArLivre],
  contact: {
    eyebrow: areasOfWork,
    title: 'Tem algum projeto em mente?',
    text: 'Entre em contato e conte o que precisa ser feito e onde. A MaulehSeg avalia o local e explica, de forma clara e transparente, como o serviço será executado com segurança.',
    messageLabel: 'Conte um pouco sobre o seu projeto',
    image: servicesPage.cta.image,
  },
}

export const trainingDetailPage: DetailPageContent = {
  label: 'Treinamentos',
  basePath: paths.trainings,
  items: trainings,
  sections: trainingSections,
  gallery: [...photosOf(trainings), ...factoryTraining],
  contact: {
    eyebrow: areasOfWork,
    title: 'Quer este treinamento na sua empresa?',
    text: 'Conte quantas pessoas precisam ser treinadas e em quais normas. A MaulehSeg monta a turma e combina com você a data, o local e o formato das aulas.',
    messageLabel: 'Quantas pessoas, em que período e em qual cidade?',
    // A foto da chamada de Treinamentos repete a cena da galeria; aqui vai a do Maurício.
    image: consultingPage.cta.image,
  },
}

export const consultingDetailPage: DetailPageContent = {
  label: 'Consultoria',
  basePath: paths.consulting,
  items: consulting,
  sections: consultingSections,
  gallery: [...photosOf(consulting), ...factoryTraining],
  contact: {
    eyebrow: areasOfWork,
    title: 'Quer apoio na segurança da sua empresa?',
    text: 'Conte como funciona a sua operação e quais são as dificuldades. A MaulehSeg avalia o cenário e propõe o acompanhamento certo, de forma clara e transparente.',
    messageLabel: 'Conte um pouco sobre a sua empresa e a necessidade',
    image: consultingPage.cta.image,
  },
}
