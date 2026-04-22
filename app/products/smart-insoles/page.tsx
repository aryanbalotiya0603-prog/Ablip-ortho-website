import type { Metadata } from 'next'
import { ArrowRight, Thermometer, Activity, BarChart3, Wifi, Shield, ChevronRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import FAQAccordion from '@/components/ui/FAQAccordion'

export const metadata: Metadata = {
  title: 'Smart Insoles — Continuous Biomechanical Sensing',
  description:
    'Sole-arium Smart Insoles: real-time plantar pressure mapping, temperature monitoring, and step symmetry tracking. For diabetic foot monitoring, recovery, and performance. Join the waitlist.',
  alternates: { canonical: 'https://solearium.in/products/smart-insoles' },
}

const sensors = [
  {
    icon: Activity,
    title: 'Plantar pressure mapping',
    body: 'A distributed sensor array captures real-time pressure distribution across the entire foot — forefoot, midfoot, and heel. Not inferred from movement. Directly measured.',
  },
  {
    icon: Thermometer,
    title: 'Temperature monitoring',
    body: 'Temperature asymmetry between feet is an early indicator of inflammation and circulatory change — particularly significant for diabetic foot risk monitoring.',
  },
  {
    icon: BarChart3,
    title: 'Step symmetry tracking',
    body: 'Continuous left-right step analysis throughout the day — revealing load asymmetries, fatigue patterns, and recovery trajectory that single assessments cannot capture.',
  },
  {
    icon: Wifi,
    title: 'Continuous data transmission',
    body: 'Sensor data streams to the ABLIP app in real time. View your biomechanical patterns as they unfold — or review longitudinal trends over days and weeks.',
  },
  {
    icon: Shield,
    title: 'Remote clinician access',
    body: 'Share your movement data with your treating clinician directly through the app. Designed for diabetic foot specialists, physiotherapists, and recovery teams.',
  },
]

const useCases = [
  {
    label: 'Diabetic foot monitoring',
    href: '/solutions/diabetic-foot',
    body: 'Continuous pressure and temperature data enables earlier detection of patterns that precede ulcer formation. Designed for at-risk patients, with remote sharing for clinicians.',
  },
  {
    label: 'Post-surgery recovery',
    href: '/solutions/recovery',
    body: 'Load asymmetry data during recovery reveals whether a patient is overloading the healing limb — information that a recovery team can act on before damage occurs.',
  },
  {
    label: 'Athletic performance',
    href: '/solutions/performance',
    body: 'Longitudinal gait data shows how load distribution changes with fatigue, training load, and footwear. Serious athletes use this to eliminate inefficiency and prevent injury.',
  },
]

const smartInsoleFAQs = [
  {
    question: 'When will Smart Insoles be available?',
    answer: 'Smart Insoles are currently in the final stages of development and pilot testing. We are building a waitlist of early access users. Join the list and we will be in touch before general availability.',
  },
  {
    question: 'Do I need ABLIP to use the Smart Insoles?',
    answer: 'The Smart Insoles work with the Sole-arium app, which includes ABLIP functionality. They are designed as part of the same platform ecosystem — your sensor data and assessment data are unified in one profile.',
  },
  {
    question: 'How long does the battery last?',
    answer: 'Battery performance specifications will be confirmed before commercial launch. Our design target is full-day use (12+ hours) on a single charge. We will share confirmed specifications with waitlist users ahead of launch.',
  },
  {
    question: 'Are these the same as the prescription insoles?',
    answer: 'The Smart Insoles are sensor platforms — they can be prescribed to your biomechanical profile (like standard Sole-arium insoles) and also include embedded sensors for continuous monitoring. You can have precision correction and continuous data in the same product.',
  },
  {
    question: 'Can my doctor access my data?',
    answer: 'Yes. The app includes a clinician sharing feature that allows you to grant access to a treating clinician, physiotherapist, or care team member. Data sharing is consent-based and revocable at any time.',
  },
]

export default function SmartInsolesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative section-pad overflow-hidden">
        <div className="absolute inset-0 grid-bg" aria-hidden="true" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-teal-glow rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="teal">Coming Soon</Badge>
              <Badge variant="ghost">Hardware + Firmware</Badge>
            </div>
            <h1 className="heading-xl mb-6">
              Continuous sensing.<br />
              <span className="text-teal-light">Every step.</span>
            </h1>
            <p className="body-lg max-w-2xl mb-8">
              ABLIP gives you snapshots. Smart Insoles give you the full picture — real-time pressure mapping, temperature monitoring, and step symmetry tracking, all day, every day. For users who need continuous biomechanical intelligence, not just periodic assessment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button href="/contact?type=waitlist" size="lg">
                Join Waitlist <ArrowRight size={18} />
              </Button>
              <Button href="/products/ablip" variant="secondary" size="lg">
                Start with ABLIP instead
              </Button>
            </div>
            <p className="text-xs text-bone-muted">
              Smart Insoles are currently in development. Specifications subject to change before final release.
            </p>
          </div>
        </div>
      </section>

      {/* Why continuous matters */}
      <section className="section-pad bg-ink-soft">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="amber-rule" />
              <p className="eyebrow mb-3">Why continuous matters</p>
              <h2 className="heading-lg mb-5">Snapshots miss what daily data reveals.</h2>
              <p className="body-md mb-5">
                A clinical assessment gives you one data point from one moment in time. But your gait changes across the day — with fatigue, with footwear, with terrain, with stress. For diabetic foot monitoring, the highest-risk moment may not be when you visit a clinic.
              </p>
              <p className="body-md mb-5">
                For recovery, the most important signal is whether you are loading a healing joint safely — and that information only matters in real time, not retrospectively.
              </p>
              <p className="body-md">
                Smart Insoles turn biomechanical monitoring from an event into a continuous background process — giving you the full picture instead of a sample.
              </p>
            </div>
            <div className="space-y-3">
              {[
                { label: 'Single assessment', value: '1 data point / month', type: 'baseline' },
                { label: 'Smart Insoles — light use', value: '~24,000 steps / day', type: 'better' },
                { label: 'Smart Insoles — 30 days', value: '~720,000 steps', type: 'best' },
              ].map((row) => (
                <div key={row.label} className={`card-dark p-5 flex items-center justify-between ${row.type === 'best' ? 'border-teal/30' : ''}`}>
                  <p className="text-sm text-bone-dim">{row.label}</p>
                  <p className={`text-sm font-bold ${row.type === 'best' ? 'text-teal-light' : row.type === 'better' ? 'text-amber' : 'text-bone-muted'}`}>{row.value}</p>
                </div>
              ))}
              <p className="text-xs text-bone-muted px-1">More data points → more accurate longitudinal models → better corrections</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sensors */}
      <section className="section-pad">
        <div className="container-wide">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="eyebrow mb-3">Sensing capabilities</p>
            <h2 className="heading-lg mb-4">What the insoles track.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sensors.map((sensor) => (
              <div key={sensor.title} className="card-dark p-7">
                <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center mb-5">
                  <sensor.icon size={20} className="text-teal-light" />
                </div>
                <h3 className="text-base font-semibold text-bone mb-3">{sensor.title}</h3>
                <p className="text-sm text-bone-muted leading-relaxed">{sensor.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="section-pad bg-ink-soft">
        <div className="container-wide">
          <div className="max-w-xl mb-12">
            <p className="eyebrow mb-3">Use cases</p>
            <h2 className="heading-lg mb-4">Who benefits most from continuous sensing.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {useCases.map((uc) => (
              <div key={uc.label} className="card-dark p-7 flex flex-col">
                <h3 className="text-base font-semibold text-bone mb-3">{uc.label}</h3>
                <p className="text-sm text-bone-muted leading-relaxed flex-1">{uc.body}</p>
                <a href={uc.href} className="mt-5 text-xs font-medium text-teal-light hover:text-teal flex items-center gap-1 transition-colors">
                  Learn more <ChevronRight size={12} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad">
        <div className="container-tight">
          <div className="max-w-xl mb-12">
            <p className="eyebrow mb-3">FAQ</p>
            <h2 className="heading-md mb-4">Smart Insoles — common questions.</h2>
          </div>
          <FAQAccordion items={smartInsoleFAQs} />
        </div>
      </section>

      {/* Waitlist CTA */}
      <section className="section-pad bg-ink-soft relative overflow-hidden">
        <div className="absolute inset-0 glow-teal opacity-50" aria-hidden="true" />
        <div className="container-wide relative z-10 text-center">
          <Badge variant="teal" className="mb-6">Coming Soon</Badge>
          <h2 className="heading-lg mb-5">Join the waitlist.</h2>
          <p className="body-md max-w-lg mx-auto mb-8">
            Smart Insoles will be available to a limited early access cohort before general release. Join the list and be first to know.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact?type=waitlist" size="lg">
              Join Waitlist <ArrowRight size={18} />
            </Button>
            <Button href="/products/ablip" variant="secondary" size="lg">
              Start with ABLIP now
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
