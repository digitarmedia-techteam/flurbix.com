'use client'

import React, { useEffect, useRef, useState, useCallback } from 'react'

export interface TocItem {
  id: string
  label: string
}

const NAVBAR_OFFSET = 112 // px — matches scroll-mt-32 (8rem = 128px, minus small tolerance)

export default function LegalTableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? '')
  const [progress, setProgress] = useState(0)
  const navRef = useRef<HTMLElement>(null)
  const activeLinkRefs = useRef<Record<string, HTMLAnchorElement | null>>({})

  // ── Scroll progress bar ──────────────────────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight
      if (scrollHeight > 0) {
        setProgress(Math.round((window.scrollY / scrollHeight) * 100))
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // ── Active section tracking (pick the one closest to top of viewport) ────────
  const updateActiveId = useCallback(() => {
    const sectionTops = items
      .map((item) => {
        const el = document.getElementById(item.id)
        if (!el) return null
        const rect = el.getBoundingClientRect()
        return { id: item.id, top: rect.top }
      })
      .filter(Boolean) as { id: string; top: number }[]

    if (sectionTops.length === 0) return

    // Find the last section whose top edge is above or at the offset threshold
    const threshold = NAVBAR_OFFSET + 16
    const visible = sectionTops.filter((s) => s.top <= threshold)

    let next: string
    if (visible.length === 0) {
      // Nothing is past threshold yet — activate first
      next = sectionTops[0].id
    } else {
      // The last one that crossed the top = the current reading section
      next = visible[visible.length - 1].id
    }

    setActiveId((prev) => (prev !== next ? next : prev))
  }, [items])

  useEffect(() => {
    window.addEventListener('scroll', updateActiveId, { passive: true })
    updateActiveId() // run once on mount
    return () => window.removeEventListener('scroll', updateActiveId)
  }, [updateActiveId])

  // ── Keep active TOC link scrolled into view inside the sidebar ───────────────
  useEffect(() => {
    const el = activeLinkRefs.current[activeId]
    if (el && navRef.current) {
      const navRect = navRef.current.getBoundingClientRect()
      const linkRect = el.getBoundingClientRect()
      if (linkRect.top < navRect.top || linkRect.bottom > navRect.bottom) {
        el.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      }
    }
  }, [activeId])

  // ── Click: smooth scroll with navbar offset ──────────────────────────────────
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (!element) return

    const top = element.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET
    window.scrollTo({ top, behavior: 'smooth' })
    setActiveId(id)
  }

  return (
    <div className="sticky top-28 flex flex-col gap-5">
      {/* Progress bar */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-[10px] font-dm text-muted uppercase tracking-widest">
          <span>Reading progress</span>
          <span className="text-cyan font-semibold">{progress}%</span>
        </div>
        <div className="w-full h-1 bg-border-light dark:bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-cyan rounded-full transition-all duration-200 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* TOC nav */}
      <nav
        ref={navRef}
        aria-label="Table of Contents"
        className="max-h-[calc(100vh-220px)] overflow-y-auto overscroll-contain pr-1 scrollbar-thin scrollbar-thumb-border-light dark:scrollbar-thumb-white/10 scrollbar-track-transparent"
      >
        <ul className="flex flex-col border-l-2 border-border-light dark:border-white/10">
          {items.map((item) => {
            const isActive = activeId === item.id
            return (
              <li key={item.id}>
                <a
                  ref={(el) => { activeLinkRefs.current[item.id] = el }}
                  href={`#${item.id}`}
                  aria-current={isActive ? 'location' : undefined}
                  onClick={(e) => handleClick(e, item.id)}
                  className={[
                    'group relative flex items-start gap-2.5 py-2 pl-4 text-sm font-dm',
                    'transition-all duration-200 ease-out',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2',
                    isActive
                      ? 'text-navy dark:text-white font-semibold'
                      : 'text-subtle hover:text-navy dark:hover:text-white/80',
                  ].join(' ')}
                >
                  {/* Active left border */}
                  <span
                    className={[
                      'absolute -left-[2px] top-0 bottom-0 w-[2px] rounded-r-full transition-all duration-300',
                      isActive
                        ? 'bg-cyan opacity-100'
                        : 'bg-transparent opacity-0 group-hover:bg-border-light dark:group-hover:bg-white/20 group-hover:opacity-100',
                    ].join(' ')}
                  />

                  {/* Active dot indicator */}
                  <span
                    className={[
                      'mt-[5px] shrink-0 w-1.5 h-1.5 rounded-full transition-all duration-300',
                      isActive
                        ? 'bg-cyan scale-125 shadow-[0_0_6px_rgba(6,182,212,0.7)]'
                        : 'bg-border-light dark:bg-white/20 group-hover:bg-subtle',
                    ].join(' ')}
                  />

                  <span className="leading-snug">{item.label}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
