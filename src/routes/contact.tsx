import type { Route } from './+types/contact'
import { ContactSection } from '../components/sections/contact/ContactSection/ContactSection'
import { ContactSteps } from '../components/sections/contact/ContactSteps/ContactSteps'
import { ClientsSection } from '../components/sections/home/ClientsSection/ClientsSection'
import { contactClients, contactPage, contactQuoteOptions } from '../content/contact-page'
import { pages } from '../content/pages'
import { pageMeta } from '../lib/meta'
import styles from './contact.module.css'

// Destino dos botões "Solicitar orçamento" e "Fale conosco" (fora das páginas de detalhe).
export const meta: Route.MetaFunction = () => pageMeta(pages.contact)

export default function ContactRoute() {
  return (
    <>
      <ContactSection content={contactPage} quoteOptions={contactQuoteOptions} />
      <ContactSteps content={contactPage.steps} />
      <ClientsSection content={contactClients} className={styles.clients} />
    </>
  )
}
