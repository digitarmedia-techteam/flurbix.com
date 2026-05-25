'use client'

import { useRef, type ReactNode, type MouseEvent } from 'react'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  href?: string
}

export default function MagneticButton({
  children,
  className = '',
  onClick,
  href,
}: MagneticButtonProps) {
  const btnRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = btnRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const relX = e.clientX - (rect.left + rect.width / 2)
    const relY = e.clientY - (rect.top + rect.height / 2)
    el.style.transform = `translate(${relX * 0.3}px, ${relY * 0.3}px)`
    el.style.transition = 'transform 0.1s ease'
  }

  const handleMouseLeave = () => {
    const el = btnRef.current
    if (!el) return
    el.style.transform = 'translate(0, 0)'
    el.style.transition = 'transform 0.4s ease'
  }

  if (href) {
    return (
      <div
        ref={btnRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ display: 'inline-block' }}
      >
        <a href={href} className={className}>
          {children}
        </a>
      </div>
    )
  }

  return (
    <div
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ display: 'inline-block' }}
    >
      <button onClick={onClick} className={className}>
        {children}
      </button>
    </div>
  )
}
