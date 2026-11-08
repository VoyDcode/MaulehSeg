import type { AboutContent } from '../../../../types/content'
import { Container } from '../../../ui/Container/Container'
import styles from './AboutStory.module.css'

// Texto "Quem Somos": a história da empresa, entre a foto panorâmica e Missão, Visão e Valores.
export function AboutStory({ content }: { content: AboutContent['story'] }) {
  const { eyebrow, title, paragraphs } = content

  return (
    <section className={styles.story} aria-labelledby="historia-titulo">
      <Container className={styles.inner}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h2 id="historia-titulo" className={styles.title}>
            {title}
          </h2>
        </div>
        <div className={styles.text}>
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Container>
    </section>
  )
}
