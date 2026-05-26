"use client";

import { useEffect } from "react";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: "One Click Brand Onboarding",
    description:
      "Just share the app or website URL, and Flurbix automatically finds the right decision-makers, retrieves their details, and starts personalized outreach instantly.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        stroke="#06B6D4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="4" y="20" width="24" height="6" rx="2" />
        <rect x="6" y="13" width="20" height="6" rx="2" />
        <rect x="8" y="6" width="16" height="6" rx="2" />
      </svg>
    ),
  },
  {
    title: "Smart Outreach Automation",
    description:
      "Flurbix handles everything — from identifying the correct contacts to sending tailored emails with accurate brand information and follow-ups.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        stroke="#06B6D4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M18 4L10 16h8l-4 12 12-16h-8l4-12z" />
      </svg>
    ),
  },
  {
    title: "Non-Stop Emailing Without Spam Issues",
    description:
      "Flurbix continuously manages outreach campaigns while maintaining high deliverability, ensuring your emails stay out of spam folders.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        stroke="#06B6D4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="6,10 9,13 14,8" />
        <line x1="18" y1="10" x2="26" y2="10" />
        <polyline points="6,17 9,20 14,15" />
        <line x1="18" y1="17" x2="26" y2="17" />
        <polyline points="6,24 9,27 14,22" />
        <line x1="18" y1="24" x2="26" y2="24" />
      </svg>
    ),
  },
  {
    title: "Analytics Dashboard",
    description:
      "Visualize performance across all campaigns with real-time dashboards. Drill into the metrics that matter most to your growth strategy.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        stroke="#06B6D4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="4" y="18" width="5" height="8" rx="1" />
        <rect x="11" y="12" width="5" height="14" rx="1" />
        <rect x="18" y="8" width="5" height="18" rx="1" />
        <polyline points="4,14 11,9 18,6 28,3" />
        <polyline points="22,6 28,3 25,9" />
      </svg>
    ),
  },
  {
    title: "Team Collaboration",
    description:
      "Invite your entire growth team and assign roles, tasks, and approvals. Real-time collaboration keeps everyone aligned at every step.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        stroke="#06B6D4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="10" cy="12" r="4" />
        <circle cx="22" cy="12" r="4" />
        <circle cx="16" cy="22" r="4" />
        <line x1="14" y1="12" x2="18" y2="12" />
        <line x1="11.5" y1="15.5" x2="14.5" y2="19" />
        <line x1="20.5" y1="15.5" x2="17.5" y2="19" />
      </svg>
    ),
  },

  {
    title: "Role-Based Access",
    description:
      "Control who sees what with granular permission settings. Keep sensitive data protected while enabling collaboration across the org.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        stroke="#06B6D4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M16 4L6 8v8c0 5.5 4.3 10.7 10 12 5.7-1.3 10-6.5 10-12V8L16 4z" />
        <circle cx="16" cy="14" r="3" />
        <path d="M11 22c0-2.8 2.2-5 5-5s5 2.2 5 5" />
      </svg>
    ),
  },
  {
    title: "Enhance Your Outreach With Flurbix Expertise",
    description:
      "Optimize your email templates with Flurbix expertise to present your business, offerings, and key pointers in a more effective and professional way.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        stroke="#06B6D4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="8" cy="16" r="3" />
        <circle cx="24" cy="8" r="3" />
        <circle cx="24" cy="24" r="3" />
        <line x1="11" y1="15" x2="21" y2="9" />
        <line x1="11" y1="17" x2="21" y2="23" />
      </svg>
    ),
  },
  {
    title: "24/7 Customer Support",
    description:
      "Our team of experts is available 24/7 to provide support and assistance. Whether you need help with setup, troubleshooting, or anything else, we're here to help.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        stroke="#06B6D4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M6 6h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H10l-4 4V8a2 2 0 0 1 2-2z" />
        <path
          d="M12 14h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2l2 2v-2"
          opacity="0.5"
        />
      </svg>
    ),
  },
];

export default function FeaturesSection() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".feature-reveal");
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="bg-surface dark:bg-[#0F172A] py-24 px-6 relative z-10 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <p className="font-syne text-xs font-semibold tracking-[0.15em] uppercase text-cyan mb-3">
          Platform Features
        </p>
        <h2
          id="features-heading"
          className="font-syne font-bold text-4xl md:text-5xl text-navy dark:text-white transition-colors duration-300"
        >
          Everything Growth Teams Need
        </h2>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6 mt-14">
          {features.map((feature, i) => (
            <article
              key={feature.title}
              className="feature-card feature-reveal reveal bg-white dark:bg-[#1E293B]/40 border border-slate-200 dark:border-white/5 rounded-xl p-7 transition-colors duration-300"
              style={{
                animationDelay: `${i * 0.08}s`,
                transitionDelay: `${i * 0.08}s`,
              }}
            >
              {feature.icon}
              <h3 className="font-syne font-bold text-[17px] text-navy dark:text-white mt-4 mb-2">
                {feature.title}
              </h3>
              <p className="font-dm text-sm text-slate-600 dark:text-muted leading-relaxed">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
