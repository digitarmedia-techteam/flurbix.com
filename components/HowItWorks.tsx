'use client'

import { useEffect, useRef } from 'react'

interface Step {
  number: number
  title: string
  description: string
}

const steps: Step[] = [
  {
    number: 1,
    title: 'Create Campaign',
    description:
      'Define your campaign goals, set budgets, assign team members, and connect your channels. Flurbix gives you a single source of truth from day one.',
  },
  {
    number: 2,
    title: 'Automate Processes',
    description:
      'Set up trigger-based rules that handle repetitive tasks automatically. From bid adjustments to approval workflows, let Flurbix do the heavy lifting.',
  },
  {
    number: 3,
    title: 'Collaborate With Team',
    description:
      'Loop in designers, analysts, media buyers, and stakeholders in real time. Comments, approvals, and task assignments keep everyone moving in sync.',
  },
  {
    number: 4,
    title: 'Analyze Performance',
    description:
      'Monitor campaign metrics as they happen with live dashboards and custom reports. Identify what\'s working and double down with data-backed decisions.',
  },
  {
    number: 5,
    title: 'Scale Operations',
    description:
      'Duplicate winning campaigns, automate scaling rules, and expand to new channels with confidence. Flurbix grows as fast as your team does.',
  },
]

export default function HowItWorks() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>('.step-card')

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            cardObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    cards.forEach((card) => cardObserver.observe(card))

    const lineObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          lineRef.current?.classList.add('visible')
          lineObserver.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (wrapperRef.current) lineObserver.observe(wrapperRef.current)

    return () => {
      cardObserver.disconnect()
      lineObserver.disconnect()
    }
  }, [])

  return (
    <section
      id="solutions"
      aria-labelledby="hiw-heading"
      className="bg-surface dark:bg-[#0F172A] py-24 px-6 relative z-10 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto">
        <p className="font-syne text-xs font-semibold tracking-[0.15em] uppercase text-cyan mb-3 text-center">
          How It Works
        </p>
        <h2
          id="hiw-heading"
          className="font-syne font-bold text-4xl md:text-5xl text-navy dark:text-white text-center transition-colors duration-300"
        >
          From Zero to Scale in Five Steps
        </h2>

        {/* Timeline */}
        <div ref={wrapperRef} className="relative mt-16">
          {/* Center line background */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] hidden md:block bg-cyan/20"
            aria-hidden="true"
          />
          {/* Animated overlay line */}
          <div
            ref={lineRef}
            className="timeline-line absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] hidden md:block bg-cyan/70"
            aria-hidden="true"
          />

          <ol className="flex flex-col gap-12" role="list">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0
              return (
                <li
                  key={step.number}
                  className="relative flex items-center gap-6 md:gap-0"
                >
                  {/* Desktop alternating layout */}
                  <div
                    className={`step-card ${isLeft ? 'reveal-left' : 'reveal-right'} w-full md:w-[calc(50%-2rem)] bg-white dark:bg-[#1E293B]/40 border border-slate-200 dark:border-white/5 rounded-xl p-6 transition-colors duration-300 ${
                      isLeft ? 'md:mr-auto md:text-right' : 'md:ml-auto'
                    }`}
                    style={{ transitionDelay: `${i * 0.12}s` }}
                  >
                    <h3 className="font-syne font-bold text-[22px] text-navy dark:text-white mb-2 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="font-dm text-[15px] text-slate-600 dark:text-muted leading-relaxed transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>

                  {/* Step Number Circle — centered on the line */}
                  <div
                    className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-cyan text-navy font-syne font-bold text-sm items-center justify-center z-10 flex-shrink-0 shadow-[0_0_0_4px_rgba(6,182,212,0.15)]"
                    aria-hidden="true"
                  >
                    {step.number}
                  </div>

                  {/* Mobile number */}
                  <div
                    className="md:hidden flex-shrink-0 w-10 h-10 rounded-full bg-cyan text-navy font-syne font-bold text-sm flex items-center justify-center"
                    aria-hidden="true"
                  >
                    {step.number}
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
