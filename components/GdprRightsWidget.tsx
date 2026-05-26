'use client'

import React, { useState } from 'react'

interface RightItem {
  id: string
  name: string
  article: string
  Icon: React.FC<{ className?: string }>
  explanation: string
  comply: string
}

const rights: RightItem[] = [
  {
    id: 'access',
    name: 'Right of Access',
    article: 'Art. 15',
    Icon: (props) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    explanation: 'You have the right to obtain confirmation of whether Flurbix processes your personal data, and if so, to receive a copy of that data along with information about how it is used.',
    comply: 'Flurbix will provide this data in a structured, machine-readable format within 30 days of receiving a verified request. You can initiate an access request from your account Settings › Privacy › Download My Data.',
  },
  {
    id: 'rectification',
    name: 'Right to Rectification',
    article: 'Art. 16',
    Icon: (props) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    explanation: 'If any personal data Flurbix holds about you is inaccurate or incomplete, you have the right to have it corrected.',
    comply: 'You can update most of your personal data directly in your account profile settings. For data that cannot be self-corrected, contact privacy@flurbix.io with the specific correction requested.',
  },
  {
    id: 'erasure',
    name: 'Right to Erasure',
    article: 'Art. 17',
    Icon: (props) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="3 6 5 6 21 6" />
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </svg>
    ),
    explanation: 'Also known as the "right to be forgotten," this allows you to request deletion of your personal data when it is no longer necessary for the purpose it was collected, you withdraw consent, or you object to processing.',
    comply: 'Requests are processed within 30 days. Note that some data may be retained for legal compliance purposes (e.g., billing records).',
  },
  {
    id: 'restriction',
    name: 'Right to Restriction',
    article: 'Art. 18',
    Icon: (props) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="6" y="4" width="4" height="16" />
        <rect x="14" y="4" width="4" height="16" />
      </svg>
    ),
    explanation: 'You have the right to request that Flurbix limits the processing of your personal data in certain circumstances — for example, while you contest the accuracy of data we hold, or while we assess an objection you have raised.',
    comply: 'During restriction, we store your data but do not actively process it.',
  },
  {
    id: 'portability',
    name: 'Right to Portability',
    article: 'Art. 20',
    Icon: (props) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
      </svg>
    ),
    explanation: 'You have the right to receive your personal data in a structured, commonly used, and machine-readable format (JSON or CSV), and to have that data transmitted to another service provider where technically feasible.',
    comply: 'This right applies to data you have provided to us on the basis of consent or contract.',
  },
  {
    id: 'object',
    name: 'Right to Object',
    article: 'Art. 21',
    Icon: (props) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <path d="M9 9l6 6M15 9l-6 6" />
      </svg>
    ),
    explanation: 'You have the right to object to Flurbix processing your personal data based on our legitimate interests.',
    comply: 'If you object, we must stop processing unless we can demonstrate compelling legitimate grounds that override your interests. You can always object to processing for direct marketing purposes without providing any reason.',
  },
  {
    id: 'consent',
    name: 'Withdraw Consent',
    article: 'Art. 7',
    Icon: (props) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="15" y1="9" x2="9" y2="15" />
        <line x1="9" y1="9" x2="15" y2="15" />
      </svg>
    ),
    explanation: 'Where Flurbix processes your data on the basis of consent (e.g., marketing emails, analytics cookies), you have the right to withdraw that consent at any time.',
    comply: 'Withdrawal does not affect the lawfulness of processing before withdrawal. You can withdraw consent for marketing via the unsubscribe link in any email, and for cookies via our Cookie Consent Manager.',
  },
  {
    id: 'complaint',
    name: 'Lodge Complaint',
    article: 'Art. 77',
    Icon: (props) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7" />
      </svg>
    ),
    explanation: 'If you believe Flurbix has violated your GDPR rights, you have the right to lodge a complaint with your national data protection authority.',
    comply: "In the EU, this is typically the DPA of the country where you reside. Flurbix's lead supervisory authority is the Irish Data Protection Commission (DPC) at dataprotection.ie.",
  },
]

export default function GdprRightsWidget() {
  const [selectedRight, setSelectedRight] = useState<RightItem | null>(null)

  const handleCardClick = (right: RightItem) => {
    setSelectedRight(selectedRight?.id === right.id ? null : right)
  }

  return (
    <div className="w-full bg-[#0A1628] border-y border-white/5 py-16 px-6 relative z-10" aria-label="GDPR Rights Interactive Tool">
      <div className="max-w-5xl mx-auto">
        <h3 className="font-syne font-bold text-2xl text-center text-white mb-2">
          Exercise Your GDPR Rights
        </h3>
        <p className="font-dm text-sm text-muted mb-10 text-center max-w-xl mx-auto">
          Select a right below to learn how to exercise it or submit a formal request.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {rights.map((right) => {
            const isSelected = selectedRight?.id === right.id
            return (
              <button
                key={right.id}
                type="button"
                onClick={() => handleCardClick(right)}
                aria-expanded={isSelected}
                className={`bg-[#1E293B] border rounded-xl p-5 text-left transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan ${
                  isSelected ? 'border-cyan shadow-[0_0_15px_rgba(6,182,212,0.15)]' : 'border-white/10 hover:border-cyan/40'
                }`}
              >
                <div className={`transition-colors ${isSelected ? 'text-cyan' : 'text-subtle group-hover:text-cyan'}`}>
                  <right.Icon className="w-6 h-6" />
                </div>
                <h4 className="font-syne font-semibold text-sm text-white mt-4 leading-snug">
                  {right.name}
                </h4>
                <span className="font-dm text-xs text-subtle block mt-1">
                  {right.article}
                </span>
              </button>
            )
          })}
        </div>

        {selectedRight && (
          <div className="bg-[#1E293B] border border-cyan/20 rounded-2xl p-6 md:p-8 mt-6 transition-all duration-300 ease-in-out">
            <h4 className="font-syne font-bold text-lg text-cyan mb-3">
              {selectedRight.name} ({selectedRight.article})
            </h4>
            <div className="space-y-4 font-dm text-sm text-muted leading-relaxed">
              <p>{selectedRight.explanation}</p>
              <div>
                <h5 className="font-syne font-semibold text-white mb-1.5">How Flurbix Complies:</h5>
                <p className="text-subtle">{selectedRight.comply}</p>
              </div>
              
              <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/5">
                <span className="text-xs text-subtle">
                  We respond within 30 days as required by GDPR Article 12.
                </span>
                <a
                  href={`mailto:privacy@flurbix.io?subject=GDPR Request: ${selectedRight.name}`}
                  className="inline-flex justify-center items-center px-5 py-2.5 bg-cyan hover:bg-cyan-light text-navy font-bold font-dm text-xs rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-cyan focus-visible:outline-none"
                >
                  Submit a Request
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
