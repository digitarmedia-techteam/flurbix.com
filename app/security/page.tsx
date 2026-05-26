import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LegalTableOfContents from '@/components/LegalTableOfContents'
import LegalBadges from '@/components/LegalBadges'
import SecurityScorecard from '@/components/SecurityScorecard'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Security — Flurbix',
  description:
    'Learn how Flurbix protects your data with enterprise-grade security. SOC 2 Type II certified, end-to-end encryption, and 99.99% uptime SLA.',
  alternates: { canonical: 'https://www.flurbix.io/security' },
  openGraph: {
    title: 'Security at Flurbix',
    url: 'https://www.flurbix.io/security',
    type: 'website',
  },
}

const tocItems = [
  { id: 'philosophy', label: '1. Security Philosophy' },
  { id: 'infrastructure', label: '2. Infrastructure Security' },
  { id: 'encryption', label: '3. Data Encryption' },
  { id: 'access-controls', label: '4. Access Controls' },
  { id: 'application-security', label: '5. Application Security' },
  { id: 'availability', label: '6. Availability & Continuity' },
  { id: 'compliance', label: '7. Compliance & Certifications' },
  { id: 'employee-security', label: '8. Employee Security' },
  { id: 'vulnerability-disclosure', label: '9. Vulnerability Disclosure' },
  { id: 'contact', label: '10. Contact Security Team' },
]

export default function SecurityPage() {
  return (
    <div className="min-h-screen flex flex-col bg-surface dark:bg-navy text-navy dark:text-white">
      <Navbar />

      <main className="flex-1">
        {/* Dark Hero Section */}
        <section className="bg-navy py-24 px-6 relative overflow-hidden border-b border-white/5">
          {/* Subtle Radial Gradient */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              background:
                'radial-gradient(ellipse 800px 500px at 60% 50%, rgba(6,182,212,0.15) 0%, transparent 70%)',
            }}
          />

          <div className="max-w-7xl mx-auto relative z-10 mt-12">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm font-dm text-subtle mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white font-medium">Security</span>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-cyan/30 bg-cyan/10 text-cyan text-xs font-semibold uppercase tracking-wider mb-8">
              ✦ Enterprise-Grade Security
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-syne font-extrabold text-white leading-tight max-w-4xl">
              Your Data Is Safe With Flurbix
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-slate-300 dark:text-muted max-w-2xl mt-4 leading-relaxed font-dm">
              We've built security into every layer of the Flurbix platform — from infrastructure and
              encryption to access controls and compliance certifications.
            </p>

            {/* Trust Pills */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                {
                  label: 'SOC 2 Type II',
                  icon: (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  ),
                },
                {
                  label: 'AES-256 Encryption',
                  icon: (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  ),
                },
                {
                  label: '99.99% Uptime SLA',
                  icon: (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  ),
                },
                {
                  label: 'GDPR Compliant',
                  icon: (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41m12.72-12.72l-1.41 1.41" />
                    </svg>
                  ),
                },
              ].map((pill) => (
                <div
                  key={pill.label}
                  className="bg-white/5 border border-white/10 text-white font-dm text-sm px-4 py-2 rounded-full flex items-center gap-2"
                >
                  <span className="text-cyan">{pill.icon}</span>
                  <span>{pill.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Scorecard */}
        <SecurityScorecard />

        {/* Document section */}
        <section className="max-w-7xl mx-auto py-24 px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: TOC */}
            <div className="lg:col-span-3 hidden md:block">
              <LegalTableOfContents items={tocItems} />
            </div>

            {/* Right Column: Content Card */}
            <div className="lg:col-span-9 bg-white dark:bg-[#1E293B] rounded-2xl border border-border-light dark:border-white/10 p-8 md:p-14 shadow-sm flex flex-col gap-10">
              
              <section id="philosophy" className="scroll-mt-32">
                <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">1. Security Philosophy</h2>
                <div className="font-dm text-subtle space-y-4 leading-relaxed">
                  <p>
                    Security is not a checkbox at Flurbix — it is a core design principle embedded in every engineering decision we make. We operate on the assumption that security threats are constant and evolving, and we build our defenses accordingly.
                  </p>
                  <p>
                    We follow a defense-in-depth approach: multiple overlapping security controls so that if one layer fails, others remain intact. Our security program is governed by an Information Security Management System (ISMS) aligned with ISO 27001 principles and formally certified under SOC 2 Type II.
                  </p>
                  <div className="bg-cyan/10 border border-cyan/20 text-cyan text-sm p-4 rounded-lg font-medium">
                    To report a security vulnerability, please see Section 9 — Vulnerability Disclosure. Do not report security issues via public GitHub issues or social media.
                  </div>
                </div>
              </section>

              <section id="infrastructure" className="scroll-mt-32">
                <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">2. Infrastructure Security</h2>
                <div className="font-dm text-subtle space-y-6 leading-relaxed">
                  <div>
                    <h3 className="text-lg font-syne font-bold text-navy dark:text-white mb-2">2.1 Cloud Infrastructure</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>All Flurbix infrastructure runs on Amazon Web Services (AWS) in three geographic regions: US-East-1, EU-West-1, and AP-Southeast-1.</li>
                      <li>We use AWS Virtual Private Cloud (VPC) with strict network segmentation between production, staging, and development environments.</li>
                      <li>All production infrastructure is provisioned via Infrastructure as Code (Terraform) — no manual changes to production environments.</li>
                      <li>Auto-scaling groups ensure availability during traffic spikes without human intervention.</li>
                      <li>Multi-region failover is configured for all critical services with automatic DNS-based failover.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-syne font-bold text-navy dark:text-white mb-2">2.2 Network Security</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>All traffic to flurbix.io and app.flurbix.io is routed through Cloudflare's global network for DDoS mitigation, WAF filtering, and bot protection.</li>
                      <li>Web Application Firewall (WAF) rules are updated continuously against OWASP Top 10 threats.</li>
                      <li>All internal service communication is restricted to private VPC subnets — no internal services are exposed to the public internet.</li>
                      <li>Network access control lists (NACLs) and security groups enforce least-privilege at the network layer.</li>
                      <li>Intrusion detection (AWS GuardDuty) is active across all AWS accounts with real-time alerting.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-syne font-bold text-navy dark:text-white mb-2">2.3 Physical Security</h3>
                    <p>
                      Flurbix does not operate its own data centers. We rely on AWS data centers which maintain the highest physical security standards including 24/7 security personnel, biometric access controls, CCTV monitoring, redundant power supplies, and environmental controls. AWS data centers are certified under ISO 27001, SOC 1/2/3, and PCI DSS.
                    </p>
                  </div>
                </div>
              </section>

              <section id="encryption" className="scroll-mt-32">
                <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">3. Data Encryption</h2>
                <div className="font-dm text-subtle space-y-6 leading-relaxed">
                  <div>
                    <h3 className="text-lg font-syne font-bold text-navy dark:text-white mb-2">3.1 Encryption In Transit</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>All data transmitted between clients and Flurbix servers uses TLS 1.2 or TLS 1.3 — older protocols (TLS 1.0, 1.1, SSL) are disabled.</li>
                      <li>HTTP Strict Transport Security (HSTS) is enforced with a max-age of 31,536,000 seconds.</li>
                      <li>Certificates are issued by a trusted CA and auto-renewed via AWS Certificate Manager.</li>
                      <li>Internal service-to-service communication within our VPC uses mutual TLS (mTLS).</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-syne font-bold text-navy dark:text-white mb-2">3.2 Encryption At Rest</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>All data stored in Flurbix databases is encrypted at rest using AES-256 encryption.</li>
                      <li>Amazon RDS instances use AWS-managed encryption keys with automatic key rotation.</li>
                      <li>S3 buckets storing user-uploaded files use server-side encryption (SSE-S3 and SSE-KMS).</li>
                      <li>Database backups are encrypted with the same AES-256 standard.</li>
                      <li>Encryption keys are managed via AWS Key Management Service (KMS) with strict IAM policies.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-syne font-bold text-navy dark:text-white mb-2">3.3 Secrets Management</h3>
                    <p>
                      API keys, database credentials, and service secrets are never stored in source code or environment files. All secrets are managed via AWS Secrets Manager and HashiCorp Vault with automatic rotation policies. Access to secrets is logged and audited.
                    </p>
                  </div>
                </div>
              </section>

              <section id="access-controls" className="scroll-mt-32">
                <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">4. Access Controls</h2>
                <div className="font-dm text-subtle space-y-6 leading-relaxed">
                  <div>
                    <h3 className="text-lg font-syne font-bold text-navy dark:text-white mb-2">4.1 Internal Access</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>All Flurbix employees follow a principle of least-privilege — access to production systems is granted only when required for a specific job function.</li>
                      <li>Production database access requires multi-step approval and is fully logged.</li>
                      <li>All access to customer data by Flurbix employees requires a support ticket or incident record as justification.</li>
                      <li>Employee access is reviewed quarterly and revoked immediately upon offboarding.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-syne font-bold text-navy dark:text-white mb-2">4.2 Multi-Factor Authentication</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>MFA is required for all Flurbix employees to access internal tools, AWS console, and production systems.</li>
                      <li>Flurbix supports TOTP-based MFA for all customer accounts.</li>
                      <li>Enterprise plans can enforce MFA for all workspace members via admin policy.</li>
                      <li>SSO with Okta, Azure AD, and Google Workspace is available on Enterprise plans with SAML 2.0.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-syne font-bold text-navy dark:text-white mb-2">4.3 Role-Based Access Within Flurbix</h3>
                    <p>
                      The Flurbix platform supports granular role-based access control (RBAC) so your team members can only access the data and features relevant to their role. Admins can define custom roles, restrict access by workspace, client, or data type, and review access logs in the audit trail.
                    </p>
                  </div>
                </div>
              </section>

              <section id="application-security" className="scroll-mt-32">
                <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">5. Application Security</h2>
                <div className="font-dm text-subtle space-y-6 leading-relaxed">
                  <div>
                    <h3 className="text-lg font-syne font-bold text-navy dark:text-white mb-2">5.1 Secure Development Lifecycle</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>All code changes go through peer review before merging to the main branch.</li>
                      <li>Static application security testing (SAST) is run on every pull request via automated tooling.</li>
                      <li>Dependency vulnerability scanning runs daily — critical vulnerabilities are patched within 24 hours.</li>
                      <li>Dynamic application security testing (DAST) is run monthly against staging environments.</li>
                      <li>Security requirements are included in all product specifications.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-syne font-bold text-navy dark:text-white mb-2">5.2 OWASP Top 10 Protections</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Injection (SQL, NoSQL, Command)</strong>: All database queries use parameterized statements; no raw string interpolation in queries.</li>
                      <li><strong>Broken Authentication</strong>: Session tokens are cryptographically random, expire after inactivity, and are rotated on privilege escalation.</li>
                      <li><strong>Sensitive Data Exposure</strong>: PII is never logged; all sensitive fields are masked in error messages and audit logs.</li>
                      <li><strong>XML External Entities (XXE)</strong>: XML parsing is disabled where possible; external entity processing is explicitly disabled.</li>
                      <li><strong>Broken Access Control</strong>: All API endpoints enforce authentication and authorization checks server-side.</li>
                      <li><strong>Security Misconfiguration</strong>: Infrastructure is provisioned via IaC with security hardening baselines; default credentials are never used.</li>
                      <li><strong>Cross-Site Scripting (XSS)</strong>: All user-generated content is sanitized and escaped; Content Security Policy (CSP) headers are enforced.</li>
                      <li><strong>Insecure Deserialization</strong>: Serialized data from untrusted sources is never deserialized directly.</li>
                      <li><strong>Using Components with Known Vulnerabilities</strong>: Automated dependency scanning with automatic PR creation for security patches.</li>
                      <li><strong>Insufficient Logging & Monitoring</strong>: All authentication events, privilege changes, and data access are logged to an immutable audit trail.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-syne font-bold text-navy dark:text-white mb-2">5.3 API Security</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>All API endpoints require authentication via Bearer token or API key.</li>
                      <li>API keys are scoped to specific permissions and can be revoked instantly.</li>
                      <li>Rate limiting is enforced on all API endpoints to prevent abuse.</li>
                      <li>API request and response logging (with PII masking) is retained for 90 days.</li>
                      <li>Webhooks are signed with HMAC-SHA256 so receivers can verify authenticity.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="availability" className="scroll-mt-32">
                <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">6. Availability and Business Continuity</h2>
                <div className="font-dm text-subtle space-y-6 leading-relaxed">
                  <div>
                    <h3 className="text-lg font-syne font-bold text-navy dark:text-white mb-2">6.1 Uptime Commitments</h3>
                    <div className="overflow-x-auto my-4">
                      <table className="w-full border-collapse text-left text-xs md:text-sm border border-border-light dark:border-white/5">
                        <thead>
                          <tr className="bg-slate-50 dark:bg-white/5 font-syne font-semibold text-navy dark:text-white border-b border-border-light dark:border-white/5">
                            <th className="p-3">Plan</th>
                            <th className="p-3">Uptime SLA</th>
                            <th className="p-3">Maintenance Window</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-border-light dark:border-white/5">
                            <td className="p-3 font-semibold text-navy dark:text-white">Starter</td>
                            <td className="p-3">99.9%</td>
                            <td className="p-3">Monthly, weekends</td>
                          </tr>
                          <tr className="border-b border-border-light dark:border-white/5">
                            <td className="p-3 font-semibold text-navy dark:text-white">Growth</td>
                            <td className="p-3">99.9%</td>
                            <td className="p-3">Monthly, weekends</td>
                          </tr>
                          <tr className="border-b border-border-light dark:border-white/5">
                            <td className="p-3 font-semibold text-navy dark:text-white">Enterprise</td>
                            <td className="p-3">99.99%</td>
                            <td className="p-3">Scheduled with advance notice</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-syne font-bold text-navy dark:text-white mb-2">6.2 Backup and Recovery</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Automated database backups run every 6 hours with 30-day retention.</li>
                      <li>Point-in-time recovery is available for all production databases going back 30 days.</li>
                      <li>Backups are stored in a separate AWS region from primary data.</li>
                      <li>Backup restoration is tested quarterly as part of our disaster recovery drills.</li>
                      <li>Recovery Time Objective (RTO): 4 hours for standard plans, 1 hour for Enterprise plans.</li>
                      <li>Recovery Point Objective (RPO): 6 hours for standard plans, 1 hour for Enterprise plans.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-syne font-bold text-navy dark:text-white mb-2">6.3 Incident Response</h3>
                    <p>
                      Flurbix maintains a formal incident response plan. All incidents are classified by severity (P0 through P3). P0 incidents (full service outage) trigger immediate all-hands response with updates every 30 minutes on status.flurbix.io. Post-incident reports are published within 5 business days for P0 and P1 incidents.
                    </p>
                  </div>
                </div>
              </section>

              <section id="compliance" className="scroll-mt-32">
                <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">7. Compliance and Certifications</h2>
                <div className="font-dm text-subtle space-y-6 leading-relaxed">
                  <div>
                    <h3 className="text-lg font-syne font-bold text-navy dark:text-white mb-2">7.1 SOC 2 Type II</h3>
                    <p>
                      Flurbix has achieved SOC 2 Type II certification covering the Trust Services Criteria for Security, Availability, and Confidentiality. Our SOC 2 report is available to prospective Enterprise customers under NDA. Contact <a href="mailto:sales@flurbix.io" className="text-cyan hover:underline font-dm">sales@flurbix.io</a> to request a copy.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-syne font-bold text-navy dark:text-white mb-2">7.2 GDPR</h3>
                    <p>
                      Flurbix is fully compliant with the General Data Protection Regulation (GDPR). We act as a data processor for customer data and as a data controller for our own user accounts. Our GDPR compliance program is detailed at <Link href="/gdpr" className="text-cyan hover:underline font-dm">flurbix.io/gdpr</Link>. We offer a Data Processing Agreement (DPA) to all customers. Enterprise customers can request a countersigned DPA at <a href="mailto:legal@flurbix.io" className="text-cyan hover:underline font-dm">legal@flurbix.io</a>.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-syne font-bold text-navy dark:text-white mb-2">7.3 CCPA</h3>
                    <p>
                      Flurbix complies with the California Consumer Privacy Act (CCPA). We do not sell personal information. California residents can exercise their CCPA rights by emailing <a href="mailto:privacy@flurbix.io" className="text-cyan hover:underline font-dm">privacy@flurbix.io</a> or through their account settings.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-syne font-bold text-navy dark:text-white mb-2">7.4 Additional Standards</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>ISO 27001</strong>: Our ISMS is aligned with ISO 27001 principles; formal certification is in progress for 2025.</li>
                      <li><strong>PCI DSS</strong>: Flurbix does not store, process, or transmit cardholder data. Payments are processed by Stripe, which is PCI DSS Level 1 certified.</li>
                      <li><strong>HIPAA</strong>: Flurbix is not currently HIPAA-certified and should not be used to store Protected Health Information (PHI).</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="employee-security" className="scroll-mt-32">
                <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">8. Employee Security</h2>
                <div className="font-dm text-subtle space-y-4 leading-relaxed">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>All employees complete security awareness training during onboarding and annually thereafter.</li>
                    <li>All employees with production access undergo background checks before being granted access.</li>
                    <li>Phishing simulation exercises are conducted quarterly.</li>
                    <li>Security policies are reviewed and signed by all employees annually.</li>
                    <li>Departing employees have all access revoked within 1 hour of their final day.</li>
                    <li>Personal devices used for work must comply with our Mobile Device Management (MDM) policy.</li>
                    <li>Use of password managers is mandatory for all employees.</li>
                  </ul>
                </div>
              </section>

              <section id="vulnerability-disclosure" className="scroll-mt-32">
                <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">9. Vulnerability Disclosure</h2>
                <div className="font-dm text-subtle space-y-6 leading-relaxed">
                  <div>
                    <h3 className="text-lg font-syne font-bold text-navy dark:text-white mb-2">9.1 Responsible Disclosure Policy</h3>
                    <p>
                      Flurbix operates a responsible disclosure program. If you discover a security vulnerability in our platform or website, we ask that you report it to us privately and give us a reasonable amount of time to address it before any public disclosure.
                    </p>
                    <p>
                      We commit to: acknowledging your report within 48 hours, providing regular status updates as we investigate, working with you to understand and resolve the issue, and publicly crediting you (with your permission) once the vulnerability is fixed.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-syne font-bold text-navy dark:text-white mb-2">9.2 How to Report</h3>
                    <div className="bg-navy border border-white/10 rounded-2xl p-8 space-y-2 text-white">
                      <p><strong>Email:</strong> <a href="mailto:security@flurbix.io" className="text-cyan hover:underline font-dm">security@flurbix.io</a></p>
                      <p><strong>PGP Key:</strong> Available at <a href="https://flurbix.io/pgp-key.txt" target="_blank" rel="noopener noreferrer" className="text-cyan hover:underline font-dm">flurbix.io/pgp-key.txt</a></p>
                      <p><strong>Encryption:</strong> Please encrypt sensitive vulnerability reports with our PGP key.</p>
                      <p className="text-xs text-subtle pt-2 border-t border-white/5">
                        Response time: 48 hours initial response, 7-day triage SLA for critical issues.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-syne font-bold text-navy dark:text-white mb-2">9.3 Scope</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      <div>
                        <h4 className="font-syne font-semibold text-white mb-2 text-sm uppercase tracking-wider text-cyan">In Scope</h4>
                        <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-300">
                          <li>Authentication and authorization flaws</li>
                          <li>Server-side injection (SQL, NoSQL, Command)</li>
                          <li>Cross-site scripting (XSS) and request forgery (CSRF)</li>
                          <li>Insecure direct object references (IDOR) exposing data</li>
                          <li>Security misconfigurations leading to access</li>
                          <li>Cryptographic weaknesses affecting data confidentiality</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-syne font-semibold text-white mb-2 text-sm uppercase tracking-wider text-violet-light">Out of Scope</h4>
                        <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-300">
                          <li>Denial of service (DoS/DDoS) attacks</li>
                          <li>Social engineering targeting Flurbix employees</li>
                          <li>Physical security of Flurbix offices</li>
                          <li>Third-party services not under Flurbix control</li>
                          <li>Spam or content injection without security impact</li>
                          <li>Theoretical vulnerabilities without proof of concept</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="contact" className="scroll-mt-32">
                <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">10. Contact Security Team</h2>
                <div className="font-dm text-subtle space-y-4 leading-relaxed">
                  <p>
                    For inquiries that do not involve active security vulnerabilities, please use the specific emails below:
                  </p>
                  <div className="bg-surface dark:bg-navy border border-border-light dark:border-white/10 p-6 rounded-xl space-y-2 mt-4">
                    <p><strong>Security Disclosures:</strong> <a href="mailto:security@flurbix.io" className="text-cyan hover:underline font-dm">security@flurbix.io</a></p>
                    <p><strong>Compliance & Certifications:</strong> <a href="mailto:compliance@flurbix.io" className="text-cyan hover:underline font-dm">compliance@flurbix.io</a></p>
                    <p><strong>DPA Requests:</strong> <a href="mailto:legal@flurbix.io" className="text-cyan hover:underline font-dm">legal@flurbix.io</a></p>
                    <p className="text-xs text-subtle pt-2 border-t border-border-light dark:border-white/5">
                      <strong>Note:</strong> For urgent security incidents affecting your account, contact our 24/7 security team at <a href="mailto:security@flurbix.io" className="text-cyan hover:underline font-dm">security@flurbix.io</a> with "URGENT" in the subject line.
                    </p>
                  </div>
                </div>
              </section>
              
            </div>
          </div>
        </section>
      </main>

      <LegalBadges />
      <Footer />
    </div>
  )
}
