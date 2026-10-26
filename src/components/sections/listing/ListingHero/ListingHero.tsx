import type { ListingPageContent } from '../../../../types/content'
import { ButtonLink } from '../../../ui/Button/ButtonLink'
import { Container } from '../../../ui/Container/Container'
import styles from './ListingHero.module.css'

export function ListingHero({ content }: { content: ListingPageContent['hero'] }) {
  const { title, text, action } = content

  return (
    <section className={styles.hero} aria-labelledby="pagina-titulo">
      <Container className={styles.inner}>
        <h1 id="pagina-titulo" className={styles.title}>
          {title}
        </h1>
        <p className={styles.text}>{text}</p>
        <ButtonLink href={action.href} variant="accent">
          {action.label}
        </ButtonLink>
      </Container>
    </section>
  )
}
