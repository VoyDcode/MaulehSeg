import type { ListingPageContent } from '../../../../types/content'
import { ButtonLink } from '../../../ui/Button/ButtonLink'
import { Container } from '../../../ui/Container/Container'
import styles from './ListingHero.module.css'

interface ListingHeroProps {
  content: ListingPageContent['hero']
  /** brand: azul (padrão). dark: preto. */
  tone?: 'brand' | 'dark'
}

export function ListingHero({ content, tone = 'brand' }: ListingHeroProps) {
  const { title, text, action } = content

  return (
    <section className={styles.hero} data-tone={tone} aria-labelledby="pagina-titulo">
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
