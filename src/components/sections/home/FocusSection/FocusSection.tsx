import type { HomeContent } from '../../../../types/content'
import { Container } from '../../../ui/Container/Container'
import styles from './FocusSection.module.css'

export function FocusSection({ content }: { content: HomeContent['focus'] }) {
  const { title, text, stats } = content

  return (
    <section className={styles.section} aria-labelledby="foco-titulo">
      <Container className={styles.inner}>
        <div className={styles.content}>
          <h2 id="foco-titulo" className={styles.title}>
            {title}
          </h2>
          <p className={styles.lead}>
            {text.map((segment, index) =>
              segment.highlight ? (
                <strong key={index} className={styles.highlight}>
                  {segment.text}
                </strong>
              ) : (
                <span key={index}>{segment.text}</span>
              ),
            )}
          </p>
        </div>

        {stats.length > 0 && (
          <dl className={styles.stats}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <dt className={styles.statLabel}>{stat.label}</dt>
                <dd className={styles.statValue}>{stat.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </Container>
    </section>
  )
}
