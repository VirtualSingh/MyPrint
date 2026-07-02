'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { signOut } from '@/actions/auth'

interface NavbarUserMenuProps {
  name: string
  email: string
  avatarUrl: string | null
}

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/)
  const initials = parts.slice(0, 2).map((p) => p[0]?.toUpperCase() ?? '')
  return initials.join('') || '?'
}

export function NavbarUserMenu({ name, email, avatarUrl }: NavbarUserMenuProps) {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-9 h-9 rounded-full bg-brand text-white text-sm font-semibold flex items-center justify-center overflow-hidden"
        aria-label="Account menu"
      >
        {avatarUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
        ) : (
          getInitials(name)
        )}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-card border border-border-default shadow-card-hover py-2 z-50">
          <div className="px-4 py-2">
            <p className="text-sm font-medium text-text-primary truncate">{name}</p>
            <p className="text-xs text-text-tertiary truncate">{email}</p>
          </div>
          <div className="border-t border-border-subtle my-1" />
          <Link
            href="/dashboard"
            className="block px-4 py-2 text-sm text-text-primary hover:bg-bg-section transition-colors"
            onClick={() => setOpen(false)}
          >
            My Orders
          </Link>
          <div className="border-t border-border-subtle my-1" />
          <form action={signOut}>
            <button
              type="submit"
              className="w-full text-left px-4 py-2 text-sm text-danger hover:bg-danger-bg transition-colors"
            >
              Log out
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
