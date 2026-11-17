import type { ResponsiveImage } from '../types/content'

import seloAvif320 from '../assets/images/brand/selo-resgate-tecnico-320.avif'
import seloAvif480 from '../assets/images/brand/selo-resgate-tecnico-480.avif'
import seloAvif800 from '../assets/images/brand/selo-resgate-tecnico-800.avif'
import seloWebp320 from '../assets/images/brand/selo-resgate-tecnico-320.webp'
import seloWebp480 from '../assets/images/brand/selo-resgate-tecnico-480.webp'
import seloWebp800 from '../assets/images/brand/selo-resgate-tecnico-800.webp'

/*
  Pedido do cliente: selo nas cores originais, grande, à direita do título nas páginas
  de Serviços (listagem e detalhe). O `sizes` acompanha a largura do selo definida em
  ListingHero.module.css e DetailHero.module.css.
*/
export const sealImage: ResponsiveImage = {
  src: seloWebp480,
  sources: [
    { type: 'image/avif', srcSet: `${seloAvif320} 320w, ${seloAvif480} 480w, ${seloAvif800} 800w` },
    { type: 'image/webp', srcSet: `${seloWebp320} 320w, ${seloWebp480} 480w, ${seloWebp800} 800w` },
  ],
  sizes: '(min-width: 96rem) 25rem, (min-width: 48rem) 26vw, 10rem',
  width: 800,
  height: 800,
  alt: 'Selo MaulehSeg: resgate técnico industrial e acesso por cordas',
}
