'use client'

import { useEffect, useState } from 'react'
import Button from '@/components/ui/Button'

const sections = [
  {
    title: 'Clinical Reports',
    empty: 'No reports yet. Generated after your assessment.',
  },
  {
    title: 'Prescriptions',
    empty: 'No prescriptions on record.',
  },
  {
    title: 'Movement History',
    empty: 'Builds over time. Starts with your first assessment.',
  },
  {
    title: 'Orders',
    empty: 'No orders placed.',
  },
]

export default function DashboardView() {
  const [firstName, setFirstName] = useState<string | null>(null)

  useEffect(() => {
    try {
      const stored = localStorage.getItem('solearium_user')
      if (stored) {
        const user = JSON.parse(stored)
        setFirstName(user.firstName || user.name?.split(' ')[0] || null)
      }
    } catch { /* ignore */ }
  }, [])

  const displayName = firstName ? `${firstName}'s` : 'Your'

  return (
    <div className="min-h-[calc(100vh-4rem)] py-16 px-5" style={{ background: '#0D0D0D' }}>
      <div className="container-tight">

        {/* Page heading */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-bone tracking-tight">
            {displayName} Movement Profile
          </h1>
        </div>

        {/* Primary status card */}
        <div
          className="rounded-2xl border border-ink-border p-7 mb-10"
          style={{ background: '#161616' }}
        >
          <div className="mb-5">
            <p className="text-base font-semibold text-bone mb-2">
              Your profile is active. No movement data recorded yet.
            </p>
            <p className="text-sm text-bone-muted leading-[1.75]">
              Start with a gait analysis to generate your first movement data.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button href="/products/ablip" size="md">
              Start Your Gait Analysis
            </Button>
            <Button href="/contact" variant="outline" size="md">
              Book Full Assessment
            </Button>
          </div>
        </div>

        {/* Empty sections */}
        <div className="space-y-px border border-ink-border rounded-2xl overflow-hidden">
          {sections.map((section, i) => (
            <div
              key={section.title}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-6 py-5"
              style={{
                background: '#111111',
                borderBottom: i < sections.length - 1 ? '1px solid #383838' : 'none',
              }}
            >
              <p className="text-sm font-semibold text-bone">{section.title}</p>
              <p className="text-sm text-bone-muted">{section.empty}</p>
            </div>
          ))}
        </div>

        {/* Sign out */}
        <div className="mt-10 pt-8 border-t border-ink-border">
          <button
            type="button"
            onClick={() => {
              localStorage.removeItem('solearium_user')
              window.location.href = '/login'
            }}
            className="text-xs text-bone-muted hover:text-bone-dim transition-colors"
          >
            Sign out
          </button>
        </div>

      </div>
    </div>
  )
}
