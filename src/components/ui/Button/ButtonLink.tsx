import type { ComponentPropsWithoutRef } from 'react'
import { Link } from 'react-router'
import { cx } from '../../../lib/cx'
import styles from './Button.module.css'

type ButtonVariant = 'accent' | 'dark'

type ButtonLinkProps = Omit<ComponentPropsWithoutRef<'a'>, 'href'> & {
  href: string
  variant?: ButtonVariant
}

export function ButtonLink({ href, variant = 'accent', className, children, ...props }: ButtonLinkProps) {
  const classes = cx(styles.button, styles[variant], className)

  if (href.startsWith('/')) {
    return (
      <Link to={href} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <a href={href} className={classes} {...props}>
      {children}
    </a>
  )
}
