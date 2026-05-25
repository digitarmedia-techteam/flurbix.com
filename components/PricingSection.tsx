'use client'

import { useState, useEffect } from 'react'
import { useTheme } from '@/context/ThemeContext'

interface Plan {
  name: string
  monthlyPrice: string | null
  annualPrice: string | null
  priceLabel: string
  description: string
  features: string[]
  cta: string
  ctaStyle: 'solid' | 'ghost'
  popular?: boolean
  delay: string
}

const plans: Plan[] = [
  {
    name: 'Starter',
    monthlyPrice: '49',
    annualPrice: '39',
    priceLabel: '/mo',
    description: 'Perfect for small teams getting started with campaign ops.',
    features: [
      '5 team members',
      '10 active campaigns',
      'Basic analytics',
      'Email support',
      '5GB storage',
    ],
    cta: 'Get Started',
    ctaStyle: 'ghost',
    delay: '0s',
  },
  {
    name: 'Growth',
    monthlyPrice: '149',
    annualPrice: '119',
    priceLabel: '/mo',
    description: 'For growing teams running serious campaign operations.',
    features: [
      '25 team members',
      'Unlimited campaigns',
      'Full analytics suite',
      'Workflow automation',
      'Priority support',
      'API access',
      '50GB storage',
    ],
    cta: 'Start Free Trial',
    ctaStyle: 'solid',
    popular: true,
    delay: '0.1s',
  },
  {
    name: 'Enterprise',
    monthlyPrice: null,
    annualPrice: null,
    priceLabel: '',
    description: 'Custom solutions for large organizations with complex needs.',
    features: [
      'Unlimited team members',
      'White-label options',
      'SSO / SAML',
      '99.99% uptime SLA',
      'Dedicated CSM',
      'Custom integrations',
      'Unlimited storage',
    ],
    cta: 'Contact Sales',
    ctaStyle: 'ghost',
    delay: '0.2s',
  },
]

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false)
  const [priceVisible, setPriceVisible] = useState(true)
  const { theme } = useTheme()

  const handleToggle = () => {
    setPriceVisible(false)
    setTimeout(() => {
      setIsAnnual((v) => !v)
      setPriceVisible(true)
    }, 200)
  }

  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>('.pricing-card-reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    cards.forEach((c) => observer.observe(c))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="bg-white dark:bg-[#0F172A] py-24 px-6 relative z-10 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <p className="font-syne text-xs font-semibold tracking-[0.15em] uppercase text-cyan mb-3 text-center">
          Pricing
        </p>
        <h2
          id="pricing-heading"
          className="font-syne font-bold text-4xl md:text-5xl text-navy dark:text-white text-center transition-colors duration-300"
        >
          Simple, Transparent Pricing
        </h2>

        {/* Billing Toggle */}
        <div className="flex items-center gap-3 justify-center mt-8 mb-12">
          <span className="font-dm text-sm text-slate-500 dark:text-muted">Monthly</span>
          <button
            role="switch"
            aria-checked={isAnnual}
            aria-label="Toggle annual billing"
            onClick={handleToggle}
            className="relative w-12 h-6 rounded-full bg-cyan cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-navy transition-colors"
          >
            <span
              className="absolute top-1 w-4 h-4 rounded-full bg-white dark:bg-navy transition-transform duration-300"
              style={{ transform: isAnnual ? 'translateX(26px)' : 'translateX(4px)' }}
            />
          </button>
          <span className="font-dm text-sm text-slate-500 dark:text-muted">
            Annual{' '}
            <span className="bg-green-500/20 text-green-600 dark:text-green-400 text-xs font-dm px-2 py-0.5 rounded-full ml-1">
              Save 20%
            </span>
          </span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`pricing-card-reveal reveal relative bg-slate-50 dark:bg-[#1E293B]/40 border rounded-2xl p-8 flex flex-col transition-colors duration-300 ${
                plan.popular ? 'pricing-popular border-cyan' : 'border-slate-200 dark:border-white/5'
              }`}
              style={{ transitionDelay: plan.delay, animationDelay: plan.delay }}
            >
              {plan.popular && (
                <span className="absolute -top-3 right-6 bg-cyan text-navy text-xs font-syne font-bold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <h3 className="font-syne font-bold text-lg text-navy dark:text-white mb-1 transition-colors duration-300">{plan.name}</h3>
              <p className="font-dm text-sm text-slate-600 dark:text-muted mb-6 transition-colors duration-300">{plan.description}</p>

              {/* Price */}
              <div
                className="flex items-end gap-1 mb-8 transition-opacity duration-200"
                style={{ opacity: priceVisible ? 1 : 0 }}
                aria-live="polite"
              >
                {plan.monthlyPrice ? (
                  <>
                    <span className="font-syne font-bold text-5xl text-navy dark:text-white transition-colors duration-300">
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="font-dm text-slate-500 dark:text-muted mb-1 transition-colors duration-300">{plan.priceLabel}</span>
                    {isAnnual && (
                      <span className="font-dm text-xs text-slate-400 dark:text-subtle mb-1 ml-1 transition-colors duration-300">billed annually</span>
                    )}
                  </>
                ) : (
                  <span className="font-syne font-bold text-5xl text-navy dark:text-white transition-colors duration-300">Custom</span>
                )}
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-3 flex-1 mb-8" role="list">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 font-dm text-sm text-slate-600 dark:text-muted transition-colors duration-300">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <circle cx="8" cy="8" r="7" stroke="#06B6D4" strokeWidth="1.5" />
                      <path d="M5 8l2 2 4-4" stroke="#06B6D4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`w-full text-center py-3 rounded-lg font-dm font-bold text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-navy ${
                  plan.ctaStyle === 'solid'
                    ? 'bg-cyan text-navy hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-[1.02]'
                    : 'border border-slate-300 dark:border-white/20 text-slate-800 dark:text-white hover:border-cyan dark:hover:border-cyan hover:text-cyan dark:hover:text-cyan'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center font-dm text-sm text-slate-500 dark:text-subtle mt-8 transition-colors duration-300">
          All plans include a 14-day free trial · No credit card required
        </p>
      </div>
    </section>
  )
}
