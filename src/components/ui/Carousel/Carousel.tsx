import { Children, useEffect, useId, useRef, useState, type ReactNode } from 'react'
import { useMediaQuery } from '../../../lib/useMediaQuery'
import { ChevronLeftIcon, ChevronRightIcon, PauseIcon, PlayIcon } from '../icons'
import styles from './Carousel.module.css'

interface CarouselProps {
  label: string
  autoplay?: boolean
  intervalMs?: number
  children: ReactNode
}

function scrollTrack(track: HTMLElement, direction: 1 | -1, smooth: boolean) {
  const firstSlide = track.firstElementChild
  if (!(firstSlide instanceof HTMLElement)) return

  const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0
  const step = firstSlide.offsetWidth + gap
  const maxScroll = track.scrollWidth - track.clientWidth
  const behavior: ScrollBehavior = smooth ? 'smooth' : 'auto'

  if (direction === 1 && track.scrollLeft >= maxScroll - 2) {
    track.scrollTo({ left: 0, behavior })
  } else if (direction === -1 && track.scrollLeft <= 2) {
    track.scrollTo({ left: maxScroll, behavior })
  } else {
    track.scrollBy({ left: step * direction, behavior })
  }
}

export function Carousel({ label, autoplay = false, intervalMs = 3500, children }: CarouselProps) {
  const rootRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLUListElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const trackId = useId()
  const slides = Children.toArray(children)
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)', true)
  const [isPlaying, setIsPlaying] = useState(true)

  const canAutoplay = autoplay && !prefersReducedMotion
  const isRotating = canAutoplay && isPlaying

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const handleFocusIn = (event: FocusEvent) => {
      if (event.target !== toggleRef.current) setIsPlaying(false)
    }

    root.addEventListener('focusin', handleFocusIn)
    return () => root.removeEventListener('focusin', handleFocusIn)
  }, [])

  useEffect(() => {
    if (!isRotating) return

    const timer = window.setInterval(() => {
      const isHovered = rootRef.current?.matches(':hover') ?? false
      if (trackRef.current && !isHovered) scrollTrack(trackRef.current, 1, true)
    }, intervalMs)

    return () => window.clearInterval(timer)
  }, [isRotating, intervalMs])

  function goTo(direction: 1 | -1) {
    if (trackRef.current) scrollTrack(trackRef.current, direction, !prefersReducedMotion)
  }

  return (
    <section ref={rootRef} className={styles.carousel} aria-roledescription="carrossel" aria-label={label}>
      <ul
        ref={trackRef}
        id={trackId}
        className={styles.track}
        aria-live={isRotating ? 'off' : 'polite'}
        // Área com rolagem precisa receber foco para ser rolada pelo teclado (WCAG 2.1.1).
        // oxlint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={0}
      >
        {slides.map((slide, index) => (
          <li key={index} className={styles.slide}>
            {slide}
          </li>
        ))}
      </ul>

      <div className={styles.controls}>
        <button
          type="button"
          className={styles.control}
          aria-label="Item anterior"
          aria-controls={trackId}
          onClick={() => goTo(-1)}
        >
          <ChevronLeftIcon />
        </button>
        {canAutoplay && (
          <button
            ref={toggleRef}
            type="button"
            className={styles.control}
            aria-label={isPlaying ? 'Pausar carrossel' : 'Continuar carrossel'}
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </button>
        )}
        <button
          type="button"
          className={styles.control}
          aria-label="Próximo item"
          aria-controls={trackId}
          onClick={() => goTo(1)}
        >
          <ChevronRightIcon />
        </button>
      </div>
    </section>
  )
}
