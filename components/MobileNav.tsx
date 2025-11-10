'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex flex-col items-center justify-center w-10 h-10 rounded-lg hover:bg-brand-mist/50 transition-colors"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span
          className={`block w-5 h-0.5 bg-brand-ink transition-all duration-300 ${
            isOpen ? 'rotate-45 translate-y-1.5' : 'mb-1'
          }`}
        />
        <span
          className={`block w-5 h-0.5 bg-brand-ink transition-all duration-300 ${
            isOpen ? 'opacity-0' : 'mb-1'
          }`}
        />
        <span
          className={`block w-5 h-0.5 bg-brand-ink transition-all duration-300 ${
            isOpen ? '-rotate-45 -translate-y-1.5' : ''
          }`}
        />
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-brand-ink/20 backdrop-blur-sm z-40 md:hidden"
            onClick={closeMenu}
          />

          {/* Menu Panel */}
          <div className="fixed top-14 right-0 w-64 bg-white border-l border-brand-ink/10 shadow-2xl z-50 md:hidden animate-slide-in">
            <nav className="flex flex-col p-4">
              <Link
                href="/"
                onClick={closeMenu}
                className="px-4 py-3 text-brand-ink hover:bg-brand-mist/50 hover:text-brand-blue rounded-lg transition-colors font-medium"
              >
                Home
              </Link>
              <Link
                href="/donate"
                onClick={closeMenu}
                className="px-4 py-3 text-brand-ink hover:bg-brand-mist/50 hover:text-brand-blue rounded-lg transition-colors font-medium"
              >
                Donate
              </Link>
              <Link
                href="/about"
                onClick={closeMenu}
                className="px-4 py-3 text-brand-ink hover:bg-brand-mist/50 hover:text-brand-blue rounded-lg transition-colors font-medium"
              >
                About
              </Link>
              
              <div className="mt-4 pt-4 border-t border-brand-ink/10">
                <a
                  href="mailto:info@shaarsimcha.org"
                  className="block px-4 py-2 text-sm text-brand-ink/70 hover:text-brand-blue transition-colors"
                >
                  info@shaarsimcha.org
                </a>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  )
}