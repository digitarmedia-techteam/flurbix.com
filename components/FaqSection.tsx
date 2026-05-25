'use client'

import { useState } from 'react'

interface FaqItem {
  question: string
  answer: string
}

const faqs: FaqItem[] = [
  {
    question: 'What is Flurbix and who is it for?',
    answer:
      'Flurbix is a Campaign Operations Platform built for growth teams, performance marketers, agencies, and affiliate managers. It unifies campaign management, automation, analytics, and team collaboration into a single operating system. Whether you run 5 campaigns or 5,000, Flurbix scales with you.',
  },
  {
    question: 'How is Flurbix different from project management tools like Asana?',
    answer:
      "Unlike generic project management tools, Flurbix is purpose-built for campaign operations. It includes native campaign tracking, marketing automation, performance analytics, and ad platform integrations that tools like Asana simply don't have. Think of it as Asana meets your campaign stack.",
  },
  {
    question: 'Can I integrate Flurbix with my existing ad platforms?',
    answer:
      'Yes. Flurbix connects with Google Ads, Meta Ads, TikTok Ads, LinkedIn Ads, and more via native integrations. You can sync campaign data, pull performance metrics, and trigger automations based on live ad platform signals.',
  },
  {
    question: 'Does Flurbix support affiliate network management?',
    answer:
      'Absolutely. Flurbix includes dedicated tools for affiliate campaign management including partner role access, commission tracking workflows, offer management, and automated reporting. It\'s used by affiliate network managers managing hundreds of partners.',
  },
  {
    question: 'What analytics and reporting features are included?',
    answer:
      'Flurbix offers real-time dashboards, custom report builders, funnel analytics, attribution modeling, and scheduled email reports. Every metric is filterable by campaign, channel, team member, date range, and custom dimensions.',
  },
  {
    question: 'Is there a free trial available?',
    answer:
      'Yes. Every plan includes a 14-day free trial with full access to all features on your chosen tier. No credit card is required to start. You can upgrade, downgrade, or cancel at any time during or after the trial period.',
  },
  {
    question: 'How does the workflow automation engine work?',
    answer:
      'Flurbix uses a trigger-condition-action model. You define a trigger (e.g., "campaign spend exceeds $500"), set conditions (e.g., "ROAS drops below 3x"), and configure actions (e.g., "pause campaign and notify team lead"). Automations run 24/7 without any manual oversight.',
  },
  {
    question: 'What does role-based access control mean in Flurbix?',
    answer:
      'Role-based access lets you assign different permission levels to team members. For example, media buyers can manage campaigns but not billing, while clients can view reports but not edit workflows. Enterprise plans include custom role creation for fully granular access control.',
  },
  {
    question: 'Does Flurbix offer an API for custom integrations?',
    answer:
      'Yes. The Flurbix REST API provides full programmatic access to campaigns, workflows, reports, and team data. API access is available on Growth and Enterprise plans. Comprehensive documentation, SDKs, and webhook support are provided for developers.',
  },
  {
    question: 'How does Flurbix handle data security and compliance?',
    answer:
      'Flurbix is SOC 2 Type II certified and GDPR and CCPA compliant. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). Enterprise plans include data residency options, audit logs, and SSO/SAML authentication.',
  },
  {
    question: 'Can enterprise teams get a custom onboarding experience?',
    answer:
      'Yes. Enterprise customers receive a dedicated Customer Success Manager, guided onboarding sessions, custom workflow setup, team training, and priority implementation support. We work with your team to ensure a smooth rollout tailored to your specific processes.',
  },
  {
    question: 'What support options are available on each plan?',
    answer:
      'Starter plans include email support with a 48-hour response SLA. Growth plans receive priority support with a 4-hour response SLA and access to live chat. Enterprise plans include a dedicated CSM, 24/7 support, a 99.99% uptime SLA, and a direct engineering escalation path.',
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i))

  return (
    <section
      id="resources"
      aria-labelledby="faq-heading"
      className="bg-surface dark:bg-[#0F172A] py-24 px-6 relative z-10 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <p className="font-syne text-xs font-semibold tracking-[0.15em] uppercase text-cyan mb-3">
          FAQ
        </p>
        <h2
          id="faq-heading"
          className="font-syne font-bold text-4xl md:text-5xl text-navy dark:text-white transition-colors duration-300"
        >
          Frequently Asked Questions
        </h2>

        <div
          className="max-w-3xl mx-auto mt-14 divide-y divide-slate-200 dark:divide-white/5"
          itemScope
          itemType="https://schema.org/FAQPage"
        >
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
                className={isOpen ? 'border-l-4 border-cyan pl-4 -ml-4' : ''}
              >
                <button
                  id={`faq-btn-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-body-${i}`}
                  onClick={() => toggle(i)}
                  className={`w-full text-left flex justify-between items-center py-5 font-syne font-semibold text-[17px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan rounded ${
                    isOpen ? 'text-cyan' : 'text-navy dark:text-white'
                  }`}
                >
                  <span itemProp="name">{faq.question}</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 ml-4 transition-transform duration-300"
                    style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    aria-hidden="true"
                  >
                    <path d="M5 8l5 5 5-5" />
                  </svg>
                </button>

                <div
                  id={`faq-body-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  className={`accordion-body ${isOpen ? 'open' : ''}`}
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div itemProp="text">
                    <p className="font-dm text-[15px] text-slate-600 dark:text-muted leading-relaxed pb-5 transition-colors duration-300">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
