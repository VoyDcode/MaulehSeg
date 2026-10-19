import type { SiteInfo } from '../types/content'

// PROVISÓRIO: substituir pelos dados oficiais da empresa.
export const site: SiteInfo = {
  name: 'MaulehSeg',
  tagline: 'Texto institucional provisório sobre a empresa.',
  phone: { display: '(11) 0000-0000', href: 'tel:+551100000000' },
  email: 'contato@example.com',
  address: 'Endereço provisório, 000, bairro, cidade',
  hours: [
    { days: 'Segunda a sexta', time: '09h às 17h' },
    { days: 'Sábado e domingo', time: 'Fechado' },
  ],
  social: [],
}
