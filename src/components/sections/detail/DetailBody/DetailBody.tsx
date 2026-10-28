import type { DetailSection } from '../../../../types/content'
import { Container } from '../../../ui/Container/Container'
import styles from './DetailBody.module.css'

// Figma: blocos com título verde centralizado e texto corrido numa coluna estreita.
export function DetailBody({ sections }: { sections: DetailSection[] }) {
  if (sections.length === 0) return null

  return (
    <div className={styles.body}>
      <Container className={styles.inner}>
        {sections.map((section) => (
          <div key={section.title} className={styles.block}>
            <h2 className={styles.title}>{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
            {section.list && (
              <ul className={styles.list}>
                {section.list.map((entry) => (
                  <li key={entry}>{entry}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </Container>
    </div>
  )
}
