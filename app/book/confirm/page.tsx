'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { User, Stethoscope, CalendarDays, ArrowRight } from 'lucide-react'
import { useBooking } from '../BookingProvider'
import Button from '@/components/ui/Button'

function StepProgress({ current }: { current: number }) {
  return (
    <div className="mb-10">
      <p className="eyebrow mb-3">Step {current} of 4</p>
      <div className="flex gap-1.5">
        {[1, 2, 3, 4].map(s => (
          <div
            key={s}
            className={`h-0.5 flex-1 rounded-full transition-colors duration-300 ${
              s <= current ? 'bg-amber' : 'bg-ink-border'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

function formatDate(iso: string): string {
  if (!iso) return ''
  return new Date(`${iso}T00:00:00`).toLocaleDateString('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

interface SummaryRowProps {
  icon: React.ReactNode
  label: string
  value: string
}

function SummaryRow({ icon, label, value }: SummaryRowProps) {
  return (
    <div className="flex items-start gap-3 py-4 border-b border-ink-border last:border-0">
      <div className="w-8 h-8 rounded-lg bg-amber/10 flex items-center justify-center flex-shrink-0 mt-0.5">
        {icon}
      </div>
      <div>
        <p className="text-xs text-bone-muted uppercase tracking-wider mb-0.5">{label}</p>
        <p className="text-sm font-medium text-bone">{value}</p>
      </div>
    </div>
  )
}

export default function StepConfirm() {
  const router = useRouter()
  const { data, update } = useBooking()

  useEffect(() => {
    if (!data.intent) router.replace('/book/you')
    else if (!data.age) router.replace('/book/context')
    else if (!data.assessmentType) router.replace('/book/schedule')
  }, [data.intent, data.age, data.assessmentType, router])

  const [consent, setConsent] = useState(data.consentGiven)
  const [submitting, setSubmitting] = useState(false)

  const assessmentLabel =
    data.assessmentType === 'ablip' ? 'ABLIP Assessment' : 'Full Clinical Assessment'

  const scheduleLabel =
    data.assessmentType === 'ablip'
      ? 'Remote — Instructions shared after confirmation'
      : [data.location, formatDate(data.scheduledDate), data.scheduledTime]
          .filter(Boolean)
          .join(' · ')

  const handleConfirm = async () => {
    if (!consent) return
    setSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1200))
    update({ consentGiven: true })
    setSubmitting(false)
    router.push('/book/success')
  }

  return (
    <div className="min-h-screen py-16 px-5 md:px-8">
      <div className="max-w-lg mx-auto animate-fade-up">
        <StepProgress current={4} />

        <div className="mb-8">
          <h1 className="heading-lg mb-2">Review your details</h1>
          <p className="body-md">Confirm the information below before we proceed.</p>
        </div>

        {/* Summary card */}
        <div className="bg-ink-card border border-ink-border rounded-2xl px-5 py-1 mb-6">
          <SummaryRow
            icon={<User size={15} className="text-amber" />}
            label="Name"
            value={data.fullName}
          />
          <SummaryRow
            icon={<Stethoscope size={15} className="text-amber" />}
            label="Assessment"
            value={assessmentLabel}
          />
          <SummaryRow
            icon={<CalendarDays size={15} className="text-amber" />}
            label="Schedule"
            value={scheduleLabel}
          />
        </div>

        {/* Confirmation note */}
        <p className="text-sm text-bone-muted leading-relaxed mb-6">
          You&apos;ll receive confirmation on your email and WhatsApp after submitting.
        </p>

        {/* Consent checkbox */}
        <label className="flex items-start gap-3 cursor-pointer group mb-8">
          <div className="relative flex-shrink-0 mt-0.5">
            <input
              type="checkbox"
              checked={consent}
              onChange={e => setConsent(e.target.checked)}
              className="sr-only"
            />
            <div
              className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-colors duration-200 ${
                consent
                  ? 'bg-amber border-amber'
                  : 'bg-ink-card border-ink-border group-hover:border-amber/50'
              }`}
            >
              {consent && (
                <svg viewBox="0 0 12 10" fill="none" className="w-3 h-3">
                  <path
                    d="M1 5l3.5 3.5L11 1"
                    stroke="#0D0D0D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          </div>
          <span className="text-sm text-bone-dim leading-relaxed">
            I understand that Sole-arium outputs support, not replace, clinical diagnosis.
          </span>
        </label>

        {/* CTA */}
        <Button
          variant="primary"
          size="lg"
          className="w-full"
          onClick={handleConfirm}
          disabled={!consent || submitting}
        >
          {submitting ? 'Confirming…' : 'Confirm Assessment'}
          {!submitting && <ArrowRight size={16} />}
        </Button>

        <p className="text-xs text-bone-muted text-center mt-4">
          By confirming, you agree to our{' '}
          <a href="/terms" className="text-amber hover:underline">
            Terms of Use
          </a>{' '}
          and{' '}
          <a href="/privacy" className="text-amber hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  )
}
