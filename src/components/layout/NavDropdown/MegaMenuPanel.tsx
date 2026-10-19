import { useId } from 'react'
import { Link } from 'react-router'
import type { NavGroup } from '../../../types/content'
import styles from './NavDropdown.module.css'

interface MegaMenuPanelProps {
  groups: NavGroup[]
  onNavigate: () => void
}

export function MegaMenuPanel({ groups, onNavigate }: MegaMenuPanelProps) {
  const baseId = useId()

  return (
    <div className={styles.mega}>
      {groups.map((group, index) => {
        const titleId = `${baseId}-${index}`

        return (
          <div key={group.title} className={styles.group}>
            <p id={titleId} className={styles.groupTitle}>
              {group.href ? (
                <Link to={group.href} className={styles.groupTitleLink} onClick={onNavigate}>
                  {group.title}
                </Link>
              ) : (
                group.title
              )}
            </p>
            <ul className={styles.list} aria-labelledby={titleId}>
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className={styles.item} onClick={onNavigate}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )
      })}
    </div>
  )
}
