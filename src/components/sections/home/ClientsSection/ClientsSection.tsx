import type { HomeContent } from '../../../../types/content'
import { Carousel } from '../../../ui/Carousel/Carousel'
import { Container } from '../../../ui/Container/Container'
import styles from './ClientsSection.module.css'

export function ClientsSection({ content }: { content: HomeContent['clients'] }) {
  const { title, items } = content

  return (
    <section className={styles.section} aria-labelledby="clientes-titulo">
      <Container>
        <h2 id="clientes-titulo" className={styles.title}>
          {title}
        </h2>
        <Carousel label={`Logos de ${title.toLowerCase()}`}>
          {items.map((client) => (
            <div key={client.name} className={styles.tile}>
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
