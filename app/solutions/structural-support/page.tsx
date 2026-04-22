import type { Metadata } from 'next'
import { ArrowRight, Shield, Activity } from 'lucide-react'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'Structural Support — Flat Feet, Overpronation & Gait Issues',
  description:
    'Flat feet, overpronation, and recurring stress injuries require individual measurement — not generic inserts. Sole-arium measures your specific movement pattern before correcting it.',
  alternates: { canonical: 'https://solearium.in/solutions/structural-support' },
}

export default function StructuralSupportPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative section-pad overflow-hidden">
        <div className="absolute inset-0 grid-bg" aria-hidden="true" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="teal">Structural Support</Badge>
              <Badge variant="ghost">Gait correction</Badge>
            </div>
            <h1 className="heading-xl mb-6">
              Generic inserts cannot correct<br />
              <span className="text-teal-light">what they have never measured.</span>
            </h1>
            <p className="body-lg max-w-2xl mb-8">
              Flat feet, overpronation, high arches, recurring plantar fasciitis. These are structural realities that require individual measurement to address correctly. A standard insole based on your shoe size is an approximation at best. Measurement is the foundation of correction.
            </p>
            <Button href="/products/ablip" size="lg">
              Get measured <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </section>

      {/* The problem with generic */}
      <section className="section-pad bg-ink-soft">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="amber-rule" />
              <p className="eyebrow mb-3">Why generic doesn't work</p>
              <h2 className="heading-lg mb-5">Structural problems require structural measurement.</h2>
              <p className="body-md mb-5">
                Overpronation is not a single condition. It exists on a spectrum, affects different regions of the foot with different intensity, and has different consequences for different bodies. A person with mild overpronation and a person with severe overpronation need structurally different corrections.
              </p>
              <p className="body-md mb-5">
                Generic pharmacy inserts are built to an average foot shape. If your foot matches the average — and many Indian feet do not — they may help. For everyone else, they are a partial solution at best, and a worsening of load patterns at worst.
              </p>
              <p className="body-md">
                The right correction requires the right measurement. That is what Sole-arium provides.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { title: 'Flat feet (pes planus)', body: 'Collapsed or underdeveloped arch causes the foot to roll inward on weight-bearing. The downstream effects — knee pain, shin splints, hip discomfort — are well-documented. The correction needs to match the specific degree and pattern of collapse.' },
                { title: 'Overpronation', body: 'Excessive inward rolling during the gait cycle is one of the most common biomechanical patterns — and one of the most commonly mistreated. The correction depends on where and when the pronation occurs, not on a generic arch insert.' },
                { title: 'High arches (pes cavus)', body: 'High arches create a rigid foot with reduced shock absorption. Pressure concentrates at the heel and ball of the foot. The correction needs to distribute load, not add arch support.' },
                { title: 'Plantar fasciitis / recurring heel pain', body: 'Often the result of biomechanical loading patterns that stress the plantar fascia over time. Correcting the loading pattern — not just treating the symptom — is the more durable approach.' },
              ].map((item) => (
                <div key={item.title} className="card-dark p-5">
                  <div className="flex items-start gap-2 mb-2">
                    <Shield size={14} className="text-teal-light mt-0.5 flex-shrink-0" />
                    <h3 className="text-sm font-semibold text-bone">{item.title}</h3>
                  </div>
                  <p className="text-sm text-bone-muted leading-relaxed pl-5">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How Sole-arium approaches this */}
      <section className="section-pad">
        <div className="container-wide">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="eyebrow mb-3">The Sole-arium approach</p>
            <h2 className="heading-lg mb-4">Measure first. Correct second. Monitor third.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: Activity, step: '01', title: 'Individual measurement', body: 'ABLIP captures your specific gait pattern, arch geometry, and load distribution. This is the foundation — not a shoe size, not a generic arch classification.' },
              { icon: Shield, step: '02', title: 'Precision prescription', body: 'Insoles are prescribed to your exact biomechanical profile. The correction geometry, material hardness, and support zones are specific to your measurements.' },
              { icon: Activity, step: '03', title: 'Outcome monitoring', body: 'Smart Insoles can track whether the correction is holding over time — as gait changes with fatigue, activity, and life. Corrections can be refined as your profile evolves.' },
            ].map((item) => (
              <div key={item.step} className="card-dark p-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-teal/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={16} className="text-teal-light" />
                  </div>
                  <span className="text-xs font-bold text-teal-light opacity-60">{item.step}</span>
                </div>
                <h3 className="text-base font-semibold text-bone mb-3">{item.title}</h3>
                <p className="text-sm text-bone-muted leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-ink-soft">
        <div className="container-wide text-center">
          <h2 className="heading-md mb-4">Get measured. Not guessed.</h2>
          <p className="body-md max-w-lg mx-auto mb-8">
            Start with a five-minute ABLIP assessment. Understand what your foot is actually doing before deciding how to correct it.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/products/ablip" size="lg">Start with ABLIP <ArrowRight size={16} /></Button>
            <Button href="/contact" variant="secondary" size="lg">Talk to our team</Button>
          </div>
        </div>
      </section>
    </>
  )
}
