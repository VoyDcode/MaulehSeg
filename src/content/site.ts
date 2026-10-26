import type { SiteInfo } from '../types/content'

// PROVISÓRIO: substituir pelos dados oficiais da empresa.
export const site: SiteInfo = {
  name: 'MaulehSeg',
  tagline: 'Consultoria em segurança do trabalho, laudos técnicos e treinamentos em NRs para empresas que preferem prevenir a remediar.',
  phone: { display: '(11) 95980-0154', href: 'tel:+5511959800154' },
  email: 'mauricio.maulehseg@hotmail.com',
  address: 'Suzano - SP, Brasil',
  hours: [
    { days: 'Segunda a sexta', time: '09h às 17h' },
    { days: 'Sábado e domingo', time: 'Fechado' },
  ],
  social: [],
}
