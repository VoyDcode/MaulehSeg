import type { Route } from './+types/not-found'
import { ButtonLink } from '../components/ui/Button/ButtonLink'
import { Container } from '../components/ui/Container/Container'
import { pages } from '../content/pages'
import { pageMeta } from '../lib/meta'
import { paths } from '../paths'
import styles from './not-found.module.css'

export const meta: Route.MetaFunction = () => pageMeta({ ...pages.notFound, noIndex: true })

export default function NotFoundRoute() {
  return (
    <Container className={styles.page}>
      <p className={styles.code}>Erro 404</p>
      <h1 className={styles.title}>{pages.notFound.title}</h1>
      <p className={styles.text}>O endereço pode ter mudado ou a página ainda não existe.</p>
      <ButtonLink href={paths.home}>Voltar para a página inicial</ButtonLink>
    </Container>
  )
}
