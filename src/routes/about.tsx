import type { Route } from './+types/about'
import { AboutHero } from '../components/sections/about/AboutHero/AboutHero'
import { NavCards } from '../components/sections/about/NavCards/NavCards'
import { PanoramicStrip } from '../components/sections/about/PanoramicStrip/PanoramicStrip'
import { ValueStrip } from '../components/sections/about/ValueStrip/ValueStrip'
import { aboutContent } from '../content/about'
import { pages } from '../content/pages'
import { pageMeta } from '../lib/meta'

export const meta: Route.MetaFunction = () => pageMeta(pages.about)

export const links: Route.LinksFunction = () => {
  const image = aboutContent.hero.image
  const avif = image?.sources.find((s) => s.type === 'image/avif')
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

export default function AboutRoute() {
  const { hero, panoramic, values, navCards } = aboutContent

  return (
    <>
      <AboutHero content={hero} />
      {panoramic && <PanoramicStrip image={panoramic} />}
      <div id={values.id}>
        {values.items.map((item) => (
          <ValueStrip key={item.label} item={item} />
        ))}
      </div>
      <NavCards content={navCards} />
    </>
  )
}
