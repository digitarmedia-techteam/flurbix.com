'use client'

import { useEffect, useRef } from 'react'

const campaigns = [
  { name: 'Q2 Growth Campaign', status: 'Live', statusColor: '#22C55E', progress: 78 },
  { name: 'Brand Retargeting', status: 'Active', statusColor: '#06B6D4', progress: 54 },
  { name: 'Email Nurture Flow', status: 'Scheduled', statusColor: '#F59E0B', progress: 32 },
]

const kpis = [
  { label: 'Active Clients', value: '24', delta: '+12%', up: true },
  { label: 'Revenue Managed', value: '$2.4M', delta: '+34%', up: true },
  { label: 'Average ROAS', value: '4.2×', delta: '+0.8×', up: true },
]

// SVG line chart — 7 data points Mon→Sun
const chartPoints: [number, number][] = [
  [0, 82], [70, 65], [140, 72], [210, 44], [280, 55], [350, 28], [420, 16],
]

function buildPath(pts: [number, number][]): string {
  return pts.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x},${y}`).join(' ')
}

function WorkflowIcon({ type, active }: { type: string; active: boolean }) {
  const c = active ? '#06B6D4' : '#64748B'
  if (type === 'bolt')
    return <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 2 4 9h5l-2 5 7-8H9z" /></svg>
  if (type === 'filter')
    return <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 4h12M5 8h6M7 12h2" /></svg>
  if (type === 'check')
    return <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="8" cy="8" r="6" /><path d="M5.5 8l2 2 3.5-3.5" /></svg>
  if (type === 'bell')
    return <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 13v.5a2 2 0 0 0 4 0V13M3 11h10l-1.4-4.8A3.6 3.6 0 0 0 8 3.5a3.6 3.6 0 0 0-3.6 2.7z" /></svg>
  return null
}

const workflowNodes = [
  { label: 'Trigger', sub: '247 fires', icon: 'bolt', active: true },
  { label: 'Filter', sub: 'Conditions', icon: 'filter', active: true },
  { label: 'Action', sub: 'Running', icon: 'check', active: true },
  { label: 'Notify', sub: '12 sent', icon: 'bell', active: false },
]

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

export default function HeroDashboard() {
  const pathRef = useRef<SVGPathElement>(null)

  useEffect(() => {
    const el = pathRef.current
    if (!el) return
    const len = el.getTotalLength()
    el.style.strokeDasharray = `${len}`
    el.style.strokeDashoffset = `${len}`
    const raf = requestAnimationFrame(() => {
      el.style.transition = 'stroke-dashoffset 2.2s cubic-bezier(0.16,1,0.3,1) 0.4s'
      el.style.strokeDashoffset = '0'
    })
    return () => cancelAnimationFrame(raf)
  }, [])

  const linePath = buildPath(chartPoints)
  const areaPath = `${linePath} L420,100 L0,100 Z`

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Outer glass card */}
      <div className="relative rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/[0.04] backdrop-blur-md shadow-[0_32px_80px_rgba(0,0,0,0.25)] dark:shadow-[0_32px_80px_rgba(0,0,0,0.5)] overflow-hidden">

        {/* Ambient glow */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-48 bg-cyan/10 rounded-full blur-3xl" aria-hidden="true" />

        {/* Title bar */}
        <div className="flex items-center gap-2 px-5 py-3 border-b border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.03]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" aria-hidden="true" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" aria-hidden="true" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E]" aria-hidden="true" />
          <span className="ml-3 font-syne text-[11px] font-semibold text-slate-500 dark:text-subtle tracking-widest uppercase">
            Flurbix · Dashboard
          </span>
          <span className="ml-auto flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" aria-hidden="true" />
            <span className="font-dm text-[10px] text-[#22C55E]">Live</span>
          </span>
        </div>

        <div className="p-5 space-y-4">
          {/* KPI row */}
          <div className="grid grid-cols-3 gap-3">
            {kpis.map((k) => (
              <div
                key={k.label}
                className="rounded-xl p-3.5 border bg-slate-50 border-slate-200 dark:bg-[#1E293B] dark:border-white/5"
              >
                <p className="font-dm text-[10px] text-slate-500 dark:text-subtle">{k.label}</p>
                <p className="font-syne font-bold text-xl text-navy dark:text-white mt-1 leading-none">{k.value}</p>
                <p className="font-dm text-[10px] text-[#22C55E] mt-1.5 flex items-center gap-0.5">
                  <svg width="9" height="9" viewBox="0 0 9 9" fill="none" aria-hidden="true">
                    <path d="M4.5 1.5v6M1.5 4.5l3-3 3 3" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {k.delta}
                </p>
              </div>
            ))}
          </div>

          {/* Middle row: campaigns + chart */}
          <div className="grid grid-cols-5 gap-3">
            {/* Campaign list */}
            <div className="col-span-2 rounded-xl p-3.5 border bg-slate-50 border-slate-200 dark:bg-[#1E293B] dark:border-white/5">
              <p className="font-syne text-[10px] font-semibold text-cyan tracking-[0.12em] uppercase mb-3">
                Clients
              </p>
              <div className="space-y-3.5">
                {campaigns.map((c) => (
                  <div key={c.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-dm text-[11px] text-navy dark:text-white font-medium truncate pr-1 max-w-[110px]">
                        {c.name}
                      </span>
                      <span
                        className="font-syne text-[9px] font-bold px-1.5 py-0.5 rounded-full"
                        style={{ color: c.statusColor, background: `${c.statusColor}18` }}
                      >
                        {c.status}
                      </span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-black/5 dark:bg-white/5 overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${c.progress}%`,
                          background: `linear-gradient(90deg, ${c.statusColor}bb, ${c.statusColor})`,
                        }}
                      />
                    </div>
                    <p className="font-dm text-[9px] text-slate-500 dark:text-subtle mt-0.5 text-right">{c.progress}%</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance chart */}
            <div className="col-span-3 rounded-xl p-3.5 border bg-slate-50 border-slate-200 dark:bg-[#1E293B] dark:border-white/5 flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <p className="font-syne text-[10px] font-semibold text-cyan tracking-[0.12em] uppercase">
                  Performance
                </p>
                <span className="font-dm text-[10px] text-[#22C55E] flex items-center gap-0.5">
                  <svg width="9" height="9" viewBox="0 0 9 9" fill="none" aria-hidden="true">
                    <path d="M4.5 1.5v6M1.5 4.5l3-3 3 3" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  34% this week
                </span>
              </div>
              <svg viewBox="0 0 420 108" width="100%" aria-label="Campaign performance trend chart" role="img" style={{ flex: 1 }}>
                <defs>
                  <linearGradient id="heroArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Grid lines */}
                {[20, 50, 80].map((y) => (
                  <line key={y} x1="0" y1={y} x2="420" y2={y} stroke="currentColor" strokeOpacity="0.06" strokeWidth="1" />
                ))}
                <path d={areaPath} fill="url(#heroArea)" />
                <path
                  ref={pathRef}
                  d={linePath}
                  stroke="#06B6D4"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {chartPoints.map(([x, y], i) => (
                  <circle key={i} cx={x} cy={y} r="3.5" fill="#06B6D4" />
                ))}
                {days.map((d, i) => (
                  <text key={d} x={i * 70} y="106" fontSize="9" fontFamily="DM Sans,sans-serif" fill="#64748B" textAnchor="middle">
                    {d}
                  </text>
                ))}
              </svg>
            </div>
          </div>

          {/* Automation workflow */}
          <div className="rounded-xl p-3.5 border bg-slate-50 border-slate-200 dark:bg-[#1E293B] dark:border-white/5">
            <div className="flex items-center justify-between mb-3">
              <p className="font-syne text-[10px] font-semibold text-cyan tracking-[0.12em] uppercase">
                Active Automation
              </p>
              <span className="font-dm text-[10px] text-slate-500 dark:text-subtle">247 runs today</span>
            </div>

            <div className="flex items-start justify-between gap-1">
              {workflowNodes.map((node, i) => (
                <div key={node.label} className="flex items-center gap-1 flex-1">
                  {/* Node */}
                  <div className="flex flex-col items-center flex-1">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center border ${
                        node.active
                          ? 'bg-cyan/10 border-cyan/30 dark:bg-cyan/10 dark:border-cyan/30'
                          : 'bg-black/5 border-black/10 dark:bg-white/5 dark:border-white/10'
                      }`}
                    >
                      <WorkflowIcon type={node.icon} active={node.active} />
                    </div>
                    <p className="font-syne text-[9px] font-bold text-navy dark:text-white mt-1.5 text-center leading-tight">
                      {node.label}
                    </p>
                    <p className="font-dm text-[8px] text-slate-500 dark:text-subtle text-center leading-tight">{node.sub}</p>
                  </div>

                  {/* Connector */}
                  {i < workflowNodes.length - 1 && (
                    <div className="flex-shrink-0 w-6 flex flex-col items-center gap-1 mb-5">
                      <div className="w-full h-px bg-cyan/30 relative overflow-visible">
                        {node.active && (
                          <span
                            className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan"
                            style={{
                              animation: `connectorDot 1.8s linear ${i * 0.5}s infinite`,
                              left: 0,
                            }}
                            aria-hidden="true"
                          />
                        )}
                      </div>
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true" className="-mt-1">
                        <path d="M2 4h6M5 1.5L7.5 4 5 6.5" stroke={node.active ? '#06B6D4' : '#64748B'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
