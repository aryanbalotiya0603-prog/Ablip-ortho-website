'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowRight, ChevronLeft, ChevronRight, Check, Smartphone, MapPin } from 'lucide-react'
import { useBooking } from '../BookingProvider'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import { cn } from '@/lib/utils'

const ABLIP_INTENTS = [
  "I'm an athlete or active person",
  'I stand or walk for long hours',
  'I want to understand how I move',
]

function getRecommendation(intent: string): 'ablip' | 'clinical' {
  return ABLIP_INTENTS.includes(intent) ? 'ablip' : 'clinical'
}

const TIME_SLOTS = ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM']

const LOCATIONS = [
  'Bangalore – HSR Layout',
  'Mumbai – Bandra',
  'Delhi – Vasant Kunj',
  'Chennai – T. Nagar',
]

const DAYS_SHORT = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

function MiniCalendar({
  value,
  onChange,
}: {
  value: string
  onChange: (date: string) => void
}) {
  const today = new Date()
  const [view, setView] = useState(new Date(today.getFullYear(), today.getMonth(), 1))

  const yr = view.getFullYear()
  const mo = view.getMonth()

  const maxDate = new Date(today)
  maxDate.setDate(today.getDate() + 42)

  const firstDay = new Date(yr, mo, 1).getDay()
  const daysInMonth = new Date(yr, mo + 1, 0).getDate()

  type Cell = { d: number; iso: string; available: boolean } | null
  const cells: Cell[] = []
  for (let i = 0; i < firstDay; i++) cells.push(null)
  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(yr, mo, d)
    const iso = `${yr}-${String(mo + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`
    const day = date.getDay()
    const isWeekday = day !== 0 && day !== 6
    const isFuture = date > today
    const inRange = date <= maxDate
    cells.push({ d, iso, available: isWeekday && isFuture && inRange })
  }

  const monthLabel = view.toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })
  const canGoBack = mo > today.getMonth() || yr > today.getFullYear()
  const canGoForward =
    new Date(yr, mo + 1, 1) <= new Date(today.getFullYear(), today.getMonth() + 2, 1)

  return (
    <div className="bg-ink-card border border-ink-border rounded-2xl p-4">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => canGoBack && setView(new Date(yr, mo - 1, 1))}
          disabled={!canGoBack}
          className="p-1.5 rounded-lg hover:bg-ink-border/60 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronLeft size={15} className="text-bone-dim" />
        </button>
        <span className="text-sm font-medium text-bone">{monthLabel}</span>
        <button
          onClick={() => canGoForward && setView(new Date(yr, mo + 1, 1))}
          disabled={!canGoForward}
          className="p-1.5 rounded-lg hover:bg-ink-border/60 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronRight size={15} className="text-bone-dim" />
        </button>
      </div>

      <div className="grid grid-cols-7 mb-1">
        {DAYS_SHORT.map(d => (
          <div key={d} className="text-center text-xs text-bone-muted py-1">
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-0.5">
        {cells.map((cell, i) => {
          if (!cell) return <div key={`blank-${i}`} />
          const isSelected = value === cell.iso
          return (
            <button
              key={cell.iso}
              disabled={!cell.available}
              onClick={() => onChange(cell.iso)}
              className={cn(
                'text-center text-sm py-1.5 rounded-lg transition-colors',
                !cell.available && 'text-bone-muted opacity-30 cursor-not-allowed',
                cell.available && !isSelected && 'text-bone hover:bg-amber/15 cursor-pointer',
                isSelected && 'bg-amber text-ink font-semibold'
              )}
            >
              {cell.d}
            </button>
          )
        })}
      </div>
    </div>
  )
}

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

type AssessmentType = 'ablip' | 'clinical'

interface AssessmentCardProps {
  type: AssessmentType
  selected: boolean
  recommended: boolean
  onSelect: () => void
}

function AssessmentCard({ type, selected, recommended, onSelect }: AssessmentCardProps) {
  const isAblip = type === 'ablip'
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        'w-full text-left rounded-2xl border p-5 transition-all duration-200',
        selected
          ? 'border-amber bg-amber/[0.07]'
          : 'border-ink-border bg-ink-card hover:border-amber/40'
      )}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2.5">
          <div
            className={cn(
              'w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0',
              selected ? 'bg-amber/20' : 'bg-ink-border/60'
            )}
          >
            {isAblip ? (
              <Smartphone size={16} className={selected ? 'text-amber' : 'text-bone-muted'} />
            ) : (
              <MapPin size={16} className={selected ? 'text-amber' : 'text-bone-muted'} />
            )}
          </div>
          <span className="text-sm font-semibold text-bone">
            {isAblip ? 'ABLIP Assessment' : 'Full Clinical Assessment'}
          </span>
        </div>
        <div
          className={cn(
            'w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors',
            selected ? 'border-amber bg-amber' : 'border-ink-border bg-ink'
          )}
        >
          {selected && <Check size={9} className="text-ink" strokeWidth={3} />}
        </div>
      </div>

      <p className="text-xs text-bone-muted leading-relaxed mb-3">
        {isAblip
          ? 'Remote gait analysis using your phone. Results in 24 hours.'
          : 'In-person orthopaedic assessment. Results in 48–72 hours.'}
      </p>

      <div className="flex items-center justify-between">
        <span className={cn('text-sm font-semibold', selected ? 'text-amber' : 'text-bone-dim')}>
          {isAblip ? '₹99' : 'Pricing shared after scheduling'}
        </span>
        {recommended && (
          <Badge variant="amber" className="text-[10px] px-2 py-0.5">
            Recommended for you
          </Badge>
        )}
      </div>
    </button>
  )
}

export default function StepSchedule() {
  const router = useRouter()
  const { data, update } = useBooking()

  useEffect(() => {
    if (!data.intent) router.replace('/book/you')
    else if (!data.age) router.replace('/book/context')
  }, [data.intent, data.age, router])

  const recommended = getRecommendation(data.intent)

  const [assessmentType, setAssessmentType] = useState<AssessmentType | ''>(
    data.assessmentType || ''
  )
  const [location, setLocation] = useState(data.location)
  const [scheduledDate, setScheduledDate] = useState(data.scheduledDate)
  const [scheduledTime, setScheduledTime] = useState(data.scheduledTime)

  const ablipValid = assessmentType === 'ablip'
  const clinicalValid =
    assessmentType === 'clinical' &&
    location !== '' &&
    scheduledDate !== '' &&
    scheduledTime !== ''
  const isValid = ablipValid || clinicalValid

  const handleContinue = () => {
    if (!isValid) return
    update({ assessmentType, location, scheduledDate, scheduledTime })
    router.push('/book/confirm')
  }

  const cardOrder: AssessmentType[] =
    recommended === 'ablip' ? ['ablip', 'clinical'] : ['clinical', 'ablip']

  return (
    <div className="min-h-screen py-16 px-5 md:px-8">
      <div className="max-w-lg mx-auto animate-fade-up">
        <StepProgress current={3} />

        <div className="mb-8">
          <h1 className="heading-lg mb-2">Choose your assessment</h1>
          <p className="body-md">We&apos;ve pre-selected based on what you told us.</p>
        </div>

        {/* Assessment cards */}
        <div className="space-y-3 mb-6">
          {cardOrder.map(type => (
            <AssessmentCard
              key={type}
              type={type}
              selected={assessmentType === type}
              recommended={recommended === type}
              onSelect={() => {
                setAssessmentType(type)
                if (type === 'ablip') {
                  setLocation('')
                  setScheduledDate('')
                  setScheduledTime('')
                }
              }}
            />
          ))}
        </div>

        {/* ABLIP next-step notice */}
        {assessmentType === 'ablip' && (
          <div className="animate-fade-up bg-ink-card border border-ink-border rounded-2xl px-5 py-4 mb-6">
            <p className="text-sm font-medium text-bone mb-1">Next step</p>
            <p className="text-sm text-bone-muted leading-relaxed">
              Instructions will be shared after confirmation. No calendar booking required.
            </p>
          </div>
        )}

        {/* Clinical scheduling */}
        {assessmentType === 'clinical' && (
          <div className="animate-fade-up space-y-5 mb-6">
            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-bone mb-2">
                Select location <span className="text-amber">*</span>
              </label>
              <div className="space-y-2">
                {LOCATIONS.map(loc => (
                  <button
                    key={loc}
                    type="button"
                    onClick={() => setLocation(loc)}
                    className={cn(
                      'w-full text-left px-4 py-3 rounded-xl border text-sm transition-all duration-200',
                      location === loc
                        ? 'border-amber bg-amber/10 text-bone font-medium'
                        : 'border-ink-border bg-ink-card text-bone-dim hover:border-amber/40 hover:text-bone'
                    )}
                  >
                    {loc}
                  </button>
                ))}
              </div>
            </div>

            {/* Calendar */}
            {location && (
              <div className="animate-fade-up">
                <label className="block text-sm font-medium text-bone mb-2">
                  Select date <span className="text-amber">*</span>
                </label>
                <MiniCalendar value={scheduledDate} onChange={setScheduledDate} />
                <p className="text-xs text-bone-muted mt-2">
                  Available weekdays only. Slots fill up fast.
                </p>
              </div>
            )}

            {/* Time slots */}
            {scheduledDate && (
              <div className="animate-fade-up">
                <label className="block text-sm font-medium text-bone mb-2">
                  Select time <span className="text-amber">*</span>
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {TIME_SLOTS.map(slot => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setScheduledTime(slot)}
                      className={cn(
                        'px-3 py-2.5 rounded-xl border text-xs font-medium transition-all duration-200',
                        scheduledTime === slot
                          ? 'border-amber bg-amber/10 text-bone'
                          : 'border-ink-border bg-ink-card text-bone-muted hover:border-amber/40 hover:text-bone'
                      )}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

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
  )
}
