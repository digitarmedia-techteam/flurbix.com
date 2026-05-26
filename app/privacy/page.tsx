import type { Metadata } from 'next'
import LegalLayout from '@/components/LegalLayout'

export const metadata: Metadata = {
  title: 'Privacy Policy | Flurbix',
  description: 'Learn how Flurbix collects, uses, and protects your data.',
}

const tocItems = [
  { id: 'information-we-collect', label: '1. Information We Collect' },
  { id: 'how-we-use', label: '2. How We Use Your Information' },
  { id: 'sharing-disclosure', label: '3. Information Sharing and Disclosure' },
  { id: 'data-retention', label: '4. Data Retention' },
  { id: 'data-security', label: '5. Data Security' },
  { id: 'privacy-rights', label: '6. Your Privacy Rights' },
  { id: 'international-transfers', label: '7. International Data Transfers' },
  { id: 'childrens-privacy', label: '8. Children\'s Privacy' },
  { id: 'automated-decisions', label: '9. Automated Decision Making' },
  { id: 'third-party', label: '10. Third-Party Integrations' },
  { id: 'cookie-policy', label: '11. Cookie Policy' },
  { id: 'do-not-track', label: '12. Do Not Track Signals' },
  { id: 'changes', label: '13. Changes to This Policy' },
  { id: 'contact-us', label: '14. Contact Us' },
]

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="How we collect, use, and protect your information."
      lastUpdated="May 20, 2024"
      tocItems={tocItems}
    >
      <section id="information-we-collect" className="scroll-mt-32">
        <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">1. Information We Collect</h2>
        <div className="font-dm text-subtle space-y-4 leading-relaxed">
          <p>
            We collect information you provide directly to us, such as when you create an account, connect a third-party ad network (like Google Ads or Meta Ads), or communicate with our support team. This includes personal identifiers (name, email), billing information, and campaign metadata.
          </p>
          <p>
            We also automatically collect certain information about your device and how you interact with our platform, including IP addresses, browser types, operating systems, and usage data via cookies and similar tracking technologies.
          </p>
        </div>
      </section>

      <section id="how-we-use" className="scroll-mt-32">
        <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">2. How We Use Your Information</h2>
        <div className="font-dm text-subtle space-y-4 leading-relaxed">
          <p>
            Flurbix uses your data to provide, maintain, and improve our services; process transactions; and send technical notices. We analyze campaign performance data in aggregate to train our optimization algorithms, but your specific client data is siloed and never shared with other users.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>To facilitate account creation and authentication.</li>
            <li>To deliver and optimize campaign automation workflows.</li>
            <li>To respond to customer service requests and provide support.</li>
            <li>To send administrative information, updates, and security alerts.</li>
          </ul>
        </div>
      </section>

      <section id="sharing-disclosure" className="scroll-mt-32">
        <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">3. Information Sharing and Disclosure</h2>
        <div className="font-dm text-subtle space-y-4 leading-relaxed">
          <p>
            We do not sell your personal data. We may share information with service providers (e.g., Stripe for payments, AWS for hosting) strictly for the purpose of operating Flurbix. If we are involved in a merger or acquisition, your information may be transferred as part of that transaction.
          </p>
          <p>
            We may also disclose information if required to do so by law or in the good-faith belief that such action is necessary to comply with state and federal laws, in response to a court order, judicial or other government subpoena or warrant.
          </p>
        </div>
      </section>

      <section id="data-retention" className="scroll-mt-32">
        <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">4. Data Retention</h2>
        <div className="font-dm text-subtle space-y-4 leading-relaxed">
          <p>
            We retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.
          </p>
          <p>
            When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize it. If this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
          </p>
        </div>
      </section>

      <section id="data-security" className="scroll-mt-32">
        <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">5. Data Security</h2>
        <div className="font-dm text-subtle space-y-4 leading-relaxed">
          <p>
            We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
          </p>
          <div className="bg-cyan/10 border border-cyan/20 text-cyan text-sm p-4 rounded-lg font-medium">
            Security is our top priority. Flurbix employs AES-256 encryption at rest and TLS 1.3 in transit. We undergo annual independent SOC 2 Type II audits.
          </div>
        </div>
      </section>

      <section id="privacy-rights" className="scroll-mt-32">
        <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">6. Your Privacy Rights</h2>
        <div className="font-dm text-subtle space-y-4 leading-relaxed">
          <p>
            Depending on your location (such as the EEA, UK, or California), you may have certain rights regarding your personal information. These include the right to:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Request access and obtain a copy of your personal information.</li>
            <li>Request rectification or erasure of your personal information.</li>
            <li>Restrict the processing of your personal information.</li>
            <li>Data portability, where applicable.</li>
          </ul>
          <p>
            To exercise these rights, please contact us using the details provided in the "Contact Us" section. We will consider and act upon any request in accordance with applicable data protection laws.
          </p>
        </div>
      </section>

      <section id="international-transfers" className="scroll-mt-32">
        <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">7. International Data Transfers</h2>
        <div className="font-dm text-subtle space-y-4 leading-relaxed">
          <p>
            Flurbix is headquartered in the United States. Information we collect may be transferred to, stored, and processed in the United States or any other country in which we or our affiliates or service providers maintain facilities.
          </p>
          <p>
            By using our services, you consent to the transfer of information to countries outside of your country of residence, which may have data protection rules that are different from those of your country. We utilize standard contractual clauses and other valid legal mechanisms for cross-border data transfers.
          </p>
        </div>
      </section>

      <section id="childrens-privacy" className="scroll-mt-32">
        <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">8. Children's Privacy</h2>
        <div className="font-dm text-subtle space-y-4 leading-relaxed">
          <p>
            Our platform is designed for businesses and professionals. We do not knowingly solicit data from or market to children under 18 years of age. By using the platform, you represent that you are at least 18 years old.
          </p>
          <p>
            If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records.
          </p>
        </div>
      </section>

      <section id="automated-decisions" className="scroll-mt-32">
        <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">9. Automated Decision Making</h2>
        <div className="font-dm text-subtle space-y-4 leading-relaxed">
          <p>
            While Flurbix provides automated workflow and optimization tools for marketing campaigns, these tools execute logic defined by you, the user. We do not use your personal information to make automated decisions that produce legal or similarly significant effects concerning you.
          </p>
        </div>
      </section>

      <section id="third-party" className="scroll-mt-32">
        <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">10. Third-Party Integrations</h2>
        <div className="font-dm text-subtle space-y-4 leading-relaxed">
          <p>
            When you connect third-party platforms via OAuth, Flurbix only requests the minimum scopes necessary to execute your automated workflows. You can revoke these permissions at any time directly from your Flurbix dashboard or the third-party provider's settings.
          </p>
          <p>
            Our services may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties, and we encourage you to read their privacy statements.
          </p>
        </div>
      </section>

      <section id="cookie-policy" className="scroll-mt-32">
        <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">11. Cookie Policy</h2>
        <div className="font-dm text-subtle space-y-4 leading-relaxed">
          <p>
            We use cookies and similar tracking technologies to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our separate Cookie Notice.
          </p>
          <p>
            Essential cookies are required to authenticate users and prevent fraudulent use of user accounts. Analytics and performance cookies help us understand how visitors interact with our platform by collecting and reporting information anonymously.
          </p>
        </div>
      </section>

      <section id="do-not-track" className="scroll-mt-32">
        <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">12. Do Not Track Signals</h2>
        <div className="font-dm text-subtle space-y-4 leading-relaxed">
          <p>
            Most web browsers and some mobile operating systems include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected.
          </p>
          <p>
            At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online.
          </p>
        </div>
      </section>

      <section id="changes" className="scroll-mt-32">
        <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">13. Changes to This Policy</h2>
        <div className="font-dm text-subtle space-y-4 leading-relaxed">
          <p>
            We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date and the updated version will be effective as soon as it is accessible.
          </p>
          <p>
            If we make material changes to this Privacy Policy, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Policy frequently to be informed of how we are protecting your information.
          </p>
        </div>
      </section>

      <section id="contact-us" className="scroll-mt-32">
        <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">14. Contact Us</h2>
        <div className="font-dm text-subtle space-y-4 leading-relaxed">
          <p>
            For any questions regarding this Privacy Policy or your data, please contact our Data Protection Officer at <strong>privacy@flurbix.com</strong> or write to us at:
          </p>
          <div className="bg-surface dark:bg-navy border border-border-light dark:border-white/10 p-6 rounded-xl mt-4">
            <strong>Flurbix Inc.</strong><br />
            Attn: Legal Department<br />
            123 Growth Ave, Suite 400<br />
            San Francisco, CA 94107
          </div>
        </div>
      </section>
    </LegalLayout>
  )
}
