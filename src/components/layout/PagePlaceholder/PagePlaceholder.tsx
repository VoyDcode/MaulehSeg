import { Container } from '../../ui/Container/Container'
import styles from './PagePlaceholder.module.css'

export function PagePlaceholder({ title }: { title: string }) {
  return (
    <Container className={styles.placeholder}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.note}>Conteúdo provisório. Esta página será construída em uma próxima etapa.</p>
    </Container>
  )
}
