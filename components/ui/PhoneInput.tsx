'use client'

import { cn } from '@/lib/utils'

interface PhoneInputProps {
  value: string           // raw digits, max 10
  onChange: (raw: string) => void
  hasError?: boolean
  disabled?: boolean
  autoFocus?: boolean
}

/** Formats raw digit string: "9876543210" → "98765 43210" */
export function formatPhone(digits: string): string {
  const d = digits.slice(0, 10)
  if (d.length <= 5) return d
  return d.slice(0, 5) + ' ' + d.slice(5)
}

/** Returns true for valid Indian mobile numbers (10 digits, starts 6-9) */
export function isValidPhone(digits: string): boolean {
  return digits.length === 10 && /^[6-9]/.test(digits)
}

export default function PhoneInput({ value, onChange, hasError, disabled, autoFocus }: PhoneInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, '').slice(0, 10)
    onChange(raw)
  }

  return (
    <div
      className={cn(
        'flex items-center bg-ink-card border rounded-xl transition-colors overflow-hidden',
        hasError ? 'border-red-400/60' : 'border-ink-border focus-within:border-amber/60',
        disabled && 'opacity-50'
      )}
    >
      <span className="pl-4 pr-3 text-sm text-bone-muted select-none shrink-0">+91</span>
      <div className="w-px h-4 bg-ink-border shrink-0" />
      <input
        type="tel"
        inputMode="numeric"
        value={formatPhone(value)}
        onChange={handleChange}
        disabled={disabled}
        autoFocus={autoFocus}
        placeholder="Phone number"
        className="flex-1 px-3 py-3 text-sm text-bone bg-transparent focus:outline-none placeholder:text-bone-muted"
        autoComplete="tel"
      />
    </div>
  )
}
