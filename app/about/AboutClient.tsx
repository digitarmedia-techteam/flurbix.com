"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AboutClient() {
  // Activate scroll-reveal for elements on this page
  useScrollReveal(".reveal, .reveal-left, .reveal-right");

  const stats = [
    { value: "50M+", label: "Outreach Emails Sent", desc: "Delivered to validated decision-makers." },
    { value: "99.9%", label: "Deliverability Rate", desc: "Powered by smart domain management." },
    { value: "10x", label: "Pipeline Speed", desc: "Average increase in sales outreach efficiency." },
    { value: "24/7", label: "Expert Support", desc: "Real-time support and copy optimization." },
  ];

  const pillars = [
    {
      title: "Deliverability First",
      desc: "An outreach campaign is only as good as its deliverability. We design every system, domain pool, and warm-up sequence to keep your emails out of spam folders.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 11 11 13 15 9" />
        </svg>
      ),
    },
    {
      title: "Expert Template Optimization",
      desc: "Our copywriting specialists actively refine templates to match your brand's voice and convert passive readers into booked demo appointments.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
          <path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
        </svg>
      ),
    },
    {
      title: "Granular Role Controls",
      desc: "Scale your growth team safely. Assign specific clients, manage access levels, and require approvals on campaigns before they go live.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: "Continuous Innovation",
      desc: "The outreach landscape changes constantly. We continuously adapt our custom platform algorithms to ensure your campaigns are always compliant and effective.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      ),
    },
  ];

  const milestones = [
    {
      year: "2023",
      title: "The Genesis",
      desc: "Flurbix was founded by a team of growth hackers and engineers who were tired of broken spreadsheets, rising spam rates, and fragmented sales tools.",
    },
    {
      year: "2024",
      title: "Smart Onboarding & Scaling",
      desc: "Launched our automated decision-maker extraction engine. Added SOC 2 security compliance and hit 10 million automated outreach messages sent.",
    },
    {
      year: "2025",
      title: "The Modern Outreach OS",
      desc: "Evolved into a full team collaborative workspace, providing deliverability pooling and dedicated expert template optimization for businesses worldwide.",
    },
  ];

  const team = [
    {
      name: "Alex Rivera",
      role: "Founder & CEO",
      bio: "Former growth lead at SaaS unicorns. Obsessed with building systems that convert.",
      initials: "AR",
    },
    {
      name: "Sarah Chen",
      role: "Head of Engineering",
      bio: "Specializes in high-scale crawling, reliable deliverability infra, and security.",
      initials: "SC",
    },
    {
      name: "David Kim",
      role: "Deliverability Architect",
      bio: "Spends his days researching email compliance, DNS configuration, and inbox placement.",
      initials: "DK",
    },
    {
      name: "Elena Rostova",
      role: "Director of Outreach Copy",
      bio: "Copywriter wizard who runs our template review panel to ensure maximum conversion.",
      initials: "ER",
    },
  ];

  return (
    <div className="relative overflow-hidden py-16">
      {/* Background radial glow */}
      <div
        aria-hidden="true"
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-40 dark:opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* ── HERO SECTION ────────────────────────────────────────────────── */}
        <section className="text-center max-w-3xl mx-auto mb-20 reveal">
          <div className="inline-flex items-center gap-2 pill-border px-3.5 py-1 rounded-full mb-6">
            <span
              className="w-1.5 h-1.5 rounded-full bg-cyan"
              style={{ animation: "pulseGlow 1.5s ease-in-out infinite alternate" }}
            />
            <span className="font-dm text-[11px] font-semibold text-slate-500 dark:text-subtle uppercase tracking-widest">
              Our Journey
            </span>
          </div>

          <h1 className="font-syne font-bold text-4xl md:text-5xl lg:text-6xl text-navy dark:text-white leading-tight mb-6">
            The operating system for{" "}
            <span className="gradient-text">growth teams</span>
          </h1>

          <p className="font-dm text-lg text-slate-600 dark:text-muted leading-relaxed">
            Flurbix was built from the ground up to solve outreach complexities. We merge smart,
            deliverability-focused automation with specialized human expertise to help your business scale
            reliably.
          </p>
        </section>

        {/* ── STATS SECTION ───────────────────────────────────────────────── */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24 reveal">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-white/5 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <div
                className="font-syne font-extrabold text-3xl md:text-4xl lg:text-5xl mb-2"
                style={{
                  background: "linear-gradient(135deg, #06B6D4, #8B5CF6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </div>
              <h3 className="font-syne font-bold text-sm text-navy dark:text-white mb-1">
                {stat.label}
              </h3>
              <p className="font-dm text-xs text-slate-500 dark:text-muted">
                {stat.desc}
              </p>
            </div>
          ))}
        </section>

        {/* ── VISION & STORY SECTION ───────────────────────────────────────── */}
        <section className="grid lg:grid-cols-2 gap-12 items-center mb-28">
          <div className="reveal-left">
            <h2 className="font-syne font-bold text-3xl md:text-4xl text-navy dark:text-white mb-6">
              Our Mission: Make B2B Outreach Simple, Secure, and Predictable
            </h2>
            <div className="font-dm text-slate-600 dark:text-muted space-y-4 leading-relaxed">
              <p>
                In today&apos;s digital space, outreach has become increasingly complex. Spammers clog up inbox channels, filters get stricter, and businesses struggle to reach decision-makers who actually want their offerings.
              </p>
              <p>
                Flurbix was created to change this. We believe sales outreach should be highly customized, respectful, and reliable. By combining automated research (onboarding just from a URL) with verified deliverability pipelines, we eliminate the tedious operational friction from your growth pipeline.
              </p>
              <p>
                Whether you are a startup getting your first clients or a scaling enterprise, Flurbix acts as the centralized workspace that keeps your outbound efforts highly effective and secure.
              </p>
            </div>
          </div>

          <div className="reveal-right bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-white/5 rounded-3xl p-8 relative overflow-hidden">
            {/* Ambient background blob */}
            <div
              aria-hidden="true"
              className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full pointer-events-none opacity-20"
              style={{
                background: "radial-gradient(circle, #8B5CF6 0%, transparent 70%)",
              }}
            />
            <h3 className="font-syne font-bold text-xl text-navy dark:text-white mb-6">
              The Evolution of Outreach
            </h3>
            <div className="space-y-8 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-700">
              {milestones.map((m) => (
                <div key={m.year} className="relative pl-8">
                  <div className="absolute left-1.5 top-1.5 w-3.5 h-3.5 rounded-full bg-cyan border-4 border-white dark:border-[#0F172A] z-10" />
                  <span className="font-syne font-bold text-sm text-cyan">
                    {m.year}
                  </span>
                  <h4 className="font-syne font-bold text-base text-navy dark:text-white mt-1 mb-1">
                    {m.title}
                  </h4>
                  <p className="font-dm text-xs text-slate-500 dark:text-muted leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CORE PILLARS ────────────────────────────────────────────────── */}
        <section className="mb-28">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <h2 className="font-syne font-bold text-3xl md:text-4xl text-navy dark:text-white mb-4">
              Our Core Pillars
            </h2>
            <p className="font-dm text-sm text-slate-500 dark:text-muted">
              We guide our product development and customer experience with strict attention to operational quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="reveal bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-white/5 rounded-2xl p-7 hover:border-cyan/50 dark:hover:border-cyan/30 transition-all duration-300 group"
                style={{ animationDelay: `${idx * 0.08}s` }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-cyan"
                  style={{
                    background: "linear-gradient(135deg, rgba(6,182,212,0.1), rgba(139,92,246,0.08))",
                    border: "1px solid rgba(6,182,212,0.15)",
                  }}
                >
                  {pillar.icon}
                </div>
                <h3 className="font-syne font-bold text-lg text-navy dark:text-white mb-2 group-hover:text-cyan transition-colors">
                  {pillar.title}
                </h3>
                <p className="font-dm text-sm text-slate-500 dark:text-muted leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── LEADERSHIP / TEAM ────────────────────────────────────────────── */}
        <section className="mb-28">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <h2 className="font-syne font-bold text-3xl md:text-4xl text-navy dark:text-white mb-4">
              Meet the Dream Team
            </h2>
            <p className="font-dm text-sm text-slate-500 dark:text-muted">
              The builders, copywriters, and infrastructure specialists behind the Flurbix operating system.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((t, idx) => (
              <div
                key={t.name}
                className="reveal bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-white/5 rounded-2xl p-6 text-center hover:-translate-y-1 transition-all duration-300 group"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                {/* stylized initials logo for avatar */}
                <div
                  className="w-16 h-16 rounded-full mx-auto flex items-center justify-center text-white font-syne font-extrabold text-lg mb-4"
                  style={{
                    background: "linear-gradient(135deg, #06B6D4, #8B5CF6)",
                    boxShadow: "0 4px 14px rgba(6,182,212,0.25)",
                  }}
                >
                  {t.initials}
                </div>
                <h3 className="font-syne font-bold text-base text-navy dark:text-white group-hover:text-cyan transition-colors">
                  {t.name}
                </h3>
                <p className="font-dm text-xs text-cyan font-semibold uppercase tracking-wider mb-3">
                  {t.role}
                </p>
                <p className="font-dm text-xs text-slate-500 dark:text-muted leading-relaxed">
                  {t.bio}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── FINAL CTA ───────────────────────────────────────────────────── */}
        <section
          className="reveal bg-gradient-to-br from-slate-900 to-[#1E293B] border border-white/10 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
          style={{ boxShadow: "0 24px 64px rgba(6,182,212,0.12)" }}
        >
          {/* Accent orbs */}
          <div
            aria-hidden="true"
            className="absolute -top-12 -left-12 w-48 h-48 rounded-full pointer-events-none opacity-20"
            style={{
              background: "radial-gradient(circle, #06B6D4 0%, transparent 70%)",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full pointer-events-none opacity-20"
            style={{
              background: "radial-gradient(circle, #8B5CF6 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-syne font-bold text-2xl md:text-4xl text-white mb-4">
              Ready to Supercharge Your Outreach?
            </h2>
            <p className="font-dm text-sm md:text-base text-slate-300 mb-8 leading-relaxed">
              Join growth teams worldwide who use Flurbix to discover key decision-makers, launch custom pipelines, and secure meetings with high deliverability.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/contact?subject=Book a Demo"
                className="bg-white hover:bg-slate-100 text-slate-900 font-syne font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-200"
              >
                Book a Demo
              </a>
              <a
                href="/#pricing"
                className="bg-cyan hover:scale-[1.03] text-navy font-syne font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-200"
                style={{
                  boxShadow: "0 4px 14px rgba(6,182,212,0.4)",
                }}
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
