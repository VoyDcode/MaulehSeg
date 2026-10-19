import type { ReactNode } from 'react'
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router'
import type { Route } from './+types/root'
import barlowCondensedBold from './assets/fonts/barlow-condensed-latin-700-normal.woff2'
import barlowRegular from './assets/fonts/barlow-latin-400-normal.woff2'
import { SiteLayout } from './components/layout/SiteLayout/SiteLayout'
import { Container } from './components/ui/Container/Container'
import { paths } from './paths'
import './styles/tokens.css'
import './styles/global.css'

export const links: Route.LinksFunction = () => [
  { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
  { rel: 'preload', href: barlowCondensedBold, as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
  { rel: 'preload', href: barlowRegular, as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
]

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return (
    <SiteLayout>
      <Outlet />
    </SiteLayout>
  )
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  const details = import.meta.env.DEV && error instanceof Error ? error.stack : undefined

  return (
    <main>
      <Container>
        <h1>Algo deu errado</h1>
        <p>Ocorreu um erro inesperado. Tente recarregar a página.</p>
        <a href={paths.home}>Voltar para a página inicial</a>
        {details && <pre>{details}</pre>}
      </Container>
    </main>
  )
}
