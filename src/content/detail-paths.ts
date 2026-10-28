import { paths } from '../paths'
import type { ContentItem } from '../types/content'
import { consulting } from './consulting'
import { services } from './services'
import { trainings } from './trainings'

const toPaths = (basePath: string, items: ContentItem[]) => items.map(({ slug }) => `${basePath}/${slug}`)

/** Páginas de detalhe que viram HTML estático no build (ver react-router.config.ts). */
export const detailPaths: string[] = [
  ...toPaths(paths.services, services),
  ...toPaths(paths.trainings, trainings),
  ...toPaths(paths.consulting, consulting),
]
