import type { ResponsiveImage } from '../types/content'

// Cards de 1 coluna no celular, 2 no tablet e 3 a partir de 1024px (ListingGrid).
const CARD_SIZES = '(min-width: 1024px) 380px, (min-width: 640px) 46vw, 92vw'

/** Foto de card das páginas de listagem, sempre recortada em 3:2. */
export function cardImage(alt: string, avif: string, webp: string, src: string, width: number): ResponsiveImage {
  return {
    src,
    sources: [
      { type: 'image/avif', srcSet: avif },
      { type: 'image/webp', srcSet: webp },
    ],
    sizes: CARD_SIZES,
    width,
    height: Math.round((width * 2) / 3),
    alt,
  }
}
