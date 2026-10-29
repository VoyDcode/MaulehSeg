import type { Route } from './+types/service-detail'
import type { HeaderHandle } from '../components/layout/Header/useHeaderTheme'
import { DetailPage } from '../components/sections/detail/DetailPage/DetailPage'
import { serviceDetailPage } from '../content/detail-pages'
import { quoteOptions } from '../content/quote-options'
import { detailMeta } from '../lib/detail-meta'
// Mesma paleta preto e laranja da listagem de Serviços
import styles from './services.module.css'

// Como na listagem de Serviços, o cabeçalho é preto e mostra o selo de resgate técnico.
export const handle: HeaderHandle = { headerBrand: 'selo', headerTheme: 'dark' }

export const meta: Route.MetaFunction = ({ params }) => detailMeta(serviceDetailPage, params.slug)

export default function ServiceDetailRoute({ params }: Route.ComponentProps) {
  // key: ao trocar de item pelo menu, a galeria e o formulário começam do zero
  return (
    <div className={styles.page}>
      <DetailPage key={params.slug} content={serviceDetailPage} slug={params.slug} quoteOptions={quoteOptions} />
    </div>
  )
}
