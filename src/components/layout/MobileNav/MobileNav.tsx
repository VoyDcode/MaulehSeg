import { useEffect, useId, useRef, useState, type ReactNode } from 'react'
import { Link, NavLink as RouterNavLink } from 'react-router'
import type { NavGroup, NavItem, NavLink } from '../../../types/content'
import { ButtonLink } from '../../ui/Button/ButtonLink'
import { ChevronDownIcon, CloseIcon, MenuIcon } from '../../ui/icons'
import { BrandMark } from '../Header/BrandMark'
import styles from './MobileNav.module.css'

const DESKTOP_QUERY = '(min-width: 64rem)'

interface MobileNavProps {
  items: NavItem[]
  cta: NavLink
  className?: string
}

export function MobileNav({ items, cta, className }: MobileNavProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const dialogId = useId()
  const [isOpen, setIsOpen] = useState(false)
  const [expandedId, setExpandedId] = useState<string | null>(null)

  function open() {
    dialogRef.current?.showModal()
    setIsOpen(true)
  }

  function close() {
    dialogRef.current?.close()
  }

  function handleClose() {
    setIsOpen(false)
    setExpandedId(null)
  }

  function toggleSection(id: string) {
    setExpandedId((current) => (current === id ? null : id))
  }

  useEffect(() => {
    if (!isOpen) return

    const query = window.matchMedia(DESKTOP_QUERY)
    function handleChange(event: MediaQueryListEvent) {
      if (event.matches) dialogRef.current?.close()
    }

    query.addEventListener('change', handleChange)
    return () => query.removeEventListener('change', handleChange)
  }, [isOpen])

  return (
    <div className={className}>
      <button
        type="button"
        className={styles.iconButton}
        aria-label="Abrir menu"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls={dialogId}
        onClick={open}
      >
        <MenuIcon />
      </button>

      <dialog ref={dialogRef} id={dialogId} className={styles.dialog} aria-label="Menu" onClose={handleClose}>
        <div className={styles.top}>
          <BrandMark className={styles.logo} sealClassName={styles.seal} />
          <button type="button" className={styles.iconButton} aria-label="Fechar menu" onClick={close}>
            <CloseIcon />
          </button>
        </div>

        <nav aria-label="Principal">
          <ul className={styles.list}>
            {items.map((item) => (
              <li key={item.label}>
                {item.type === 'link' ? (
                  <RouterNavLink to={item.href} end className={styles.link} onClick={close}>
                    {item.label}
                  </RouterNavLink>
                ) : (
                  <AccordionSection
                    label={item.label}
                    isExpanded={expandedId === item.id}
                    onToggle={() => toggleSection(item.id)}
                  >
                    {item.type === 'dropdown' ? (
                      <SubLinks links={[item.overview, ...item.links]} onNavigate={close} />
                    ) : (
                      <GroupedLinks groups={item.groups} onNavigate={close} />
                    )}
                  </AccordionSection>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <ButtonLink href={cta.href} className={styles.cta} onClick={close}>
          {cta.label}
        </ButtonLink>
      </dialog>
    </div>
  )
}

interface AccordionSectionProps {
  label: string
  isExpanded: boolean
  onToggle: () => void
  children: ReactNode
}

function AccordionSection({ label, isExpanded, onToggle, children }: AccordionSectionProps) {
  const panelId = useId()

  return (
    <>
      <button
        type="button"
        className={styles.link}
        aria-expanded={isExpanded}
        aria-controls={panelId}
        onClick={onToggle}
      >
        {label}
        <ChevronDownIcon className={styles.chevron} />
      </button>
      <div id={panelId} className={styles.panel} hidden={!isExpanded}>
        {children}
      </div>
    </>
  )
}

function SubLinks({ links, onNavigate }: { links: NavLink[]; onNavigate: () => void }) {
  return (
    <ul className={styles.subList}>
      {links.map((link) => (
        <li key={link.href}>
          <Link to={link.href} className={styles.subLink} onClick={onNavigate}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

function GroupedLinks({ groups, onNavigate }: { groups: NavGroup[]; onNavigate: () => void }) {
  return groups.map((group) => (
    <div key={group.title} className={styles.group}>
      <p className={styles.groupTitle}>
        {group.href ? (
          <Link to={group.href} className={styles.groupTitleLink} onClick={onNavigate}>
            {group.title}
          </Link>
        ) : (
          group.title
        )}
      </p>
      <SubLinks links={group.links} onNavigate={onNavigate} />
    </div>
  ))
}
