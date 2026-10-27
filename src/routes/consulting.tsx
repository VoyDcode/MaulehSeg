import type { Route } from './+types/consulting'
import { ListingCta } from '../components/sections/listing/ListingCta/ListingCta'
import { ListingGrid } from '../components/sections/listing/ListingGrid/ListingGrid'
import { ListingHero } from '../components/sections/listing/ListingHero/ListingHero'
import { consultingPage } from '../content/consulting-page'
import { pages } from '../content/pages'
import { pageMeta } from '../lib/meta'

// Mesmo layout de Serviços e Treinamentos, com o logo padrão no cabeçalho.
export const meta: Route.MetaFunction = () => pageMeta(pages.consulting)

export default function ConsultingRoute() {
  const { hero, list, cta } = consultingPage

  return (
    <>
      <ListingHero content={hero} />
      <ListingGrid content={list} />
      <ListingCta content={cta} />
    </>
  )
}
