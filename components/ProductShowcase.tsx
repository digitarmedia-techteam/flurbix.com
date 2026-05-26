'use client'

import { useEffect, useRef, useState } from 'react'

interface Hotspot {
  id: string
  label: string
  style: React.CSSProperties
}

const hotspots: Hotspot[] = [
  { id: 'hs-setup', label: 'Campaign Setup', style: { top: '52%', left: '22%' } },
  { id: 'hs-analytics', label: 'Analytics', style: { top: '22%', left: '55%' } },
  { id: 'hs-automation', label: 'Automation Builder', style: { top: '80%', left: '65%' } },
  { id: 'hs-workspace', label: 'Team Workspace', style: { top: '40%', left: '3.5%' } },
]

const sidebarIcons = [
  <svg key="home" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 9.5L10 3l7 6.5V17a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/><path d="M7 18V12h6v6"/></svg>,
  <svg key="campaigns" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="5" width="16" height="12" rx="2"/><path d="M14 5V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2"/></svg>,
  <svg key="bolt" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M11 2L4 11h7l-2 7 9-10h-7l2-6z"/></svg>,
  <svg key="chart" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="12" width="3" height="5" rx="0.5"/><rect x="8" y="8" width="3" height="9" rx="0.5"/><rect x="13" y="4" width="3" height="13" rx="0.5"/></svg>,
  <svg key="team" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="7" cy="8" r="3"/><path d="M1 18c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="15" cy="7" r="2"/><path d="M19 18c0-2.2-1.8-4-4-4"/></svg>,
  <svg key="settings" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="10" cy="10" r="3"/><path d="M10 1v2M10 17v2M1 10h2M17 10h2M3.22 3.22l1.42 1.42M15.36 15.36l1.42 1.42M3.22 16.78l1.42-1.42M15.36 4.64l1.42-1.42"/></svg>,
]

const kpis = [
  { label: 'Client Approach', value: '134' },
  { label: 'Mail Sent', value: '1132' },
  { label: "Mail's Delivered", value: "1081" },
  { label: 'Onboarded', value: 11 },
]

const workflowNodes = ['Trigger', 'Filter', 'Action', 'Notify']

export default function ProductShowcase() {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const [chartReady, setChartReady] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setChartReady(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    const section = document.getElementById('product-showcase')
    if (section) observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (chartReady && pathRef.current) {
      const len = pathRef.current.getTotalLength()
      pathRef.current.style.strokeDasharray = `${len}`
      pathRef.current.style.strokeDashoffset = `${len}`
      pathRef.current.style.transition = 'stroke-dashoffset 2s ease'
      requestAnimationFrame(() => {
        if (pathRef.current) pathRef.current.style.strokeDashoffset = '0'
      })
    }
  }, [chartReady])

  return (
    <section
      id="product"
      aria-labelledby="showcase-heading"
      className="bg-slate-50 dark:bg-navy py-24 px-6 relative z-10 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <p className="font-syne text-xs font-semibold tracking-[0.15em] uppercase text-cyan mb-3">
          Product Showcase
        </p>
        <h2 id="showcase-heading" className="font-syne font-bold text-4xl md:text-5xl text-navy dark:text-white transition-colors duration-300">
          See Flurbix In Action
        </h2>

        {/* Browser Chrome */}
        <div className="border border-slate-200 dark:border-white/10 rounded-xl overflow-hidden max-w-5xl mx-auto mt-14 relative bg-white dark:bg-[#0F172A] shadow-xl transition-colors duration-300">
          {/* Top Bar */}
          <div className="bg-slate-100 dark:bg-[#1E293B] px-4 py-3 flex items-center gap-3 border-b border-slate-200 dark:border-transparent transition-colors duration-300">
            <span className="w-3 h-3 rounded-full bg-[#EF4444]" aria-hidden="true" />
            <span className="w-3 h-3 rounded-full bg-[#F59E0B]" aria-hidden="true" />
            <span className="w-3 h-3 rounded-full bg-[#22C55E]" aria-hidden="true" />
            <div className="flex-1 flex justify-center">
              <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-transparent rounded-md px-4 py-1 text-xs font-dm text-slate-500 dark:text-subtle text-center max-w-xs w-full transition-colors duration-300">
                https://app.flurbix.com/dashboard
              </div>
            </div>
          </div>

          {/* Dashboard Interior */}
          <div className="bg-white dark:bg-[#0F172A] flex" style={{ height: '420px' }}>
            {/* Sidebar */}
            <aside className="w-14 bg-slate-100 dark:bg-[#1E293B] border-r border-slate-200 dark:border-transparent flex flex-col items-center py-4 gap-5 flex-shrink-0 transition-colors duration-300" aria-label="Dashboard sidebar">
              {sidebarIcons.map((icon, i) => (
                <button
                  key={i}
                  className="text-slate-500 dark:text-subtle hover:text-cyan dark:hover:text-cyan transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan rounded"
                  aria-label={`Navigation item ${i + 1}`}
                >
                  {icon}
                </button>
              ))}
            </aside>

            {/* Main Content */}
            <div className="flex-1 p-5 overflow-hidden flex flex-col gap-4">
              {/* KPI Row */}
              <div className="grid grid-cols-4 gap-3">
                {kpis.map((kpi) => (
                  <div key={kpi.label} className="bg-slate-50 dark:bg-[#1E293B] border border-slate-200 dark:border-transparent rounded-lg p-3 transition-colors duration-300">
                    <p className="text-xs text-slate-500 dark:text-subtle font-dm">{kpi.label}</p>
                    <p className="font-syne text-xl font-bold text-navy dark:text-white mt-0.5">{kpi.value}</p>
                  </div>
                ))}
              </div>

              {/* Chart Area */}
              <div className="bg-slate-50 dark:bg-[#1E293B] border border-slate-200 dark:border-transparent rounded-lg flex-1 p-4 relative overflow-hidden transition-colors duration-300">
                <svg viewBox="0 0 600 160" width="100%" aria-label="Campaign performance chart" role="img">
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgba(6,182,212,0.3)" />
                      <stop offset="100%" stopColor="rgba(6,182,212,0)" />
                    </linearGradient>
                  </defs>

                  {/* Fill area */}
                  <path
                    d="M0,130 C50,120 100,100 150,90 C200,80 230,60 280,50 C330,40 370,55 420,45 C470,35 530,25 600,20 L600,160 L0,160 Z"
                    fill="url(#chartGradient)"
                  />

                  {/* Line */}
                  <path
                    ref={pathRef}
                    d="M0,130 C50,120 100,100 150,90 C200,80 230,60 280,50 C330,40 370,55 420,45 C470,35 530,25 600,20"
                    stroke="#06B6D4"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />

                  {/* Data points */}
                  {[
                    [0, 130], [85, 100], [150, 90], [220, 65],
                    [280, 50], [370, 55], [470, 35], [600, 20],
                  ].map(([x, y], i) => (
                    <circle key={i} cx={x} cy={y} r="3" fill="#06B6D4" opacity="0.9" />
                  ))}

                  {/* X axis labels */}
                  {['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8'].map(
                    (label, i) => (
                      <text
                        key={label}
                        x={i * (600 / 7)}
                        y="158"
                        fontFamily="DM Sans, sans-serif"
                        fontSize="9"
                        fill="#64748B"
                        textAnchor="middle"
                      >
                        {label}
                      </text>
                    )
                  )}
                </svg>
              </div>

              {/* Workflow Strip */}
              <div className="bg-slate-50 dark:bg-[#1E293B] border border-slate-200 dark:border-transparent rounded-lg p-3 flex gap-2 items-center transition-colors duration-300">
                {workflowNodes.map((node, i) => (
                  <div key={node} className="flex items-center gap-2">
                    <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-white/10 rounded-md px-3 py-1 text-xs font-dm text-navy dark:text-white whitespace-nowrap transition-colors duration-300">
                      {node}
                    </div>
                    {i < workflowNodes.length - 1 && (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M4 8h8M9 5l3 3-3 3" stroke="#06B6D4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hotspots */}
          {hotspots.map((hs) => (
            <div
              key={hs.id}
              className="absolute"
              style={hs.style}
              onMouseEnter={() => setActiveHotspot(hs.id)}
              onMouseLeave={() => setActiveHotspot(null)}
              onFocus={() => setActiveHotspot(hs.id)}
              onBlur={() => setActiveHotspot(null)}
            >
              <button
                id={hs.id}
                className="hotspot relative w-3 h-3 bg-cyan rounded-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 dark:focus-visible:ring-offset-navy focus-visible:ring-offset-white"
                aria-label={`Hotspot: ${hs.label}`}
              />
              {activeHotspot === hs.id && (
                <span
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 dark:bg-[#1E293B] border border-slate-700 dark:border-white/10 text-white text-xs font-dm px-3 py-1.5 rounded-lg whitespace-nowrap pointer-events-none z-10 shadow-lg"
                  role="tooltip"
                >
                  {hs.label}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
