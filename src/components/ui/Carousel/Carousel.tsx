import { Children, useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import { cx } from '../../../lib/cx'
import styles from './Carousel.module.css'

interface CarouselProps {
  label: string
  secondsPerSlide?: number
  children: ReactNode
}

const MIN_SLIDES_IN_LOOP = 8

export function Carousel({ label, secondsPerSlide = 5, children }: CarouselProps) {
  const viewportRef = useRef<HTMLDivElement>(null)
  const [isPausedByTouch, setIsPausedByTouch] = useState(false)
  const slides = Children.toArray(children)
  const copies = Math.max(2, Math.ceil(MIN_SLIDES_IN_LOOP / Math.max(slides.length, 1)) + 1)

  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return

    const handlePointerDown = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') setIsPausedByTouch((paused) => !paused)
    }

    viewport.addEventListener('pointerdown', handlePointerDown)
    return () => viewport.removeEventListener('pointerdown', handlePointerDown)
  }, [])

  const loopStyle = {
    '--slide-count': slides.length,
    '--loop-duration': `${slides.length * secondsPerSlide}s`,
  } as CSSProperties

  return (
    <section className={styles.carousel} aria-roledescription="carrossel" aria-label={label}>
      <div
        ref={viewportRef}
        className={styles.viewport}
        data-paused={isPausedByTouch || undefined}
        // Foco pelo teclado pausa o movimento automático (WCAG 2.2.2).
        // oxlint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={0}
      >
        <div className={styles.mask}>
          <div className={styles.track} style={loopStyle}>
            {Array.from({ length: copies }, (_, copy) => (
              <ul
                key={copy}
                className={cx(styles.list, copy !== 0 && styles.duplicate)}
                aria-hidden={copy === 0 ? undefined : true}
                inert={copy !== 0}
              >
                {slides.map((slide, index) => (
                  <li key={index} className={styles.slide}>
                    {slide}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
