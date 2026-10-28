import type { Route } from './+types/training-detail'
import { DetailPage } from '../components/sections/detail/DetailPage/DetailPage'
import { trainingDetailPage } from '../content/detail-pages'
import { quoteOptions } from '../content/quote-options'
import { detailMeta } from '../lib/detail-meta'

export const meta: Route.MetaFunction = ({ params }) => detailMeta(trainingDetailPage, params.slug)

export default function TrainingDetailRoute({ params }: Route.ComponentProps) {
  // key: ao trocar de item pelo menu, a galeria e o formulário começam do zero
  return <DetailPage key={params.slug} content={trainingDetailPage} slug={params.slug} quoteOptions={quoteOptions} />
}
