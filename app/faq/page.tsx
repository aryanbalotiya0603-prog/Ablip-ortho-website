import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import FAQAccordion from '@/components/ui/FAQAccordion'

export const metadata: Metadata = {
  title: 'FAQ — Frequently Asked Questions',
  description:
    'Everything you need to know about Sole-arium, ABLIP, Smart Insoles, biomechanical intelligence, and who this is for. Honest answers to common questions.',
  alternates: { canonical: 'https://solearium.in/faq' },
}

const faqCategories = [
  {
    category: 'About Sole-arium',
    items: [
      {
        question: 'What does Sole-arium actually do?',
        answer: 'Sole-arium is a biomechanical intelligence platform. We assess how you move using your phone camera, model your movement patterns with AI, and translate that data into personalised interventions — from customised insoles to continuous sensor monitoring.',
      },
      {
        question: 'Is this only for people with pain or also for prevention and performance?',
        answer: 'Both. Sole-arium is relevant for people managing pain or clinical conditions, those recovering from injury, athletes optimising movement, and anyone who wants objective data about how their body moves. Most people have never had a single biomechanical data point — that is the gap we address.',
      },
      {
        question: 'How is this different from regular insoles or footwear brands?',
        answer: 'Generic insoles are sized to shoe numbers without measuring the foot that goes inside them. Sole-arium insoles are prescribed from your actual movement and pressure data. The difference is between a standard lens and a prescription lens — one is a guess, the other is specific.',
      },
      {
        question: 'Is Sole-arium a product or a platform?',
        answer: 'A platform. ABLIP (assessment), Smart Insoles (continuous monitoring), and customised orthopaedic footwear each operate independently — but they are designed to work together as a connected biomechanical intelligence system.',
      },
    ],
  },
  {
    category: 'ABLIP (Assessment)',
    items: [
      {
        question: 'What does ABLIP measure?',
        answer: 'ABLIP analyses gait cycle, step symmetry, movement asymmetries, arch characteristics, and load distribution patterns from a short walking video. It uses computer vision and AI models trained on Indian biomechanical data. It does not directly measure pressure — that requires the Smart Insoles.',
      },
      {
        question: 'Do I need any equipment for the assessment?',
        answer: 'No. ABLIP runs on the smartphone you already own. No wearable, no sensor, no appointment required. The assessment takes under five minutes.',
      },
      {
        question: 'How accurate is a phone-based assessment?',
        answer: 'ABLIP is designed to surface meaningful movement signals — gait patterns, asymmetries, and risk indicators — that are typically invisible without specialist equipment. It is not equivalent to a clinical pressure plate study. We are clear about what is measured directly versus inferred.',
      },
      {
        question: 'Can I share my report with a doctor or physiotherapist?',
        answer: 'Yes. The report is structured to be clinician-legible — presenting movement data in a format that supports informed clinical conversation. It is not a diagnostic document, but it is designed to be useful in a clinical context.',
      },
    ],
  },
  {
    category: 'Customised Insoles & Footwear',
    items: [
      {
        question: 'What are customised orthopaedic insoles?',
        answer: 'Insoles designed specifically for your foot geometry, pressure distribution, and movement patterns — not standardised by shoe size. They are prescribed from assessment data and manufactured to correct identified imbalances.',
      },
      {
        question: 'How are your insoles different from generic or pre-made insoles?',
        answer: 'Generic insoles offer comfort padding without correcting anything. Our insoles are prescribed from your actual biomechanical data — targeting specific asymmetries, load imbalances, or structural patterns identified in your assessment.',
      },
      {
        question: 'How are the insoles designed for my body?',
        answer: 'Your ABLIP report or Smart Insole data is modelled to generate a precise prescription. The insole geometry, material layering, and correction zones are derived from that data — not from population averages.',
      },
      {
        question: 'Will I need to replace them over time?',
        answer: 'Yes. Insoles wear over time and movement patterns can change. We recommend reassessment periodically to ensure your insoles remain accurate to your current biomechanics.',
      },
      {
        question: 'Can these help with pain, posture, or performance?',
        answer: 'They can support improvement in these areas when the underlying issue is biomechanical — load imbalances, gait asymmetries, structural foot patterns. We do not guarantee outcomes. The insoles are one part of a broader movement management approach.',
      },
    ],
  },
  {
    category: 'Smart Insoles',
    items: [
      {
        question: 'What do the Smart Insoles track?',
        answer: 'Plantar pressure distribution, temperature at the foot surface, and step symmetry — continuously throughout the day. Data streams to the app and builds a longitudinal movement profile over time.',
      },
      {
        question: 'Do I need them, or is ABLIP enough?',
        answer: 'ABLIP alone provides a meaningful assessment for most users. Smart Insoles add continuous sensor-grade monitoring — relevant for clinical use cases, longitudinal tracking, or situations where a one-time snapshot is insufficient.',
      },
      {
        question: 'Who are Smart Insoles meant for?',
        answer: 'Primarily for people managing clinical conditions (e.g. diabetic foot), those in structured rehabilitation, athletes tracking load over time, and clinicians who need shareable continuous data from patients.',
      },
    ],
  },
  {
    category: 'Medical & Clinical',
    items: [
      {
        question: 'Is Sole-arium a medical device?',
        answer: 'No. Sole-arium products are movement analysis and intervention tools. They are not registered medical devices and do not diagnose medical conditions. Outputs are intended to inform, not replace, clinical assessment.',
      },
      {
        question: 'Does this replace a doctor or physiotherapist?',
        answer: 'No. Sole-arium surfaces movement data that is typically invisible — helping you and your care team make more informed decisions. For any medical concern, consult a qualified clinician.',
      },
      {
        question: 'Can this help with conditions like plantar fasciitis, flat feet, or diabetic foot?',
        answer: 'Our tools are relevant across these conditions — assessing load patterns, identifying risk signals, and providing data to support management. They complement clinical care; they do not replace it or guarantee clinical outcomes.',
      },
      {
        question: 'When should I consult a doctor instead?',
        answer: 'If you have an active wound, severe neuropathy, undiagnosed pain, or any condition requiring medical treatment — consult a clinician first. Sole-arium is a support layer, not a substitute for medical judgement.',
      },
    ],
  },
  {
    category: 'Getting Started',
    items: [
      {
        question: 'How do I know which solution is right for me?',
        answer: 'Start with an ABLIP assessment. The report will indicate what patterns are present and flag the most relevant next step — whether that is customised insoles, ongoing monitoring, or clinical referral. You can also contact us and describe your situation directly.',
      },
      {
        question: 'What is the process after I take the assessment?',
        answer: 'Your report is generated within minutes. If insoles are indicated, the report feeds directly into the prescription process. A Sole-arium advisor can guide you through the next step based on your specific results.',
      },
      {
        question: 'How long does it take to receive customised insoles?',
        answer: 'Delivery timelines will be confirmed at the time of order. We are scaling manufacturing capacity — contact us for current lead times in your city.',
      },
      {
        question: 'Is Sole-arium available across India?',
        answer: 'ABLIP is available as a phone application across India. Customised insole and Smart Insole delivery is currently active in major cities, with ongoing expansion. Contact us for availability in your location.',
      },
    ],
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqCategories.flatMap((cat) =>
    cat.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    }))
  ),
}

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="relative section-pad overflow-hidden">
        <div className="absolute inset-0 grid-bg" aria-hidden="true" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <Badge variant="amber" className="mb-6">FAQ</Badge>
            <h1 className="heading-xl mb-6">Common questions, honest answers.</h1>
            <p className="body-lg max-w-2xl">
              Everything you need to know about Sole-arium, our products, and what we can and cannot do.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ content */}
      <section className="section-pad">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sticky nav */}
            <div className="hidden lg:block lg:col-span-3">
              <div className="sticky top-24 space-y-2">
                <p className="text-xs font-semibold tracking-widest uppercase text-bone-muted mb-4">Categories</p>
                {faqCategories.map((cat) => (
                  <a
                    key={cat.category}
                    href={`#${cat.category.toLowerCase().replace(/[^a-z]+/g, '-')}`}
                    className="block text-sm text-bone-muted hover:text-amber transition-colors py-1"
                  >
                    {cat.category}
                  </a>
                ))}
              </div>
            </div>

            {/* FAQ accordion */}
            <div className="lg:col-span-9 space-y-12">
              {faqCategories.map((cat) => (
                <div key={cat.category} id={cat.category.toLowerCase().replace(/[^a-z]+/g, '-')}>
                  <h2 className="heading-sm mb-2 text-amber">{cat.category}</h2>
                  <div className="w-10 h-px bg-amber mb-6" />
                  <FAQAccordion items={cat.items} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-ink-soft">
        <div className="container-wide text-center">
          <h2 className="heading-md mb-4">Still have questions?</h2>
          <p className="body-md max-w-md mx-auto mb-8">
            We respond personally to every enquiry. If your question isn&rsquo;t covered here, ask us directly.
          </p>
          <Button href="/contact" size="lg">
            Contact us <ArrowRight size={16} />
          </Button>
        </div>
      </section>
    </>
  )
}
