export interface ContentItem {
  slug: string
  title: string
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
