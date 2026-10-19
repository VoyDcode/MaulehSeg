import { useCallback, useState } from 'react'
import { NavLink, useLocation } from 'react-router'
import type { NavItem } from '../../../types/content'
import { DropdownList } from '../NavDropdown/DropdownList'
import { MegaMenuPanel } from '../NavDropdown/MegaMenuPanel'
import { NavDropdown } from '../NavDropdown/NavDropdown'
import styles from './DesktopNav.module.css'

interface DesktopNavProps {
  items: NavItem[]
  className?: string
}

export function DesktopNav({ items, className }: DesktopNavProps) {
  const [openId, setOpenId] = useState<string | null>(null)
  const { pathname } = useLocation()
  const close = useCallback(() => setOpenId(null), [])

  return (
    <nav aria-label="Principal" className={className}>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.label}>
            {item.type === 'link' ? (
              <NavLink to={item.href} end className={styles.link}>
                {item.label}
              </NavLink>
            ) : (
              <NavDropdown
                id={item.id}
                label={item.label}
                isOpen={openId === item.id}
                isActive={item.type === 'dropdown' && pathname.startsWith(item.overview.href)}
                align={item.type === 'mega' ? 'end' : 'start'}
                triggerClassName={styles.link}
                onToggle={() => setOpenId((current) => (current === item.id ? null : item.id))}
                onClose={close}
              >
                {item.type === 'dropdown' ? (
                  <DropdownList overview={item.overview} links={item.links} onNavigate={close} />
                ) : (
                  <MegaMenuPanel groups={item.groups} onNavigate={close} />
                )}
              </NavDropdown>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
