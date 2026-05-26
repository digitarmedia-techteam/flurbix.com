'use client'

import React, { useEffect, useRef, useState } from 'react'

interface ScorecardItem {
  id: string
  label: string
  targetValue: string
  isNumeric: boolean
  startVal: number
  endVal: number
  decimals: number
  prefix?: string
  suffix?: string
  color: 'cyan' | 'violet'
  Icon: React.FC<{ className?: string }>
}

const items: ScorecardItem[] = [
  {
    id: 'uptime',
    label: 'Uptime SLA',
    targetValue: '99.99%',
    isNumeric: true,
    startVal: 95.0,
    endVal: 99.99,
    decimals: 2,
    suffix: '%',
    color: 'cyan',
    Icon: (props) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 20h.01M8.5 16.5a5 5 0 0 1 7 0M5 13a9 9 0 0 1 14 0M1.5 9.5a13.5 13.5 0 0 1 21 0" />
      </svg>
    ),
  },
  {
    id: 'encryption',
    label: 'Encryption',
    targetValue: 'AES-256',
    isNumeric: false,
    startVal: 0,
    endVal: 0,
    decimals: 0,
    color: 'cyan',
    Icon: (props) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    id: 'pentests',
    label: 'Pen Tests',
    targetValue: 'Annual',
    isNumeric: false,
    startVal: 0,
    endVal: 0,
    decimals: 0,
    color: 'violet',
    Icon: (props) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    id: 'response',
    label: 'Response Time',
    targetValue: '< 4 hrs',
    isNumeric: true,
    startVal: 24,
    endVal: 4,
    decimals: 0,
    prefix: '< ',
    suffix: ' hrs',
    color: 'cyan',
    Icon: (props) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    id: 'datacenters',
    label: 'Data Centers',
    targetValue: '3 Regions',
    isNumeric: true,
    startVal: 1,
    endVal: 3,
    decimals: 0,
    suffix: ' Regions',
    color: 'violet',
    Icon: (props) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    id: 'certs',
    label: 'Certifications',
    targetValue: 'SOC 2 Type II',
    isNumeric: false,
    startVal: 0,
    endVal: 0,
    decimals: 0,
    color: 'cyan',
    Icon: (props) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    id: 'disclosure',
    label: 'Vulnerability Disclosure',
    targetValue: 'Active',
    isNumeric: false,
    startVal: 0,
    endVal: 0,
    decimals: 0,
    color: 'violet',
    Icon: (props) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="8" y="6" width="8" height="14" rx="4" />
        <path d="M18 8a6 6 0 0 0-12 0M4 12h3M17 12h3M4 18l3-1M17 17l3 1M8 10h8" />
      </svg>
    ),
  },
  {
    id: 'mfa',
    label: 'MFA Support',
    targetValue: 'Enforced',
    isNumeric: false,
    startVal: 0,
    endVal: 0,
    decimals: 0,
    color: 'cyan',
    Icon: (props) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
      </svg>
    ),
  },
]

export default function SecurityScorecard() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [triggered, setTriggered] = useState(false)
  const [values, setValues] = useState<Record<string, string>>(() => {
    // Initial static states
    const initial: Record<string, string> = {}
    items.forEach((item) => {
      initial[item.id] = item.isNumeric
        ? `${item.prefix || ''}${item.startVal.toFixed(item.decimals)}${item.suffix || ''}`
        : '...'
    })
    return initial
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !triggered) {
          setTriggered(true)
        }
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [triggered])

  useEffect(() => {
    if (!triggered) return

    const duration = 1200 // animation duration in ms
    const frameRate = 1000 / 60 // 60 FPS
    const totalFrames = Math.round(duration / frameRate)
    let frame = 0

    const timer = setInterval(() => {
      frame++
      const progress = Math.min(frame / totalFrames, 1)

      // Easing function (easeOutQuad)
      const ease = progress * (2 - progress)

      setValues((prev) => {
        const updated = { ...prev }
        items.forEach((item) => {
          if (item.isNumeric) {
            const currentVal = item.startVal + (item.endVal - item.startVal) * ease
            updated[item.id] = `${item.prefix || ''}${currentVal.toFixed(
              item.decimals
            )}${item.suffix || ''}`
          } else {
            // Typing/reveal effect for text metrics
            const charsToReveal = Math.floor(item.targetValue.length * progress)
            updated[item.id] = item.targetValue.slice(0, charsToReveal)
          }
        })
        return updated
      })

      if (frame >= totalFrames) {
        clearInterval(timer)
      }
    }, frameRate)

    return () => clearInterval(timer)
  }, [triggered])

  return (
    <div
      ref={containerRef}
      className="w-full bg-[#0A1628] border-y border-white/5 py-16 px-6 relative z-10"
      aria-label="Security Metrics"
    >
      <div className="max-w-5xl mx-auto">
        <h3 className="font-syne font-bold text-2xl text-center text-white mb-12">
          Security At A Glance
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((item) => {
            const colorClass =
              item.color === 'cyan'
                ? 'text-cyan stroke-cyan'
                : 'text-violet-light stroke-violet-light'
            const borderHoverClass =
              item.color === 'cyan' ? 'hover:border-cyan/30' : 'hover:border-violet/30'

            return (
              <div
                key={item.id}
                className={`bg-[#1E293B] border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 ${borderHoverClass}`}
              >
                <div className={`${colorClass} mb-4`}>
                  <item.Icon className="w-8 h-8" />
                </div>
                <div className={`font-syne font-bold text-3xl md:text-4xl min-h-[40px] ${colorClass}`}>
                  {values[item.id]}
                </div>
                <span className="font-dm text-xs text-subtle mt-2 font-medium tracking-wide">
                  {item.label}
                </span>
              </div>
            )
          })}
        </div>

        <p className="font-dm text-xs text-subtle text-center mt-8 tracking-wide">
          Last security audit: <span className="text-white">Q4 2024</span> · Next scheduled:{' '}
          <span className="text-white">Q2 2025</span>
        </p>
      </div>
    </div>
  )
}
