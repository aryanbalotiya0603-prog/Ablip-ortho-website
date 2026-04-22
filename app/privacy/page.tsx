import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Sole-arium\'s privacy policy. How we collect, use, and protect your personal and biomechanical data.',
  alternates: { canonical: 'https://solearium.in/privacy' },
}

export default function PrivacyPage() {
  return (
    <section className="section-pad">
      <div className="container-tight">
        <div className="mb-10">
          <p className="eyebrow mb-3">Legal</p>
          <h1 className="heading-lg mb-4">Privacy Policy</h1>
          <p className="body-sm">Last updated: April 2026</p>
        </div>

        <div className="prose-custom space-y-8">
          {[
            {
              heading: '1. Introduction',
              body: 'Sole-arium Technologies Pvt. Ltd. ("Sole-arium", "we", "us", or "our") is committed to protecting the privacy of users of our ABLIP application, Smart Insoles, and related services. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our products and visit our website.',
            },
            {
              heading: '2. Information we collect',
              body: 'We may collect the following categories of information:\n\n• Personal identification information (name, email address, contact details)\n• Biomechanical data (gait patterns, movement analysis, pressure data captured through ABLIP or Smart Insoles)\n• Device information (device type, operating system, app usage data)\n• Health-related context information you choose to provide (medical history, activity level)\n\nBiomechanical data is treated as sensitive personal data. We apply heightened protections to this category of information.',
            },
            {
              heading: '3. How we use your information',
              body: 'We use collected information to:\n\n• Provide biomechanical analysis and generate movement reports\n• Design and deliver prescription insoles\n• Improve our AI models and biomechanical intelligence systems\n• Communicate with you about your assessment and products\n• Send service-related communications\n• Conduct research (with appropriate anonymisation and consent)\n• Comply with legal obligations\n\nWe do not use your personal data for advertising or share it with advertisers.',
            },
            {
              heading: '4. Data sharing',
              body: 'We do not sell your personal information. We may share information with:\n\n• Clinicians or care teams, only with your explicit consent through our data sharing features\n• Service providers who assist in operating our platform (under strict data processing agreements)\n• Legal authorities where required by applicable law\n\nAll data sharing is governed by contractual protections aligned with applicable Indian data protection law.',
            },
            {
              heading: '5. Data retention',
              body: 'We retain your biomechanical data for as long as you have an active account, and for a period thereafter as required by law or for legitimate research purposes. You may request deletion of your data at any time. Anonymised, aggregated biomechanical data may be retained indefinitely for research and model improvement purposes.',
            },
            {
              heading: '6. Your rights',
              body: 'You have the right to:\n\n• Access the personal information we hold about you\n• Correct inaccurate information\n• Request deletion of your data\n• Withdraw consent for data processing where consent is the legal basis\n• Data portability (receive your data in a portable format)\n\nTo exercise any of these rights, contact us at privacy@solearium.in',
            },
            {
              heading: '7. Security',
              body: 'We implement appropriate technical and organisational measures to protect your personal and biomechanical data against unauthorised access, loss, or disclosure. Biomechanical data is encrypted in transit and at rest.',
            },
            {
              heading: '8. Changes to this policy',
              body: 'We may update this Privacy Policy from time to time. We will notify you of material changes by email or in-app notification. Continued use of our services after any change constitutes your acceptance of the updated policy.',
            },
            {
              heading: '9. Contact',
              body: 'For privacy-related enquiries: privacy@solearium.in\nSole-arium Technologies Pvt. Ltd.\nIIT Delhi, New Delhi — 110016, India',
            },
          ].map((section) => (
            <div key={section.heading} className="border-b border-ink-border pb-8">
              <h2 className="text-base font-semibold text-bone mb-3">{section.heading}</h2>
              <div className="text-sm text-bone-muted leading-relaxed whitespace-pre-line">{section.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
