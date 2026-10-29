import type { ContactPageContent } from '../../../../types/content'
import { Container } from '../../../ui/Container/Container'
import styles from './ContactSteps.module.css'

// Faixa azul-clara com o passo a passo, em três colunas no desktop.
export function ContactSteps({ content }: { content: ContactPageContent['steps'] }) {
  return (
    <section className={styles.section} aria-labelledby="como-funciona-titulo">
      <Container className={styles.inner}>
        <h2 id="como-funciona-titulo" className={styles.title}>
          {content.title}
        </h2>
        <ol className={styles.list}>
          {content.items.map((step, index) => (
            <li key={step.title} className={styles.step}>
              <span className={styles.number} aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.text}>{step.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
