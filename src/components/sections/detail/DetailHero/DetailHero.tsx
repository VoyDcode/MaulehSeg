import { Link } from 'react-router'
import type { NavLink } from '../../../../types/content'
import { ButtonLink } from '../../../ui/Button/ButtonLink'
import { Container } from '../../../ui/Container/Container'
import styles from './DetailHero.module.css'

interface DetailHeroProps {
  /** Rótulo verde (categoria), que leva de volta para a listagem. */
  label: NavLink
  title: string
  text?: string
  action: NavLink
}

// Figma "Projetos Template": rótulo verde, título e texto curto, alinhados à esquerda.
export function DetailHero({ label, title, text, action }: DetailHeroProps) {
  return (
    <section className={styles.hero} aria-labelledby="pagina-titulo">
      <Container className={styles.inner}>
        <Link to={label.href} className={styles.eyebrow}>
          {label.label}
        </Link>
        <h1 id="pagina-titulo" className={styles.title}>
          {title}
        </h1>
        {text && <p className={styles.text}>{text}</p>}
        <ButtonLink href={action.href} variant="accent" className={styles.action}>
          {action.label}
        </ButtonLink>
      </Container>
    </section>
  )
}
