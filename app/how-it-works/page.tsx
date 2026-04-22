import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'How It Works — Sole-arium',
  description:
    'A structured process that captures how you move, translates it into clinical insight, and delivers a correction built specifically for you.',
  alternates: { canonical: 'https://solearium.in/how-it-works' },
}

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-16 md:pt-24 pb-10 md:pb-16 px-5 md:px-8 overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-glow rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div className="container-tight relative z-10 text-center">
          <Badge variant="amber" className="mb-6">How It Works</Badge>
          <h1 className="heading-xl mb-6">
            From your first step to a{' '}
            <span className="text-amber">precise correction.</span>
          </h1>
          <p className="body-lg max-w-2xl mx-auto">
            A structured process that captures how you move, translates it into clinical insight, and delivers a correction built specifically for you.
          </p>
        </div>
      </section>

      {/* Flow connector */}
      <div className="flex justify-center" aria-hidden="true">
        <div className="w-px h-4 bg-amber/40" />
      </div>

      {/* Step 01 — Assessment */}
      <section className="py-8 md:py-10 px-5 md:px-8 bg-ink-soft">
        <div className="container-wide">
          <div className="max-w-3xl mb-6">
            <p className="eyebrow mb-2">Step 01</p>
            <h2 className="heading-lg mb-3">You start with an assessment.</h2>
          </div>

          <p className="body-md text-bone-muted mb-4">Start simple, or choose a deeper clinical evaluation.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
            <div className="card-dark border-amber/30 p-8">
              <div className="flex items-start justify-between mb-5">
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-amber mb-1">Remote</p>
                  <h3 className="text-lg font-semibold text-bone">ABLIP</h3>
                </div>
                <Badge variant="amber">₹99</Badge>
              </div>
              <ul className="space-y-3">
                {['5 minutes', 'Uses your phone camera', 'No appointment needed'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-bone-dim">
                    <span className="w-1 h-1 rounded-full bg-amber flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-dark p-8">
              <div className="flex items-start justify-between mb-5">
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-bone-muted mb-1">In-person</p>
                  <h3 className="text-lg font-semibold text-bone">Full Clinical Assessment</h3>
                </div>
                <span className="text-xs font-semibold text-bone-muted whitespace-nowrap">Starting from ₹1,000</span>
              </div>
              <ul className="space-y-3">
                {[
                  'Deeper assessment',
                  'Scheduled visit required',
                  'Best for medical conditions, injury recovery, or persistent pain',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-bone-dim">
                    <span className="w-1 h-1 rounded-full bg-bone-muted flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-sm text-bone-muted">Start with ABLIP. A full clinical assessment can follow if needed.</p>
        </div>
      </section>

      {/* Flow connector */}
      <div className="flex justify-center" aria-hidden="true">
        <div className="w-px h-4 bg-amber/40" />
      </div>

      {/* Step 02 — Movement captured */}
      <section className="py-8 md:py-10 px-5 md:px-8">
        <div className="container-wide">
          <div className="max-w-3xl mb-6">
            <p className="eyebrow mb-2">Step 02</p>
            <h2 className="heading-lg mb-3">Your movement is captured.</h2>
            <p className="body-md">You walk. The system observes what the eye cannot.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: 'Gait symmetry', desc: 'How evenly you distribute each stride' },
              { label: 'Pressure distribution', desc: 'Where load concentrates across your foot' },
              { label: 'Load transfer', desc: 'How force moves through your body with each step' },
            ].map((signal) => (
              <div key={signal.label} className="card-dark p-6">
<p className="text-sm font-semibold text-bone mb-1">{signal.label}</p>
                <p className="text-xs text-bone-muted leading-relaxed">{signal.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flow connector */}
      <div className="flex justify-center" aria-hidden="true">
        <div className="w-px h-4 bg-amber/40" />
      </div>

      {/* Step 03 — Report */}
      <section className="py-8 md:py-10 px-5 md:px-8 bg-ink-soft">
        <div className="container-wide">
          <div className="max-w-3xl mb-6">
            <p className="eyebrow mb-2">Step 03</p>
            <h2 className="heading-lg mb-3">Your movement report is generated.</h2>
            <p className="body-md">
              You receive a structured clinical report explaining how you move and where correction is needed.
            </p>
          </div>

          <div className="py-1 max-w-xl">
            <p className="text-base font-medium text-amber leading-relaxed">
              This report is yours — you can share it with any doctor.
            </p>
          </div>
        </div>
      </section>

      {/* Flow connector */}
      <div className="flex justify-center" aria-hidden="true">
        <div className="w-px h-4 bg-amber/40" />
      </div>

      {/* Step 04 — Prescription */}
      <section className="py-8 md:py-10 px-5 md:px-8">
        <div className="container-wide">
          <div className="max-w-3xl mb-6">
            <p className="eyebrow mb-2">Step 04</p>
            <h2 className="heading-lg mb-3">A prescription is designed.</h2>
            <p className="body-md">
              A correction is designed from your data — not selected from a catalog.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: 'Structure', desc: 'How your foot is supported and aligned' },
              { title: 'Material', desc: 'How impact is absorbed and pressure is distributed' },
              { title: 'Geometry', desc: 'How your movement is guided step-by-step' },
            ].map((item) => (
              <div key={item.title} className="card-dark p-6">
                <p className="text-base font-semibold text-bone mb-2">{item.title}</p>
                <p className="text-xs text-bone-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flow connector */}
      <div className="flex justify-center" aria-hidden="true">
        <div className="w-px h-4 bg-amber/40" />
      </div>

      {/* Step 05 — Manufactured */}
      <section className="py-8 md:py-10 px-5 md:px-8 bg-ink-soft">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="eyebrow mb-2">Step 05</p>
            <h2 className="heading-lg mb-3">It is manufactured precisely.</h2>
            <p className="body-md">
              Your prescription is manufactured using controlled processes — no manual fitting, no approximation.
            </p>
          </div>
        </div>
      </section>

      {/* Outcome block */}
      <section className="pt-16 pb-10 px-5 md:px-8">
        <div className="container-wide text-center">
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-amber leading-snug max-w-3xl mx-auto">
            You don&apos;t just get footwear.<br />
            You get a measurable change in how you move.
          </p>
          <p className="text-sm text-bone-muted/65 mt-8 mx-auto max-w-md">
            Once delivered, your correction begins to change how you move.
          </p>
        </div>
      </section>

      {/* Decision + CTA */}
      <section className="pt-6 pb-12 px-5 md:px-8 bg-ink-soft">
        <div className="container-wide">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="heading-lg">Start your assessment.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8">
            <div className="card-dark border-amber/40 p-8 flex flex-col gap-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant="amber">₹99</Badge>
                  <span className="text-xs text-bone-muted">5 minutes · Phone-based</span>
                </div>
                <h3 className="text-lg font-semibold text-bone">ABLIP</h3>
              </div>
              <Button href="/products/ablip" size="md" className="self-start">
                Start ABLIP Assessment <ArrowRight size={16} />
              </Button>
            </div>

            <div className="card-dark p-8 flex flex-col gap-6">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-bone-muted">In-person · Deeper assessment</span>
                  <span className="text-xs font-semibold text-bone-muted">Starting from ₹1,000</span>
                </div>
                <h3 className="text-lg font-semibold text-bone">Full Clinical Assessment</h3>
              </div>
              <Button href="/contact" variant="secondary" size="md">
                Book Clinical Assessment <ArrowRight size={16} />
              </Button>
            </div>
          </div>

          <p className="text-sm text-bone-muted text-center max-w-md mx-auto">
            Not sure where to start? Begin with ABLIP — you can always move to a full assessment later.
          </p>
        </div>
      </section>
    </>
  )
}
