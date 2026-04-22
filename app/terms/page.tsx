import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Sole-arium\'s terms of use. The rules governing access to and use of our platform, products, and services.',
  alternates: { canonical: 'https://solearium.in/terms' },
}

export default function TermsPage() {
  return (
    <section className="section-pad">
      <div className="container-tight">
        <div className="mb-10">
          <p className="eyebrow mb-3">Legal</p>
          <h1 className="heading-lg mb-4">Terms of Use</h1>
          <p className="body-sm">Last updated: April 2026</p>
        </div>

        <div className="space-y-8">
          {[
            {
              heading: '1. Acceptance of terms',
              body: 'By accessing or using Sole-arium\'s website, ABLIP application, Smart Insoles, or any related services ("Services"), you agree to be bound by these Terms of Use. If you do not agree, please do not use our Services.',
            },
            {
              heading: '2. Not a medical device',
              body: 'Sole-arium\'s products and services, including ABLIP and Smart Insoles, are not registered medical devices and are not intended to diagnose, treat, cure, or prevent any medical condition. Outputs are intended to inform users and support clinical conversations — they do not constitute medical advice.\n\nAlways consult a qualified medical professional before making any health-related decisions based on information from Sole-arium products.',
            },
            {
              heading: '3. User accounts and data',
              body: 'You are responsible for maintaining the confidentiality of your account credentials. You agree to provide accurate information when creating an account. You may not use our Services for any unlawful purpose or in any way that could damage or impair the Services.',
            },
            {
              heading: '4. Intellectual property',
              body: 'All content on this website and within our applications, including text, graphics, algorithms, and software, is owned by or licensed to Sole-arium Technologies Pvt. Ltd. You may not reproduce, distribute, or create derivative works without our express written permission.',
            },
            {
              heading: '5. Limitation of liability',
              body: 'To the maximum extent permitted by applicable law, Sole-arium shall not be liable for any indirect, incidental, or consequential damages arising from your use of our Services. Our total liability shall not exceed the amount paid by you for our Services in the preceding 12 months.',
            },
            {
              heading: '6. Governing law',
              body: 'These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in New Delhi, India.',
            },
            {
              heading: '7. Changes to terms',
              body: 'We may update these Terms from time to time. Continued use of our Services after any change constitutes acceptance of the updated Terms.',
            },
            {
              heading: '8. Contact',
              body: 'For questions regarding these Terms: legal@solearium.in\nSole-arium Technologies Pvt. Ltd., IIT Delhi, New Delhi — 110016, India',
            },
          ].map((section) => (
            <div key={section.heading} className="border-b border-ink-border pb-8">
              <h2 className="text-base font-semibold text-bone mb-3">{section.heading}</h2>
              <p className="text-sm text-bone-muted leading-relaxed whitespace-pre-line">{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
