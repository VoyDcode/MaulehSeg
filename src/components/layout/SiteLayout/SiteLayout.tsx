import { useEffect, useRef, type ReactNode } from 'react'
import { useLocation } from 'react-router'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import styles from './SiteLayout.module.css'

export function SiteLayout({ children }: { children: ReactNode }) {
  const mainRef = useRef<HTMLElement>(null)
  const { pathname } = useLocation()
  const previousPathname = useRef(pathname)

  useEffect(() => {
    if (previousPathname.current === pathname) return

    previousPathname.current = pathname
    mainRef.current?.focus({ preventScroll: true })
  }, [pathname])

  return (
    <div className={styles.layout}>
      <a href="#conteudo" className={styles.skipLink}>
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo" ref={mainRef} tabIndex={-1} className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  )
}
