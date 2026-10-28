import { whatsappUrl } from '../lib/whatsapp'
import type { ContactPageContent, HomeContent, QuoteOptionGroup } from '../types/content'
import { clients } from './clients'
import { quoteOptions } from './quote-options'
import { site } from './site'

// PROVISÓRIO: confirmar todos os textos com o cliente.
export const contactPage: ContactPageContent = {
  hero: {
    eyebrow: 'Fale conosco',
    title: 'Solicite um orçamento',
    text: 'Conte o que a sua empresa precisa: um serviço em altura, um treinamento em NRs ou uma consultoria em segurança do trabalho. A MaulehSeg avalia o seu caso e responde com uma proposta clara.',
  },
  form: {
    title: 'Tem algum projeto em mente?',
    text: 'Quanto mais detalhes, melhor: o local, o prazo e o número de pessoas ajudam a montar a proposta certa.',
    messageLabel: 'Conte um pouco sobre o seu projeto',
  },
  channels: {
    title: 'Prefere falar direto?',
    items: [
      {
        kind: 'whatsapp',
        label: 'WhatsApp',
        value: site.phone.display,
        href: whatsappUrl('Olá! Vim pelo site da MaulehSeg e gostaria de falar sobre um orçamento.'),
      },
      { kind: 'phone', label: 'Telefone', value: site.phone.display, href: site.phone.href },
      { kind: 'email', label: 'E-mail', value: site.email, href: `mailto:${site.email}` },
      { kind: 'address', label: 'Atendimento', value: site.address },
    ],
  },
  steps: {
    title: 'Como funciona',
    items: [
      {
        title: 'Você conta o que precisa',
        text: 'Pelo formulário, pelo WhatsApp ou por e-mail, com o serviço, o treinamento ou a consultoria que procura.',
      },
      {
        title: 'A MaulehSeg avalia',
        text: 'Entendemos o local, a atividade e as normas envolvidas. Se for preciso, combinamos uma visita técnica.',
      },
      {
        title: 'Você recebe a proposta',
        text: 'Com o escopo, o prazo e os valores explicados, para você decidir com segurança.',
      },
    ],
  },
}

// Aqui o visitante ainda não escolheu nada: o campo começa vazio e ganha a opção "Outro assunto".
export const contactQuoteOptions: QuoteOptionGroup[] = [
  ...quoteOptions,
  { label: 'Outros', options: [{ label: 'Outro assunto', href: 'outro-assunto' }] },
]

export const contactClients: HomeContent['clients'] = {
  title: 'Quem já confia na MaulehSeg',
  items: clients,
}
