import type { ContactPageContent, QuoteOptionGroup } from '../../../../types/content'
import { Container } from '../../../ui/Container/Container'
import { HelmetMark } from '../../../ui/Logo/Logo'
import { QuoteForm } from '../../detail/QuoteForm/QuoteForm'
import { ContactChannels } from '../ContactChannels/ContactChannels'
import styles from './ContactSection.module.css'

interface ContactSectionProps {
  content: ContactPageContent
  quoteOptions: QuoteOptionGroup[]
}

/*
  Topo azul com o texto e, ao lado, o card branco do formulário, que desce
  para a área branca (como o card do Quem Somos invade o banner). Embaixo
  do texto ficam os outros canais de contato.
*/
export function ContactSection({ content, quoteOptions }: ContactSectionProps) {
  const { hero, form, channels } = content

  return (
    <section className={styles.section} aria-labelledby="pagina-titulo">
      <HelmetMark className={styles.watermark} />
      <Container className={styles.layout}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>{hero.eyebrow}</p>
          <h1 id="pagina-titulo" className={styles.title}>
            {hero.title}
          </h1>
          <p className={styles.text}>{hero.text}</p>
        </div>

        <div className={styles.card} id="formulario">
          <h2 className={styles.cardTitle}>{form.title}</h2>
          <p className={styles.cardText}>{form.text}</p>
          <QuoteForm groups={quoteOptions} messageLabel={form.messageLabel} tone="light" />
        </div>

        <div className={styles.aside}>
          <ContactChannels content={channels} />
        </div>
      </Container>
    </section>
  )
}
