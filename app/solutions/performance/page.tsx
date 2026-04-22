import type { Metadata } from 'next'
import { ArrowRight, Zap, BarChart3, Activity } from 'lucide-react'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'Performance & Biomechanical Optimisation',
  description:
    'Most athletes optimise training. Almost none optimise how their foot meets the ground. Sole-arium identifies gait inefficiencies, load asymmetries, and energy leakage — measured, not guessed.',
  alternates: { canonical: 'https://solearium.in/solutions/performance' },
}

export default function PerformancePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative section-pad overflow-hidden">
        <div className="absolute inset-0 grid-bg" aria-hidden="true" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-amber-glow rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="amber">Performance</Badge>
              <Badge variant="ghost">Optimisation</Badge>
            </div>
            <h1 className="heading-xl mb-6">
              Your gait pattern<br />
              <span className="text-amber">costs you energy.</span>
            </h1>
            <p className="body-lg max-w-2xl mb-8">
              Most athletes optimise their training load, nutrition, and technique. Almost none optimise how their foot meets the ground — despite the fact that gait mechanics directly influence energy efficiency, joint loading, and injury risk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/products/ablip" size="lg">
                Start your assessment <ArrowRight size={18} />
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Talk to our team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The insight */}
      <section className="section-pad bg-ink-soft">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="amber-rule" />
              <p className="eyebrow mb-3">The performance insight</p>
              <h2 className="heading-lg mb-5">Biomechanics is the last unseeen variable.</h2>
              <p className="body-md mb-5">
                Training plans are structured. Nutrition is tracked. Sleep is monitored. But the mechanical efficiency of how someone moves — the gait pattern that executes every training session — is typically never measured.
              </p>
              <p className="body-md mb-5">
                Asymmetric loading does not just waste energy. It accumulates as asymmetric stress on joints — which eventually surfaces as the injury that ends the season, not in the gym, but on a run or a court months later.
              </p>
              <p className="body-md">
                Understanding your biomechanics is not remedial. It is the final optimisation variable.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { icon: Zap, title: 'Energy leakage through asymmetry', body: 'Asymmetric loading means one side of the body is working harder than the other. This creates inefficiency that compounds over thousands of steps — and a training load your weaker side cannot sustain indefinitely.' },
                { icon: BarChart3, title: 'Overuse injury risk', body: 'Overpronation, supination, and heel strike patterns create characteristic overuse injury patterns. Identifying these before they cause injury is the biomechanical equivalent of identifying a training imbalance before it leads to failure.' },
                { icon: Activity, title: 'Gait efficiency as performance metric', body: 'Step symmetry, cadence, and load distribution are measurable gait characteristics that influence running economy. Understanding them gives athletes a new dimension of optimisation that no training variable alone can address.' },
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

      {/* How it works for performance */}
      <section className="section-pad">
        <div className="container-wide">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="eyebrow mb-3">How it works</p>
            <h2 className="heading-lg mb-4">Measure. Understand. Correct.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { step: '01', title: 'Baseline biomechanical profile', body: 'ABLIP captures your gait pattern, load distribution, and movement asymmetries. This is your biomechanical baseline — the starting point for all optimisation.' },
              { step: '02', title: 'Identify inefficiency and risk', body: 'The movement report highlights patterns that reduce efficiency or increase injury risk — specific, measured, actionable.' },
              { step: '03', title: 'Correct and monitor', body: 'Prescription insoles correct the mechanical source of inefficiency. Smart Insoles monitor whether the correction is holding under training load and fatigue.' },
            ].map((item) => (
              <div key={item.step} className="card-dark p-7">
                <span className="text-3xl font-bold text-amber opacity-20 block mb-4">{item.step}</span>
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
          <h2 className="heading-md mb-4">Understand how you move.</h2>
          <p className="body-md max-w-lg mx-auto mb-8">
            A five-minute ABLIP assessment gives you more information about your gait mechanics than most athletes collect in a career.
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
