'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

interface NavbarProps {}

export default function Navbar({}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border-subtle">
      <div className="max-w-container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-brand font-semibold text-base">
          <span className="text-xl">🖨️</span>
          <span>MyPrint</span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-text-secondary text-sm hover:text-brand transition-colors">
            How it works
          </a>
          <a href="#for-vendors" className="text-text-secondary text-sm hover:text-brand transition-colors">
            For Vendors
          </a>
          <a href="#" className="text-text-secondary text-sm hover:text-brand transition-colors">
            Track Order
          </a>
        </div>

        {/* Desktop CTA buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#"
            className="text-brand text-sm font-semibold px-4 py-2 border border-brand rounded-sm hover:bg-brand-light transition-colors"
          >
            Log in
          </a>
          <a
            href="#"
            className="bg-brand text-white text-sm font-semibold px-4 py-2 rounded-sm hover:bg-brand-dark transition-colors"
          >
            Place an Order
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-text-secondary hover:text-brand transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-border-subtle px-6 py-4 flex flex-col gap-4">
          <a href="#how-it-works" className="text-text-secondary text-sm hover:text-brand transition-colors">
            How it works
          </a>
          <a href="#for-vendors" className="text-text-secondary text-sm hover:text-brand transition-colors">
            For Vendors
          </a>
          <a href="#" className="text-text-secondary text-sm hover:text-brand transition-colors">
            Track Order
          </a>
          <div className="flex flex-col gap-2 pt-2 border-t border-border-subtle">
            <a
              href="#"
              className="text-brand text-sm font-semibold px-4 py-2.5 border border-brand rounded-sm hover:bg-brand-light transition-colors text-center"
            >
              Log in
            </a>
            <a
              href="#"
              className="bg-brand text-white text-sm font-semibold px-4 py-2.5 rounded-sm hover:bg-brand-dark transition-colors text-center"
            >
              Place an Order
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
