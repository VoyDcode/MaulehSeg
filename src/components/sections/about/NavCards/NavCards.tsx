import { Link } from 'react-router'
import type { AboutContent, NavCard } from '../../../../types/content'
import { Carousel } from '../../../ui/Carousel/Carousel'
import { Container } from '../../../ui/Container/Container'
import styles from './NavCards.module.css'

function NavCardItem({ item }: { item: NavCard }) {
  const inner = (
    <>
      <span className={styles.cardTitle}>{item.title}</span>
      <span className={styles.cardDesc}>{item.description}</span>
    </>
  )

  if (item.href.startsWith('/')) {
    return (
      <Link to={item.href} className={styles.card}>
        {inner}
      </Link>
    )
  }

  return (
    <a href={item.href} className={styles.card}>
      {inner}
    </a>
  )
}

export function NavCards({ content }: { content: AboutContent['navCards'] }) {
  return (
    <section className={styles.section} aria-labelledby="nav-cards-titulo">
      <Container>
        <h2 id="nav-cards-titulo" className={styles.title}>
          {content.label}
        </h2>
      </Container>
      <Carousel label={content.label} secondsPerSlide={10}>
        {content.items.map((item) => (
          <NavCardItem key={item.title} item={item} />
        ))}
      </Carousel>
    </section>
  )
}
