import seloResgateTecnico from '../../../assets/images/brand/selo-resgate-tecnico-256.webp'
import { site } from '../../../content/site'
import { Logo } from '../../ui/Logo/Logo'
import { useHeaderBrand } from './useHeaderTheme'

interface BrandMarkProps {
  /** Classe do logo padrão (SVG). */
  className?: string
  /** Classe do selo. Ele é redondo, então pede um tamanho próprio. */
  sealClassName?: string
}

/**
 * Marca do cabeçalho e do menu mobile. A rota escolhe pelo `handle`:
 * `headerBrand: 'selo'` troca o logo padrão pelo selo de resgate técnico.
 */
export function BrandMark({ className, sealClassName }: BrandMarkProps) {
  const brand = useHeaderBrand()

  if (brand === 'selo') {
    return (
      <img
        src={seloResgateTecnico}
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
