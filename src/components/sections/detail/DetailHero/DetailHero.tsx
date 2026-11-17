import { Link } from 'react-router'
import type { NavLink, ResponsiveImage } from '../../../../types/content'
import { ButtonLink } from '../../../ui/Button/ButtonLink'
import { Container } from '../../../ui/Container/Container'
import { Picture } from '../../../ui/Picture/Picture'
import styles from './DetailHero.module.css'

interface DetailHeroProps {
  /** Rótulo verde (categoria), que leva de volta para a listagem. */
  label: NavLink
  title: string
  text?: string
  action: NavLink
  /** Selo opcional à direita do texto (no celular, acima do rótulo). */
  emblem?: ResponsiveImage
}

// Figma "Projetos Template": rótulo verde, título e texto curto, alinhados à esquerda.
export function DetailHero({ label, title, text, action, emblem }: DetailHeroProps) {
  return (
    <section className={styles.hero} aria-labelledby="pagina-titulo">
      <Container className={styles.inner} data-emblem={emblem ? true : undefined}>
        <div className={styles.content}>
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
        </div>
        {emblem && (
          <Picture image={emblem} pictureClassName={styles.emblem} className={styles.emblemImage} fetchPriority="high" decoding="async" />
        )}
      </Container>
    </section>
  )
}
