import type { Route } from './+types/trainings'
import { PagePlaceholder } from '../components/layout/PagePlaceholder/PagePlaceholder'
import { pages } from '../content/pages'
import { pageMeta } from '../lib/meta'

export const meta: Route.MetaFunction = () => pageMeta(pages.trainings)

export default function TrainingsRoute() {
  return <PagePlaceholder title={pages.trainings.title} />
}
