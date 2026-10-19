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
