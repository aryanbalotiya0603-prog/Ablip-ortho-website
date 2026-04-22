import type { Metadata } from 'next'
import Badge from '@/components/ui/Badge'
import ContactPageContent from '@/components/sections/ContactPageContent'

export const metadata: Metadata = {
  title: 'Contact Sole-arium',
  description:
    'Get in touch with Sole-arium. Consumer enquiries, clinical partnerships, investor interest, or research collaboration — we respond to every message.',
  alternates: { canonical: 'https://solearium.in/contact' },
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative section-pad overflow-hidden">
        <div className="absolute inset-0 grid-bg" aria-hidden="true" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <Badge variant="amber" className="mb-6">Contact</Badge>
            <h1 className="heading-xl mb-6">Let&rsquo;s talk.</h1>
            <p className="body-lg max-w-2xl">
              Whether you&rsquo;re a user, clinician, partner, or investor, we&rsquo;d love to hear from you. Tell us what you&rsquo;re looking for and we&rsquo;ll direct you to the right place.
            </p>
          </div>
        </div>
      </section>

      <ContactPageContent />
    </>
  )
}
