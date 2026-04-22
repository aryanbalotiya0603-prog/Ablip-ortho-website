'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import { useBooking } from '../BookingProvider'
import Button from '@/components/ui/Button'

const INTENT_OPTIONS = [
  'I have a medical condition',
  "I'm recovering from an injury or surgery",
  'I have structural foot issues',
  "I'm an athlete or active person",
  'I stand or walk for long hours',
  'I want to understand how I move',
]

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

export default function StepYou() {
  const router = useRouter()
  const { data, update } = useBooking()

  const [fullName, setFullName] = useState(data.fullName)
  const [contact, setContact] = useState(data.contact)
  const [intent, setIntent] = useState(data.intent)

  const isValid = fullName.trim().length > 0 && contact.trim().length > 0 && intent !== ''

  const handleContinue = () => {
    if (!isValid) return
    update({ fullName: fullName.trim(), contact: contact.trim(), intent })
    router.push('/book/context')
  }

  return (
    <div className="min-h-screen py-16 px-5 md:px-8">
      <div className="max-w-lg mx-auto animate-fade-up">
        <StepProgress current={1} />

        <div className="mb-8">
          <h1 className="heading-lg mb-2">Start your assessment</h1>
          <p className="body-md">This helps us understand your context before scheduling.</p>
        </div>

        <div className="space-y-6">
          {/* Full name */}
          <div>
            <label className="block text-sm font-medium text-bone mb-2">
              Full name <span className="text-amber">*</span>
            </label>
            <input
              type="text"
              value={fullName}
              onChange={e => setFullName(e.target.value)}
              placeholder="e.g. Priya Menon"
              className="w-full bg-ink-card border border-ink-border rounded-xl px-4 py-3 text-sm text-bone placeholder-bone-muted focus:outline-none focus:border-amber/60 transition-colors"
            />
          </div>

          {/* Mobile or email */}
          <div>
            <label className="block text-sm font-medium text-bone mb-2">
              Mobile number or email <span className="text-amber">*</span>
            </label>
            <input
              type="text"
              value={contact}
              onChange={e => setContact(e.target.value)}
              placeholder="9876543210 or you@email.com"
              className="w-full bg-ink-card border border-ink-border rounded-xl px-4 py-3 text-sm text-bone placeholder-bone-muted focus:outline-none focus:border-amber/60 transition-colors"
            />
            <p className="text-xs text-bone-muted mt-1.5">At least one is required.</p>
          </div>

          {/* Intent */}
          <div>
            <label className="block text-sm font-medium text-bone mb-3">
              What brings you here? <span className="text-amber">*</span>
            </label>
            <div className="space-y-2">
              {INTENT_OPTIONS.map(opt => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setIntent(opt)}
                  className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition-all duration-200 ${
                    intent === opt
                      ? 'border-amber bg-amber/10 text-bone font-medium'
                      : 'border-ink-border bg-ink-card text-bone-dim hover:border-amber/40 hover:text-bone'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="pt-2">
            <Button
              variant="primary"
              size="lg"
              className="w-full"
              onClick={handleContinue}
              disabled={!isValid}
            >
              Continue <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
