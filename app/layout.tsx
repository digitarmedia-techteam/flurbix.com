import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import './globals.css'
import ParticleCanvas from '@/components/ParticleCanvas'
import CursorGlow from '@/components/CursorGlow'
import { ThemeProvider } from '@/context/ThemeContext'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: 'Flurbix — Campaign Operations Platform for Growth Teams',
  description:
    'Flurbix is the campaign management and marketing automation platform built for growth teams. Unify workflow automation, campaign analytics, and team collaboration.',
  metadataBase: new URL('https://flurbix.com'),
  alternates: {
    canonical: 'https://flurbix.com',
  },
  openGraph: {
    title: 'Flurbix — Campaign Operations Platform for Growth Teams',
    description:
      'Flurbix is the campaign management and marketing automation platform built for growth teams. Unify workflow automation, campaign analytics, and team collaboration.',
    url: 'https://flurbix.com',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Flurbix — Campaign Operations Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flurbix — Campaign Operations Platform for Growth Teams',
    description:
      'Flurbix is the campaign management and marketing automation platform built for growth teams. Unify workflow automation, campaign analytics, and team collaboration.',
    images: ['/og-image.png'],
  },
}

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Flurbix',
  url: 'https://flurbix.com',
  logo: 'https://flurbix.com/logo.png',
  sameAs: [
    'https://twitter.com/flurbix',
    'https://www.linkedin.com/company/flurbix',
    'https://github.com/flurbix',
  ],
}

const softwareJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Flurbix',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'AggregateOffer',
    lowPrice: '49',
    highPrice: '149',
    priceCurrency: 'USD',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} font-dm`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const stored = localStorage.getItem('flurbix-theme');
                if (stored === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider>
          <ParticleCanvas />
          <CursorGlow />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
