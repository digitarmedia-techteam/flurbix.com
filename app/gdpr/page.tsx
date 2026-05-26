import type { Metadata } from 'next'
import LegalLayout from '@/components/LegalLayout'
import GdprRightsWidget from '@/components/GdprRightsWidget'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'GDPR Compliance — Flurbix',
  description:
    "Flurbix is fully GDPR compliant. Learn about your rights as an EU data subject, how we process personal data, and how to request your DPA.",
  alternates: { canonical: 'https://flurbix.com/gdpr' },
  openGraph: {
    title: 'GDPR Compliance — Flurbix',
    url: 'https://flurbix.com/gdpr',
    type: 'website',
  },
}

const tocItems = [
  { id: 'commitment', label: '1. Our GDPR Commitment' },
  { id: 'legal-basis', label: '2. Legal Basis for Processing' },
  { id: 'controller-processor', label: '3. Controller vs. Processor' },
  { id: 'dpa', label: '4. Data Processing Agreement' },
  { id: 'transfers', label: '5. International Data Transfers' },
  { id: 'rights-info', label: '6. Data Subject Rights' },
  { id: 'retention', label: '7. Data Retention Under GDPR' },
  { id: 'breach-notification', label: '8. Data Breach Notification' },
  { id: 'children', label: "9. Children's Data" },
  { id: 'privacy-by-design', label: '10. Privacy by Design' },
  { id: 'dpo', label: '11. Data Protection Officer' },
  { id: 'supervisory-authority', label: '12. Supervisory Authority' },
]

export default function GdprCompliancePage() {
  return (
    <LegalLayout
      title="GDPR Compliance"
      subtitle="Last updated: January 1, 2025 · We are fully compliant with EU Regulation 2016/679"
      lastUpdated="January 1, 2025"
      tocItems={tocItems}
      topWidget={<GdprRightsWidget />}
    >
      <section id="commitment" className="scroll-mt-32">
        <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">1. Our GDPR Commitment</h2>
        <div className="font-dm text-subtle space-y-4 leading-relaxed">
          <p>
            Flurbix is fully committed to compliance with EU Regulation 2016/679 (the General Data Protection Regulation, "GDPR") and its UK equivalent (UK GDPR). We have invested significantly in our data protection program to ensure that every aspect of how we handle personal data meets or exceeds GDPR requirements.
          </p>
          <p>
            This page explains how GDPR applies to Flurbix, what roles we play as a controller and processor, what rights you have, and how you can exercise them. For the full details of how we collect and use personal data, see our <Link href="/privacy" className="text-cyan hover:underline font-dm">Privacy Policy</Link>.
          </p>
          <div className="bg-cyan/10 border border-cyan/20 text-cyan text-sm p-4 rounded-lg font-medium">
            Flurbix acts as a data controller for data about our own users (account holders, team members) and as a data processor for personal data our customers upload into the platform about their own end users.
          </div>
        </div>
      </section>

      <section id="legal-basis" className="scroll-mt-32">
        <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">2. Legal Basis for Processing</h2>
        <div className="font-dm text-subtle space-y-4 leading-relaxed">
          <p>
            GDPR requires that every processing activity has a lawful basis. The following table summarizes our legal bases:
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse text-left text-xs md:text-sm border border-border-light dark:border-white/5">
              <thead>
                <tr className="bg-slate-50 dark:bg-white/5 font-syne font-semibold text-navy dark:text-white border-b border-border-light dark:border-white/5">
                  <th className="p-3">Processing Activity</th>
                  <th className="p-3">Legal Basis</th>
                  <th className="p-3">GDPR Article</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border-light dark:border-white/5">
                  <td className="p-3 font-semibold text-navy dark:text-white">Creating and managing your account</td>
                  <td className="p-3">Contract performance</td>
                  <td className="p-3">Art. 6(1)(b)</td>
                </tr>
                <tr className="border-b border-border-light dark:border-white/5">
                  <td className="p-3 font-semibold text-navy dark:text-white">Processing subscription payments</td>
                  <td className="p-3">Contract performance</td>
                  <td className="p-3">Art. 6(1)(b)</td>
                </tr>
                <tr className="border-b border-border-light dark:border-white/5">
                  <td className="p-3 font-semibold text-navy dark:text-white">Sending transactional emails</td>
                  <td className="p-3">Contract performance</td>
                  <td className="p-3">Art. 6(1)(b)</td>
                </tr>
                <tr className="border-b border-border-light dark:border-white/5">
                  <td className="p-3 font-semibold text-navy dark:text-white">Platform security and fraud prevention</td>
                  <td className="p-3">Legitimate interests</td>
                  <td className="p-3">Art. 6(1)(f)</td>
                </tr>
                <tr className="border-b border-border-light dark:border-white/5">
                  <td className="p-3 font-semibold text-navy dark:text-white">Product improvement and analytics</td>
                  <td className="p-3">Legitimate interests</td>
                  <td className="p-3">Art. 6(1)(f)</td>
                </tr>
                <tr className="border-b border-border-light dark:border-white/5">
                  <td className="p-3 font-semibold text-navy dark:text-white">Sending marketing communications</td>
                  <td className="p-3">Consent</td>
                  <td className="p-3">Art. 6(1)(a)</td>
                </tr>
                <tr className="border-b border-border-light dark:border-white/5">
                  <td className="p-3 font-semibold text-navy dark:text-white">Analytics cookies</td>
                  <td className="p-3">Consent</td>
                  <td className="p-3">Art. 6(1)(a)</td>
                </tr>
                <tr className="border-b border-border-light dark:border-white/5">
                  <td className="p-3 font-semibold text-navy dark:text-white">Marketing cookies</td>
                  <td className="p-3">Consent</td>
                  <td className="p-3">Art. 6(1)(a)</td>
                </tr>
                <tr className="border-b border-border-light dark:border-white/5">
                  <td className="p-3 font-semibold text-navy dark:text-white">Complying with legal obligations</td>
                  <td className="p-3">Legal obligation</td>
                  <td className="p-3">Art. 6(1)(c)</td>
                </tr>
                <tr className="border-b border-border-light dark:border-white/5">
                  <td className="p-3 font-semibold text-navy dark:text-white">Processing special category data</td>
                  <td className="p-3 text-subtle italic">Not applicable — we do not process special category data</td>
                  <td className="p-3">—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="controller-processor" className="scroll-mt-32">
        <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">3. Data Controller vs. Data Processor</h2>
        <div className="font-dm text-subtle space-y-6 leading-relaxed">
          <div>
            <h3 className="text-lg font-syne font-bold text-navy dark:text-white mb-2">3.1 When Flurbix is the Data Controller</h3>
            <p>
              Flurbix acts as a data controller when we determine the purposes and means of processing personal data. This applies to data about our account holders, team members who log in to the platform, visitors to flurbix.io, and recipients of our marketing communications. As controller, Flurbix is responsible for complying with GDPR directly.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-syne font-bold text-navy dark:text-white mb-2">3.2 When Flurbix is the Data Processor</h3>
            <p>
              Flurbix acts as a data processor when a customer (the "data controller") uploads personal data about their own users, customers, or partners into the Flurbix platform. In this case, the customer determines the purposes of processing and Flurbix processes data only on the customer's documented instructions. Our Data Processing Agreement (DPA) governs this relationship.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-syne font-bold text-navy dark:text-white mb-2">3.3 Sub-Processors</h3>
            <p>
              As a data processor, Flurbix engages certain sub-processors to help deliver the Service. All sub-processors are bound by data processing agreements that impose GDPR-equivalent obligations. Our current sub-processor list is maintained at <a href="https://flurbix.io/sub-processors" target="_blank" rel="noopener noreferrer" className="text-cyan hover:underline font-dm">flurbix.io/sub-processors</a> and updated within 30 days of any change.
            </p>
          </div>
        </div>
      </section>

      <section id="dpa" className="scroll-mt-32">
        <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">4. Data Processing Agreement (DPA)</h2>
        <div className="font-dm text-subtle space-y-4 leading-relaxed">
          <p>
            Flurbix offers a Data Processing Agreement (DPA) to all customers who process personal data about EU/EEA data subjects through the Flurbix platform. The DPA includes the Standard Contractual Clauses (SCCs) approved by the European Commission on June 4, 2021, covering transfers from the EU to third countries.
          </p>
          <p>
            The Flurbix DPA covers: the subject matter, duration, nature, and purpose of processing; the type of personal data processed; the categories of data subjects; and the rights and obligations of both parties.
          </p>
          
          <div className="bg-surface dark:bg-navy border border-border-light dark:border-white/10 p-6 rounded-xl space-y-3 mt-4">
            <h4 className="font-syne font-bold text-sm text-navy dark:text-white">Request a DPA:</h4>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>
                <strong>Self-service:</strong> The Flurbix DPA is available for download at{' '}
                <a href="https://flurbix.io/dpa" target="_blank" rel="noopener noreferrer" className="text-cyan hover:underline font-dm font-semibold">
                  flurbix.io/dpa
                </a>
                . Growth and Starter plan customers may countersign electronically via the platform.
              </li>
              <li>
                <strong>Enterprise:</strong> Enterprise customers receive a countersigned DPA as part of their contract. Contact{' '}
                <a href="mailto:legal@flurbix.io" className="text-cyan hover:underline font-dm font-semibold">
                  legal@flurbix.io
                </a>
                .
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="transfers" className="scroll-mt-32">
        <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">5. International Data Transfers</h2>
        <div className="font-dm text-subtle space-y-6 leading-relaxed">
          <div>
            <h3 className="text-lg font-syne font-bold text-navy dark:text-white mb-2">5.1 Transfer Mechanisms</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Standard Contractual Clauses (SCCs):</strong> Flurbix uses the 2021 EU SCCs for all transfers of personal data from the EEA to the United States and other third countries. SCCs are incorporated into our DPA.</li>
              <li><strong>UK International Data Transfer Agreement (IDTA):</strong> For transfers from the UK, Flurbix uses the IDTA approved by the UK Information Commissioner's Office.</li>
              <li><strong>EU-US Data Privacy Framework:</strong> Flurbix is in the process of certifying under the EU-US Data Privacy Framework. Until certification is complete, SCCs remain the primary transfer mechanism.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-syne font-bold text-navy dark:text-white mb-2">5.2 Transfer Impact Assessments</h3>
            <p>
              Flurbix conducts Transfer Impact Assessments (TIAs) for all transfers to third countries, evaluating the legal framework of the destination country and the practical likelihood of access by public authorities. TIAs are available to Enterprise customers on request.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-syne font-bold text-navy dark:text-white mb-2">5.3 Data Residency</h3>
            <p>
              Enterprise customers may request EU data residency, which ensures that all customer data (databases, backups, and file storage) remains within AWS EU-West-1 (Ireland). Data residency is a contractual commitment included in Enterprise agreements. Contact <a href="mailto:sales@flurbix.io" className="text-cyan hover:underline font-dm">sales@flurbix.io</a> to discuss data residency requirements.
            </p>
          </div>
        </div>
      </section>

      <section id="rights-info" className="scroll-mt-32">
        <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">6. Data Subject Rights</h2>
        <div className="font-dm text-subtle space-y-6 leading-relaxed">
          <p>
            As an EU/UK data subject, you have the rights described in the interactive widget above this section. This section provides additional detail on how Flurbix handles rights requests.
          </p>

          <div>
            <h3 className="text-lg font-syne font-bold text-navy dark:text-white mb-2">6.1 Verification</h3>
            <p>
              To protect against unauthorized access, Flurbix requires identity verification before processing data subject rights requests. For account holders, this means logging in to your account and submitting the request from your settings. For non-account holders, we will send a verification email to the address associated with your data.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-syne font-bold text-navy dark:text-white mb-2">6.2 Response Timeframes</h3>
            <div className="overflow-x-auto my-4">
              <table className="w-full border-collapse text-left text-xs md:text-sm border border-border-light dark:border-white/5">
                <thead>
                  <tr className="bg-slate-50 dark:bg-white/5 font-syne font-semibold text-navy dark:text-white border-b border-border-light dark:border-white/5">
                    <th className="p-3">Request Type</th>
                    <th className="p-3">Standard Response</th>
                    <th className="p-3">Extension (Complex Cases)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border-light dark:border-white/5">
                    <td className="p-3 font-semibold text-navy dark:text-white">Right of Access</td>
                    <td className="p-3">30 days</td>
                    <td className="p-3">Up to 90 days with notice</td>
                  </tr>
                  <tr className="border-b border-border-light dark:border-white/5">
                    <td className="p-3 font-semibold text-navy dark:text-white">Right to Erasure</td>
                    <td className="p-3">30 days</td>
                    <td className="p-3">Up to 90 days with notice</td>
                  </tr>
                  <tr className="border-b border-border-light dark:border-white/5">
                    <td className="p-3 font-semibold text-navy dark:text-white">Right to Portability</td>
                    <td className="p-3">30 days</td>
                    <td className="p-3">Up to 90 days with notice</td>
                  </tr>
                  <tr className="border-b border-border-light dark:border-white/5">
                    <td className="p-3 font-semibold text-navy dark:text-white">Right to Rectification</td>
                    <td className="p-3">14 days</td>
                    <td className="p-3">30 days</td>
                  </tr>
                  <tr className="border-b border-border-light dark:border-white/5">
                    <td className="p-3 font-semibold text-navy dark:text-white">Right to Restriction</td>
                    <td className="p-3">3 business days</td>
                    <td className="p-3">—</td>
                  </tr>
                  <tr className="border-b border-border-light dark:border-white/5">
                    <td className="p-3 font-semibold text-navy dark:text-white">Right to Object (marketing)</td>
                    <td className="p-3">Immediate</td>
                    <td className="p-3">—</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-syne font-bold text-navy dark:text-white mb-2">6.3 Requests on Behalf of Others</h3>
            <p>
              If you are submitting a GDPR request on behalf of another person (e.g., as a legal guardian or authorized representative), you must provide written evidence of your authority to act on that person's behalf. We cannot process third-party requests without such evidence.
            </p>
          </div>
        </div>
      </section>

      <section id="retention" className="scroll-mt-32">
        <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">7. Data Retention Under GDPR</h2>
        <div className="font-dm text-subtle space-y-4 leading-relaxed">
          <p>
            GDPR's storage limitation principle (Article 5(1)(e)) requires that personal data not be kept longer than necessary for its original purpose. Flurbix's retention schedules are detailed in our Privacy Policy. In summary:
          </p>

          <div className="overflow-x-auto my-4">
            <table className="w-full border-collapse text-left text-xs md:text-sm border border-border-light dark:border-white/5">
              <thead>
                <tr className="bg-slate-50 dark:bg-white/5 font-syne font-semibold text-navy dark:text-white border-b border-border-light dark:border-white/5">
                  <th className="p-3">Data Type</th>
                  <th className="p-3">Retention Period</th>
                  <th className="p-3">Legal Basis</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border-light dark:border-white/5">
                  <td className="p-3 font-semibold text-navy dark:text-white">Account data</td>
                  <td className="p-3">Account lifetime + 90 days</td>
                  <td className="p-3">Contract</td>
                </tr>
                <tr className="border-b border-border-light dark:border-white/5">
                  <td className="p-3 font-semibold text-navy dark:text-white">Client content</td>
                  <td className="p-3">Account lifetime + 30 days</td>
                  <td className="p-3">Contract</td>
                </tr>
                <tr className="border-b border-border-light dark:border-white/5">
                  <td className="p-3 font-semibold text-navy dark:text-white">Billing records</td>
                  <td className="p-3">7 years</td>
                  <td className="p-3">Legal obligation</td>
                </tr>
                <tr className="border-b border-border-light dark:border-white/5">
                  <td className="p-3 font-semibold text-navy dark:text-white">Support communications</td>
                  <td className="p-3">3 years</td>
                  <td className="p-3">Legitimate interests</td>
                </tr>
                <tr className="border-b border-border-light dark:border-white/5">
                  <td className="p-3 font-semibold text-navy dark:text-white">Server logs</td>
                  <td className="p-3">90 days</td>
                  <td className="p-3">Legitimate interests</td>
                </tr>
                <tr className="border-b border-border-light dark:border-white/5">
                  <td className="p-3 font-semibold text-navy dark:text-white">Consent records</td>
                  <td className="p-3">3 years</td>
                  <td className="p-3">Legal obligation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="breach-notification" className="scroll-mt-32">
        <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">8. Data Breach Notification</h2>
        <div className="font-dm text-subtle space-y-6 leading-relaxed">
          <div>
            <h3 className="text-lg font-syne font-bold text-navy dark:text-white mb-2">8.1 GDPR Obligations</h3>
            <p>
              Under GDPR Article 33, Flurbix is required to notify the relevant supervisory authority within 72 hours of becoming aware of a personal data breach that poses a risk to individuals' rights and freedoms. Where the breach is likely to result in a high risk to individuals, we are also required to notify affected data subjects without undue delay under Article 34.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-syne font-bold text-navy dark:text-white mb-2">8.2 Our Breach Response Process</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Detection:</strong> Automated monitoring and alerting via Datadog and AWS GuardDuty.</li>
              <li><strong>Triage:</strong> Immediate severity classification within 1 hour of detection.</li>
              <li><strong>Containment:</strong> Isolation of affected systems within 2 hours.</li>
              <li><strong>Assessment:</strong> Impact assessment to determine scope, data types, and affected individuals.</li>
              <li><strong>Notification:</strong> Supervisory authority notified within 72 hours; affected users notified if high-risk.</li>
              <li><strong>Remediation:</strong> Root cause analysis and security fixes deployed.</li>
              <li><strong>Post-incident review:</strong> Published within 5 business days for significant incidents.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-syne font-bold text-navy dark:text-white mb-2">8.3 Processor Obligations</h3>
            <p>
              When Flurbix acts as a data processor, we will notify the relevant data controller (our customer) without undue delay — and no later than 36 hours — after becoming aware of a breach affecting their data. This gives controllers sufficient time to meet their own 72-hour supervisory authority notification obligation.
            </p>
          </div>
        </div>
      </section>

      <section id="children" className="scroll-mt-32">
        <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">9. Children's Data</h2>
        <div className="font-dm text-subtle space-y-4 leading-relaxed">
          <p>
            Flurbix does not knowingly collect or process personal data from children under 16 years of age (or the applicable age in the member state where the child resides, which may be lower but not below 13). Our Service is a B2B platform not directed at children.
          </p>
          <p>
            If we become aware that we have inadvertently collected personal data from a child under 16, we will delete it within 72 hours and notify the child's parent or guardian where contact information is available.
          </p>
        </div>
      </section>

      <section id="privacy-by-design" className="scroll-mt-32">
        <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">10. Privacy by Design</h2>
        <div className="font-dm text-subtle space-y-4 leading-relaxed">
          <p>
            GDPR Article 25 requires data protection by design and by default. Flurbix implements the following privacy-by-design principles across our engineering and product processes:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Data minimization:</strong> We collect only the personal data fields strictly necessary for each feature. Optional fields are never required.</li>
            <li><strong>Purpose limitation:</strong> Data collected for one purpose is not repurposed without fresh legal basis or consent.</li>
            <li><strong>Default privacy:</strong> The most privacy-protective settings are the defaults. Users must opt in to sharing additional data, not opt out.</li>
            <li><strong>Pseudonymization:</strong> Where possible, analytics and logging systems use pseudonymized or anonymized identifiers rather than direct personal data.</li>
            <li><strong>Privacy impact assessments:</strong> We conduct Data Protection Impact Assessments (DPIAs) for new features involving high-risk processing before deployment.</li>
            <li><strong>Access controls:</strong> Access to personal data within Flurbix's systems is restricted by role and reviewed quarterly.</li>
          </ul>
        </div>
      </section>

      <section id="dpo" className="scroll-mt-32">
        <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">11. Data Protection Officer</h2>
        <div className="font-dm text-subtle space-y-4 leading-relaxed">
          <p>
            Flurbix has designated a Data Protection Officer (DPO) as required under GDPR Article 37. Our DPO is responsible for overseeing our GDPR compliance program, advising on data protection matters, cooperating with supervisory authorities, and acting as the point of contact for data subjects and regulators.
          </p>
          <p>
            You may contact our DPO at any time for questions, concerns, or complaints about how Flurbix handles your personal data. Our DPO is independent and not subject to management direction on matters relating to data protection.
          </p>
          <div className="bg-surface dark:bg-navy border border-border-light dark:border-white/10 p-6 rounded-xl space-y-2 mt-4 text-sm">
            <p><strong>DPO Email:</strong> <a href="mailto:dpo@flurbix.io" className="text-cyan hover:underline font-dm">dpo@flurbix.io</a></p>
            <p><strong>Postal Address:</strong> Flurbix Inc., Attn: Data Protection Officer, 123 Growth Ave, Suite 400, San Francisco, CA 94107, United States</p>
            <p><strong>EU Representative (Art. 27):</strong> GDPR Rep Ltd, 15 Custom House Quay, Dublin 1, Ireland, <a href="mailto:eu-rep@flurbix.io" className="text-cyan hover:underline font-dm">eu-rep@flurbix.io</a></p>
            <p className="text-xs text-subtle pt-2 border-t border-border-light dark:border-white/5">
              Our DPO responds to all inquiries within 5 business days.
            </p>
          </div>
        </div>
      </section>

      <section id="supervisory-authority" className="scroll-mt-32">
        <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">12. Supervisory Authority</h2>
        <div className="font-dm text-subtle space-y-4 leading-relaxed">
          <p>
            Flurbix's lead supervisory authority under GDPR's one-stop-shop mechanism is the Irish Data Protection Commission (DPC), as Flurbix's EU establishment is in Ireland. If you are located in another EU member state, you may also contact your local data protection authority.
          </p>
          <p>
            If you believe Flurbix has not handled your personal data in accordance with GDPR, you have the right to lodge a complaint with the DPC or your local supervisory authority. We encourage you to contact us first at <a href="mailto:privacy@flurbix.io" className="text-cyan hover:underline font-dm">privacy@flurbix.io</a> so we can attempt to resolve your concern directly.
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-2">
            <li><strong>Ireland (Lead SA)</strong> — Data Protection Commission:{' '}
              <a href="https://dataprotection.ie" target="_blank" rel="noopener noreferrer" className="text-cyan hover:underline font-dm">dataprotection.ie</a>
            </li>
            <li><strong>Germany</strong> — Bundesbeauftragter für den Datenschutz:{' '}
              <a href="https://bfdi.bund.de" target="_blank" rel="noopener noreferrer" className="text-cyan hover:underline font-dm">bfdi.bund.de</a>
            </li>
            <li><strong>France</strong> — Commission Nationale de l'Informatique et des Libertés (CNIL):{' '}
              <a href="https://cnil.fr" target="_blank" rel="noopener noreferrer" className="text-cyan hover:underline font-dm">cnil.fr</a>
            </li>
            <li><strong>Netherlands</strong> — Autoriteit Persoonsgegevens:{' '}
              <a href="https://autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer" className="text-cyan hover:underline font-dm">autoriteitpersoonsgegevens.nl</a>
            </li>
            <li><strong>Spain</strong> — Agencia Española de Protección de Datos (AEPD):{' '}
              <a href="https://aepd.es" target="_blank" rel="noopener noreferrer" className="text-cyan hover:underline font-dm">aepd.es</a>
            </li>
            <li><strong>UK (Post-Brexit)</strong> — Information Commissioner's Office (ICO):{' '}
              <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-cyan hover:underline font-dm">ico.org.uk</a>
            </li>
            <li><strong>Full list:</strong>{' '}
              <a href="https://edpb.europa.eu/about-edpb/about-edpb/members" target="_blank" rel="noopener noreferrer" className="text-cyan hover:underline font-dm">
                edpb.europa.eu/about-edpb/about-edpb/members
              </a>
            </li>
          </ul>
        </div>
      </section>
    </LegalLayout>
  )
}
