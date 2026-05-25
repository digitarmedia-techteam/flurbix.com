'use client'

import { useState, useRef, useEffect } from 'react'
import type { FormEvent } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// ── Types ────────────────────────────────────────────────────────────────────
type FormState = {
  name: string
  email: string
  company: string
  phone: string
  subject: string
  message: string
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

const SUBJECTS = [
  'General Inquiry',
  'Book a Demo',
  'Sales & Pricing',
  'Technical Support',
  'Partnership',
  'Press & Media',
  'Careers',
  'Other',
]

// ── Info card data ────────────────────────────────────────────────────────────
const infoCards = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: 'Email Us',
    value: 'contact@flurbix.com',
    href: 'mailto:contact@flurbix.com',
    sub: 'We reply within 1–2 business days',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.09-1.09a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    label: 'Call Us',
    value: '+1 (800) FLURBIX',
    href: 'tel:+18003587249',
    sub: 'Mon–Fri, 9 AM – 6 PM EST',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: 'Office',
    value: 'San Francisco, CA',
    href: 'https://maps.google.com/?q=San+Francisco,CA',
    sub: '340 Pine Street, Suite 800',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: 'Response Time',
    value: '< 24 Hours',
    href: undefined,
    sub: 'Average first response SLA',
  },
]

// ── Floating label input ──────────────────────────────────────────────────────
function FloatingInput({
  id,
  label,
  type = 'text',
  value,
  onChange,
  required = false,
  autoComplete,
}: {
  id: string
  label: string
  type?: string
  value: string
  onChange: (v: string) => void
  required?: boolean
  autoComplete?: string
}) {
  const [focused, setFocused] = useState(false)
  const lifted = focused || value.length > 0

  return (
    <div className="relative">
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        autoComplete={autoComplete}
        className="peer w-full px-4 pt-6 pb-2 bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-transparent focus:outline-none focus:border-cyan-400 dark:focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 dark:focus:ring-cyan-900/30 transition-all duration-200"
        placeholder={label}
        style={{ boxShadow: focused ? '0 0 0 3px rgba(6,182,212,0.08)' : 'none' }}
      />
      <label
        htmlFor={id}
        className="absolute left-4 transition-all duration-200 pointer-events-none font-dm"
        style={{
          top: lifted ? '8px' : '50%',
          transform: lifted ? 'translateY(0)' : 'translateY(-50%)',
          fontSize: lifted ? '10px' : '14px',
          color: focused ? '#06B6D4' : lifted ? '#94A3B8' : '#94A3B8',
          fontWeight: lifted ? 600 : 400,
          letterSpacing: lifted ? '0.4px' : 0,
          textTransform: lifted ? 'uppercase' : 'none',
        }}
      >
        {label}{required && <span className="ml-0.5 text-cyan-400">*</span>}
      </label>
    </div>
  )
}

// ── Floating label select ─────────────────────────────────────────────────────
function FloatingSelect({
  id,
  label,
  value,
  onChange,
  options,
}: {
  id: string
  label: string
  value: string
  onChange: (v: string) => void
  options: string[]
}) {
  const [focused, setFocused] = useState(false)
  const lifted = focused || value.length > 0

  return (
    <div className="relative">
      <select
        id={id}
        name={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required
        className="peer w-full px-4 pt-6 pb-2 bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:border-cyan-400 dark:focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 dark:focus:ring-cyan-900/30 transition-all duration-200 appearance-none cursor-pointer"
        style={{ boxShadow: focused ? '0 0 0 3px rgba(6,182,212,0.08)' : 'none' }}
      >
        <option value="" disabled />
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
      <label
        htmlFor={id}
        className="absolute left-4 transition-all duration-200 pointer-events-none font-dm"
        style={{
          top: lifted ? '8px' : '50%',
          transform: lifted ? 'translateY(0)' : 'translateY(-50%)',
          fontSize: lifted ? '10px' : '14px',
          color: focused ? '#06B6D4' : '#94A3B8',
          fontWeight: lifted ? 600 : 400,
          letterSpacing: lifted ? '0.4px' : 0,
          textTransform: lifted ? 'uppercase' : 'none',
        }}
      >
        Subject<span className="ml-0.5 text-cyan-400">*</span>
      </label>
      {/* Chevron */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </div>
  )
}

// ── Floating label textarea ───────────────────────────────────────────────────
function FloatingTextarea({
  id,
  label,
  value,
  onChange,
  rows = 5,
}: {
  id: string
  label: string
  value: string
  onChange: (v: string) => void
  rows?: number
}) {
  const [focused, setFocused] = useState(false)
  const lifted = focused || value.length > 0

  return (
    <div className="relative">
      <textarea
        id={id}
        name={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required
        rows={rows}
        className="peer w-full px-4 pt-7 pb-3 bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-transparent focus:outline-none focus:border-cyan-400 dark:focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 dark:focus:ring-cyan-900/30 transition-all duration-200 resize-none"
        placeholder={label}
        minLength={20}
        style={{ boxShadow: focused ? '0 0 0 3px rgba(6,182,212,0.08)' : 'none' }}
      />
      <label
        htmlFor={id}
        className="absolute left-4 transition-all duration-200 pointer-events-none font-dm"
        style={{
          top: lifted ? '10px' : '16px',
          fontSize: lifted ? '10px' : '14px',
          color: focused ? '#06B6D4' : '#94A3B8',
          fontWeight: lifted ? 600 : 400,
          letterSpacing: lifted ? '0.4px' : 0,
          textTransform: lifted ? 'uppercase' : 'none',
        }}
      >
        {label}<span className="ml-0.5 text-cyan-400">*</span>
      </label>
      <span className="absolute bottom-3 right-4 text-xs text-slate-400 font-dm">
        {value.length}/1000
      </span>
    </div>
  )
}

// ── Success screen ────────────────────────────────────────────────────────────
function SuccessScreen({ name, onReset }: { name: string; onReset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-8 text-center">
      {/* Animated check circle */}
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
        style={{
          background: 'linear-gradient(135deg, rgba(6,182,212,0.15), rgba(139,92,246,0.15))',
          border: '2px solid rgba(6,182,212,0.4)',
          animation: 'pulseGlow 2s ease-in-out infinite alternate',
        }}
      >
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <h3 className="font-syne font-bold text-2xl text-slate-900 dark:text-white mb-3">
        Message Sent, {name.split(' ')[0]}!
      </h3>
      <p className="font-dm text-slate-500 dark:text-slate-400 text-base leading-relaxed max-w-sm mb-8">
        We&apos;ve received your message and sent a confirmation to your email. Our team will respond within 1–2 business days.
      </p>
      <button
        onClick={onReset}
        className="font-dm text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 underline underline-offset-4 transition-colors"
      >
        Send another message
      </button>
    </div>
  )
}

// ── Main component ────────────────────────────────────────────────────────────
export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: '', email: '', company: '', phone: '', subject: '', message: '',
  })
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [errors, setErrors] = useState<string[]>([])
  const [charCount] = useState(0)
  const formRef = useRef<HTMLFormElement>(null)

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          observer.unobserve(e.target)
        }
      }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const setField = (field: keyof FormState) => (value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors.length) setErrors([])
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrors([])

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()

      if (data.success) {
        setStatus('success')
      } else {
        setErrors(data.errors || ['Something went wrong. Please try again.'])
        setStatus('error')
      }
    } catch {
      setErrors(['Network error. Please check your connection and try again.'])
      setStatus('error')
    }
  }

  const handleReset = () => {
    setForm({ name: '', email: '', company: '', phone: '', subject: '', message: '' })
    setStatus('idle')
    setErrors([])
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F8FAFC] dark:bg-[#0F172A] transition-colors duration-300">
        {/* ── Hero Banner ──────────────────────────────────────── */}
        <section className="relative overflow-hidden pt-24 pb-16 px-6">
          {/* Gradient blobs */}
          <div
            aria-hidden
            className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)',
            }}
          />
          <div
            aria-hidden
            className="absolute -top-16 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(139,92,246,0.10) 0%, transparent 70%)',
            }}
          />

          <div className="max-w-3xl mx-auto text-center relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 pill-border px-4 py-1.5 rounded-full mb-6 reveal">
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: 'linear-gradient(90deg,#06B6D4,#8B5CF6)', animation: 'pulseGlow 1.5s ease-in-out infinite alternate' }}
              />
              <span className="font-dm text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-widest">
                Get in Touch
              </span>
            </div>

            <h1 className="font-syne font-bold text-4xl md:text-5xl lg:text-6xl text-slate-900 dark:text-white leading-tight mb-5 reveal" style={{ transitionDelay: '80ms' }}>
              We&apos;d love to{' '}
              <span className="gradient-text">hear from you</span>
            </h1>

            <p className="font-dm text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl mx-auto reveal" style={{ transitionDelay: '160ms' }}>
              Whether you have a question, want a demo, or just want to say hello —
              our team is here and ready to help.
            </p>
          </div>
        </section>

        {/* ── Info Cards Row ───────────────────────────────────── */}
        <section className="px-6 pb-12">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {infoCards.map((card, i) => (
              <div
                key={card.label}
                className="reveal group bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-2xl p-5 transition-all duration-300 hover:border-cyan-300 dark:hover:border-cyan-500/40 hover:shadow-lg hover:-translate-y-1"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {card.href ? (
                  <a href={card.href} target={card.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="block">
                    <CardContent card={card} />
                  </a>
                ) : (
                  <CardContent card={card} />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── Two Column: Form + Sidebar ───────────────────────── */}
        <section className="px-6 pb-24">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-8 items-start">

            {/* ── Contact Form (3/5) ── */}
            <div className="lg:col-span-3 reveal-left">
              <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-3xl shadow-xl shadow-slate-100 dark:shadow-slate-900/30 overflow-hidden">
                {/* Card header */}
                <div className="px-8 pt-8 pb-6 border-b border-slate-100 dark:border-slate-700/50">
                  <h2 className="font-syne font-bold text-xl text-slate-900 dark:text-white">
                    Send us a message
                  </h2>
                  <p className="font-dm text-sm text-slate-500 dark:text-slate-400 mt-1">
                    Fill in the form below and we&apos;ll get back to you promptly.
                  </p>
                </div>

                {status === 'success' ? (
                  <SuccessScreen name={form.name} onReset={handleReset} />
                ) : (
                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    noValidate
                    className="px-8 py-8 space-y-5"
                  >
                    {/* Row 1: Name + Email */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <FloatingInput
                        id="name"
                        label="Full Name"
                        value={form.name}
                        onChange={setField('name')}
                        required
                        autoComplete="name"
                      />
                      <FloatingInput
                        id="email"
                        label="Work Email"
                        type="email"
                        value={form.email}
                        onChange={setField('email')}
                        required
                        autoComplete="email"
                      />
                    </div>

                    {/* Row 2: Company + Phone */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <FloatingInput
                        id="company"
                        label="Company (optional)"
                        value={form.company}
                        onChange={setField('company')}
                        autoComplete="organization"
                      />
                      <FloatingInput
                        id="phone"
                        label="Phone (optional)"
                        type="tel"
                        value={form.phone}
                        onChange={setField('phone')}
                        autoComplete="tel"
                      />
                    </div>

                    {/* Row 3: Subject */}
                    <FloatingSelect
                      id="subject"
                      label="Subject"
                      value={form.subject}
                      onChange={setField('subject')}
                      options={SUBJECTS}
                    />

                    {/* Row 4: Message */}
                    <FloatingTextarea
                      id="message"
                      label="Your message (min. 20 characters)"
                      value={form.message}
                      onChange={setField('message')}
                      rows={5}
                    />

                    {/* Error messages */}
                    {errors.length > 0 && (
                      <div className="rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700/50 px-4 py-3">
                        <p className="font-dm text-sm font-semibold text-red-700 dark:text-red-400 mb-1">
                          Please fix the following:
                        </p>
                        <ul className="list-disc list-inside space-y-1">
                          {errors.map((err, i) => (
                            <li key={i} className="font-dm text-sm text-red-600 dark:text-red-400">
                              {err}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Submit button */}
                    <button
                      id="contact-submit"
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full flex items-center justify-center gap-3 font-syne font-bold text-sm text-white py-4 rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
                      style={{
                        background:
                          status === 'loading'
                            ? 'linear-gradient(135deg, #0891B2, #7C3AED)'
                            : 'linear-gradient(135deg, #06B6D4, #8B5CF6)',
                        boxShadow:
                          status !== 'loading'
                            ? '0 4px 20px rgba(6,182,212,0.35)'
                            : 'none',
                        transform: status !== 'loading' ? undefined : 'scale(0.98)',
                      }}
                    >
                      {status === 'loading' ? (
                        <>
                          <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                          </svg>
                          Sending your message…
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="22" y1="2" x2="11" y2="13" />
                            <polygon points="22 2 15 22 11 13 2 9 22 2" />
                          </svg>
                        </>
                      )}
                    </button>

                    <p className="font-dm text-xs text-slate-400 dark:text-slate-500 text-center">
                      By submitting, you agree to our{' '}
                      <a href="#" className="text-cyan-500 hover:underline">Privacy Policy</a>
                      {' '}and{' '}
                      <a href="#" className="text-cyan-500 hover:underline">Terms of Service</a>.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* ── Sidebar (2/5) ── */}
            <div className="lg:col-span-2 space-y-6 reveal-right">

              {/* Book a Demo card */}
              <div
                className="rounded-3xl p-8 text-white relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)' }}
              >
                {/* Glow orb */}
                <div
                  aria-hidden
                  className="absolute -top-10 -right-10 w-48 h-48 rounded-full pointer-events-none"
                  style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.25) 0%, transparent 70%)' }}
                />
                <div className="relative z-10">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                    style={{ background: 'linear-gradient(135deg, rgba(6,182,212,0.3), rgba(139,92,246,0.3))', border: '1px solid rgba(6,182,212,0.4)' }}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="1.8" strokeLinecap="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </div>
                  <h3 className="font-syne font-bold text-xl text-white mb-2">Book a Live Demo</h3>
                  <p className="font-dm text-sm text-slate-300 leading-relaxed mb-6">
                    See Flurbix in action with a personalised walkthrough from our solutions team. No commitment required.
                  </p>
                  <a
                    href="#contact"
                    id="book-demo-sidebar"
                    className="inline-flex items-center gap-2 font-syne font-bold text-sm px-5 py-3 rounded-xl transition-all duration-200 hover:scale-[1.03]"
                    style={{
                      background: 'linear-gradient(135deg, #06B6D4, #8B5CF6)',
                      boxShadow: '0 4px 20px rgba(6,182,212,0.4)',
                    }}
                  >
                    Schedule Demo
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Trust badges */}
              <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-3xl p-6">
                <p className="font-syne font-semibold text-sm text-slate-900 dark:text-white mb-4">Trusted & Secure</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {['SOC 2 Type II', 'GDPR', 'CCPA', 'ISO 27001'].map((badge) => (
                    <span
                      key={badge}
                      className="font-dm text-xs font-semibold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-1.5"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
                <div className="border-t border-slate-100 dark:border-slate-700/50 pt-5 space-y-3">
                  {[
                    { icon: '🔒', text: 'End-to-end encrypted communications' },
                    { icon: '⚡', text: '99.9% uptime SLA guaranteed' },
                    { icon: '🌍', text: 'GDPR & CCPA compliant by design' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3">
                      <span className="text-base">{item.icon}</span>
                      <span className="font-dm text-sm text-slate-500 dark:text-slate-400">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social links */}
              <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-3xl p-6">
                <p className="font-syne font-semibold text-sm text-slate-900 dark:text-white mb-4">Follow Us</p>
                <div className="space-y-3">
                  {[
                    { platform: 'Twitter / X', handle: '@flurbix', href: 'https://twitter.com/flurbix', color: '#000000' },
                    { platform: 'LinkedIn', handle: 'Flurbix Inc.', href: 'https://linkedin.com/company/flurbix', color: '#0A66C2' },
                    { platform: 'GitHub', handle: 'flurbix', href: 'https://github.com/flurbix', color: '#24292E' },
                  ].map((s) => (
                    <a
                      key={s.platform}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 dark:border-slate-700/50 hover:border-cyan-300 dark:hover:border-cyan-500/40 transition-all duration-200 group"
                    >
                      <span className="font-dm text-sm font-semibold text-slate-700 dark:text-slate-300 group-hover:text-cyan-500 transition-colors">
                        {s.platform}
                      </span>
                      <span className="ml-auto font-dm text-xs text-slate-400 dark:text-slate-500">{s.handle}</span>
                      <svg className="text-slate-300 dark:text-slate-600 group-hover:text-cyan-400 transition-colors" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

// ── Info card content sub-component ──────────────────────────────────────────
function CardContent({ card }: { card: typeof infoCards[0] }) {
  return (
    <>
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-cyan-500 dark:text-cyan-400"
        style={{ background: 'linear-gradient(135deg, rgba(6,182,212,0.1), rgba(139,92,246,0.08))', border: '1px solid rgba(6,182,212,0.2)' }}
      >
        {card.icon}
      </div>
      <p className="font-dm text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">{card.label}</p>
      <p className="font-syne font-bold text-sm text-slate-900 dark:text-white mb-1 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">{card.value}</p>
      <p className="font-dm text-xs text-slate-400 dark:text-slate-500">{card.sub}</p>
    </>
  )
}
