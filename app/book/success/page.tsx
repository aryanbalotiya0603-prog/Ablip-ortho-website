'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { CheckCircle, CalendarPlus, MessageCircle, ArrowRight } from 'lucide-react'
import { useBooking } from '../BookingProvider'

export default function StepSuccess() {
  const router = useRouter()
  const { data, reset } = useBooking()

  useEffect(() => {
    if (!data.consentGiven) router.replace('/book/you')
  }, [data.consentGiven, router])

  const handleViewProfile = () => {
    reset()
    // Route to /dashboard when auth is wired; /login in the meantime
    router.push('/dashboard')
  }

  const calendarUrl = (() => {
    const title = encodeURIComponent('Sole-arium Assessment')
    const details = encodeURIComponent(
      data.assessmentType === 'ablip'
        ? 'ABLIP Remote Assessment — Sole-arium'
        : `Full Clinical Assessment — ${data.location}`
    )
    const date = data.scheduledDate
      ? data.scheduledDate.replace(/-/g, '')
      : new Date().toISOString().split('T')[0].replace(/-/g, '')
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&dates=${date}/${date}`
  })()

  return (
    <div className="min-h-screen py-16 px-5 md:px-8">
      <div className="max-w-lg mx-auto animate-fade-up">

        {/* Check icon */}
        <div className="w-14 h-14 rounded-2xl bg-amber/10 border border-amber/20 flex items-center justify-center mb-8">
          <CheckCircle size={26} className="text-amber" />
        </div>

        {/* Heading */}
        <div className="mb-8">
          <h1 className="heading-lg mb-3">Assessment confirmed.</h1>
          <p className="body-md mb-2">
            You&apos;ll receive details on your email and WhatsApp shortly.
          </p>
          <p className="text-sm text-bone-muted leading-relaxed">
            You can track your assessment status in your movement profile.
          </p>
        </div>

        {/* Booking summary */}
        {data.assessmentType && (
          <div className="bg-ink-card border border-ink-border rounded-2xl px-5 py-4 mb-8">
            <p className="text-xs text-bone-muted uppercase tracking-wider mb-1.5">Booked</p>
            <p className="text-sm font-semibold text-bone">
              {data.assessmentType === 'ablip' ? 'ABLIP Assessment' : 'Full Clinical Assessment'}
            </p>
            {data.assessmentType === 'clinical' && data.scheduledDate && (
              <p className="text-xs text-bone-muted mt-1">
                {data.location} ·{' '}
                {new Date(`${data.scheduledDate}T00:00:00`).toLocaleDateString('en-IN', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                })}{' '}
                · {data.scheduledTime}
              </p>
            )}
          </div>
        )}

        {/* Primary CTA */}
        <button
          onClick={handleViewProfile}
          className="w-full flex items-center justify-between px-5 py-4 bg-amber rounded-2xl text-ink font-semibold text-sm hover:bg-amber-dim transition-colors mb-6 group"
        >
          <span>View your movement profile →</span>
          <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
        </button>

        {/* Divider */}
        <div className="divider mb-6" />

        {/* Secondary links */}
        <div className="flex items-center gap-6">
          <a
            href={calendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-bone-muted hover:text-amber transition-colors"
          >
            <CalendarPlus size={14} />
            Add to calendar
          </a>

          <a
            href="/contact"
            className="flex items-center gap-1.5 text-sm text-bone-muted hover:text-amber transition-colors"
          >
            <MessageCircle size={14} />
            Talk to us
          </a>
        </div>
      </div>
    </div>
  )
}
