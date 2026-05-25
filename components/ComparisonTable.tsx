interface Row {
  feature: string
  spreadsheets: string
  disconnected: string
  manual: string
  flurbix: string
}

const rows: Row[] = [
  { feature: 'Single Platform',   spreadsheets: '✗', disconnected: '✗',       manual: '✗', flurbix: '✓' },
  { feature: 'Automation',        spreadsheets: '✗', disconnected: 'Partial',  manual: '✗', flurbix: '✓' },
  { feature: 'Real-Time View',    spreadsheets: '✗', disconnected: 'Partial',  manual: '✗', flurbix: '✓' },
  { feature: 'Scalability',       spreadsheets: '✗', disconnected: '✗',       manual: '✗', flurbix: '✓' },
  { feature: 'Collaboration',     spreadsheets: '✗', disconnected: 'Partial',  manual: '✗', flurbix: '✓' },
  { feature: 'Analytics',         spreadsheets: 'Basic', disconnected: 'Partial', manual: '✗', flurbix: '✓' },
]

function CellValue({ value, isFlurbix }: { value: string; isFlurbix?: boolean }) {
  if (isFlurbix) {
    return <span className="text-cyan font-bold text-lg">{value}</span>
  }
  if (value === '✗') {
    return <span className="text-[#EF4444] font-bold text-lg">{value}</span>
  }
  return <span className="text-slate-500 dark:text-muted text-sm font-dm">{value}</span>
}

export default function ComparisonTable() {
  return (
    <section
      id="why-flurbix"
      aria-labelledby="comparison-heading"
      className="bg-white dark:bg-[#0F172A] py-24 px-6 relative z-10 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <p className="font-syne text-xs font-semibold tracking-[0.15em] uppercase text-cyan mb-3">
          Why Flurbix
        </p>
        <h2
          id="comparison-heading"
          className="font-syne font-bold text-4xl md:text-5xl text-navy dark:text-white transition-colors duration-300"
        >
          One Platform Beats Fragmented Stacks
        </h2>

        <div className="overflow-x-auto mt-14">
          <table
            className="w-full max-w-4xl mx-auto border-collapse"
            aria-label="Flurbix vs alternatives comparison"
          >
            <thead>
              <tr>
                <th className="px-4 py-4 text-left font-dm text-sm text-slate-500 dark:text-subtle font-normal w-[200px]">
                  <span className="sr-only">Feature</span>
                </th>
                <th className="px-4 py-3 text-center font-syne text-sm font-semibold text-slate-600 dark:text-muted">
                  Spreadsheets
                </th>
                <th className="px-4 py-3 text-center font-syne text-sm font-semibold text-slate-600 dark:text-muted">
                  Disconnected Tools
                </th>
                <th className="px-4 py-3 text-center font-syne text-sm font-semibold text-slate-600 dark:text-muted">
                  Manual Processes
                </th>
                <th
                  className="px-4 py-3 text-center font-syne text-sm font-bold text-navy bg-cyan rounded-t-xl"
                  style={{
                    boxShadow:
                      'inset 1px 0 0 rgba(6,182,212,0.5), inset -1px 0 0 rgba(6,182,212,0.5)',
                  }}
                >
                  Flurbix ✦
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.feature}
                  className={`transition-colors duration-300 ${
                    i % 2 === 1 ? 'bg-slate-50/50 dark:bg-white/[0.02]' : ''
                  }`}
                >
                  <td className="px-4 py-4 font-dm text-sm text-navy dark:text-white text-left border-b border-slate-100 dark:border-white/5 transition-colors duration-300">
                    {row.feature}
                  </td>
                  <td className="px-4 py-4 text-center border-b border-slate-100 dark:border-white/5 transition-colors duration-300">
                    <CellValue value={row.spreadsheets} />
                  </td>
                  <td className="px-4 py-4 text-center border-b border-slate-100 dark:border-white/5 transition-colors duration-300">
                    <CellValue value={row.disconnected} />
                  </td>
                  <td className="px-4 py-4 text-center border-b border-slate-100 dark:border-white/5 transition-colors duration-300">
                    <CellValue value={row.manual} />
                  </td>
                  <td
                    className="px-4 py-4 text-center border-b border-slate-100 dark:border-white/5 bg-cyan/[0.03] dark:bg-cyan/[0.05] transition-colors duration-300"
                    style={{
                      boxShadow:
                        'inset 1px 0 0 rgba(6,182,212,0.5), inset -1px 0 0 rgba(6,182,212,0.5)',
                    }}
                  >
                    <CellValue value={row.flurbix} isFlurbix />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
