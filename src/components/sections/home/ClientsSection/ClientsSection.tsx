import type { HomeContent } from '../../../../types/content'
import { cx } from '../../../../lib/cx'
import { Carousel } from '../../../ui/Carousel/Carousel'
import { Container } from '../../../ui/Container/Container'
import styles from './ClientsSection.module.css'

interface ClientsSectionProps {
  content: HomeContent['clients']
  className?: string
}

export function ClientsSection({ content, className }: ClientsSectionProps) {
  const { title, items } = content

  return (
    <section className={cx(styles.section, className)} aria-labelledby="clientes-titulo">
      <Container>
        <h2 id="clientes-titulo" className={styles.title}>
          {title}
        </h2>
        <Carousel label={`Logos de ${title.toLowerCase()}`}>
          {items.map((client) => (
            <div key={client.name} className={cx(styles.tile, client.onDark && styles.tileDark)}>
              {client.logo ? (
                <img
                  src={client.logo.src}
                  width={client.logo.width}
                  height={client.logo.height}
                  alt={client.name}
                  className={styles.logo}
                  loading="lazy"
                />
              ) : (
                <span className={styles.name}>{client.name}</span>
              )}
            </div>
          ))}
        </Carousel>
      </Container>
    </section>
  )
}
