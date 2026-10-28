export interface ContentItem {
  slug: string
  title: string
  /** Resumo curto mostrado no card da página da categoria. */
  summary?: string
  /** Foto do card. Sem ela, o card mostra o código (se houver) ou o capacete da marca. */
  image?: ResponsiveImage
  /** Código curto da norma (ex.: NR-10), mostrado no card quando não há foto. */
  code?: string
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

/** Bloco de texto da página de detalhe: título verde centralizado e parágrafos. */
export interface DetailSection {
  title: string
  paragraphs: string[]
  /** Tópicos opcionais, mostrados em lista depois dos parágrafos. */
  list?: string[]
}

/**
 * Template de detalhe (frame "Projetos Template" do Figma), usado por Serviços,
 * Treinamentos e Consultoria. A categoria define os textos fixos da página e
 * cada item (pela slug) tem os próprios blocos de texto.
 */
export interface DetailPageContent {
  /** Rótulo verde acima do título; também leva de volta para a listagem. */
  label: string
  /** Caminho da listagem (ex.: /servicos). As páginas ficam em basePath/slug. */
  basePath: string
  items: ContentItem[]
  /** Blocos de texto de cada item, pela slug. */
  sections: Record<string, DetailSection[]>
  /** Fotos da galeria. A galeria de cada página começa pela foto do próprio item. */
  gallery: ResponsiveImage[]
  contact: {
    /** Linha verde acima do título ("Áreas de atuação" no Figma). */
    eyebrow: string
    title: string
    text: string
    /** Rótulo da caixa de mensagem do formulário. */
    messageLabel: string
    image?: ResponsiveImage
  }
}

export interface ContactChannel {
  /** Define o ícone. */
  kind: 'whatsapp' | 'phone' | 'email' | 'address'
  label: string
  value: string
  /** Sem href, o canal é só informativo (ex.: endereço). */
  href?: string
}

/** Página /contato: destino dos botões "Solicitar orçamento" e "Fale conosco". */
export interface ContactPageContent {
  hero: {
    eyebrow: string
    title: string
    text: string
  }
  form: {
    title: string
    text: string
    messageLabel: string
  }
  channels: {
    title: string
    items: ContactChannel[]
  }
  steps: {
    title: string
    items: { title: string; text: string }[]
  }
}

/** Grupo de opções do campo "tipo de serviço" do formulário de orçamento. */
export interface QuoteOptionGroup {
  label: string
  /** O href de cada opção (ex.: /treinamentos/nr-06-epi) é o valor do campo. */
  options: NavLink[]
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
  /** Quem desenvolveu o site, no pé do rodapé. Sem href, o nome aparece sem link. */
  credits: { name: string; href?: string }[]
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
