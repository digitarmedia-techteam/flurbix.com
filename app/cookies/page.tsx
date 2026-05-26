import type { Metadata } from 'next'
import LegalLayout from '@/components/LegalLayout'
import CookieConsentBanner from '@/components/CookieConsentBanner'

export const metadata: Metadata = {
  title: 'Cookie Policy — Flurbix',
  description:
    'Learn how Flurbix uses cookies and similar tracking technologies. Understand your choices and how to manage your cookie preferences.',
  alternates: { canonical: 'https://flurbix.com/cookies' },
  openGraph: {
    title: 'Cookie Policy — Flurbix',
    url: 'https://flurbix.com/cookies',
    type: 'website',
  },
}

const tocItems = [
  { id: 'what-are-cookies', label: '1. What Are Cookies' },
  { id: 'cookie-types', label: '2. Types of Cookies We Use' },
  { id: 'tracking-technologies', label: '3. Similar Tracking Technologies' },
  { id: 'cookie-usage', label: '4. How We Use Cookie Data' },
  { id: 'third-party', label: '5. Third-Party Cookies' },
  { id: 'managing-cookies', label: '6. Managing Cookie Preferences' },
  { id: 'consent', label: '7. Cookie Consent' },
  { id: 'children', label: '8. Cookies & Children' },
  { id: 'changes', label: '9. Changes to This Policy' },
  { id: 'contact', label: '10. Contact Us' },
]

export default function CookiePolicyPage() {
  return (
    <LegalLayout
      title="Cookie Policy"
      subtitle="Understand how we use cookies and manage your settings."
      lastUpdated="January 1, 2025"
      tocItems={tocItems}
    >
      {/* Interactive preview of the consent banner */}
      <div className="mb-6">
        <CookieConsentBanner isPreview={true} />
      </div>

      <section id="what-are-cookies" className="scroll-mt-32">
        <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">1. What Are Cookies</h2>
        <div className="font-dm text-subtle space-y-4 leading-relaxed">
          <p>
            Cookies are small text files that are placed on your device (computer, tablet, or mobile phone) when you visit a website. They are widely used to make websites work efficiently, remember your preferences, and provide information to website owners.
          </p>
          <p>
            Cookies are not programs and cannot carry viruses or malware. They are simply data files stored by your browser. Cookies set by the website you are visiting are called "first-party cookies." Cookies set by other organizations are called "third-party cookies."
          </p>
          <div className="bg-cyan/10 border border-cyan/20 text-cyan text-sm p-4 rounded-lg font-medium">
            Flurbix uses cookies both on our marketing website (flurbix.io) and within the Flurbix platform (app.flurbix.io). This policy covers both.
          </div>
        </div>
      </section>

      <section id="cookie-types" className="scroll-mt-32">
        <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">2. Types of Cookies We Use</h2>
        <div className="font-dm text-subtle space-y-4 leading-relaxed">
          <p>
            We use four categories of cookies. The table below describes each category, its purpose, and whether it can be disabled.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse text-left text-xs md:text-sm border border-border-light dark:border-white/5">
              <thead>
                <tr className="bg-slate-50 dark:bg-white/5 font-syne font-semibold text-navy dark:text-white border-b border-border-light dark:border-white/5">
                  <th className="p-3">Category</th>
                  <th className="p-3">Purpose</th>
                  <th className="p-3">Duration</th>
                  <th className="p-3">Can Opt Out?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border-light dark:border-white/5">
                  <td className="p-3 font-semibold text-navy dark:text-white">Strictly Necessary</td>
                  <td className="p-3">Enable core platform functions: authentication sessions, security tokens, load balancing, form submissions</td>
                  <td className="p-3">Session / Up to 1 year</td>
                  <td className="p-3">No — required for the Service to function</td>
                </tr>
                <tr className="border-b border-border-light dark:border-white/5">
                  <td className="p-3 font-semibold text-navy dark:text-white">Functional</td>
                  <td className="p-3">Remember your preferences: language, timezone, dashboard layout, theme selection</td>
                  <td className="p-3">Up to 2 years</td>
                  <td className="p-3">No — disabling may degrade experience</td>
                </tr>
                <tr className="border-b border-border-light dark:border-white/5">
                  <td className="p-3 font-semibold text-navy dark:text-white">Analytics</td>
                  <td className="p-3">Understand how users interact with Flurbix: pages visited, features used, session duration, error frequency</td>
                  <td className="p-3">Up to 2 years</td>
                  <td className="p-3">Yes — opt out via consent manager</td>
                </tr>
                <tr className="border-b border-border-light dark:border-white/5">
                  <td className="p-3 font-semibold text-navy dark:text-white">Marketing</td>
                  <td className="p-3">Measure ad campaign effectiveness, retargeting, conversion attribution</td>
                  <td className="p-3">Up to 90 days</td>
                  <td className="p-3">Yes — opt out via consent manager</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-syne font-bold text-navy dark:text-white mt-8 mb-2">2.1 Strictly Necessary Cookies</h3>
          <p>
            These cookies are essential to provide you with services available through our website and platform and to use some of its features, such as access to secure areas.
          </p>
          <div className="overflow-x-auto my-4">
            <table className="w-full border-collapse text-left text-xs md:text-sm border border-border-light dark:border-white/5">
              <thead>
                <tr className="bg-slate-50 dark:bg-white/5 font-syne font-semibold text-navy dark:text-white border-b border-border-light dark:border-white/5">
                  <th className="p-3">Cookie Name</th>
                  <th className="p-3">Provider</th>
                  <th className="p-3">Purpose</th>
                  <th className="p-3">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border-light dark:border-white/5">
                  <td className="p-3 font-mono font-semibold text-cyan">flurbix_session</td>
                  <td className="p-3 text-navy dark:text-white">Flurbix</td>
                  <td className="p-3">Authenticates your login session</td>
                  <td className="p-3">Session</td>
                </tr>
                <tr className="border-b border-border-light dark:border-white/5">
                  <td className="p-3 font-mono font-semibold text-cyan">flurbix_csrf</td>
                  <td className="p-3 text-navy dark:text-white">Flurbix</td>
                  <td className="p-3">Protects against cross-site request forgery</td>
                  <td className="p-3">Session</td>
                </tr>
                <tr className="border-b border-border-light dark:border-white/5">
                  <td className="p-3 font-mono font-semibold text-cyan">flurbix_remember</td>
                  <td className="p-3 text-navy dark:text-white">Flurbix</td>
                  <td className="p-3">Keeps you logged in if "Remember me" is checked</td>
                  <td className="p-3">30 days</td>
                </tr>
                <tr className="border-b border-border-light dark:border-white/5">
                  <td className="p-3 font-mono font-semibold text-cyan">flurbix_workspace</td>
                  <td className="p-3 text-navy dark:text-white">Flurbix</td>
                  <td className="p-3">Stores your last active workspace</td>
                  <td className="p-3">1 year</td>
                </tr>
                <tr className="border-b border-border-light dark:border-white/5">
                  <td className="p-3 font-mono font-semibold text-cyan">__cf_bm</td>
                  <td className="p-3 text-navy dark:text-white">Cloudflare</td>
                  <td className="p-3">Bot detection and DDoS protection</td>
                  <td className="p-3">30 minutes</td>
                </tr>
                <tr className="border-b border-border-light dark:border-white/5">
                  <td className="p-3 font-mono font-semibold text-cyan">_cfuvid</td>
                  <td className="p-3 text-navy dark:text-white">Cloudflare</td>
                  <td className="p-3">Rate limiting and abuse prevention</td>
                  <td className="p-3">Session</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-syne font-bold text-navy dark:text-white mt-8 mb-2">2.2 Functional Cookies</h3>
          <div className="overflow-x-auto my-4">
            <table className="w-full border-collapse text-left text-xs md:text-sm border border-border-light dark:border-white/5">
              <thead>
                <tr className="bg-slate-50 dark:bg-white/5 font-syne font-semibold text-navy dark:text-white border-b border-border-light dark:border-white/5">
                  <th className="p-3">Cookie Name</th>
                  <th className="p-3">Provider</th>
                  <th className="p-3">Purpose</th>
                  <th className="p-3">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border-light dark:border-white/5">
                  <td className="p-3 font-mono font-semibold text-cyan">flurbix_theme</td>
                  <td className="p-3 text-navy dark:text-white">Flurbix</td>
                  <td className="p-3">Stores dark/light mode preference</td>
                  <td className="p-3">1 year</td>
                </tr>
                <tr className="border-b border-border-light dark:border-white/5">
                  <td className="p-3 font-mono font-semibold text-cyan">flurbix_lang</td>
                  <td className="p-3 text-navy dark:text-white">Flurbix</td>
                  <td className="p-3">Stores language preference</td>
                  <td className="p-3">1 year</td>
                </tr>
                <tr className="border-b border-border-light dark:border-white/5">
                  <td className="p-3 font-mono font-semibold text-cyan">flurbix_tz</td>
                  <td className="p-3 text-navy dark:text-white">Flurbix</td>
                  <td className="p-3">Stores timezone for accurate reporting</td>
                  <td className="p-3">1 year</td>
                </tr>
                <tr className="border-b border-border-light dark:border-white/5">
                  <td className="p-3 font-mono font-semibold text-cyan">flurbix_sidebar</td>
                  <td className="p-3 text-navy dark:text-white">Flurbix</td>
                  <td className="p-3">Remembers sidebar collapsed/expanded state</td>
                  <td className="p-3">1 year</td>
                </tr>
                <tr className="border-b border-border-light dark:border-white/5">
                  <td className="p-3 font-mono font-semibold text-cyan">intercom-session-*</td>
                  <td className="p-3 text-navy dark:text-white">Intercom</td>
                  <td className="p-3">Customer support chat session continuity</td>
                  <td className="p-3">1 week</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-syne font-bold text-navy dark:text-white mt-8 mb-2">2.3 Analytics Cookies</h3>
          <div className="overflow-x-auto my-4">
            <table className="w-full border-collapse text-left text-xs md:text-sm border border-border-light dark:border-white/5">
              <thead>
                <tr className="bg-slate-50 dark:bg-white/5 font-syne font-semibold text-navy dark:text-white border-b border-border-light dark:border-white/5">
                  <th className="p-3">Cookie Name</th>
                  <th className="p-3">Provider</th>
                  <th className="p-3">Purpose</th>
                  <th className="p-3">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border-light dark:border-white/5">
                  <td className="p-3 font-mono font-semibold text-cyan">mp_*</td>
                  <td className="p-3 text-navy dark:text-white">Mixpanel</td>
                  <td className="p-3">Product analytics and feature engagement tracking</td>
                  <td className="p-3">1 year</td>
                </tr>
                <tr className="border-b border-border-light dark:border-white/5">
                  <td className="p-3 font-mono font-semibold text-cyan">_dd_s</td>
                  <td className="p-3 text-navy dark:text-white">Datadog</td>
                  <td className="p-3">Real user monitoring and performance tracking</td>
                  <td className="p-3">Session</td>
                </tr>
                <tr className="border-b border-border-light dark:border-white/5">
                  <td className="p-3 font-mono font-semibold text-cyan">_ga</td>
                  <td className="p-3 text-navy dark:text-white">Google Analytics</td>
                  <td className="p-3">Distinguishes unique users</td>
                  <td className="p-3">2 years</td>
                </tr>
                <tr className="border-b border-border-light dark:border-white/5">
                  <td className="p-3 font-mono font-semibold text-cyan">_ga_*</td>
                  <td className="p-3 text-navy dark:text-white">Google Analytics</td>
                  <td className="p-3">Session state persistence</td>
                  <td className="p-3">2 years</td>
                </tr>
                <tr className="border-b border-border-light dark:border-white/5">
                  <td className="p-3 font-mono font-semibold text-cyan">_gid</td>
                  <td className="p-3 text-navy dark:text-white">Google Analytics</td>
                  <td className="p-3">Distinguishes users (daily)</td>
                  <td className="p-3">24 hours</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-syne font-bold text-navy dark:text-white mt-8 mb-2">2.4 Marketing Cookies</h3>
          <div className="overflow-x-auto my-4">
            <table className="w-full border-collapse text-left text-xs md:text-sm border border-border-light dark:border-white/5">
              <thead>
                <tr className="bg-slate-50 dark:bg-white/5 font-syne font-semibold text-navy dark:text-white border-b border-border-light dark:border-white/5">
                  <th className="p-3">Cookie Name</th>
                  <th className="p-3">Provider</th>
                  <th className="p-3">Purpose</th>
                  <th className="p-3">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border-light dark:border-white/5">
                  <td className="p-3 font-mono font-semibold text-cyan">_fbp</td>
                  <td className="p-3 text-navy dark:text-white">Meta (Facebook)</td>
                  <td className="p-3">Conversion tracking and retargeting</td>
                  <td className="p-3">90 days</td>
                </tr>
                <tr className="border-b border-border-light dark:border-white/5">
                  <td className="p-3 font-mono font-semibold text-cyan">_gcl_au</td>
                  <td className="p-3 text-navy dark:text-white">Google Ads</td>
                  <td className="p-3">Ad conversion measurement</td>
                  <td className="p-3">90 days</td>
                </tr>
                <tr className="border-b border-border-light dark:border-white/5">
                  <td className="p-3 font-mono font-semibold text-cyan">li_fat_id</td>
                  <td className="p-3 text-navy dark:text-white">LinkedIn</td>
                  <td className="p-3">LinkedIn ad conversion tracking</td>
                  <td className="p-3">30 days</td>
                </tr>
                <tr className="border-b border-border-light dark:border-white/5">
                  <td className="p-3 font-mono font-semibold text-cyan">ttclid</td>
                  <td className="p-3 text-navy dark:text-white">TikTok</td>
                  <td className="p-3">TikTok Ads conversion attribution</td>
                  <td className="p-3">7 days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="tracking-technologies" className="scroll-mt-32">
        <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">3. Similar Tracking Technologies</h2>
        <div className="font-dm text-subtle space-y-6 leading-relaxed">
          <div>
            <h3 className="text-lg font-syne font-bold text-navy dark:text-white mb-2">3.1 Local Storage and Session Storage</h3>
            <p>
              In addition to cookies, Flurbix uses browser local storage and session storage within the platform to improve performance. These store data such as cached API responses, UI state, and draft content. This data is not transmitted to our servers automatically and is cleared when you log out or clear your browser storage.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-syne font-bold text-navy dark:text-white mb-2">3.2 Pixel Tags and Web Beacons</h3>
            <p>
              Our marketing emails may contain small, invisible image files (pixel tags or web beacons) that tell us whether an email was opened and whether links were clicked. This helps us measure the effectiveness of our email campaigns. You can opt out by disabling image loading in your email client or unsubscribing from marketing emails.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-syne font-bold text-navy dark:text-white mb-2">3.3 Fingerprinting</h3>
            <p>
              Flurbix does not use browser fingerprinting or device fingerprinting to track users across websites. We do not build cross-site tracking profiles.
            </p>
          </div>
        </div>
      </section>

      <section id="cookie-usage" className="scroll-mt-32">
        <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">4. How We Use Cookie Data</h2>
        <div className="font-dm text-subtle space-y-4 leading-relaxed">
          <p>
            We process the data collected through cookies to ensure core product operations and monitor safety. This includes:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Keeping you authenticated and secure during your session</li>
            <li>Remembering your preferences to personalize your experience</li>
            <li>Understanding which features are most valuable to our users</li>
            <li>Measuring the effectiveness of our marketing campaigns</li>
            <li>Diagnosing technical issues and monitoring platform performance</li>
            <li>Preventing fraud, abuse, and unauthorized access</li>
            <li>Complying with legal obligations around consent and data processing</li>
          </ul>
        </div>
      </section>

      <section id="third-party" className="scroll-mt-32">
        <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">5. Third-Party Cookies</h2>
        <div className="font-dm text-subtle space-y-4 leading-relaxed">
          <p>
            Some cookies on flurbix.io are set by third-party services we use. These third parties set cookies according to their own privacy policies. Flurbix does not control third-party cookies and is not responsible for how those third parties use the data they collect.
          </p>
          <p>
            We carefully vet all third-party providers we work with and contractually require them to handle data in accordance with applicable privacy laws. A full list of our sub-processors, including those that use cookies, is available in our Privacy Policy.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Google Analytics</strong> —{' '}
              <a href="https://analytics.google.com/analytics/web/" target="_blank" rel="noopener noreferrer" className="text-cyan hover:underline font-dm">
                analytics.google.com/analytics/web/
              </a>
            </li>
            <li>
              <strong>Mixpanel</strong> —{' '}
              <a href="https://mixpanel.com" target="_blank" rel="noopener noreferrer" className="text-cyan hover:underline font-dm">
                mixpanel.com
              </a>
            </li>
            <li>
              <strong>Intercom</strong> —{' '}
              <a href="https://intercom.com" target="_blank" rel="noopener noreferrer" className="text-cyan hover:underline font-dm">
                intercom.com
              </a>
            </li>
            <li>
              <strong>Cloudflare</strong> —{' '}
              <a href="https://cloudflare.com" target="_blank" rel="noopener noreferrer" className="text-cyan hover:underline font-dm">
                cloudflare.com
              </a>
            </li>
            <li>
              <strong>Meta Pixel</strong> —{' '}
              <a href="https://facebook.com/business/tools/meta-pixel" target="_blank" rel="noopener noreferrer" className="text-cyan hover:underline font-dm">
                facebook.com/business/tools/meta-pixel
              </a>
            </li>
            <li>
              <strong>LinkedIn Insight Tag</strong> —{' '}
              <a href="https://linkedin.com/help/linkedin/answer/65521" target="_blank" rel="noopener noreferrer" className="text-cyan hover:underline font-dm">
                linkedin.com/help/linkedin/answer/65521
              </a>
            </li>
            <li>
              <strong>Datadog RUM</strong> —{' '}
              <a href="https://datadoghq.com" target="_blank" rel="noopener noreferrer" className="text-cyan hover:underline font-dm">
                datadoghq.com
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section id="managing-cookies" className="scroll-mt-32">
        <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">6. Managing Cookie Preferences</h2>
        <div className="font-dm text-subtle space-y-6 leading-relaxed">
          <div>
            <h3 className="text-lg font-syne font-bold text-navy dark:text-white mb-2">6.1 Flurbix Consent Manager</h3>
            <p>
              When you first visit flurbix.io, a cookie consent banner allows you to accept all cookies, reject non-essential cookies, or customize your preferences by category. You can change your preferences at any time by clicking the "Cookie Preferences" link in the footer.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-syne font-bold text-navy dark:text-white mb-2">6.2 Browser Settings</h3>
            <p>
              You can control and delete cookies through your browser settings. Note that disabling strictly necessary cookies will prevent the Flurbix platform from functioning.
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>
                <strong>Google Chrome</strong> — Settings › Privacy and Security › Cookies and other site data
              </li>
              <li>
                <strong>Mozilla Firefox</strong> — Settings › Privacy & Security › Cookies and Site Data
              </li>
              <li>
                <strong>Safari</strong> — Preferences › Privacy › Manage Website Data
              </li>
              <li>
                <strong>Microsoft Edge</strong> — Settings › Cookies and Site Permissions
              </li>
              <li>
                <strong>Opera</strong> — Settings › Advanced › Privacy & security › Site settings › Cookies
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-syne font-bold text-navy dark:text-white mb-2">6.3 Opt-Out Tools</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Google Analytics Opt-Out: Install the add-on at{' '}
                <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-cyan hover:underline font-dm">
                  tools.google.com/dlpage/gaoptout
                </a>
              </li>
              <li>
                Meta Ad Preferences: Manage at{' '}
                <a href="https://facebook.com/ads/preferences" target="_blank" rel="noopener noreferrer" className="text-cyan hover:underline font-dm">
                  facebook.com/ads/preferences
                </a>
              </li>
              <li>
                LinkedIn Ad Opt-Out: Manage at{' '}
                <a href="https://linkedin.com/psettings/guest-controls" target="_blank" rel="noopener noreferrer" className="text-cyan hover:underline font-dm">
                  linkedin.com/psettings/guest-controls
                </a>
              </li>
              <li>
                NAI Opt-Out: Network Advertising Initiative opt-out at{' '}
                <a href="https://optout.networkadvertising.org" target="_blank" rel="noopener noreferrer" className="text-cyan hover:underline font-dm">
                  optout.networkadvertising.org
                </a>
              </li>
              <li>
                DAA Opt-Out: Digital Advertising Alliance opt-out at{' '}
                <a href="https://optout.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-cyan hover:underline font-dm">
                  optout.aboutads.info
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-syne font-bold text-navy dark:text-white mb-2">6.4 Do Not Track</h3>
            <p>
              Some browsers send a "Do Not Track" (DNT) signal. Flurbix does not currently respond to DNT signals because there is no universally accepted standard for what DNT means. We recommend using the Flurbix consent manager or browser settings to control tracking.
            </p>
          </div>
        </div>
      </section>

      <section id="consent" className="scroll-mt-32">
        <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">7. Cookie Consent</h2>
        <div className="font-dm text-subtle space-y-4 leading-relaxed">
          <p>
            Under GDPR, PECR (UK), and ePrivacy regulations, we are required to obtain your consent before placing non-essential cookies on your device. We collect this consent via our cookie consent banner, which appears on your first visit to flurbix.io.
          </p>
          <p>
            We record the following data about your consent: timestamp, cookie categories accepted or rejected, consent method (banner interaction), your IP address (anonymized), and the version of this Cookie Policy in effect at the time of consent. This consent record is retained for 3 years for compliance purposes.
          </p>
          <div className="bg-cyan/10 border border-cyan/20 text-cyan text-sm p-4 rounded-lg font-medium">
            Consent for cookies within the Flurbix platform (app.flurbix.io) is governed by your subscription agreement. Platform cookies necessary for operation are placed without separate consent as permitted under the 'legitimate interest' basis for authenticated users.
          </div>
        </div>
      </section>

      <section id="children" className="scroll-mt-32">
        <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">8. Cookies & Children</h2>
        <div className="font-dm text-subtle space-y-4 leading-relaxed">
          <p>
            Flurbix does not knowingly use cookies to track children under the age of 16. If you are a parent or guardian and believe your child has used the Service and had cookies placed on their device, please contact us at <a href="mailto:privacy@flurbix.io" className="text-cyan hover:underline font-dm">privacy@flurbix.io</a> and we will take appropriate steps to remove such cookies and any associated data.
          </p>
        </div>
      </section>

      <section id="changes" className="scroll-mt-32">
        <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">9. Changes to This Policy</h2>
        <div className="font-dm text-subtle space-y-4 leading-relaxed">
          <p>
            We may update this Cookie Policy to reflect changes in the cookies we use, changes in our services, or changes in applicable law. When we update this policy, we will revise the "last updated" date at the top of the page.
          </p>
          <p>
            For material changes, we will re-display our cookie consent banner to obtain fresh consent where required by law. We recommend checking this page periodically for updates.
          </p>
        </div>
      </section>

      <section id="contact" className="scroll-mt-32">
        <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">10. Contact Us</h2>
        <div className="font-dm text-subtle space-y-4 leading-relaxed">
          <p>
            For any questions or concerns regarding our cookie usage, records requests, or this policy, please reach out to us:
          </p>
          <div className="bg-surface dark:bg-navy border border-border-light dark:border-white/10 p-6 rounded-xl space-y-2 mt-4">
            <p><strong>Email:</strong> <a href="mailto:privacy@flurbix.io" className="text-cyan hover:underline font-dm">privacy@flurbix.io</a></p>
            <p><strong>DPA & Consent Records:</strong> <a href="mailto:privacy@flurbix.io" className="text-cyan hover:underline font-dm">privacy@flurbix.io</a></p>
            <p className="text-xs text-subtle pt-2 border-t border-border-light dark:border-white/5">
              We respond to all cookie-related inquiries within 5 business days.
            </p>
          </div>
        </div>
      </section>
    </LegalLayout>
  )
}
