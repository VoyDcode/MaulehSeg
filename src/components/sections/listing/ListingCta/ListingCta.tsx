import type { ListingPageContent } from '../../../../types/content'
import { ButtonLink } from '../../../ui/Button/ButtonLink'
import { Picture } from '../../../ui/Picture/Picture'
import styles from './ListingCta.module.css'

export function ListingCta({ content }: { content: ListingPageContent['cta'] }) {
  const { eyebrow, title, highlight, text, action, image } = content

  return (
    <section className={styles.cta} aria-labelledby="chamada-titulo">
      <div className={styles.content}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h2 id="chamada-titulo" className={styles.title}>
          {title} <span className={styles.highlight}>{highlight}</span>
        </h2>
        <p className={styles.text}>{text}</p>
        <ButtonLink href={action.href} variant="accent">
          {action.label}
        </ButtonLink>
      </div>
      {image && (
        <Picture
          image={image}
          pictureClassName={styles.media}
          className={styles.image}
          loading="lazy"
          decoding="async"
        />
      )}
    </section>
  )
}
