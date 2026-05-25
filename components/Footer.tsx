const footerLinks = {
  Product: ['Dashboard', 'Campaigns', 'Automation', 'Analytics', 'Integrations'],
  Company: ['About', 'Blog', 'Careers', 'Press', 'Contact'],
  Resources: ['Docs', 'API Reference', 'Changelog', 'Status', 'Community'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Security', 'GDPR'],
}

function TwitterIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

const socialLinks = [
  { href: 'https://twitter.com/flurbix', label: 'Follow Flurbix on X (Twitter)', Icon: TwitterIcon },
  { href: 'https://linkedin.com/company/flurbix', label: 'Follow Flurbix on LinkedIn', Icon: LinkedInIcon },
  { href: 'https://github.com/flurbix', label: 'View Flurbix on GitHub', Icon: GitHubIcon },
]

export default function Footer() {
  return (
    <footer className="bg-[#F8FAFC] dark:bg-navy border-t border-slate-200 dark:border-white/5 pt-16 pb-8 px-6 relative z-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <a
              href="/"
              className="font-syne font-bold text-xl tracking-tight text-slate-900 dark:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan rounded"
              aria-label="Flurbix home"
            >
              Flurbi<span style={{ color: '#06B6D4' }}>x</span>
            </a>
            <p className="font-dm text-sm text-slate-600 dark:text-subtle mt-3 leading-relaxed max-w-[180px] transition-colors duration-300">
              The operating system for growth teams. Run campaigns, automate workflows, scale smarter.
            </p>
            <div className="flex gap-4 mt-5" role="list" aria-label="Social media links">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-slate-500 dark:text-subtle hover:text-cyan dark:hover:text-cyan transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan rounded"
                  role="listitem"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-syne font-semibold text-sm text-slate-900 dark:text-white mb-4 transition-colors duration-300">{heading}</h4>
              <ul className="space-y-3" role="list">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-dm text-sm text-slate-600 hover:text-navy dark:text-subtle dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan rounded"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-200 dark:border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 transition-colors duration-300">
          <p className="font-dm text-xs text-slate-500 dark:text-subtle transition-colors duration-300">
            © 2025 Flurbix Inc. All rights reserved.
          </p>
          <div className="flex gap-3" role="list" aria-label="Compliance badges">
            {['SOC 2', 'GDPR', 'CCPA'].map((badge) => (
              <span
                key={badge}
                role="listitem"
                className="font-dm text-[11px] text-slate-500 dark:text-subtle border border-slate-200 dark:border-white/10 rounded-md px-2.5 py-1 transition-colors duration-300"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
