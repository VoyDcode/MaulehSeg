import type { Route } from './+types/services'
import type { HeaderHandle } from '../components/layout/Header/useHeaderTheme'
import { ListingCta } from '../components/sections/listing/ListingCta/ListingCta'
import { ListingGrid } from '../components/sections/listing/ListingGrid/ListingGrid'
import { ListingHero } from '../components/sections/listing/ListingHero/ListingHero'
import { pages } from '../content/pages'
import { servicesPage } from '../content/services-page'
import { pageMeta } from '../lib/meta'

// Nesta página o cabeçalho mostra o selo de resgate técnico no lugar do logo padrão.
export const handle: HeaderHandle = { headerBrand: 'selo' }

export const meta: Route.MetaFunction = () => pageMeta(pages.services)

export default function ServicesRoute() {
  const { hero, list, cta } = servicesPage

  return (
    <>
      <ListingHero content={hero} />
      <ListingGrid content={list} />
      <ListingCta content={cta} />
    </>
  )
}
