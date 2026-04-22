import type { Metadata } from 'next'
import { ArrowRight, Thermometer, Activity, AlertTriangle, Shield } from 'lucide-react'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'Diabetic Foot Monitoring — Early Risk Awareness',
  description:
    'Plantar pressure concentration and temperature asymmetry are measurable precursors to diabetic foot ulcers. Sole-arium surfaces these signals before symptoms appear. Evidence-informed, clinician-legible.',
  alternates: { canonical: 'https://solearium.in/solutions/diabetic-foot' },
}

export default function DiabeticFootPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative section-pad overflow-hidden">
        <div className="absolute inset-0 grid-bg" aria-hidden="true" />
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-teal-glow rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="teal">Diabetic Foot</Badge>
              <Badge variant="ghost">Medical</Badge>
            </div>
            <h1 className="heading-xl mb-6">
              The warning signals<br />
              <span className="text-teal-light">exist before the damage does.</span>
            </h1>
            <p className="body-lg max-w-2xl mb-8">
              Diabetic foot ulcers are largely preventable. The precursors — pressure concentration, temperature asymmetry, reduced sensation — are measurable weeks before tissue breakdown occurs. Most people never see these signals. Sole-arium surfaces them.
            </p>
            <Button href="/contact" size="lg">
              Talk to our team <ArrowRight size={18} />
            </Button>
            <p className="text-xs text-bone-muted mt-4">
              Sole-arium is not a medical device. It does not diagnose, prevent, or treat diabetic foot disease. Consult a qualified clinician for all medical decisions.
            </p>
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="section-pad bg-ink-soft">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="amber-rule" />
              <p className="eyebrow mb-3">The clinical reality</p>
              <h2 className="heading-lg mb-5">Why diabetic foot ulcers happen.</h2>
              <p className="body-md mb-5">
                Peripheral neuropathy — nerve damage that reduces sensation in the feet — means a person with diabetes may not feel that their foot is being damaged. A shoe rubbing. A pressure point loading. A blister forming. Without sensation as a warning system, damage accumulates silently.
              </p>
              <p className="body-md mb-5">
                Peripheral arterial disease compounds this by reducing blood flow to the extremities — slowing healing and increasing infection risk when damage does occur.
              </p>
              <p className="body-md">
                The result: a wound that was preventable becomes an ulcer. An ulcer that could have been managed becomes an amputation. The pathway is well-understood. The gap is early visibility.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { icon: AlertTriangle, color: 'amber', title: 'Pressure concentration', body: 'Focal high-pressure zones on the plantar surface indicate areas at elevated risk of tissue breakdown — especially in neuropathic feet where protective pain signalling is reduced.' },
                { icon: Thermometer, color: 'teal', title: 'Temperature asymmetry', body: 'A temperature difference of more than 2°C between the same site on both feet can indicate localised inflammation — a recognised early warning signal in diabetic foot monitoring protocols.' },
                { icon: Activity, color: 'amber', title: 'Gait adaptation', body: 'As sensation changes, people unconsciously modify their gait to protect areas of discomfort. These adaptations create secondary loading problems elsewhere. Early detection helps interrupt this cycle.' },
              ].map((item) => (
                <div key={item.title} className="card-dark flex gap-4 p-5">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${item.color === 'amber' ? 'bg-amber/10' : 'bg-teal/10'}`}>
                    <item.icon size={16} className={item.color === 'amber' ? 'text-amber' : 'text-teal-light'} />
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

      {/* How Sole-arium helps */}
      <section className="section-pad">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow mb-3">How Sole-arium helps</p>
            <h2 className="heading-lg mb-4">Earlier visibility. More informed decisions.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-dark p-8">
              <Badge variant="ghost" className="mb-4">ABLIP App</Badge>
              <h3 className="heading-sm mb-3">Baseline gait assessment</h3>
              <p className="body-sm mb-5">
                An initial ABLIP assessment establishes a biomechanical baseline — identifying existing gait asymmetries, load distribution patterns, and any concerning signals that warrant clinical attention or ongoing monitoring.
              </p>
              <p className="body-sm text-xs italic">
                Appropriate as a first step for any person with diabetes wanting to understand their current foot health status.
              </p>
            </div>
            <div className="card-dark p-8">
              <Badge variant="teal" className="mb-4">Smart Insoles</Badge>
              <h3 className="heading-sm mb-3">Continuous monitoring</h3>
              <p className="body-sm mb-5">
                For at-risk patients, Smart Insoles provide continuous pressure and temperature data throughout the day — not just at assessment moments. Clinicians can view this data remotely. Patients have daily visibility into their foot health status.
              </p>
              <p className="body-sm text-xs italic">
                Designed for integration into a care team's monitoring workflow, not as a standalone patient tool.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important disclaimers */}
      <section className="section-pad bg-ink-soft">
        <div className="container-tight">
          <div className="card-dark border-amber/20 p-8">
            <div className="flex items-start gap-4">
              <Shield size={20} className="text-amber mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-base font-semibold text-bone mb-4">What Sole-arium can and cannot do</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-teal-light mb-3">What it is designed to support</p>
                    {[
                      'Surfacing measurable pressure and temperature signals',
                      'Establishing a biomechanical baseline for comparison over time',
                      'Providing continuous monitoring data for care teams',
                      'Enabling more informed clinical conversations',
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2 text-bone-dim mb-2">
                        <span className="w-1 h-1 rounded-full bg-teal-light mt-1.5 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-amber mb-3">What it does not do</p>
                    {[
                      'Diagnose diabetic foot disease or any medical condition',
                      'Predict or prevent ulcer formation with certainty',
                      'Replace clinical assessment or clinician judgement',
                      'Constitute medical advice',
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2 text-bone-dim mb-2">
                        <span className="w-1 h-1 rounded-full bg-amber mt-1.5 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad">
        <div className="container-wide text-center">
          <h2 className="heading-md mb-4">Interested in diabetic foot monitoring?</h2>
          <p className="body-md max-w-lg mx-auto mb-8">
            Whether you are a patient, a clinician, or a care institution, our team can explain how Sole-arium fits into your monitoring workflow.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact?type=clinical" size="lg">Talk to our clinical team <ArrowRight size={16} /></Button>
            <Button href="/products/smart-insoles" variant="secondary" size="lg">Smart Insoles waitlist</Button>
          </div>
        </div>
      </section>
    </>
  )
}
