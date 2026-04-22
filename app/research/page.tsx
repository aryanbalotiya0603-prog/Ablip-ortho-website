import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'Research & Validation — Sole-arium',
  description:
    'Every Sole-arium insight begins with real movement data. We capture, model, and learn from how people actually move — building a continuously improving understanding of biomechanics.',
  alternates: { canonical: 'https://solearium.in/research' },
}

export default function ResearchPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative section-pad overflow-hidden">
        <div className="absolute inset-0 grid-bg" aria-hidden="true" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-glow rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <Badge variant="amber" className="mb-6">Research & Validation</Badge>
            <h1 className="heading-xl mb-6">
              Built on measurement.<br />
              <span className="text-amber">Refined through data.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-12 md:py-20 px-5 md:px-8">
        <div className="container-wide">
          <div className="max-w-2xl space-y-5">
            <p className="body-md">Every Sole-arium insight begins with real movement data.</p>
            <p className="body-md">
              We capture, model, and learn from how people actually move — building a continuously improving understanding of biomechanics grounded in real-world patterns.
            </p>
            <p className="body-md">
              Our approach combines computer vision, biomechanical modelling, and longitudinal data to move from one-time assessment toward evolving intelligence.
            </p>
          </div>
          <p className="mt-10 text-xs text-bone-muted italic max-w-lg">
            Detailed research, validation studies, and publications will be shared as the system evolves.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="pt-16 md:pt-24 pb-12 md:pb-20 px-5 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 glow-amber opacity-40" aria-hidden="true" />
        <div className="container-wide relative z-10">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="heading-md mb-4">Research enquiries welcome.</h2>
            <p className="body-md mb-6">
              We collaborate with clinicians, researchers, and institutions interested in Indian biomechanical data and movement intelligence.
            </p>
            <Button href="/contact" size="lg">
              Get in touch <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
