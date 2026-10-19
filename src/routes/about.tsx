import type { Route } from './+types/about'
import { PagePlaceholder } from '../components/layout/PagePlaceholder/PagePlaceholder'
import { pages } from '../content/pages'
import { pageMeta } from '../lib/meta'

export const meta: Route.MetaFunction = () => pageMeta(pages.about)

export default function AboutRoute() {
  return <PagePlaceholder title={pages.about.title} />
}
