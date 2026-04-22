'use client'

import { useState } from 'react'
import { Mail, Clock } from 'lucide-react'
import ContactForm from './ContactForm'

function LinkedInIcon({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
    </svg>
  )
}

const intentOptions = [
  { value: 'clinical',    label: 'Clinical / Medical',            description: 'Clinician, hospital, or healthcare provider enquiry' },
  { value: 'performance', label: 'Performance / Sports',          description: 'Athlete, coach, or sports organisation' },
  { value: 'partnership', label: 'Partnership / B2B',             description: 'Institutional or business partnership' },
  { value: 'investor',    label: 'Investor / Press',              description: 'Investment firm, press, or media' },
  { value: 'waitlist',    label: 'Hardware / smart insole enquiry', description: 'Interest in continuous sensing hardware' },
  { value: 'research',    label: 'Research Collaboration',        description: 'Academic or clinical research interest' },
  { value: 'general',     label: 'Something else',                description: 'Anything not covered above' },
]

export default function ContactPageContent() {
  const [selectedType, setSelectedType] = useState('')

  return (
    <section className="section-pad">
      <div className="container-wide">

        {/* Intent routing */}
        <div className="mb-12">
          <p className="text-sm font-semibold text-bone mb-1">What are you reaching out about?</p>
          <p className="text-xs text-bone-muted mb-5">Select the closest match — this pre-fills the form below.</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {intentOptions.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => setSelectedType(opt.value)}
                className={`text-left p-4 rounded-xl border transition-all duration-200 ${
                  selectedType === opt.value
                    ? 'border-amber/60 bg-amber/5'
                    : 'border-ink-border bg-ink-card hover:border-amber/30'
                }`}
              >
                <p className={`text-sm font-medium mb-1 transition-colors ${selectedType === opt.value ? 'text-amber' : 'text-bone-dim'}`}>
                  {opt.label}
                </p>
                <p className="text-xs text-bone-muted leading-snug">{opt.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Form + contact info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Form */}
          <div className="lg:col-span-7">
              <ContactForm selectedType={selectedType} />
          </div>

          {/* Contact details */}
          <div className="lg:col-span-5 space-y-4">
            {[
              {
                icon: Mail,
                title: 'Email',
                primary: 'business@sole-arium.com',
                href: 'mailto:business@sole-arium.com',
                secondary: 'General, product, and clinical enquiries',
              },
              {
                icon: LinkedInIcon,
                title: 'LinkedIn',
                primary: 'Sole-arium on LinkedIn',
                href: 'https://www.linkedin.com/company/sole-arium/',
                secondary: 'Follow us for updates and announcements',
              },
              {
                icon: Clock,
                title: 'Response time',
                primary: 'Within one business day',
                href: null,
                secondary: 'We read every message and respond personally',
              },
            ].map((item) => (
              <div key={item.title} className="card-dark p-6">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-amber/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={16} className="text-amber" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-bone mb-1">{item.title}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-sm text-bone-dim hover:text-amber transition-colors"
                      >
                        {item.primary}
                      </a>
                    ) : (
                      <p className="text-sm text-bone-dim">{item.primary}</p>
                    )}
                    <p className="text-xs text-bone-muted mt-1">{item.secondary}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
