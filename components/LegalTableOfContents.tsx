'use client'

import React, { useEffect, useState } from 'react'

export interface TocItem {
  id: string
  label: string
}

export default function LegalTableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>('')
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Scroll progress
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight
      if (scrollHeight > 0) {
        setProgress((window.scrollY / scrollHeight) * 100)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Intersection Observer for active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -70% 0px' }
    )

    items.forEach((item) => {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [items])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveId(id)
    }
  }

  return (
    <div className="sticky top-24">
      {/* Progress Bar Container */}
      <div className="w-full h-1 bg-border-light dark:bg-white/10 rounded-full mb-8 overflow-hidden">
        <div
          className="h-full bg-cyan transition-all duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <nav className="flex flex-col gap-3 relative border-l border-border-light dark:border-white/10 pl-4">
        {items.map((item) => {
          const isActive = activeId === item.id
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className={`text-sm font-dm transition-colors relative ${
                isActive
                  ? 'text-cyan font-medium'
                  : 'text-subtle hover:text-navy dark:hover:text-white'
              }`}
            >
              {isActive && (
                <span className="absolute -left-[17px] top-1/2 -translate-y-1/2 w-[2px] h-full bg-cyan rounded-r-full" />
              )}
              {item.label}
            </a>
          )
        })}
      </nav>
    </div>
  )
}
