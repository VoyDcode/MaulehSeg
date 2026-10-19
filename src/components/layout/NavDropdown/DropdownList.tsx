import { Link } from 'react-router'
import { cx } from '../../../lib/cx'
import type { NavLink } from '../../../types/content'
import styles from './NavDropdown.module.css'

interface DropdownListProps {
  overview: NavLink
  links: NavLink[]
  onNavigate: () => void
}

export function DropdownList({ overview, links, onNavigate }: DropdownListProps) {
  return (
    <ul className={styles.list}>
      <li className={styles.overview}>
        <Link to={overview.href} className={cx(styles.item, styles.overviewLink)} onClick={onNavigate}>
          {overview.label}
        </Link>
      </li>
      {links.map((link) => (
        <li key={link.href}>
          <Link to={link.href} className={styles.item} onClick={onNavigate}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}
