import type { MetaDescriptor } from 'react-router'
import { site } from '../content/site'

interface PageMetaOptions {
  title?: string
  description: string
  noIndex?: boolean
}

export function pageMeta({ title, description, noIndex = false }: PageMetaOptions): MetaDescriptor[] {
  return [
    { title: title ? `${title} | ${site.name}` : site.name },
    { name: 'description', content: description },
    ...(noIndex ? [{ name: 'robots', content: 'noindex' }] : []),
  ]
}
