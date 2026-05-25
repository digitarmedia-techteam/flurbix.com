'use client'

import MagneticButton from '@/components/MagneticButton'
import HeroDashboard from '@/components/HeroDashboard'

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="min-h-[85vh] flex items-center justify-center text-center relative z-10 px-6 py-16"
    >
      <div className="max-w-[820px] mx-auto w-full">
        {/* Badge */}
        <span className="pill-border font-syne text-sm text-slate-600 dark:text-muted px-4 py-1.5 rounded-full inline-flex items-center gap-2 mb-5 transition-colors duration-300">
          ✦ Campaign Operations Platform
        </span>

        {/* Headline */}
        <h1
          id="hero-heading"
          className="font-syne font-extrabold leading-[1.1] text-slate-900 dark:text-white text-4xl sm:text-5xl md:text-6xl lg:text-[72px] transition-colors duration-300"
        >
          <span
            className="block opacity-0"
            style={{ animation: 'fadeUp 0.7s ease 0.1s forwards' }}
          >
            Run Campaigns.
          </span>
          <span
            className="block opacity-0"
            style={{ animation: 'fadeUp 0.7s ease 0.25s forwards' }}
          >
            Automate Workflows.
          </span>
          <span
            className="block opacity-0"
            style={{ animation: 'fadeUp 0.7s ease 0.4s forwards' }}
          >
            Scale{' '}
            <span className="gradient-text">Growth</span>
            .
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className="font-dm text-lg md:text-xl text-slate-600 dark:text-muted max-w-[600px] mx-auto mt-4 opacity-0 transition-colors duration-300"
          style={{ animation: 'fadeUp 0.7s ease 0.6s forwards' }}
        >
          Flurbix unifies campaign management, team collaboration, analytics,
          and automation into one powerful operating system.
        </p>

        {/* CTA Row */}
        <div
          className="flex flex-wrap gap-4 justify-center mt-6 opacity-0"
          style={{ animation: 'fadeUp 0.7s ease 0.8s forwards' }}
        >
          <MagneticButton>
            <a
              href="#pricing"
              className="bg-cyan text-navy font-bold font-dm px-9 py-3.5 rounded-lg text-base inline-block hover:shadow-[0_0_24px_rgba(6,182,212,0.5)] transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 dark:focus-visible:ring-offset-navy focus-visible:ring-offset-white"
            >
              Start Free Trial
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href="#contact"
              className="border border-slate-300 dark:border-white/30 text-slate-800 dark:text-white font-dm px-9 py-3.5 rounded-lg text-base inline-block hover:border-cyan hover:text-cyan transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 dark:focus-visible:ring-offset-navy focus-visible:ring-offset-white"
            >
              Book Demo
            </a>
          </MagneticButton>
        </div>

        {/* Rich Hero Dashboard Infographic */}
        <div
          className="mt-10 opacity-0 w-full"
          style={{ animation: 'fadeUp 0.7s ease 1s forwards' }}
        >
          <HeroDashboard />
        </div>
      </div>
    </section>
  )
}
