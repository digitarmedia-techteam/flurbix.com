import type { Metadata } from 'next'
import LegalLayout from '@/components/LegalLayout'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service | Flurbix',
  description: 'Terms and conditions for using the Flurbix platform.',
}

const tocItems = [
  { id: 'acceptance', label: '1. Acceptance of Terms' },
  { id: 'description', label: '2. Description of Service' },
  { id: 'account', label: '3. Account Registration' },
  { id: 'user-conduct', label: '4. User Conduct' },
  { id: 'payment', label: '5. Payment and Fees' },
  { id: 'cancellation', label: '6. Cancellation and Termination' },
  { id: 'intellectual-property', label: '7. Intellectual Property' },
  { id: 'user-content', label: '8. User Content' },
  { id: 'third-party', label: '9. Third-Party Services' },
  { id: 'disclaimer', label: '10. Disclaimer of Warranties' },
  { id: 'limitation', label: '11. Limitation of Liability' },
  { id: 'indemnification', label: '12. Indemnification' },
  { id: 'governing-law', label: '13. Governing Law' },
  { id: 'changes', label: '14. Changes to Terms' },
  { id: 'contact', label: '15. Contact Information' },
]

export default function TermsOfServicePage() {
  return (
    <LegalLayout
      title="Terms of Service"
      subtitle="The rules, guidelines, and agreements for using Flurbix."
      lastUpdated="May 20, 2024"
      tocItems={tocItems}
    >
      <section id="acceptance" className="scroll-mt-32">
        <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">1. Acceptance of Terms</h2>
        <div className="font-dm text-subtle space-y-4 leading-relaxed">
          <p>
            By accessing or using the Flurbix platform, website, and associated services (collectively, the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use the Service.
          </p>
          <p>
            If you are accessing or using the Service on behalf of a company, organization, or other legal entity, you represent and warrant that you have the authority to bind that entity to these Terms. In such cases, "you" and "your" refer to that entity.
          </p>
        </div>
      </section>

      <section id="description" className="scroll-mt-32">
        <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">2. Description of Service</h2>
        <div className="font-dm text-subtle space-y-4 leading-relaxed">
          <p>
            Flurbix provides a campaign management and marketing automation platform for growth teams. The Service includes software tools for workflow automation, campaign analytics, and team collaboration. We reserve the right to modify, suspend, or discontinue the Service (or any part thereof) at any time, with or without notice.
          </p>
        </div>
      </section>

      <section id="account" className="scroll-mt-32">
        <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">3. Account Registration</h2>
        <div className="font-dm text-subtle space-y-4 leading-relaxed">
          <p>
            To use certain features of the Service, you must register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
          </p>
          <p>
            You are responsible for safeguarding your account credentials. You agree that you will not disclose your password to any third party and that you will take sole responsibility for any activities or actions under your account, whether or not you have authorized such activities or actions.
          </p>
        </div>
      </section>

      <section id="user-conduct" className="scroll-mt-32">
        <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">4. User Conduct</h2>
        <div className="font-dm text-subtle space-y-4 leading-relaxed">
          <p>
            You agree not to use the Service to:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Violate any applicable law, regulation, or contract.</li>
            <li>Infringe upon the intellectual property rights or privacy rights of any third party.</li>
            <li>Transmit viruses, malware, or any other malicious code.</li>
            <li>Attempt to gain unauthorized access to the Service or its related systems or networks.</li>
            <li>Use the Service for any illegal, harmful, or abusive purpose.</li>
          </ul>
        </div>
      </section>

      <section id="payment" className="scroll-mt-32">
        <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">5. Payment and Fees</h2>
        <div className="font-dm text-subtle space-y-4 leading-relaxed">
          <p>
            Certain aspects of the Service are provided for a fee or other charge. If you elect to use paid features of the Service, you agree to the pricing and payment terms as we may update them from time to time.
          </p>
          <p>
            All fees are non-refundable, except as expressly provided in these Terms or required by applicable law. Flurbix may add new services for additional fees and charges, or amend fees and charges for existing services, at any time in its sole discretion.
          </p>
        </div>
      </section>

      <section id="cancellation" className="scroll-mt-32">
        <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">6. Cancellation and Termination</h2>
        <div className="font-dm text-subtle space-y-4 leading-relaxed">
          <p>
            You may cancel your account at any time through the Service dashboard or by contacting support. Upon cancellation, you will continue to have access to the Service through the end of your current billing cycle.
          </p>
          <p>
            Flurbix reserves the right to suspend or terminate your account and access to the Service at our sole discretion, without notice and without liability, for any reason, including but not limited to a breach of these Terms.
          </p>
        </div>
      </section>

      <section id="intellectual-property" className="scroll-mt-32">
        <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">7. Intellectual Property</h2>
        <div className="font-dm text-subtle space-y-4 leading-relaxed">
          <p>
            The Service and its original content, features, and functionality are and will remain the exclusive property of Flurbix Inc. and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
          </p>
          <p>
            Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Flurbix.
          </p>
        </div>
      </section>

      <section id="user-content" className="scroll-mt-32">
        <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">8. User Content</h2>
        <div className="font-dm text-subtle space-y-4 leading-relaxed">
          <p>
            You retain all rights to any data, information, or material you submit, post, or display on or through the Service ("User Content"). By submitting User Content to the Service, you grant Flurbix a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute such User Content strictly for the purpose of providing the Service to you.
          </p>
        </div>
      </section>

      <section id="third-party" className="scroll-mt-32">
        <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">9. Third-Party Services</h2>
        <div className="font-dm text-subtle space-y-4 leading-relaxed">
          <p>
            The Service may allow you to integrate with or link to third-party websites or services (e.g., Google Ads, Meta Ads). Flurbix does not control and is not responsible for any third-party services. Your use of third-party services is at your own risk and subject to the terms and privacy policies of those third parties.
          </p>
        </div>
      </section>

      <section id="disclaimer" className="scroll-mt-32">
        <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">10. Disclaimer of Warranties</h2>
        <div className="font-dm text-subtle space-y-4 leading-relaxed">
          <div className="bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 p-6 rounded-xl font-medium uppercase tracking-wide text-sm">
            THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. FLURBIX EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
            <br /><br />
            FLURBIX MAKES NO WARRANTY THAT THE SERVICE WILL MEET YOUR REQUIREMENTS, WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE, OR THAT THE RESULTS OBTAINED FROM THE USE OF THE SERVICE WILL BE ACCURATE OR RELIABLE.
          </div>
        </div>
      </section>

      <section id="limitation" className="scroll-mt-32">
        <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">11. Limitation of Liability</h2>
        <div className="font-dm text-subtle space-y-4 leading-relaxed">
          <div className="bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 p-6 rounded-xl font-medium uppercase tracking-wide text-sm">
            IN NO EVENT SHALL FLURBIX, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES, BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
            <br /><br />
            (A) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICE; (B) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICE; (C) ANY CONTENT OBTAINED FROM THE SERVICE; AND (D) UNAUTHORIZED ACCESS, USE OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE) OR ANY OTHER LEGAL THEORY.
          </div>
        </div>
      </section>

      <section id="indemnification" className="scroll-mt-32">
        <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">12. Indemnification</h2>
        <div className="font-dm text-subtle space-y-4 leading-relaxed">
          <p>
            You agree to defend, indemnify, and hold harmless Flurbix and its licensee and licensors, and their employees, contractors, agents, officers, and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of a) your use and access of the Service, by you or any person using your account and password; b) a breach of these Terms, or c) Content posted on the Service.
          </p>
        </div>
      </section>

      <section id="governing-law" className="scroll-mt-32">
        <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">13. Governing Law</h2>
        <div className="font-dm text-subtle space-y-4 leading-relaxed">
          <p>
            These Terms shall be governed and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.
          </p>
          <p>
            Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
          </p>
        </div>
      </section>

      <section id="changes" className="scroll-mt-32">
        <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">14. Changes to Terms</h2>
        <div className="font-dm text-subtle space-y-4 leading-relaxed">
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
          </p>
          <p>
            By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
          </p>
        </div>
      </section>

      <section id="contact" className="scroll-mt-32">
        <h2 className="text-2xl font-syne font-bold text-navy dark:text-white mb-4">15. Contact Information</h2>
        <div className="font-dm text-subtle space-y-4 leading-relaxed">
          <p>
            If you have any questions about these Terms, please contact us at <strong><a href="mailto:legal@flurbix.com" className="text-cyan hover:underline font-dm">legal@flurbix.com</a></strong> or write to us at:
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
