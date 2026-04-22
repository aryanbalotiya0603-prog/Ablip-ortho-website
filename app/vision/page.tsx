import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'Vision — What Sole-arium Is Building Toward',
  description:
    'Sole-arium exists to make biomechanical intelligence a basic right — not a hospital privilege. This is what we are building toward.',
  alternates: { canonical: 'https://solearium.in/vision' },
}

export default function VisionPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative section-pad overflow-hidden">
        <div className="absolute inset-0 grid-bg" aria-hidden="true" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[300px] bg-amber-glow rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <Badge variant="amber" className="mb-6">Vision</Badge>
            <h1 className="heading-xl mb-6">
              Biomechanical intelligence<br />
              <span className="text-amber">as a basic right.</span>
            </h1>
            <div className="body-lg max-w-2xl space-y-4">
              <p>A future where movement is understood, not assumed.</p>
              <p>Where every step, every imbalance, every pattern is visible — and can be acted on early, not after damage is done.</p>
              <p>Where understanding your body is as normal as checking your heart rate.</p>
              <p>We&rsquo;re building toward a world where biomechanical intelligence is not something you seek out — it&rsquo;s simply part of how you live.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The problem with the current system */}
      <section className="section-pad bg-ink-soft">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="amber-rule" />
              <p className="eyebrow mb-3">The current system</p>
              <h2 className="heading-lg mb-5">Correction exists. Access does not.</h2>
              <p className="body-md mb-5">
                The science of biomechanical correction has existed for decades. Gait labs, orthopaedic specialists, custom prescription footwear — the tools are real and they work. The problem is structural, not scientific.
              </p>
              <p className="body-md mb-5">
                Clinical-grade assessment requires a specialist referral, a gait lab, a lengthy appointment, and the kind of healthcare access that fewer than one in ten Indians have ever experienced. The result: hundreds of millions of people walk with uncorrected gait patterns their entire lives.
              </p>
              <p className="body-md">
                They adapt. They medicate the pain. They stop moving. None of them were ever told the problem was measurable — or that it had a solution.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  stat: '350M+',
                  label: 'Indians live with musculoskeletal conditions',
                  note: 'Most have never had a single data point about their gait.',
                },
                {
                  stat: '<10%',
                  label: 'ever access clinical-grade biomechanical assessment',
                  note: 'Not from lack of need. From lack of infrastructure.',
                },
                {
                  stat: '0',
                  label: 'Indian-specific biomechanical platforms before Sole-arium',
                  note: 'Western models, Western data, Western assumptions. None of it built for us.',
                },
              ].map((item) => (
                <div key={item.stat} className="card-dark p-7">
                  <div className="text-4xl font-bold text-amber mb-2">{item.stat}</div>
                  <div className="text-sm font-medium text-bone mb-2 leading-snug">{item.label}</div>
                  <div className="text-xs text-bone-muted italic leading-[1.75]">{item.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What we are building differently */}
      <section className="section-pad">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="eyebrow mb-3">What we are doing differently</p>
            <h2 className="heading-lg mb-4">Not a product. A platform built on principles.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                number: '01',
                title: 'Start with measurement',
                body: 'Every Sole-arium intervention begins with objective data. Not opinions, not generic fitting, not guesswork. We measure how you actually move — then work from that foundation.',
              },
              {
                number: '02',
                title: 'Build for Indian bodies',
                body: 'Indian foot morphology is distinct. Wider forefoot, different arch geometry, climate-shaped gait patterns. We build our models on Indian data because prescriptions derived from Western populations are structurally inadequate for us.',
              },
              {
                number: '03',
                title: 'Make precision accessible',
                body: 'Clinical-grade biomechanics should not require a hospital visit, a specialist referral, or an import budget. We designed a system where the assessment fits in your phone and the prescription ships to your door.',
              },
            ].map((item) => (
              <div key={item.number} className="card-dark p-8">
                <span className="text-xs font-bold text-amber opacity-60 block mb-4">{item.number}</span>
                <h3 className="text-base font-semibold text-bone mb-3">{item.title}</h3>
                <p className="text-sm text-bone-muted leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Long-term ambition */}
      <section className="section-pad bg-ink-soft relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-glow rounded-full blur-3xl pointer-events-none opacity-40" aria-hidden="true" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <div className="amber-rule" />
            <p className="eyebrow mb-3">Long-term ambition</p>
            <h2 className="heading-lg mb-6">The intelligence layer for how India moves.</h2>
            <div className="space-y-4">
              <p className="body-md">
                Sole-arium begins beneath the foot — but the foot is only the starting point. Every gait pattern, every pressure distribution, every movement asymmetry measured today is data that makes tomorrow's prescriptions more precise. The platform compounds.
              </p>
              <p className="body-md">
                The long-term ambition is to become the default biomechanical intelligence infrastructure for India — integrated into healthcare systems, embedded in how clinicians prescribe, how insurers underwrite, how athletes train, and how everyday people understand the body they live in.
              </p>
              <p className="body-md">
                A country that understands how it moves is a country that ages better, recovers faster, and performs more efficiently. That is what we are building toward — not just better products, but better outcomes at population scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad relative overflow-hidden">
        <div className="absolute inset-0 glow-amber opacity-40" aria-hidden="true" />
        <div className="container-wide relative z-10 text-center">
          <h2 className="heading-lg mb-5">Start with understanding how you move.</h2>
          <p className="body-md max-w-lg mx-auto mb-8">
            The vision begins with a single assessment. Five minutes. Your phone. Your first biomechanical data point.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/products/ablip" size="lg">Start with ABLIP <ArrowRight size={16} /></Button>
            <Button href="/company" variant="secondary" size="lg">Read our story</Button>
          </div>
        </div>
      </section>
    </>
  )
}
