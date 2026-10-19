import type { Route } from './+types/services'
import { PagePlaceholder } from '../components/layout/PagePlaceholder/PagePlaceholder'
import { pages } from '../content/pages'
import { pageMeta } from '../lib/meta'

export const meta: Route.MetaFunction = () => pageMeta(pages.services)

export default function ServicesRoute() {
  return <PagePlaceholder title={pages.services.title} />
}
