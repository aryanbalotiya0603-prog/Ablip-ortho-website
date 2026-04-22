import type { Metadata } from 'next'
import { ArrowRight, Activity, BarChart3, Zap, Shield, Layers, Database, RefreshCw } from 'lucide-react'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Platform — System Architecture | Sole-arium',
  description:
    'Technical documentation of the Sole-arium four-layer biomechanical correction system: capture, model, design, and manufacture.',
  alternates: { canonical: 'https://solearium.in/platform' },
}

const pipeline = [
  {
    step: '01',
    label: 'Capture',
    icon: Activity,
    what: 'Video-based gait capture',
    signals: ['Gait cycle timing', 'Load transfer patterns', 'Postural deviation'],
    output: 'Structured movement signal set',
  },
  {
    step: '02',
    label: 'Model',
    icon: BarChart3,
    what: 'Biomechanical interpretation layer',
    signals: ['Arch profile inference', 'Pressure distribution mapping', 'Risk identification'],
    output: 'Personal biomechanical model',
  },
  {
    step: '03',
    label: 'Design',
    icon: Zap,
    what: 'Prescription generation',
    signals: ['Correction geometry', 'Material mapping', 'Pressure redistribution targets'],
    output: 'Manufacturing-ready prescription',
  },
  {
    step: '04',
    label: 'Deliver',
    icon: Shield,
    what: 'CNC manufacturing + outcome capture',
    signals: ['Fit accuracy', 'Outcome feedback'],
    output: 'Real-world correction data',
  },
]

const designDecisions = [
  {
    icon: Layers,
    title: 'Vertical integration',
    body: 'Capture → model → design → manufacture in one system. Eliminates dependency gaps between layers.',
  },
  {
    icon: Database,
    title: 'Data ownership',
    body: 'First-party biomechanical dataset. Improves with every assessment.',
  },
  {
    icon: RefreshCw,
    title: 'Closed-loop feedback',
    body: 'Outcome data feeds model continuously. System improves over time.',
  },
]

export default function PlatformPage() {
  return (
    <>
      {/* Orienting context */}
      <section className="pt-16 md:pt-24 pb-4 px-5 md:px-8">
        <div className="container-wide">
          <div className="max-w-lg">
            <p className="text-sm text-bone-muted opacity-60 leading-relaxed">
              The Sole-arium platform is a four-layer biomechanical correction system.
            </p>
            <p className="text-sm text-bone-muted opacity-60 leading-relaxed mt-1">
              This page documents how each layer works and how they connect.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1 — System Pipeline */}
      <section id="pipeline" className="py-10 md:py-14 px-5 md:px-8">
        <div className="container-wide">
          <div className="max-w-2xl mb-8">
            <h2 className="heading-lg mb-3">The biomechanical pipeline</h2>
            <p className="body-md text-bone-muted">
              A structured system that captures, models, and delivers movement correction.
            </p>
          </div>

          <div className="space-y-3">
            {pipeline.map((step, i) => (
              <div key={step.step} className="card-dark p-5 grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
                <div className="lg:col-span-1">
                  <span className="text-2xl font-bold text-amber opacity-20">{step.step}</span>
                </div>

                <div className="lg:col-span-3">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 rounded-md flex items-center justify-center bg-amber/10">
                      <step.icon size={14} className="text-amber" />
                    </div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-amber">{step.label}</p>
                  </div>
                  <p className="text-xs font-semibold tracking-wide uppercase text-bone-muted mb-1.5">What</p>
                  <p className="text-sm text-bone">{step.what}</p>
                </div>

                <div className="lg:col-span-4">
                  <p className="text-xs font-semibold tracking-wide uppercase text-bone-muted mb-2">Signals</p>
                  <ul className="space-y-1.5">
                    {step.signals.map((sig) => (
                      <li key={sig} className="flex items-center gap-2 text-sm text-bone-dim">
                        <span className="w-1 h-1 rounded-full bg-amber flex-shrink-0" />
                        {sig}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-4">
                  <p className="text-xs font-semibold tracking-wide uppercase text-bone-muted mb-2">Output</p>
                  <div className="border-l-2 border-amber/40 pl-3">
                    <p className="text-sm text-bone font-medium">{step.output}</p>
                  </div>
                  {i < pipeline.length - 1 && (
                    <p className="text-xs text-bone-muted mt-3 opacity-40">passes to next layer ↓</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — Intelligence Loop */}
      <section id="intelligence" className="py-10 md:py-14 px-5 md:px-8 bg-ink-soft">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-4">The system learns from every outcome</h2>
              <p className="body-md text-bone-muted mb-5">
                Outcome data from manufactured corrections flows back into the model layer, refining prediction accuracy and prescription precision with each cycle.
              </p>
              <ul className="space-y-2">
                {[
                  'Output data flows back into model layer',
                  'Improves prediction accuracy',
                  'Improves prescription precision over time',
                ].map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm text-bone-dim">
                    <span className="w-1 h-1 rounded-full bg-amber flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Circular loop diagram — static layout, animated data dot */}
            <div className="flex justify-center">
              <div className="w-full max-w-xs">
                <svg
                  viewBox="0 0 400 350"
                  width="100%"
                  role="img"
                  aria-label="Feedback loop: Capture generates signals, Deliver captures outcomes, Model refines prediction — continuous cycle"
                >
                  <defs>
                    <marker
                      id="arrowAmber"
                      markerWidth="8"
                      markerHeight="6"
                      refX="7"
                      refY="3"
                      orient="auto"
                    >
                      <polygon points="0 0, 8 3, 0 6" fill="#E8A020" opacity="0.65" />
                    </marker>
                    {/* Combined loop path for the animating dot */}
                    <path
                      id="loopPath"
                      d="M 220,82 Q 370,165 312,238 L 290,272 Q 200,332 112,272 L 88,238 Q 30,165 180,82 L 220,82"
                    />
                  </defs>

                  {/* Arrow: Capture → Deliver (right side) */}
                  <path
                    d="M 220,82 Q 370,165 312,238"
                    stroke="#E8A020"
                    strokeWidth="1.5"
                    fill="none"
                    strokeOpacity="0.45"
                    markerEnd="url(#arrowAmber)"
                  />

                  {/* Arrow: Deliver → Model (bottom) */}
                  <path
                    d="M 290,272 Q 200,332 112,272"
                    stroke="#E8A020"
                    strokeWidth="1.5"
                    fill="none"
                    strokeOpacity="0.45"
                    markerEnd="url(#arrowAmber)"
                  />

                  {/* Arrow: Model → Capture (left side) */}
                  <path
                    d="M 88,238 Q 30,165 180,82"
                    stroke="#E8A020"
                    strokeWidth="1.5"
                    fill="none"
                    strokeOpacity="0.45"
                    markerEnd="url(#arrowAmber)"
                  />

                  {/* Node: Capture (top) */}
                  <circle cx="200" cy="50" r="42" fill="#141414" stroke="#E8A020" strokeWidth="1.5" strokeOpacity="0.55" />
                  <text x="200" y="45" textAnchor="middle" fill="#E8A020" fontSize="10" fontWeight="700" letterSpacing="1.5" fontFamily="ui-monospace, monospace">CAPTURE</text>
                  <text x="200" y="61" textAnchor="middle" fill="#5A5A5A" fontSize="8.5" fontFamily="ui-sans-serif, system-ui">generate signals</text>

                  {/* Node: Deliver (bottom right) */}
                  <circle cx="330" cy="272" r="42" fill="#141414" stroke="#E8A020" strokeWidth="1.5" strokeOpacity="0.55" />
                  <text x="330" y="267" textAnchor="middle" fill="#E8A020" fontSize="10" fontWeight="700" letterSpacing="1.5" fontFamily="ui-monospace, monospace">DELIVER</text>
                  <text x="330" y="283" textAnchor="middle" fill="#5A5A5A" fontSize="8.5" fontFamily="ui-sans-serif, system-ui">capture outcomes</text>

                  {/* Node: Model (bottom left) */}
                  <circle cx="70" cy="272" r="42" fill="#141414" stroke="#E8A020" strokeWidth="1.5" strokeOpacity="0.55" />
                  <text x="70" y="267" textAnchor="middle" fill="#E8A020" fontSize="10" fontWeight="700" letterSpacing="1.5" fontFamily="ui-monospace, monospace">MODEL</text>
                  <text x="70" y="283" textAnchor="middle" fill="#5A5A5A" fontSize="8.5" fontFamily="ui-sans-serif, system-ui">refine prediction</text>

                  {/* Edge labels */}
                  <text x="318" y="152" textAnchor="middle" fill="#4A4A4A" fontSize="8" fontFamily="ui-sans-serif, system-ui">output data</text>
                  <text x="200" y="328" textAnchor="middle" fill="#4A4A4A" fontSize="8" fontFamily="ui-sans-serif, system-ui">outcome data</text>
                  <text x="82" y="152" textAnchor="middle" fill="#4A4A4A" fontSize="8" fontFamily="ui-sans-serif, system-ui">feed back</text>

                  {/* Animated dot — data flowing through the loop */}
                  <circle r="3.5" fill="#E8A020" opacity="0.85">
                    <animateMotion dur="3s" repeatCount="indefinite" calcMode="linear">
                      <mpath href="#loopPath" />
                    </animateMotion>
                    <animate attributeName="opacity" from="0" to="0.85" dur="0.8s" fill="freeze" />
                  </circle>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Indian Data Layer */}
      <section className="py-10 md:py-14 px-5 md:px-8">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="heading-lg mb-4">Built on Indian biomechanical data</h2>
              <p className="body-md text-bone-muted mb-3">
                Indian foot morphology presents distinct characteristics — wider forefoot patterns, different arch geometry, and gait shaped by climate, terrain, and footwear culture.
              </p>
              <p className="body-md text-bone-muted mb-3">
                Western datasets are insufficient for Indian morphology. Most global orthotics training data is built on Western population samples, making it systematically misaligned with the Indian baseline.
              </p>
              <p className="body-md text-bone-muted">
                The model layer is trained on Indian data. This is a technical requirement for clinical accuracy.
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-bone-muted mb-3">Signal differences</p>
              <div className="space-y-2">
                {[
                  { label: 'Forefoot width distribution', desc: 'Wider ratio compared to Western population norms' },
                  { label: 'Arch geometry variation', desc: 'Different arch profiles by region, climate, and footwear history' },
                  { label: 'Gait patterns by terrain', desc: 'Floor surface, footwear culture, and activity context shape patterns' },
                  { label: 'Pathology differences', desc: 'Incidence and expression vary from Western epidemiological data' },
                ].map((item) => (
                  <div key={item.label} className="card-dark p-4">
                    <p className="text-sm font-semibold text-bone mb-0.5">{item.label}</p>
                    <p className="text-xs text-bone-muted">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — System Design Decisions */}
      <section className="py-10 md:py-14 px-5 md:px-8 bg-ink-soft">
        <div className="container-wide">
          <div className="max-w-2xl mb-8">
            <h2 className="heading-lg">System design decisions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {designDecisions.map((d) => (
              <div key={d.title} className="card-dark p-6">
                <div className="w-9 h-9 rounded-lg bg-amber/10 flex items-center justify-center mb-4">
                  <d.icon size={18} className="text-amber" />
                </div>
                <h3 className="text-sm font-semibold text-bone mb-2">{d.title}</h3>
                <p className="text-sm text-bone-muted leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Data / Credibility */}
      <section className="py-8 md:py-10 px-5 md:px-8">
        <div className="container-wide">
          <div className="max-w-xl">
            <h2 className="heading-lg mb-4">Built on real movement data</h2>
            <p className="body-md text-bone-muted">
              Currently collecting baseline data across clinical and community settings.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6 — CTA */}
      <section className="py-10 md:py-14 px-5 md:px-8 bg-ink-soft">
        <div className="container-wide">
          <div className="max-w-xl">
            <p className="text-lg font-medium text-bone mb-6">Start with a movement assessment.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button href="/products/ablip" size="sm">
                Start with ABLIP <ArrowRight size={15} />
              </Button>
              <Button href="/book/you" variant="secondary" size="sm">
                Book Full Assessment <ArrowRight size={15} />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
