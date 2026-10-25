import type { HomeContent } from '../../../../types/content'
import { ButtonLink } from '../../../ui/Button/ButtonLink'
import { Container } from '../../../ui/Container/Container'
import { ArrowDownIcon } from '../../../ui/icons'
import { Picture } from '../../../ui/Picture/Picture'
import styles from './HomeHero.module.css'

export function HomeHero({ content }: { content: HomeContent['hero'] }) {
  const { title, subtitle, primaryAction, secondaryAction, image } = content

  return (
    <section className={styles.hero} aria-labelledby="home-hero-title">
      {image && (
        <Picture
          image={image}
          pictureClassName={styles.media}
          className={styles.image}
          fetchPriority="high"
          decoding="async"
        />
      )}
      <Container className={styles.inner}>
        <div className={styles.content}>
          <h1 id="home-hero-title" className={styles.title}>
            {title}
          </h1>
          <p className={styles.subtitle}>{subtitle}</p>
          <div className={styles.actions}>
            <ButtonLink href={primaryAction.href} variant="dark" className={styles.primaryAction}>
              {primaryAction.label}
            </ButtonLink>
            <a href={secondaryAction.href} className={styles.secondaryAction}>
              {secondaryAction.label}
              <ArrowDownIcon />
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
