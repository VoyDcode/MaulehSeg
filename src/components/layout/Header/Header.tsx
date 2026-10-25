import { Link } from 'react-router'
import { contactCta, mainNavigation } from '../../../content/navigation'
import { paths } from '../../../paths'
import { ButtonLink } from '../../ui/Button/ButtonLink'
import { Container } from '../../ui/Container/Container'
import { Logo } from '../../ui/Logo/Logo'
import { MobileNav } from '../MobileNav/MobileNav'
import { DesktopNav } from './DesktopNav'
import styles from './Header.module.css'
import { useHeaderTheme } from './useHeaderTheme'

export function Header() {
  const theme = useHeaderTheme()

  return (
    <header className={styles.header} data-theme={theme}>
      <Container className={styles.inner}>
        <Link to={paths.home} className={styles.brand}>
          <Logo className={styles.logo} />
        </Link>
        <DesktopNav items={mainNavigation} className={styles.desktopNav} />
        <div className={styles.cta}>
          <ButtonLink href={contactCta.href}>{contactCta.label}</ButtonLink>
        </div>
        <MobileNav items={mainNavigation} cta={contactCta} className={styles.mobileNav} />
      </Container>
    </header>
  )
}
