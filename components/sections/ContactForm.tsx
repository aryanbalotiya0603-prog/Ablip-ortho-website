'use client'

import { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'

const inquiryTypes = [
  { value: 'clinical',    label: 'Clinical / Medical' },
  { value: 'performance', label: 'Performance / Sports' },
  { value: 'partnership', label: 'Partnership / B2B' },
  { value: 'investor',    label: 'Investor / Press' },
  { value: 'waitlist',    label: 'Hardware / smart insole enquiry' },
  { value: 'research',    label: 'Research Collaboration' },
  { value: 'general',     label: 'Something else' },
]

interface ContactFormProps {
  selectedType?: string
}

export default function ContactForm({ selectedType }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: selectedType || '', message: '' })

  useEffect(() => {
    if (selectedType) {
      setForm((prev) => ({ ...prev, type: selectedType }))
    }
  }, [selectedType])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1000))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="card-dark p-10 text-center">
        <div className="w-14 h-14 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-6">
          <ArrowRight size={22} className="text-teal-light" />
        </div>
        <h2 className="heading-sm mb-3">Message received.</h2>
        <p className="body-md mb-6 max-w-sm mx-auto">
          We will get back to you within one business day. For urgent clinical enquiries, email us directly at business@sole-arium.com.
        </p>
        <Button onClick={() => setSubmitted(false)} variant="secondary" size="sm">
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-bone mb-2">
            Full name <span className="text-amber">*</span>
          </label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full bg-ink-card border border-ink-border rounded-xl px-4 py-3 text-sm text-bone placeholder-bone-muted focus:outline-none focus:border-amber/60 transition-colors"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-bone mb-2">
            Email address <span className="text-amber">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full bg-ink-card border border-ink-border rounded-xl px-4 py-3 text-sm text-bone placeholder-bone-muted focus:outline-none focus:border-amber/60 transition-colors"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-bone mb-2">
            Contact number (optional)
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full bg-ink-card border border-ink-border rounded-xl px-4 py-3 text-sm text-bone placeholder-bone-muted focus:outline-none focus:border-amber/60 transition-colors"
            placeholder="+91 00000 00000"
          />
        </div>
        <div>
          <label htmlFor="type" className="block text-sm font-medium text-bone mb-2">
            Type of enquiry <span className="text-amber">*</span>
          </label>
          <select
            id="type"
            required
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
            className="w-full bg-ink-card border border-ink-border rounded-xl px-4 py-3 text-sm text-bone focus:outline-none focus:border-amber/60 transition-colors appearance-none cursor-pointer"
          >
            <option value="" disabled>Select enquiry type</option>
            {inquiryTypes.map((t) => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-bone mb-2">
          Message <span className="text-amber">*</span>
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full bg-ink-card border border-ink-border rounded-xl px-4 py-3 text-sm text-bone placeholder-bone-muted focus:outline-none focus:border-amber/60 transition-colors resize-none"
          placeholder="Tell us about your situation, question, or what you are looking for..."
        />
      </div>

      <p className="text-xs text-bone-muted">
        By submitting this form you agree to our{' '}
        <a href="/privacy" className="text-amber hover:underline">Privacy Policy</a>.
        We do not share personal information with third parties.
      </p>

      <Button type="submit" size="lg" disabled={loading} className="w-full justify-center">
        {loading ? 'Sending...' : 'Send message'}
      </Button>
    </form>
  )
}
