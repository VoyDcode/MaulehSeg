import type { DetailPageContent, QuoteOptionGroup, ResponsiveImage } from '../../../../types/content'
import { NotFoundContent } from '../../../layout/NotFoundContent/NotFoundContent'
import { DetailBody } from '../DetailBody/DetailBody'
import { DetailContact } from '../DetailContact/DetailContact'
import { DetailGallery } from '../DetailGallery/DetailGallery'
import { DetailHero } from '../DetailHero/DetailHero'

interface DetailPageProps {
  content: DetailPageContent
  slug: string | undefined
  quoteOptions: QuoteOptionGroup[]
}

// A galeria começa pela foto do próprio item (quando ele tem) e segue com as da categoria.
function galleryFor(itemImage: ResponsiveImage | undefined, gallery: ResponsiveImage[]) {
  if (!itemImage) return gallery
  return [itemImage, ...gallery.filter((image) => image.src !== itemImage.src)]
}

/** Template de detalhe (frame "Projetos Template" do Figma) para um item da categoria. */
export function DetailPage({ content, slug, quoteOptions }: DetailPageProps) {
  const item = content.items.find((entry) => entry.slug === slug)
  if (!item) return <NotFoundContent />

  return (
    <>
      <DetailHero
        label={{ label: content.label, href: content.basePath }}
        title={item.title}
        text={item.summary}
        action={{ label: 'Solicitar orçamento', href: '#orcamento' }}
      />
      <DetailBody sections={content.sections[item.slug] ?? []} />
      <DetailGallery images={galleryFor(item.image, content.gallery)} label="Fotos de trabalhos da MaulehSeg" />
      <DetailContact
        content={content.contact}
        groups={quoteOptions}
        defaultService={`${content.basePath}/${item.slug}`}
      />
    </>
  )
}
