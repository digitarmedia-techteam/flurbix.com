'use client'

import { useEffect, useRef, useState } from 'react'

interface Stat {
  label: string
  target: number
  suffix: string
  decimals: number
}

const stats: Stat[] = [
  { label: 'Client Onboarded', target: 2650, suffix: '+', decimals: 0 },
  { label: 'Trusted By', target: 40, suffix: '+', decimals: 0 },
  { label: 'Uptime SLA', target: 99.98, suffix: '%', decimals: 2 },
  { label: 'Outreach Sent', target: 33, suffix: 'K+', decimals: 0 },
]

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

function Counter({ stat }: { stat: Stat }) {
  const [value, setValue] = useState(0)
  const triggered = useRef(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !triggered.current) {
          triggered.current = true
          observer.unobserve(el)

          const duration = 1800
          const start = performance.now()

          const tick = (now: number) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = easeOutExpo(progress)
            setValue(eased * stat.target)
            if (progress < 1) requestAnimationFrame(tick)
            else setValue(stat.target)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [stat.target])

  const display =
    stat.decimals > 0
      ? value.toFixed(stat.decimals)
      : Math.round(value).toLocaleString()

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center py-8 px-4"
    >
      <span className="font-syne text-5xl font-bold text-cyan">
        {display}
        {stat.suffix}
      </span>
      <span className="font-dm text-sm text-slate-500 dark:text-muted mt-1 text-center">
        {stat.label}
      </span>
    </div>
  )
}

export default function StatsBar() {
  return (
    <section
      aria-label="Platform statistics"
      className="w-full py-12 border-t border-b border-slate-200 dark:border-white/5 bg-white dark:bg-navy transition-colors duration-300"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-200 dark:divide-white/5 max-w-7xl mx-auto">
        {stats.map((stat) => (
          <Counter key={stat.label} stat={stat} />
        ))}
      </div>
    </section>
  )
}
