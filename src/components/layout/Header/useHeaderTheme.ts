import { useMatches } from 'react-router'

/**
 * light: branco (padrão, igual ao da Home). dark: preto (Serviços).
 * brand: azul, o padrão antigo. Fica disponível caso o cliente prefira voltar ao azul.
 */
export type HeaderTheme = 'light' | 'brand' | 'dark'

export interface HeaderHandle {
  headerTheme?: HeaderTheme
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
  // PROVISÓRIO: teste do cabeçalho branco em todas as páginas fora de Serviços (era 'brand')
  return useHeaderHandle('headerTheme') ?? 'light'
}
