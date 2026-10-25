import type { HomeContent } from '../../../../types/content'
import { ButtonLink } from '../../../ui/Button/ButtonLink'
import { Container } from '../../../ui/Container/Container'
import { Logo } from '../../../ui/Logo/Logo'
import styles from './AboutTeaser.module.css'

export function AboutTeaser({ content }: { content: HomeContent['about'] }) {
  const { id, title, text, action } = content
  const titleId = `${id}-titulo`

  return (
    <section id={id} className={styles.section} aria-labelledby={titleId}>
      <Container className={styles.inner}>
        <div className={styles.card}>
          <Logo variant="full" decorative className={styles.logo} />
        </div>
        <div className={styles.content}>
          <h2 id={titleId} className={styles.title}>
            {title}
          </h2>
          <p className={styles.text}>{text}</p>
          <ButtonLink href={action.href} variant="dark">
            {action.label}
          </ButtonLink>
        </div>
      </Container>
    </section>
  )
}
