export interface ContentItem {
  slug: string
  title: string
  /** Resumo curto mostrado no card da página da categoria. */
  summary?: string
  /** Foto do card. Sem ela, o card mostra o capacete da marca no lugar. */
  image?: ResponsiveImage
}

/**
 * Páginas de listagem com o mesmo layout (Serviços e, depois, Treinamentos):
 * hero com botão, grade de cards e faixa de chamada com foto.
 */
export interface ListingPageContent {
  hero: {
    title: string
    text: string
    action: NavLink
  }
  list: {
    /** Título da grade, lido só por leitores de tela (o wireframe não mostra). */
    title: string
    /** Caminho base dos links "Veja +" (ex.: /servicos). */
    basePath: string
    items: ContentItem[]
  }
  cta: {
    eyebrow: string
    title: string
    /** Final do título, em verde. */
    highlight: string
    text: string
    action: NavLink
    image?: ResponsiveImage
  }
}

export interface NavLink {
  label: string
  href: string
}

export interface NavGroup {
  title: string
  href?: string
  links: NavLink[]
}

export type NavItem =
  | { type: 'link'; label: string; href: string }
  | { type: 'dropdown'; id: string; label: string; overview: NavLink; links: NavLink[] }
  | { type: 'mega'; id: string; label: string; groups: NavGroup[] }

export interface BusinessHours {
  days: string
  time: string
}

export interface SiteInfo {
  name: string
  tagline: string
  phone: { display: string; href: string }
  email: string
  address: string
  hours: BusinessHours[]
  social: NavLink[]
}

export interface PageInfo {
  title: string
  description: string
}

export interface ResponsiveImage {
  src: string
  sources: { type: 'image/avif' | 'image/webp'; srcSet: string }[]
  sizes: string
  width: number
  height: number
  alt: string
}

export interface TextSegment {
  text: string
  highlight?: boolean
}

export interface Stat {
  value: string
  label: string
}

export interface ClientLogo {
  name: string
  logo?: { src: string; width: number; height: number }
  /** Logo feito para fundo escuro (versão branca): o card usa o azul-escuro da marca. */
  onDark?: boolean
}

export interface ValueStripItem {
  label: string
  text: string
  reversed: boolean
  dark: boolean
  noisy?: boolean
}

export interface NavCard {
  title: string
  description: string
  href: string
}

export interface AboutContent {
  hero: {
    title: string
    text: string
    action: NavLink
    image?: ResponsiveImage
  }
  panoramic?: ResponsiveImage
  values: {
    id: string
    items: ValueStripItem[]
  }
  navCards: {
    label: string
    items: NavCard[]
  }
}

export interface HomeContent {
  hero: {
    title: string
    subtitle: string
    primaryAction: NavLink
    secondaryAction: NavLink
    image?: ResponsiveImage
  }
  about: {
    id: string
    title: string
    text: string
    action: NavLink
  }
  focus: {
    title: string
    text: TextSegment[]
    stats: Stat[]
  }
  clients: {
    title: string
    items: ClientLogo[]
  }
}
