import { paths } from '../paths'
import type { ContentItem, DetailPageContent } from '../types/content'
import { consulting } from './consulting'
import { consultingPage } from './consulting-page'
import { consultingSections } from './details/consulting-sections'
import { serviceSections } from './details/service-sections'
import { trainingSections } from './details/training-sections'
import { consultingGallery, trainingGallery } from './gallery-photos'
import { sealImage } from './seal'
import { services } from './services'
import { servicesPage } from './services-page'
import { trainings } from './trainings'

/*
  Conteúdo do template de detalhe (frame "Projetos Template" do Figma).
  Fica separado das listas porque navigation.ts importa services, trainings e
  consulting: assim os textos longos só carregam nas páginas de detalhe.
*/

// PROVISÓRIO: o Figma também lista estados atendidos ("São Paulo, Rio de Janeiro..."). Confirmar com o cliente.
const areasOfWork = 'Áreas de atuação: resgate técnico, acesso por cordas, treinamentos em NRs e consultoria em segurança do trabalho'

// Só fotos de trabalhos da própria MaulehSeg: as de banco de imagens ficam de fora
const photosOf = (items: ContentItem[]) =>
  items.flatMap((item) => (item.image && !item.stockImage ? [item.image] : []))

/*
  Galeria dos serviços: pedido do cliente, só fotos de serviços realizados, sem treinamento.
  A foto do card de Resgate técnico é de um treino de resgate, então fica fora da galeria
  geral (ela ainda abre a galeria da própria página de Resgate técnico).
*/
const servicePhotos = photosOf(services.filter((service) => service.slug !== 'resgate-tecnico-industrial'))

// PROVISÓRIO: textos da faixa de contato.
// O ideal é cada serviço ter as próprias fotos de obra (como no Figma).
export const serviceDetailPage: DetailPageContent = {
  label: 'Serviços',
  basePath: paths.services,
  items: services,
  sections: serviceSections,
  gallery: servicePhotos,
  emblem: sealImage,
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
  gallery: trainingGallery,
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
  gallery: consultingGallery,
  contact: {
    eyebrow: areasOfWork,
    title: 'Quer apoio na segurança da sua empresa?',
    text: 'Conte como funciona a sua operação e quais são as dificuldades. A MaulehSeg avalia o cenário e propõe o acompanhamento certo, de forma clara e transparente.',
    messageLabel: 'Conte um pouco sobre a sua empresa e a necessidade',
    image: consultingPage.cta.image,
  },
}
