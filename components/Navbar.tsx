'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useTheme } from '@/context/ThemeContext'
import ThemeToggle from '@/components/ThemeToggle'

const navLinks = [
  { label: 'Product', href: '#product' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Resources', href: '#resources' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme } = useTheme()
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className="sticky top-0 z-50 w-full transition-all duration-300 border-b"
        style={
          scrolled
            ? {
                background: theme === 'dark' ? 'rgba(15,23,42,0.92)' : 'rgba(255,255,255,0.92)',
                backdropFilter: 'blur(16px)',
                borderColor: theme === 'dark' ? 'rgba(6,182,212,0.125)' : 'rgba(6,182,212,0.08)',
              }
            : { background: 'transparent', borderColor: 'transparent' }
        }
      >
        <nav
          className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Wordmark */}
          <a
            href="/"
            className="font-syne font-bold text-xl tracking-tight text-slate-900 dark:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 dark:focus-visible:ring-offset-navy focus-visible:ring-offset-white rounded"
            aria-label="Flurbix home"
          >
            Flurbi<span style={{ color: '#06B6D4' }}>x</span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-7" role="list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href.startsWith('#') ? (isHome ? link.href : `/${link.href}`) : link.href}
                  className="nav-link font-dm text-sm text-slate-600 dark:text-muted hover:text-slate-900 dark:hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 dark:focus-visible:ring-offset-navy focus-visible:ring-offset-white rounded"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <a
              href="/contact?subject=Book a Demo"
              className="border border-slate-300 dark:border-white/30 text-slate-800 dark:text-white px-4 py-2 rounded-lg text-sm font-dm hover:border-cyan dark:hover:border-cyan hover:text-cyan dark:hover:text-cyan transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 dark:focus-visible:ring-offset-navy focus-visible:ring-offset-white"
            >
              Book Demo
            </a>
            <a
              href={isHome ? '#pricing' : '/#pricing'}
              className="bg-cyan text-navy font-bold px-4 py-2 rounded-lg text-sm font-dm hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 dark:focus-visible:ring-offset-navy focus-visible:ring-offset-white"
            >
              Start Free Trial
            </a>
          </div>

          {/* Mobile elements */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            {/* Hamburger */}
            <button
              className="flex flex-col gap-[5px] p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan rounded"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
            >
              <span
                className="block w-6 h-[2px] bg-slate-800 dark:bg-white transition-all duration-300"
                style={mobileOpen ? { transform: 'translateY(7px) rotate(45deg)' } : {}}
              />
              <span
                className="block w-6 h-[2px] bg-slate-800 dark:bg-white transition-all duration-300"
                style={mobileOpen ? { opacity: 0 } : {}}
              />
              <span
                className="block w-6 h-[2px] bg-slate-800 dark:bg-white transition-all duration-300"
                style={mobileOpen ? { transform: 'translateY(-7px) rotate(-45deg)' } : {}}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-[#F8FAFC] dark:bg-navy z-50 flex flex-col px-6 py-8"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          {/* Top row */}
          <div className="flex items-center justify-between mb-10">
            <a
              href="/"
              className="font-syne font-bold text-xl tracking-tight text-slate-900 dark:text-white"
              onClick={() => setMobileOpen(false)}
            >
              Flurbi<span style={{ color: '#06B6D4' }}>x</span>
            </a>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <button
                className="p-2 text-slate-800 dark:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan rounded"
                onClick={() => setMobileOpen(false)}
                aria-label="Close navigation menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>

          {/* Links */}
          <nav aria-label="Mobile navigation links">
            <ul className="flex flex-col gap-6 mb-10" role="list">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href.startsWith('#') ? (isHome ? link.href : `/${link.href}`) : link.href}
                    className="font-syne font-semibold text-2xl text-slate-800 dark:text-white hover:text-cyan transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile CTAs */}
          <div className="flex flex-col gap-4 mt-auto">
            <a
              href="/contact?subject=Book a Demo"
              className="border border-slate-300 dark:border-white/30 text-slate-800 dark:text-white text-center px-6 py-3 rounded-lg text-base font-dm hover:border-cyan hover:text-cyan transition-all"
              onClick={() => setMobileOpen(false)}
            >
              Book Demo
            </a>
            <a
              href={isHome ? '#pricing' : '/#pricing'}
              className="bg-cyan text-navy font-bold text-center px-6 py-3 rounded-lg text-base font-dm"
              onClick={() => setMobileOpen(false)}
            >
              Start Free Trial
            </a>
          </div>
        </div>
      )}
    </>
  )
}
