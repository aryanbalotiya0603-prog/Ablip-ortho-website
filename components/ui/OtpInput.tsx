'use client'

import { useRef, KeyboardEvent, ClipboardEvent } from 'react'
import { cn } from '@/lib/utils'

interface OtpInputProps {
  value: string
  onChange: (value: string) => void
  length?: number
  hasError?: boolean
}

export default function OtpInput({ value, onChange, length = 6, hasError = false }: OtpInputProps) {
  const refs = useRef<(HTMLInputElement | null)[]>([])
  const digits = value.split('').concat(Array(length).fill('')).slice(0, length)

  const update = (index: number, char: string) => {
    const d = char.replace(/\D/g, '').slice(-1)
    const next = [...digits]
    next[index] = d
    onChange(next.join(''))
    if (d && index < length - 1) refs.current[index + 1]?.focus()
  }

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      e.preventDefault()
      if (digits[index]) {
        const next = [...digits]; next[index] = ''
        onChange(next.join(''))
      } else if (index > 0) {
        refs.current[index - 1]?.focus()
        const next = [...digits]; next[index - 1] = ''
        onChange(next.join(''))
      }
    } else if (e.key === 'ArrowLeft' && index > 0) {
      refs.current[index - 1]?.focus()
    } else if (e.key === 'ArrowRight' && index < length - 1) {
      refs.current[index + 1]?.focus()
    }
  }

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, length)
    onChange(pasted.padEnd(0, ''))
    const focusAt = Math.min(pasted.length, length - 1)
    refs.current[focusAt]?.focus()
  }

  const boxClass = cn(
    'w-11 h-12 text-center text-base font-semibold text-bone bg-ink-card border rounded-xl focus:outline-none transition-colors',
    hasError ? 'border-red-400/60' : 'border-ink-border focus:border-amber/60'
  )

  return (
    <div className="flex gap-2">
      {digits.map((d, i) => (
        <input
          key={i}
          ref={el => { refs.current[i] = el }}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={d}
          onChange={e => update(i, e.target.value)}
          onKeyDown={e => handleKeyDown(i, e)}
          onPaste={handlePaste}
          onFocus={e => e.target.select()}
          className={boxClass}
          aria-label={`Digit ${i + 1}`}
        />
      ))}
    </div>
  )
}
