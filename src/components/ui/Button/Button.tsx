import type { ComponentPropsWithoutRef } from 'react'
import { cx } from '../../../lib/cx'
import styles from './Button.module.css'

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  variant?: 'accent' | 'dark'
}

// Mesmo visual do ButtonLink, para ações que não são links (ex.: enviar formulário).
export function Button({ variant = 'accent', type = 'button', className, ...props }: ButtonProps) {
  return <button type={type} className={cx(styles.button, styles[variant], className)} {...props} />
}
