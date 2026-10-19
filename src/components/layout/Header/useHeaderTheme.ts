import { useMatches } from 'react-router'

export type HeaderTheme = 'light' | 'brand'

export interface HeaderHandle {
  headerTheme?: HeaderTheme
}

function hasHeaderTheme(handle: unknown): handle is Required<HeaderHandle> {
  return typeof handle === 'object' && handle !== null && 'headerTheme' in handle
}

export function useHeaderTheme(): HeaderTheme {
  const matches = useMatches()
  const handle = matches.map((match) => match.handle).findLast(hasHeaderTheme)

  return handle?.headerTheme ?? 'brand'
}
