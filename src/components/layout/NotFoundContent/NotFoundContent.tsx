import { pages } from '../../../content/pages'
import { paths } from '../../../paths'
import { ButtonLink } from '../../ui/Button/ButtonLink'
import { Container } from '../../ui/Container/Container'
import styles from './NotFoundContent.module.css'

// Usado pela rota 404 e pelas páginas de detalhe quando a slug não existe.
export function NotFoundContent() {
  return (
    <Container className={styles.page}>
      <p className={styles.code}>Erro 404</p>
      <h1 className={styles.title}>{pages.notFound.title}</h1>
      <p className={styles.text}>O endereço pode ter mudado ou a página ainda não existe.</p>
      <ButtonLink href={paths.home}>Voltar para a página inicial</ButtonLink>
    </Container>
  )
}
