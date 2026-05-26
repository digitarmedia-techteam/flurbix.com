import React from 'react'

export default function LegalBadges() {
  return (
    <div className="w-full bg-navy border-t border-white/5 py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-dm text-sm text-muted mb-8">
          Flurbix is committed to the highest standards of data security and privacy compliance.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {/* SOC 2 Type II */}
          <div className="bg-[#1E293B] border border-white/10 rounded-xl px-8 py-5 flex flex-col items-center gap-2 min-w-[140px]">
            <svg
              className="w-8 h-8 stroke-cyan fill-none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
            <div className="flex flex-col items-center">
              <span className="font-syne font-bold text-sm text-white">SOC 2 Type II</span>
              <span className="font-dm text-xs text-subtle">Security Certified</span>
            </div>
          </div>

          {/* GDPR */}
          <div className="bg-[#1E293B] border border-white/10 rounded-xl px-8 py-5 flex flex-col items-center gap-2 min-w-[140px]">
            <svg
              className="w-8 h-8 stroke-cyan fill-none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <path d="M12 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
              <path d="M10 14l-1-1" />
              <path d="M14 14l1-1" />
              <path d="M10 16H8" />
              <path d="M14 16h2" />
            </svg>
            <div className="flex flex-col items-center">
              <span className="font-syne font-bold text-sm text-white">GDPR</span>
              <span className="font-dm text-xs text-subtle">EU Compliant</span>
            </div>
          </div>

          {/* CCPA */}
          <div className="bg-[#1E293B] border border-white/10 rounded-xl px-8 py-5 flex flex-col items-center gap-2 min-w-[140px]">
            <svg
              className="w-8 h-8 stroke-cyan fill-none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M14 10a2.5 2.5 0 0 0-4 1.5 2.5 2.5 0 0 0 4 1.5" />
            </svg>
            <div className="flex flex-col items-center">
              <span className="font-syne font-bold text-sm text-white">CCPA</span>
              <span className="font-dm text-xs text-subtle">CA Compliant</span>
            </div>
          </div>

          {/* ISO 27001 */}
          <div className="bg-[#1E293B] border border-white/10 rounded-xl px-8 py-5 flex flex-col items-center gap-2 min-w-[140px]">
            <svg
              className="w-8 h-8 stroke-cyan fill-none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
            <div className="flex flex-col items-center">
              <span className="font-syne font-bold text-sm text-white">ISO 27001</span>
              <span className="font-dm text-xs text-subtle">Info Security</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
