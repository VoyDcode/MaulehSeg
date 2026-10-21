import type { Route } from './+types/home'
import type { HeaderHandle } from '../components/layout/Header/useHeaderTheme'
import { AboutTeaser } from '../components/sections/home/AboutTeaser/AboutTeaser'
import { ClientsSection } from '../components/sections/home/ClientsSection/ClientsSection'
import { FocusSection } from '../components/sections/home/FocusSection/FocusSection'
import { HomeHero } from '../components/sections/home/HomeHero/HomeHero'
import { homeContent } from '../content/home'
import { pages } from '../content/pages'
import { pageMeta } from '../lib/meta'

export const handle: HeaderHandle = { headerTheme: 'light' }

export const meta: Route.MetaFunction = () => pageMeta({ description: pages.home.description })

export const links: Route.LinksFunction = () => {
  const image = homeContent.hero.image
  const avif = image?.sources.find((source) => source.type === 'image/avif')
  if (!image || !avif) return []

  return [
    {
      rel: 'preload',
      as: 'image',
      type: avif.type,
      imageSrcSet: avif.srcSet,
      imageSizes: image.sizes,
      fetchPriority: 'high',
    },
  ]
}

export default function HomeRoute() {
  return (
    <>
      <HomeHero content={homeContent.hero} />
      <AboutTeaser content={homeContent.about} />
      <FocusSection content={homeContent.focus} />
      <ClientsSection content={homeContent.clients} />
    </>
  )
}
