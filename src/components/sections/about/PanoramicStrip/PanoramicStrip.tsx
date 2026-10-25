import type { ResponsiveImage } from '../../../../types/content'
import { Picture } from '../../../ui/Picture/Picture'
import styles from './PanoramicStrip.module.css'

export function PanoramicStrip({ image }: { image: ResponsiveImage }) {
  return (
    <div className={styles.strip}>
      <Picture
        image={image}
        pictureClassName={styles.media}
        className={styles.image}
        loading="lazy"
        decoding="async"
      />
    </div>
  )
}
