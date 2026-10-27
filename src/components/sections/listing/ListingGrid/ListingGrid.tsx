import { Link } from 'react-router'
import type { ContentItem, ListingPageContent } from '../../../../types/content'
import { Container } from '../../../ui/Container/Container'
import { HelmetMark } from '../../../ui/Logo/Logo'
import { Picture } from '../../../ui/Picture/Picture'
import styles from './ListingGrid.module.css'

// A primeira linha da grade costuma aparecer logo abaixo do hero no desktop.
const EAGER_CARDS = 3

function ListingCard({ item, href, eager }: { item: ContentItem; href: string; eager: boolean }) {
  return (
    <article className={styles.card}>
      {item.image ? (
        <Picture
          image={item.image}
          pictureClassName={styles.media}
          className={styles.image}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
        />
      ) : (
        // Sem foto própria ainda: código da norma ou capacete da marca, no mesmo tamanho da foto.
        // O código já está no título, então aqui ele é só visual.
        <div className={styles.placeholder}>
          {item.code ? (
            <span className={styles.code} aria-hidden="true">
              {item.code}
            </span>
          ) : (
            <HelmetMark className={styles.helmet} />
          )}
        </div>
      )}
      <div className={styles.body}>
        <h3 className={styles.cardTitle}>{item.title}</h3>
        {item.summary && <p className={styles.summary}>{item.summary}</p>}
        <Link to={href} className={styles.more}>
          Veja <span aria-hidden="true">+</span>
          <span className={styles.visuallyHidden}>mais sobre {item.title}</span>
        </Link>
      </div>
    </article>
  )
}

export function ListingGrid({ content }: { content: ListingPageContent['list'] }) {
  const { title, basePath, items } = content

  return (
    <section className={styles.section} aria-labelledby="lista-titulo">
      <Container>
        <h2 id="lista-titulo" className={styles.visuallyHidden}>
          {title}
        </h2>
        <ul className={styles.grid}>
          {items.map((item, index) => (
            <li key={item.slug}>
              <ListingCard item={item} href={`${basePath}/${item.slug}`} eager={index < EAGER_CARDS} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
