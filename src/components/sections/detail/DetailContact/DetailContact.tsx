import type { DetailPageContent, QuoteOptionGroup } from '../../../../types/content'
import { Picture } from '../../../ui/Picture/Picture'
import { QuoteForm } from '../QuoteForm/QuoteForm'
import styles from './DetailContact.module.css'

interface DetailContactProps {
  content: DetailPageContent['contact']
  groups: QuoteOptionGroup[]
  defaultService: string
}

// Figma: faixa azul com a foto à esquerda e o formulário à direita.
// O id "orcamento" é o destino do botão do hero.
export function DetailContact({ content, groups, defaultService }: DetailContactProps) {
  const { eyebrow, title, text, messageLabel, image } = content

  return (
    <section
      id="orcamento"
      className={styles.band}
      data-has-image={image ? true : undefined}
      aria-labelledby="orcamento-titulo"
    >
      {image && (
        <Picture
          image={image}
          pictureClassName={styles.media}
          className={styles.image}
          loading="lazy"
          decoding="async"
        />
      )}
      <div className={styles.content}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h2 id="orcamento-titulo" className={styles.title}>
          {title}
        </h2>
        <p className={styles.text}>{text}</p>
        <QuoteForm groups={groups} defaultService={defaultService} messageLabel={messageLabel} />
      </div>
    </section>
  )
}
