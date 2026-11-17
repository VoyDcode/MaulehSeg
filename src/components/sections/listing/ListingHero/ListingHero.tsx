import type { ListingPageContent } from '../../../../types/content'
import { ButtonLink } from '../../../ui/Button/ButtonLink'
import { Container } from '../../../ui/Container/Container'
import { Picture } from '../../../ui/Picture/Picture'
import styles from './ListingHero.module.css'

interface ListingHeroProps {
  content: ListingPageContent['hero']
  /** brand: azul (padrão). dark: preto. */
  tone?: 'brand' | 'dark'
}

export function ListingHero({ content, tone = 'brand' }: ListingHeroProps) {
  const { title, text, action, emblem } = content

  return (
    <section className={styles.hero} data-tone={tone} aria-labelledby="pagina-titulo">
      <Container className={styles.inner} data-emblem={emblem ? true : undefined}>
        <div className={styles.content}>
          <h1 id="pagina-titulo" className={styles.title}>
            {title}
          </h1>
          <p className={styles.text}>{text}</p>
          <ButtonLink href={action.href} variant="accent">
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
