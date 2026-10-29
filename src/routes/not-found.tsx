import type { Route } from './+types/not-found'
import { NotFoundContent } from '../components/layout/NotFoundContent/NotFoundContent'
import { pages } from '../content/pages'
import { pageMeta } from '../lib/meta'

export const meta: Route.MetaFunction = () => pageMeta({ ...pages.notFound, noIndex: true })

export default function NotFoundRoute() {
  return <NotFoundContent />
}
