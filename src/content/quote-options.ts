import type { QuoteOptionGroup } from '../types/content'
import { consultingLinks, serviceLinks, trainingLinks } from './navigation'

// Campo "Tipo de serviço" do formulário de orçamento: todas as opções do site, em grupos.
// Fica num arquivo próprio para a página /contato não carregar os textos das páginas de detalhe.
export const quoteOptions: QuoteOptionGroup[] = [
  { label: 'Serviços', options: serviceLinks },
  { label: 'Treinamentos', options: trainingLinks },
  { label: 'Consultoria', options: consultingLinks },
]
