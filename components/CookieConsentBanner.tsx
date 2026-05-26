'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

interface CookieConsentBannerProps {
  isPreview?: boolean
}

export default function CookieConsentBanner({ isPreview = false }: CookieConsentBannerProps) {
  const [mounted, setMounted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isCustomizing, setIsCustomizing] = useState(false)

  // Toggle states
  const [functional, setFunctional] = useState(true)
  const [analytics, setAnalytics] = useState(true)
  const [marketing, setMarketing] = useState(true)

  useEffect(() => {
    setMounted(true)
    if (isPreview) {
      setIsVisible(true)
    } else {
      const consent = localStorage.getItem('flurbix_cookie_consent')
      if (!consent) {
        // Delay slightly for smooth entry animation
        const timer = setTimeout(() => setIsVisible(true), 1000)
        return () => clearTimeout(timer)
      }
    }
  }, [isPreview])

  const handleAcceptAll = () => {
    if (isPreview) return
    const consent = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
      timestamp: Date.now(),
    }
    localStorage.setItem('flurbix_cookie_consent', JSON.stringify(consent))
    setIsVisible(false)
  }

  const handleRejectNonEssential = () => {
    if (isPreview) return
    const consent = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
      timestamp: Date.now(),
    }
    localStorage.setItem('flurbix_cookie_consent', JSON.stringify(consent))
    setIsVisible(false)
  }

  const handleSavePreferences = () => {
    if (isPreview) return
    const consent = {
      necessary: true,
      functional,
      analytics,
      marketing,
      timestamp: Date.now(),
    }
    localStorage.setItem('flurbix_cookie_consent', JSON.stringify(consent))
    setIsVisible(false)
  }

  if (!mounted || !isVisible) return null

  // Layout styles depending on live vs preview mode
  const wrapperClass = isPreview
    ? 'relative w-full bg-[#1E293B] border border-white/10 rounded-2xl p-6 md:p-8 overflow-hidden shadow-lg'
    : `fixed bottom-0 left-0 right-0 z-50 bg-[#1E293B] border-t border-white/10 p-6 shadow-2xl transition-transform duration-500 ease-in-out transform ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`

  return (
    <div className={wrapperClass} aria-label="Cookie consent banner">
      {isPreview && (
        <span className="absolute top-3 right-3 bg-cyan/10 text-cyan text-[10px] font-dm tracking-wider font-semibold uppercase px-2.5 py-1 rounded-full border border-cyan/20">
          Preview
        </span>
      )}

      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        {/* Customize panel */}
        {isCustomizing && (
          <div className="bg-[#0F172A] border border-white/10 rounded-xl p-6 transition-all duration-300">
            <h4 className="font-syne font-semibold text-base text-white mb-4">
              Customize Cookie Preferences
            </h4>
            <div className="flex flex-col gap-4">
              {/* Strictly Necessary */}
              <div className="flex items-center justify-between py-2 border-b border-white/5">
                <div>
                  <h5 className="font-syne font-semibold text-sm text-white flex items-center gap-1.5">
                    Strictly Necessary
                    <svg
                      className="w-3.5 h-3.5 text-muted"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </h5>
                  <p className="font-dm text-xs text-subtle mt-0.5">
                    Required for the platform to function. Cannot be disabled.
                  </p>
                </div>
                <div className="w-10 h-5 bg-cyan rounded-full flex items-center px-0.5 opacity-60">
                  <div className="w-4 h-4 bg-navy rounded-full transform translate-x-5" />
                </div>
              </div>

              {/* Functional Cookies */}
              <div className="flex items-center justify-between py-2 border-b border-white/5">
                <div>
                  <h5 className="font-syne font-semibold text-sm text-white">Functional</h5>
                  <p className="font-dm text-xs text-subtle mt-0.5">
                    Remember your language, theme, and personalization settings.
                  </p>
                </div>
                <button
                  type="button"
                  disabled={isPreview}
                  onClick={() => setFunctional(!functional)}
                  aria-label="Toggle Functional cookies"
                  className={`w-10 h-5 rounded-full flex items-center px-0.5 transition-colors focus-visible:ring-2 focus-visible:ring-cyan focus-visible:outline-none ${
                    functional ? 'bg-cyan' : 'bg-white/20'
                  }`}
                >
                  <div
                    className={`w-4 h-4 bg-navy rounded-full transition-transform duration-200 ${
                      functional ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-center justify-between py-2 border-b border-white/5">
                <div>
                  <h5 className="font-syne font-semibold text-sm text-white">Analytics</h5>
                  <p className="font-dm text-xs text-subtle mt-0.5">
                    Track features, page performance, and session durations to improve Flurbix.
                  </p>
                </div>
                <button
                  type="button"
                  disabled={isPreview}
                  onClick={() => setAnalytics(!analytics)}
                  aria-label="Toggle Analytics cookies"
                  className={`w-10 h-5 rounded-full flex items-center px-0.5 transition-colors focus-visible:ring-2 focus-visible:ring-cyan focus-visible:outline-none ${
                    analytics ? 'bg-cyan' : 'bg-white/20'
                  }`}
                >
                  <div
                    className={`w-4 h-4 bg-navy rounded-full transition-transform duration-200 ${
                      analytics ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-center justify-between py-2">
                <div>
                  <h5 className="font-syne font-semibold text-sm text-white">Marketing</h5>
                  <p className="font-dm text-xs text-subtle mt-0.5">
                    Measure ad effectiveness and facilitate conversion retargeting.
                  </p>
                </div>
                <button
                  type="button"
                  disabled={isPreview}
                  onClick={() => setMarketing(!marketing)}
                  aria-label="Toggle Marketing cookies"
                  className={`w-10 h-5 rounded-full flex items-center px-0.5 transition-colors focus-visible:ring-2 focus-visible:ring-cyan focus-visible:outline-none ${
                    marketing ? 'bg-cyan' : 'bg-white/20'
                  }`}
                >
                  <div
                    className={`w-4 h-4 bg-navy rounded-full transition-transform duration-200 ${
                      marketing ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <button
                type="button"
                disabled={isPreview}
                onClick={() => setIsCustomizing(false)}
                className="px-4 py-2 border border-white/10 rounded-lg text-white font-dm text-xs hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-cyan focus-visible:outline-none"
              >
                Back
              </button>
              <button
                type="button"
                disabled={isPreview}
                onClick={handleSavePreferences}
                className="px-4 py-2 bg-cyan text-navy font-bold rounded-lg font-dm text-xs hover:bg-cyan-light transition-colors focus-visible:ring-2 focus-visible:ring-cyan focus-visible:outline-none"
              >
                Save Preferences
              </button>
            </div>
          </div>
        )}

        {/* Main Banner Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-3 max-w-3xl">
            <svg
              className="w-5 h-5 text-cyan shrink-0 mt-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 2a10 10 0 1 0 10 10c0-1.07-.15-2.1-.42-3.08a2 2 0 0 0-1.8-1.5c-1.12-.13-2.1-.73-2.73-1.63a2 2 0 0 0-3-0.5 4.54 4.54 0 0 1-5.11.23a2 2 0 0 0-2.82 2.13c.12.87-.2 1.76-.88 2.27a2 2 0 0 0-.25 3.08A4.95 4.95 0 0 1 6.5 15.5" />
              <circle cx="8" cy="11" r="1.5" fill="currentColor" />
              <circle cx="12" cy="15" r="1" fill="currentColor" />
              <circle cx="16" cy="11" r="1" fill="currentColor" />
            </svg>
            <p className="font-dm text-sm text-slate-300 dark:text-muted leading-relaxed">
              We use cookies to improve your experience, analyze usage, and personalize content. By
              continuing, you agree to our{' '}
              <Link
                href="/cookies"
                className="text-cyan hover:underline focus-visible:ring-1 focus-visible:ring-cyan focus-visible:outline-none rounded px-0.5"
              >
                Cookie Policy
              </Link>
              .
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-end">
            <button
              type="button"
              disabled={isPreview}
              onClick={() => setIsCustomizing(true)}
              className="px-4 py-2 text-white border border-white/20 hover:border-cyan hover:text-cyan font-dm text-xs rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-cyan focus-visible:outline-none"
            >
              Customize
            </button>
            <button
              type="button"
              disabled={isPreview}
              onClick={handleRejectNonEssential}
              className="px-4 py-2 text-slate-300 hover:text-white border border-white/20 font-dm text-xs rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-cyan focus-visible:outline-none"
            >
              Reject Non-Essential
            </button>
            <button
              type="button"
              disabled={isPreview}
              onClick={handleAcceptAll}
              className="px-4 py-2 bg-cyan hover:bg-cyan-light text-navy font-bold font-dm text-xs rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-cyan focus-visible:outline-none"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
