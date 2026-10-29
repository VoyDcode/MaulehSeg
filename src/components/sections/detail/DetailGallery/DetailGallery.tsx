import type { ResponsiveImage } from '../../../../types/content'
import { Container } from '../../../ui/Container/Container'
import { Gallery } from '../../../ui/Gallery/Gallery'
import styles from './DetailGallery.module.css'

const GALLERY_SIZES = '(min-width: 52rem) 48rem, 92vw'

export function DetailGallery({ images, label }: { images: ResponsiveImage[]; label: string }) {
  if (images.length === 0) return null

  return (
    <section className={styles.section} aria-labelledby="galeria-titulo">
      <Container className={styles.inner}>
        <h2 id="galeria-titulo" className={styles.title}>
          Galeria
        </h2>
        <Gallery label={label} images={images.map((image) => ({ ...image, sizes: GALLERY_SIZES }))} />
      </Container>
    </section>
  )
}
