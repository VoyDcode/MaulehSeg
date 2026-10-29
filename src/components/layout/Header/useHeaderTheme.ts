import { useMatches } from 'react-router'

/** brand: azul (padrão). light: branco (Home). dark: preto (Serviços). */
export type HeaderTheme = 'light' | 'brand' | 'dark'

/** Marca do cabeçalho: o logo padrão ou o selo de resgate técnico (página de Serviços). */
export type HeaderBrand = 'logo' | 'selo'

export interface HeaderHandle {
  headerTheme?: HeaderTheme
  headerBrand?: HeaderBrand
}

/** Lê do `handle` da rota mais específica a opção do cabeçalho pedida. */
function useHeaderHandle<K extends keyof HeaderHandle>(key: K): HeaderHandle[K] {
  const matches = useMatches()
  const handle = matches
    .map((match) => match.handle)
    .findLast((value): value is HeaderHandle => typeof value === 'object' && value !== null && key in value)

  return handle?.[key]
}

export function useHeaderTheme(): HeaderTheme {
  return useHeaderHandle('headerTheme') ?? 'brand'
}

export function useHeaderBrand(): HeaderBrand {
  return useHeaderHandle('headerBrand') ?? 'logo'
}
