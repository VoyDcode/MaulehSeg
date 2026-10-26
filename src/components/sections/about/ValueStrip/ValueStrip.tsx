import type { ValueStripItem } from '../../../../types/content'
import { cx } from '../../../../lib/cx'
import { Container } from '../../../ui/Container/Container'
import styles from './ValueStrip.module.css'

export function ValueStrip({ item }: { item: ValueStripItem }) {
  const { label, text, reversed, dark, noisy } = item
  const labelId = `valor-${label.toLowerCase()}`

  return (
    <section
      className={cx(styles.strip, dark && styles.dark, noisy && styles.noisy)}
      aria-labelledby={labelId}
    >
      <Container className={cx(styles.inner, reversed && styles.reversed)}>
        <h2 id={labelId} className={styles.label}>
          {label}
        </h2>
        <p className={styles.text}>{text}</p>
      </Container>
    </section>
  )
}
