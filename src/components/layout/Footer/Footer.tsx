import { Link } from 'react-router'
import { companyLinks, serviceLinks } from '../../../content/navigation'
import { site } from '../../../content/site'
import type { NavLink } from '../../../types/content'
import { Container } from '../../ui/Container/Container'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer id="contato" className={styles.footer}>
      <Container className={styles.grid}>
        <div>
          <p className={styles.brand}>{site.name}</p>
          <p className={styles.tagline}>{site.tagline}</p>
        </div>

        <section aria-labelledby="rodape-horario">
          <h2 id="rodape-horario" className={styles.title}>
            Horário
          </h2>
          <dl className={styles.hours}>
            {site.hours.map(({ days, time }) => (
              <div key={days}>
                <dt>{days}</dt>
                <dd>{time}</dd>
              </div>
            ))}
          </dl>
        </section>

        <FooterLinks id="rodape-servicos" title="Serviços" links={serviceLinks} />
        <FooterLinks id="rodape-empresa" title="Empresa" links={companyLinks} />

        <section aria-labelledby="rodape-contato" className={styles.contact}>
          <h2 id="rodape-contato" className={styles.title}>
            Contato
          </h2>
          <address className={styles.contactList}>
            <a href={site.phone.href}>{site.phone.display}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <span>{site.address}</span>
          </address>
          {site.social.length > 0 && (
            <ul className={styles.links} aria-label="Redes sociais">
              {site.social.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </section>
      </Container>

      <div className={styles.watermark} data-text={site.name} aria-hidden="true" />
    </footer>
  )
}

interface FooterLinksProps {
  id: string
  title: string
  links: NavLink[]
}

function FooterLinks({ id, title, links }: FooterLinksProps) {
  return (
    <nav aria-labelledby={id}>
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
      <ul className={styles.links}>
        {links.map((link) => (
          <li key={link.href}>
            <Link to={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
