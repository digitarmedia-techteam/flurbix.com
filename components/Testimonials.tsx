'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useTheme } from '@/context/ThemeContext'

interface Testimonial {
  name: string
  title: string
  company: string
  quote: string
  initials: string
  avatarBg: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Chen',
    title: 'Agency Owner',
    company: 'PixelForge Agency',
    initials: 'SC',
    avatarBg: '#8B5CF6',
    quote:
      'Flurbix completely changed how we approach a client. The automation alone saves our team 15 hours a week. We went from managing chaos in spreadsheets to having full visibility into every campaign in real time.',
  },
  {
    name: 'Marcus Rivera',
    title: 'Marketing Director',
    company: 'ScaleUp Inc.',
    initials: 'MR',
    avatarBg: '#06B6D4',
    quote:
      'The analytics dashboards give us insights we never had before. We can finally tie campaign performance directly to revenue, and the team collaboration features keep our entire org in sync without endless Slack threads.',
  },
  {
    name: 'Priya Nair',
    title: 'Growth Manager',
    company: 'Velocity SaaS',
    initials: 'PN',
    avatarBg: '#F59E0B',
    quote:
      'We evaluated five different platforms before choosing Flurbix. Nothing else came close to the depth of automation and reporting. It felt like someone finally built a tool designed for how growth teams actually work.',
  },
  {
    name: 'Jordan Blake',
    title: 'Affiliate Network Manager',
    company: 'OfferBridge',
    initials: 'JB',
    avatarBg: '#22C55E',
    quote:
      "Managing affiliate campaigns across 200+ partners used to be a nightmare. Flurbix's custom workflows and role-based access made it manageable overnight. Our team onboarded in a day and we haven't looked back.",
  },
]

function StarRow() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="#06B6D4" width="16" height="16" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <article className="bg-white dark:bg-[#1E293B]/40 border border-slate-200 dark:border-white/5 rounded-2xl p-8 flex flex-col gap-5 flex-1 min-w-0 transition-colors duration-300">
      <StarRow />
      <blockquote className="font-dm italic text-[16px] text-slate-700 dark:text-slate-100 leading-relaxed flex-1 transition-colors duration-300">
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <footer className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center font-syne font-bold text-white text-sm flex-shrink-0"
          style={{ background: t.avatarBg }}
          aria-hidden="true"
        >
          {t.initials}
        </div>
        <div>
          <p className="font-syne font-bold text-sm text-navy dark:text-white transition-colors duration-300">{t.name}</p>
          <p className="font-dm text-xs text-slate-500 dark:text-muted transition-colors duration-300">
            {t.title}, {t.company}
          </p>
        </div>
      </footer>
    </article>
  )
}

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const { theme } = useTheme()

  const slides = [
    [testimonials[0], testimonials[1]],
    [testimonials[2], testimonials[3]],
  ]
  const totalSlides = slides.length

  const next = useCallback(() => setIndex((i) => (i + 1) % totalSlides), [totalSlides])
  const prev = () => setIndex((i) => (i - 1 + totalSlides) % totalSlides)

  useEffect(() => {
    if (isHovered) {
      if (intervalRef.current) clearInterval(intervalRef.current)
      return
    }
    intervalRef.current = setInterval(next, 5000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isHovered, next])

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="bg-surface dark:bg-[#0F172A] py-24 px-6 relative z-10 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <p className="font-syne text-xs font-semibold tracking-[0.15em] uppercase text-cyan mb-3">
          Customer Stories
        </p>
        <h2
          id="testimonials-heading"
          className="font-syne font-bold text-4xl md:text-5xl text-navy dark:text-white transition-colors duration-300"
        >
          Loved By Growth Teams Worldwide
        </h2>

        <div
          className="relative max-w-5xl mx-auto mt-14"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Track */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
              aria-live="polite"
              aria-atomic="true"
            >
              {slides.map((pair, si) => (
                <div
                  key={si}
                  className="min-w-full flex flex-col md:flex-row gap-6 md:gap-8"
                  aria-hidden={si !== index}
                >
                  {pair.map((t) => (
                    <TestimonialCard key={t.name} t={t} />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Prev */}
          <button
            onClick={prev}
            aria-label="Previous testimonials"
            className="absolute -left-5 top-1/2 -translate-y-1/2 bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-white/10 rounded-full w-10 h-10 flex items-center justify-center text-slate-800 dark:text-white hover:border-cyan dark:hover:border-cyan hover:text-cyan dark:hover:text-cyan transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 dark:focus-visible:ring-offset-navy focus-visible:ring-offset-white"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M10 4L6 8l4 4" />
            </svg>
          </button>

          {/* Next */}
          <button
            onClick={next}
            aria-label="Next testimonials"
            className="absolute -right-5 top-1/2 -translate-y-1/2 bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-white/10 rounded-full w-10 h-10 flex items-center justify-center text-slate-800 dark:text-white hover:border-cyan dark:hover:border-cyan hover:text-cyan dark:hover:text-cyan transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 dark:focus-visible:ring-offset-navy focus-visible:ring-offset-white"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M6 4l4 4-4 4" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8" role="tablist" aria-label="Testimonial slides">
            {slides.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === index}
                aria-label={`Slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className="rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
                style={{
                  width: i === index ? '24px' : '8px',
                  height: '8px',
                  background: i === index ? '#06B6D4' : (theme === 'dark' ? 'rgba(255,255,255,0.15)' : '#E2E8F0'),
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
