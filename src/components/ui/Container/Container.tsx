import type { ComponentPropsWithoutRef } from 'react'
import { cx } from '../../../lib/cx'
import styles from './Container.module.css'

export function Container({ className, ...props }: ComponentPropsWithoutRef<'div'>) {
  return <div className={cx(styles.container, className)} {...props} />
}
