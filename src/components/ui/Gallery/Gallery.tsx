import { useEffect, useRef, useState } from 'react'
import type { ResponsiveImage } from '../../../types/content'
import { ArrowLeftIcon, ArrowRightIcon } from '../icons'
import { Picture } from '../Picture/Picture'
import styles from './Gallery.module.css'

interface GalleryProps {
  /** Nome do carrossel para leitores de tela. */
  label: string
  images: ResponsiveImage[]
}

/*
  Carrossel de fotos, uma por vez. A rolagem é nativa (arrastar no celular,
  trackpad no computador) com scroll-snap, e os botões andam uma foto.
  Sem troca automática: quem controla é o visitante.
*/
export function Gallery({ label, images }: GalleryProps) {
  const trackRef = useRef<HTMLUListElement>(null)
  const [current, setCurrent] = useState(0)
  const total = images.length

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    let frame = 0
    const handleScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const index = Math.round(track.scrollLeft / Math.max(track.clientWidth, 1))
        setCurrent(Math.min(Math.max(index, 0), total - 1))
      })
    }

    track.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      track.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(frame)
    }
  }, [total])

  const goTo = (index: number) => {
    const track = trackRef.current
    if (!track) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    track.scrollTo({ left: index * track.clientWidth, behavior: reduceMotion ? 'auto' : 'smooth' })
    setCurrent(index)
  }

  return (
    <section className={styles.gallery} aria-roledescription="carrossel" aria-label={label}>
      <ul ref={trackRef} className={styles.track}>
        {images.map((image) => (
          // A lista já anuncia "item 2 de 5" nos leitores de tela; o alt descreve a foto.
          <li key={image.src} className={styles.slide}>
            <Picture
              image={image}
              pictureClassName={styles.media}
              className={styles.image}
              loading="lazy"
              decoding="async"
            />
          </li>
        ))}
      </ul>

      {total > 1 && (
        <div className={styles.controls}>
          <button
            type="button"
            className={styles.control}
            onClick={() => goTo(current - 1)}
            disabled={current === 0}
            aria-label="Foto anterior"
          >
            <ArrowLeftIcon />
          </button>
          <p className={styles.counter} aria-live="polite">
            Foto {current + 1} de {total}
          </p>
          <button
            type="button"
            className={styles.control}
            onClick={() => goTo(current + 1)}
            disabled={current === total - 1}
            aria-label="Próxima foto"
          >
            <ArrowRightIcon />
          </button>
        </div>
      )}
    </section>
  )
}
