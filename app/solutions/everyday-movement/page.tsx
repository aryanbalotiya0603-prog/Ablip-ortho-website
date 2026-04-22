import type { Metadata } from 'next'
import { ArrowRight, Users, Activity, Clock } from 'lucide-react'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'Everyday Movement — Gait Support for Daily Life',
  description:
    'Long standing hours, poor gait habits, unnoticed load patterns. Most back pain and knee fatigue trace back to how you walk. Sole-arium makes movement intelligence accessible for everyone.',
  alternates: { canonical: 'https://solearium.in/solutions/everyday-movement' },
}

export default function EverydayMovementPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative section-pad overflow-hidden">
        <div className="absolute inset-0 grid-bg" aria-hidden="true" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="teal">Everyday Movement</Badge>
              <Badge variant="ghost">For everyone</Badge>
            </div>
            <h1 className="heading-xl mb-6">
              You&rsquo;ve never thought about
              <br />
              <span className="text-teal-light">how your foot meets the ground.</span>
            </h1>
            <p className="body-lg max-w-2xl mb-8">
              Most people haven&rsquo;t. And for most people, that&rsquo;s fine — until the back starts aching, the knees start tiring, or the evening foot pain becomes a regular event. These are not random. They are gait mechanics, made visible.
            </p>
            <Button href="/products/ablip" size="lg">
              Start your assessment <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </section>

      {/* The everyday reality */}
      <section className="section-pad bg-ink-soft">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="amber-rule" />
              <p className="eyebrow mb-3">The everyday reality</p>
              <h2 className="heading-lg mb-5">Most movement problems start in the foot.</h2>
              <p className="body-md mb-5">
                The foot is the foundation of every step. When its mechanics are off — a collapsed arch, asymmetric loading, excessive pronation — those mechanical stresses travel up the kinetic chain. The knee absorbs it. The hip compensates. The lower back tightens.
              </p>
              <p className="body-md mb-5">
                For most people, this process happens over years. The pain feels like it belongs in the knee or the back — because that is where it surfaces. The source is further down.
              </p>
              <p className="body-md">
                Understanding this does not require a clinic visit. It requires the right data, and the right correction.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { icon: Clock, title: 'Long standing professions', body: 'Teachers, surgeons, retail workers, chefs — anyone standing for 6+ hours daily is accumulating load. Without the right support, this load concentrates asymmetrically.' },
                { icon: Users, title: 'Desk-to-commute cycles', body: 'Sedentary work followed by walking commutes on hard surfaces creates a loading pattern that the foot is rarely conditioned for. Poor gait mechanics make this worse.' },
                { icon: Activity, title: 'Cumulative gait habits', body: 'Gait patterns formed early — toe walking, heel striking, supination — persist for life unless corrected. By the time they cause symptoms, they have been running for decades.' },
              ].map((item) => (
                <div key={item.title} className="card-dark flex gap-4 p-5">
                  <div className="w-9 h-9 rounded-lg bg-teal/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={16} className="text-teal-light" />
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

      {/* Who this is for */}
      <section className="section-pad">
        <div className="container-wide">
          <div className="text-center max-w-xl mx-auto mb-12">
            <p className="eyebrow mb-3">Who this is for</p>
            <h2 className="heading-md mb-4">Anyone who moves. Everyone who wants to move better.</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              'Teachers and educators', 'Healthcare workers', 'Retail and service staff',
              'Corporate professionals', 'Parents and caregivers', 'New walkers and runners',
            ].map((persona) => (
              <div key={persona} className="card-dark p-4 text-center text-sm text-bone-dim">
                {persona}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-ink-soft">
        <div className="container-wide text-center">
          <h2 className="heading-md mb-4">Start with a five-minute assessment.</h2>
          <p className="body-md max-w-lg mx-auto mb-8">
            ABLIP gives you a biomechanical profile of how you walk — the first step toward understanding whether your movement is working for you or against you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/products/ablip" size="lg">Try ABLIP <ArrowRight size={16} /></Button>
            <Button href="/faq" variant="secondary" size="lg">Common questions</Button>
          </div>
        </div>
      </section>
    </>
  )
}
