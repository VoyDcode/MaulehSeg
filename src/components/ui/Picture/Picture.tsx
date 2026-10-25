import type { ImgHTMLAttributes } from 'react'
import type { ResponsiveImage } from '../../../types/content'

type PictureProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet' | 'sizes' | 'alt'> & {
  image: ResponsiveImage
  pictureClassName?: string
}

export function Picture({ image, pictureClassName, ...imgProps }: PictureProps) {
  return (
    <picture className={pictureClassName}>
      {image.sources.map((source) => (
        <source key={source.type} type={source.type} srcSet={source.srcSet} sizes={image.sizes} />
      ))}
      <img src={image.src} width={image.width} height={image.height} alt={image.alt} {...imgProps} />
    </picture>
  )
}
