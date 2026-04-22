import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Smartphone, Eye, BarChart3, FileText, ChevronRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import FAQAccordion from '@/components/ui/FAQAccordion'

export const metadata: Metadata = {
  title: 'ABLIP — AI Gait Analysis via Phone Camera',
  description:
    'ABLIP analyses your gait, maps plantar load distribution, and surfaces movement patterns using only your phone camera. No lab. No equipment. A full biomechanical report in under five minutes.',
  alternates: { canonical: 'https://solearium.in/products/ablip' },
}

const features = [
  {
    icon: Eye,
    title: 'All you need is your phone camera.',
    body: 'Point, record, done. No sensors, no lighting setup, no special equipment — your existing phone is enough.',
  },
  {
    icon: BarChart3,
    title: 'Built on real Indian movement data.',
    body: 'ABLIP is trained on Indian foot morphology and gait — so your profile reflects how people here actually move, not generic global averages.',
  },
  {
    icon: FileText,
    title: 'A report you can actually understand and use.',
    body: 'Clear results, plain language. Structured for you to act on — and for your clinician to work with.',
  },
  {
    icon: Smartphone,
    title: 'No hardware. No clinic.',
    body: 'No wearable to buy. No appointment to book. Your first biomechanical assessment is five minutes away.',
  },
]

const workflow = [
  { step: '01', title: 'Capture your walk', body: 'Record a short walking video using your phone.' },
  { step: '02', title: 'AI analyses your movement', body: 'Your movement is processed into a structured profile.' },
  { step: '03', title: 'Get your report', body: 'Receive a clear, actionable report within minutes.' },
]

const ablipFAQs = [
  {
    question: 'What exactly does ABLIP measure?',
    answer: 'ABLIP analyses movement patterns from walking video using computer vision. It infers gait cycle characteristics, step timing, movement asymmetries, and load distribution proxies. It does not directly measure pressure — that requires hardware sensors. It surfaces movement patterns that are often invisible without specialist equipment.',
  },
  {
    question: 'How accurate is a phone-camera assessment?',
    answer: 'ABLIP is designed to surface meaningful movement signals, not to replace a clinical pressure plate assessment. For the purposes of identifying asymmetries, gait patterns, and risk signals — it is clinically informative. For precise pressure measurement, the Smart Insoles provide sensor-grade data. We state clearly what each product can and cannot measure.',
  },
  {
    question: 'Do I need a specific phone or camera?',
    answer: 'ABLIP works with standard smartphone cameras available on most modern devices. Specific requirements are listed in the app store descriptions. Higher camera resolution improves capture quality, but is not required for a useful assessment.',
  },
  {
    question: 'Can a doctor use my ABLIP report?',
    answer: 'Yes. The report is designed to be clinician-legible. It presents movement data in a structured format that supports informed clinical conversation — not as a diagnostic document, but as an informative input to clinical assessment.',
  },
  {
    question: 'Is ABLIP a medical device?',
    answer: 'ABLIP is a movement analysis tool. It is not a registered medical device and does not diagnose conditions. Its outputs are intended to inform users and support clinical decision-making, not to replace it. For any clinical concern, consult a qualified practitioner.',
  },
]

export default function AblipPage() {
  return (
    <>
      {/* Hero — keep full section-pad for breathing room at top */}
      <section className="relative section-pad overflow-hidden">
        <div className="absolute inset-0 grid-bg" aria-hidden="true" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-amber-glow rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Badge variant="amber">Available Now</Badge>
                <Badge variant="ghost">Mobile Application</Badge>
              </div>
              <h1 className="heading-xl mb-6">
                Your gait,<br />
                <span className="text-amber">decoded.</span>
              </h1>
              <p className="body-lg mb-8">
                No lab. No clinic visit. Just your phone.<br />
                A complete biomechanical report in under 5 minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button href="/dashboard" size="lg">
                  Start assessment <ArrowRight size={18} />
                </Button>
                <Button href="/how-it-works" variant="secondary" size="lg">
                  See How It Works
                </Button>
              </div>
              <p className="text-xs text-bone-muted">
                ABLIP is a movement analysis tool. It does not diagnose medical conditions.
              </p>
            </div>

            {/* Phone mockup visual */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-56 h-[460px] rounded-[2.5rem] border-2 border-ink-border bg-ink-card relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-ink rounded-b-xl z-10" />
                  <div className="absolute inset-0 p-4 pt-10 flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-amber">ABLIP</span>
                      <div className="w-2 h-2 rounded-full bg-teal-light animate-pulse-slow" />
                    </div>
                    <div className="bg-ink-soft rounded-xl p-3 flex-1 flex flex-col gap-2">
                      <p className="text-[10px] text-bone-muted font-medium uppercase tracking-widest">Gait Analysis</p>
                      <div className="relative w-full aspect-square rounded-lg bg-ink overflow-hidden">
                        <div className="absolute inset-0 flex items-end justify-center pb-2">
                          <svg viewBox="0 0 80 140" className="w-20 h-32" fill="none">
                            <ellipse cx="35" cy="120" rx="20" ry="18" fill="rgba(232,160,32,0.15)" />
                            <ellipse cx="35" cy="120" rx="12" ry="10" fill="rgba(232,160,32,0.25)" />
                            <ellipse cx="35" cy="90" rx="18" ry="22" fill="rgba(26,122,106,0.15)" />
                            <ellipse cx="35" cy="90" rx="10" ry="12" fill="rgba(26,122,106,0.2)" />
                            <ellipse cx="35" cy="60" rx="14" ry="16" fill="rgba(232,160,32,0.2)" />
                            <ellipse cx="28" cy="42" rx="8" ry="6" fill="rgba(232,160,32,0.35)" />
                            <ellipse cx="42" cy="38" rx="5" ry="4" fill="rgba(232,160,32,0.2)" />
                          </svg>
                        </div>
                        <div className="absolute top-2 right-2 text-[8px] text-bone-muted">Pressure Map</div>
                      </div>
                      <div className="grid grid-cols-2 gap-1.5 mt-1">
                        {[
                          { label: 'Symmetry', value: '91%' },
                          { label: 'Arch type', value: 'Low' },
                          { label: 'Pronation', value: 'Mild' },
                          { label: 'Load dist.', value: 'Normal' },
                        ].map((m) => (
                          <div key={m.label} className="bg-ink rounded p-1.5">
                            <p className="text-[8px] text-bone-muted">{m.label}</p>
                            <p className="text-[10px] font-semibold text-amber">{m.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-amber rounded-xl py-2.5 text-center">
                      <span className="text-[10px] font-bold text-ink">View Full Report</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -right-6 top-20 bg-ink-card border border-ink-border rounded-xl px-3 py-2 shadow-lg">
                  <p className="text-[10px] text-bone-muted">Step symmetry</p>
                  <p className="text-sm font-bold text-teal-light">91%</p>
                </div>
                <div className="absolute -left-6 bottom-20 bg-ink-card border border-ink-border rounded-xl px-3 py-2 shadow-lg">
                  <p className="text-[10px] text-bone-muted">Assessment time</p>
                  <p className="text-sm font-bold text-amber">&lt; 5 min</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 md:py-20 px-5 md:px-8 bg-ink-soft">
        <div className="container-wide">
          <div className="mb-8">
            <p className="eyebrow mb-3">How it works</p>
            <h2 className="heading-lg">Clinical-grade signals. Phone-grade accessibility.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((f) => (
              <div key={f.title} className="card-dark p-6 flex gap-5">
                <div className="w-10 h-10 rounded-xl bg-amber/10 flex items-center justify-center flex-shrink-0">
                  <f.icon size={20} className="text-amber" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-bone mb-2">{f.title}</h3>
                  <p className="text-sm text-bone-muted leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What the report includes */}
      <section className="py-12 md:py-20 px-5 md:px-8">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="amber-rule" />
              <p className="eyebrow mb-3">The report</p>
              <h2 className="heading-lg mb-4">What your movement report includes.</h2>
              <p className="body-md mb-2">
                You've never seen how you walk — until now.
              </p>
              <p className="body-md mb-4">
                ABLIP turns a simple walk into a clear, structured movement report.
              </p>
              <p className="text-xs text-bone-muted italic">
                Note: ABLIP infers biomechanical patterns from movement video. It does not directly measure plantar pressure. Results are intended to support informed decisions, not to constitute medical diagnosis.
              </p>
            </div>
            <div className="space-y-3">
              {[
                { label: 'Gait cycle & asymmetry analysis', detail: 'Step timing, cadence, and left-right differences in stride, load, and timing patterns' },
                { label: 'Load distribution patterns', detail: 'Inferred pressure distribution across the forefoot, midfoot, and heel' },
                { label: 'Arch type characterisation', detail: 'Estimated arch geometry based on movement and visual analysis' },
                { label: 'Risk signal identification', detail: 'Patterns that may warrant clinical attention — clearly framed as signals, not diagnoses' },
                { label: 'Prescription readiness', detail: 'If the data supports insole prescription, it is flagged for the design phase' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 card-dark p-4">
                  <ChevronRight size={14} className="text-amber mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-bone">{item.label}</p>
                    <p className="text-xs text-bone-muted mt-0.5">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-12 md:py-20 px-5 md:px-8 bg-ink-soft">
        <div className="container-wide">
          <div className="mb-8">
            <p className="eyebrow mb-3">Step by step</p>
            <h2 className="heading-lg">From first launch to full report.</h2>
          </div>
          <div className="space-y-3 max-w-2xl">
            {workflow.map((step) => (
              <div key={step.step} className="flex gap-5 card-dark p-5">
                <div className="w-10 h-10 rounded-full bg-amber/10 border border-amber/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-amber">{step.step}</span>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-bone mb-1">{step.title}</h3>
                  <p className="text-sm text-bone-muted">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where it fits */}
      <section className="py-12 md:py-20 px-5 md:px-8">
        <div className="container-wide">
          <div className="mb-8">
            <p className="eyebrow mb-3">Where ABLIP fits</p>
            <h2 className="heading-md">Part of the full Sole-arium system.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
            {[
              {
                title: 'ABLIP alone',
                tag: 'Start here',
                body: 'Your first biomechanical profile. No hardware, no commitment — just a clear picture of how you move.',
                ctaLabel: 'Start assessment',
                ctaHref: '/contact',
                primary: true,
              },
              {
                title: 'ABLIP + Smart Insoles',
                tag: 'For ongoing tracking',
                body: 'Phone assessment plus continuous sensor data. For users who want longitudinal movement data or clinical reporting.',
                ctaLabel: 'Join waitlist',
                ctaHref: '/contact',
                primary: false,
              },
              {
                title: 'Full platform',
                tag: 'For practitioners',
                body: 'Assessment, modelling, precision prescription, and outcome tracking. The complete biomechanical intelligence system.',
                ctaLabel: 'Explore system',
                ctaHref: '/platform',
                primary: false,
              },
            ].map((option) => (
              <div key={option.title} className={`card-dark p-6 flex flex-col ${option.primary ? 'border-amber/30' : ''}`}>
                <p className="text-[10px] font-semibold tracking-widest uppercase text-amber mb-2">{option.tag}</p>
                <h3 className="text-sm font-semibold text-bone mb-2">{option.title}</h3>
                <p className="text-sm text-bone-muted leading-relaxed flex-1">{option.body}</p>
                <Link href={option.ctaHref} className="mt-4 text-xs font-medium text-amber hover:text-amber-dim flex items-center gap-1 transition-colors">
                  {option.ctaLabel} <ChevronRight size={12} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-20 px-5 md:px-8 bg-ink-soft">
        <div className="container-wide">
          <div className="mb-8">
            <p className="eyebrow mb-3">FAQ</p>
            <h2 className="heading-md mb-3">ABLIP — common questions.</h2>
            <p className="body-md">Still have questions? Here's what people usually ask before starting.</p>
          </div>
          <FAQAccordion items={ablipFAQs} />
        </div>
      </section>

      {/* CTA */}
      <section className="pt-16 md:pt-24 pb-12 md:pb-20 px-5 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 glow-amber opacity-60" aria-hidden="true" />
        <div className="container-wide relative z-10">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="heading-lg mb-4">Ready to see how you move?</h2>
            <p className="body-md mb-6">
              Start with ABLIP. Takes 5 minutes. No equipment needed.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/dashboard" size="lg">
                Start assessment <ArrowRight size={18} />
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Talk to our team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
