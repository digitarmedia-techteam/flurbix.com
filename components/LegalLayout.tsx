import React, { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import LegalTableOfContents, { TocItem } from './LegalTableOfContents'
import LegalBadges from './LegalBadges'

interface LegalLayoutProps {
  title: string
  subtitle: string
  lastUpdated: string
  tocItems: TocItem[]
  children: ReactNode
}

export default function LegalLayout({
  title,
  subtitle,
  lastUpdated,
  tocItems,
  children,
}: LegalLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-surface dark:bg-navy text-navy dark:text-white">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="mb-16">
            <div className="flex items-center gap-2 text-sm font-dm text-subtle mb-6">
              <span>Legal</span>
              <span>/</span>
              <span className="text-navy dark:text-white font-medium">{title}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-syne font-bold mb-6">{title}</h1>
            <p className="text-lg text-subtle max-w-2xl mb-8">
              {subtitle} <br className="hidden md:block" />
              Last Updated: {lastUpdated}
            </p>
            
            {/* Inline Compliance Pills */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 text-xs font-dm font-medium bg-cyan/10 text-cyan rounded-full border border-cyan/20">
                SOC 2 Type II Certified
              </span>
              <span className="px-3 py-1 text-xs font-dm font-medium bg-cyan/10 text-cyan rounded-full border border-cyan/20">
                GDPR Compliant
              </span>
              <span className="px-3 py-1 text-xs font-dm font-medium bg-cyan/10 text-cyan rounded-full border border-cyan/20">
                CCPA Ready
              </span>
            </div>
          </div>

          {/* Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: TOC */}
            <div className="lg:col-span-3 hidden md:block">
              <LegalTableOfContents items={tocItems} />
            </div>
            
            {/* Right Column: Content Card */}
            <div className="lg:col-span-9 bg-white dark:bg-[#1E293B] rounded-2xl border border-border-light dark:border-white/10 p-8 md:p-14 shadow-sm">
              <div className="flex flex-col gap-10">
                {children}
              </div>
            </div>
          </div>
        </div>
      </main>

      <LegalBadges />
      <Footer />
    </div>
  )
}
