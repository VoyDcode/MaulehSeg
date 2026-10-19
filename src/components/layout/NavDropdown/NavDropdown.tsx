import { useEffect, useRef, type FocusEvent, type ReactNode } from 'react'
import { cx } from '../../../lib/cx'
import { ChevronDownIcon } from '../../ui/icons'
import styles from './NavDropdown.module.css'

interface NavDropdownProps {
  id: string
  label: string
  isOpen: boolean
  isActive?: boolean
  align?: 'start' | 'end'
  triggerClassName?: string
  onToggle: () => void
  onClose: () => void
  children: ReactNode
}

export function NavDropdown({
  id,
  label,
  isOpen,
  isActive = false,
  align = 'start',
  triggerClassName,
  onToggle,
  onClose,
  children,
}: NavDropdownProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const panelId = `${id}-menu`

  useEffect(() => {
    if (!isOpen) return

    function handlePointerDown(event: PointerEvent) {
      if (event.target instanceof Node && !rootRef.current?.contains(event.target)) {
        onClose()
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose()
        triggerRef.current?.focus()
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  function handleBlur(event: FocusEvent<HTMLDivElement>) {
    if (isOpen && !event.currentTarget.contains(event.relatedTarget)) {
      onClose()
    }
  }

  return (
    <div ref={rootRef} className={styles.root} onBlur={handleBlur}>
      <button
        ref={triggerRef}
        type="button"
        className={triggerClassName}
        aria-expanded={isOpen}
        aria-controls={panelId}
        data-active={isActive || undefined}
        onClick={onToggle}
      >
        {label}
        <ChevronDownIcon className={styles.chevron} />
      </button>
      <div id={panelId} className={cx(styles.panel, align === 'end' && styles.alignEnd)} hidden={!isOpen}>
        {children}
      </div>
    </div>
  )
}
