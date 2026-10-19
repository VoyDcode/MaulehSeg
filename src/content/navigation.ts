import { paths } from '../paths'
import type { ContentItem, NavItem, NavLink } from '../types/content'
import { projects } from './projects'
import { services } from './services'
import { trainings } from './trainings'

function toNavLinks(basePath: string, items: ContentItem[]): NavLink[] {
  return items.map(({ slug, title }) => ({ label: title, href: `${basePath}/${slug}` }))
}

export const serviceLinks = toNavLinks(paths.services, services)
export const trainingLinks = toNavLinks(paths.trainings, trainings)
const projectLinks = toNavLinks(paths.projects, projects)

export const mainNavigation: NavItem[] = [
  { type: 'link', label: 'Home', href: paths.home },
  { type: 'link', label: 'Quem Somos', href: paths.about },
  {
    type: 'dropdown',
    id: 'servicos',
    label: 'Serviços',
    overview: { label: 'Todos os serviços', href: paths.services },
    links: serviceLinks,
  },
  {
    type: 'dropdown',
    id: 'treinamentos',
    label: 'Treinamentos',
    overview: { label: 'Todos os treinamentos', href: paths.trainings },
    links: trainingLinks,
  },
  {
    type: 'mega',
    id: 'todas-as-paginas',
    label: 'Todas as páginas',
    groups: [
      { title: 'Serviços', href: paths.services, links: serviceLinks },
      { title: 'Treinamentos', href: paths.trainings, links: trainingLinks },
      { title: 'Projetos', links: projectLinks },
    ],
  },
]

export const companyLinks: NavLink[] = [
  { label: 'Home', href: paths.home },
  { label: 'Quem Somos', href: paths.about },
  { label: 'Serviços', href: paths.services },
  { label: 'Treinamentos', href: paths.trainings },
]

export const contactCta: NavLink = { label: 'Fale conosco', href: '#contato' }
