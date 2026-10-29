import seloOriginal from '../../../assets/images/brand/selo-resgate-tecnico-256.webp'
import seloBranco from '../../../assets/images/brand/selo-resgate-tecnico-branco.svg'
import { site } from '../../../content/site'
import { Logo } from '../../ui/Logo/Logo'
import { useHeaderBrand, useHeaderTheme } from './useHeaderTheme'

interface BrandMarkProps {
  /** Classe do logo padrão (SVG). */
  className?: string
  /** Classe do selo. Ele é redondo, então pede um tamanho próprio. */
  sealClassName?: string
  /** Fundo onde a marca aparece. O menu do celular é branco, mesmo com o cabeçalho azul. */
  surface?: 'header' | 'light'
}

/**
 * Marca do cabeçalho e do menu mobile. A rota escolhe pelo `handle`:
 * `headerBrand: 'selo'` troca o logo padrão pelo selo de resgate técnico.
 *
 * No azul vai a versão vetorizada em branco (anéis, letras e logo em vetor,
 * com a figura do resgate igual à original). Em fundo branco vai o selo original.
 */
export function BrandMark({ className, sealClassName, surface = 'header' }: BrandMarkProps) {
  const brand = useHeaderBrand()
  const theme = useHeaderTheme()

  if (brand === 'selo') {
    const onLight = surface === 'light' || theme === 'light'

    return (
      <img
        src={onLight ? seloOriginal : seloBranco}
        width={256}
        height={256}
        alt={`${site.name}, resgate técnico industrial e acesso por cordas`}
        className={sealClassName}
        decoding="async"
      />
    )
  }

  return <Logo className={className} />
}
