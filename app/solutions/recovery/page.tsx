import type { Metadata } from 'next'
import { ArrowRight, Activity, BarChart3, Shield } from 'lucide-react'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'Recovery & Post-Surgery Biomechanical Support',
  description:
    'Post-surgery recovery depends on how you load the healing limb. Sole-arium provides objective step symmetry and load data to support safer recovery decisions. For patients and clinicians.',
  alternates: { canonical: 'https://solearium.in/solutions/recovery' },
}

export default function RecoveryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative section-pad overflow-hidden">
        <div className="absolute inset-0 grid-bg" aria-hidden="true" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="amber">Recovery</Badge>
              <Badge variant="ghost">Rehabilitation</Badge>
            </div>
            <h1 className="heading-xl mb-6">
              Recovery is not just rest.<br />
              <span className="text-amber">It is how you load.</span>
            </h1>
            <p className="body-lg max-w-2xl mb-8">
              After lower-limb surgery, the critical question is not whether you can walk — it is how symmetrically you are loading the healing limb. Asymmetric loading is common, often invisible, and can extend recovery or cause setbacks. Sole-arium makes it visible.
            </p>
            <Button href="/contact" size="lg">
              Talk to our team <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="section-pad bg-ink-soft">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="amber-rule" />
              <p className="eyebrow mb-3">Why loading patterns matter</p>
              <h2 className="heading-lg mb-5">The body compensates. The data reveals it.</h2>
              <p className="body-md mb-5">
                After any lower-limb surgery — knee replacement, ankle reconstruction, hip arthroplasty, ligament repair — the body develops protective movement strategies. It offloads the painful side. It shifts weight. It shortens stride on one side.
              </p>
              <p className="body-md mb-5">
                These compensations are a natural pain response. But they persist after pain subsides. An asymmetric gait pattern, if unaddressed, places secondary stress on the hip, the contralateral knee, and the lumbar spine.
              </p>
              <p className="body-md">
                Clinical assessment at intervals misses what happens between visits. Continuous load data tells the full story.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { icon: Activity, title: 'Step symmetry as a recovery marker', body: 'The ratio between loading on the operated and non-operated side is a direct measure of recovery progress. Sole-arium tracks this continuously — not just at clinic appointments.' },
                { icon: BarChart3, title: 'Fatigue-related load shifts', body: 'Recovery patients often load well in the morning and shift to compensatory patterns later in the day as fatigue increases. Continuous data captures this — a single clinical assessment cannot.' },
                { icon: Shield, title: 'Objective progress tracking', body: 'Symmetry scores over time provide both patient and clinician with objective evidence of recovery trajectory — beyond pain scores and clinical impression.' },
              ].map((item) => (
                <div key={item.title} className="card-dark flex gap-4 p-5">
                  <div className="w-9 h-9 rounded-lg bg-amber/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={16} className="text-amber" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-bone mb-1">{item.title}</h3>
                    <p className="text-sm text-bone-muted leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it helps */}
      <section className="section-pad">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow mb-3">How Sole-arium helps</p>
            <h2 className="heading-lg mb-4">Objective data for every stage of recovery.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { phase: 'Pre-surgery', title: 'Baseline assessment', body: 'Understanding how you move before surgery establishes a reference point. This baseline informs what recovery is working toward — not a generic protocol, but your specific pre-operative pattern.' },
              { phase: 'During recovery', title: 'Continuous monitoring', body: 'Smart Insoles track step symmetry and load distribution throughout the recovery period. Clinicians can monitor remotely. Patients can see their own progress.' },
              { phase: 'Return to activity', title: 'Clearance confidence', body: 'Objective symmetry data provides evidence-based confidence for return-to-sport or return-to-work decisions — reducing guesswork for both patient and clinician.' },
            ].map((item) => (
              <div key={item.phase} className="card-dark p-7">
                <Badge variant="ghost" className="mb-4">{item.phase}</Badge>
                <h3 className="text-base font-semibold text-bone mb-3">{item.title}</h3>
                <p className="text-sm text-bone-muted leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="section-pad bg-ink-soft">
        <div className="container-tight">
          <div className="card-dark border-amber/20 p-6 text-sm text-bone-muted">
            <p className="font-medium text-bone mb-2">Important note</p>
            <p className="leading-relaxed">Sole-arium is not a medical device. It does not provide clinical advice or constitute part of a formal rehabilitation protocol unless agreed with a qualified clinician. All recovery decisions should be made in consultation with your treating physiotherapist, surgeon, or care team.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad">
        <div className="container-wide text-center">
          <h2 className="heading-md mb-4">Preparing for or recovering from surgery?</h2>
          <p className="body-md max-w-lg mx-auto mb-8">
            Our team can walk you through how Sole-arium fits into a recovery monitoring workflow.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact?type=clinical" size="lg">Talk to our team <ArrowRight size={16} /></Button>
            <Button href="/products/smart-insoles" variant="secondary" size="lg">Smart Insoles waitlist</Button>
          </div>
        </div>
      </section>
    </>
  )
}
