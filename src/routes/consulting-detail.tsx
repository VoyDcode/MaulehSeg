import type { Route } from './+types/consulting-detail'
import { DetailPage } from '../components/sections/detail/DetailPage/DetailPage'
import { consultingDetailPage } from '../content/detail-pages'
import { quoteOptions } from '../content/quote-options'
import { detailMeta } from '../lib/detail-meta'

export const meta: Route.MetaFunction = ({ params }) => detailMeta(consultingDetailPage, params.slug)

export default function ConsultingDetailRoute({ params }: Route.ComponentProps) {
  // key: ao trocar de item pelo menu, a galeria e o formulário começam do zero
  return <DetailPage key={params.slug} content={consultingDetailPage} slug={params.slug} quoteOptions={quoteOptions} />
}
