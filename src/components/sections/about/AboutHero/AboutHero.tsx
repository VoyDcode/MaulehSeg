import type { AboutContent } from '../../../../types/content'
import { ButtonLink } from '../../../ui/Button/ButtonLink'
import { Container } from '../../../ui/Container/Container'
import { Picture } from '../../../ui/Picture/Picture'
import styles from './AboutHero.module.css'

export function AboutHero({ content }: { content: AboutContent['hero'] }) {
  const { title, text, action, image } = content

  return (
    <section className={styles.hero} aria-labelledby="quem-somos-titulo">
      <Container className={styles.inner}>
        <div className={styles.content}>
          <h1 id="quem-somos-titulo" className={styles.title}>
            {title}
          </h1>
          <p className={styles.text}>{text}</p>
          <ButtonLink href={action.href} variant="accent">
            {action.label}
          </ButtonLink>
        </div>
        {image && (
          <div className={styles.card}>
            <Picture
              image={image}
              pictureClassName={styles.media}
              className={styles.image}
              fetchPriority="high"
              decoding="async"
            />
          </div>
        )}
      </Container>
    </section>
  )
}
