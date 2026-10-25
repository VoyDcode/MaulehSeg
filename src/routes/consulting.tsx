import type { Route } from './+types/consulting'
import { PagePlaceholder } from '../components/layout/PagePlaceholder/PagePlaceholder'
import { pages } from '../content/pages'
import { pageMeta } from '../lib/meta'

export const meta: Route.MetaFunction = () => pageMeta(pages.consulting)

export default function ConsultingRoute() {
  return <PagePlaceholder title={pages.consulting.title} />
}
