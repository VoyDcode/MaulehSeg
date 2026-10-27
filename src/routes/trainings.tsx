import type { Route } from './+types/trainings'
import { ListingCta } from '../components/sections/listing/ListingCta/ListingCta'
import { ListingGrid } from '../components/sections/listing/ListingGrid/ListingGrid'
import { ListingHero } from '../components/sections/listing/ListingHero/ListingHero'
import { pages } from '../content/pages'
import { trainingsPage } from '../content/trainings-page'
import { pageMeta } from '../lib/meta'

// Mesmo layout de Serviços, com o logo padrão no cabeçalho (sem handle de selo).
export const meta: Route.MetaFunction = () => pageMeta(pages.trainings)

export default function TrainingsRoute() {
  const { hero, list, cta } = trainingsPage

  return (
    <>
      <ListingHero content={hero} />
      <ListingGrid content={list} />
      <ListingCta content={cta} />
    </>
  )
}
