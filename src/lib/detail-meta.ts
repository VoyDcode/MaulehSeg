import type { MetaDescriptor } from 'react-router'
import { pages } from '../content/pages'
import type { DetailPageContent } from '../types/content'
import { pageMeta } from './meta'

/** Título e descrição da página de detalhe; slug inexistente vira 404 sem indexação. */
export function detailMeta(content: DetailPageContent, slug: string | undefined): MetaDescriptor[] {
  const item = content.items.find((entry) => entry.slug === slug)
  if (!item) return pageMeta({ ...pages.notFound, noIndex: true })

  return pageMeta({ title: `${item.title} | ${content.label}`, description: item.summary ?? item.title })
}
