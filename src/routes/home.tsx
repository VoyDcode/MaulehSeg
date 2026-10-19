import type { Route } from './+types/home'
import type { HeaderHandle } from '../components/layout/Header/useHeaderTheme'
import { PagePlaceholder } from '../components/layout/PagePlaceholder/PagePlaceholder'
import { pages } from '../content/pages'
import { pageMeta } from '../lib/meta'

export const handle: HeaderHandle = { headerTheme: 'light' }

export const meta: Route.MetaFunction = () => pageMeta({ description: pages.home.description })

export default function HomeRoute() {
  return <PagePlaceholder title={pages.home.title} />
}
