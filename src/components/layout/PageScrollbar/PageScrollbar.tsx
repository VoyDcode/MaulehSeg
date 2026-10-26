import { useEffect, useRef, type PointerEvent } from 'react'
import styles from './PageScrollbar.module.css'

const MIN_THUMB_HEIGHT = 40

// Substitui a barra nativa (escondida no global.css) para que o conteúdo apareça atrás dela.
// A rolagem por roda, teclado e toque continua nativa; aqui só desenhamos o indicador e o arraste.
export function PageScrollbar() {
  const thumbRef = useRef<HTMLDivElement>(null)
  const drag = useRef<{ startY: number; startScroll: number } | null>(null)

  useEffect(() => {
    const thumb = thumbRef.current
    if (!thumb) return

    let frame = 0

    function update() {
      frame = 0
      const { scrollHeight, clientHeight } = document.documentElement
      const scrollable = scrollHeight - clientHeight

      if (scrollable <= 0) {
        thumb!.hidden = true
        return
      }

      const height = Math.max(MIN_THUMB_HEIGHT, (clientHeight / scrollHeight) * clientHeight)
      const top = (window.scrollY / scrollable) * (clientHeight - height)
      thumb!.hidden = false
      thumb!.style.height = `${height}px`
      thumb!.style.transform = `translateY(${top}px)`
    }

    function scheduleUpdate() {
      if (!frame) frame = requestAnimationFrame(update)
    }

    const resizeObserver = new ResizeObserver(scheduleUpdate)
    resizeObserver.observe(document.body)
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)
    update()

    return () => {
      cancelAnimationFrame(frame)
      resizeObserver.disconnect()
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
    }
  }, [])

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    event.preventDefault()
    event.currentTarget.setPointerCapture(event.pointerId)
    drag.current = { startY: event.clientY, startScroll: window.scrollY }
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!drag.current) return

    const { scrollHeight, clientHeight } = document.documentElement
    const trackSpace = clientHeight - event.currentTarget.offsetHeight
    if (trackSpace <= 0) return

    const ratio = (scrollHeight - clientHeight) / trackSpace
    window.scrollTo({
      top: drag.current.startScroll + (event.clientY - drag.current.startY) * ratio,
      behavior: 'instant',
    })
  }

  function handlePointerUp() {
    drag.current = null
  }

  return (
    <div className={styles.track} aria-hidden="true">
      <div
        ref={thumbRef}
        className={styles.thumb}
        hidden
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      />
    </div>
  )
}
