'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Button from '@/components/ui/Button'
import OtpInput from '@/components/ui/OtpInput'
import PhoneInput, { isValidPhone, formatPhone } from '@/components/ui/PhoneInput'

type Step = 'contact' | 'otp' | 'password'
type OtpError = 'invalid_otp' | 'expired_otp' | null

function useCountdown(start: number) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (count <= 0) return
    const t = setTimeout(() => setCount(c => c - 1), 1000)
    return () => clearTimeout(t)
  }, [count])
  return { count, canAct: count === 0, begin: () => setCount(start) }
}

const dotIndex: Record<Step, number> = { contact: 0, otp: 1, password: 2 }

function StepDots({ step }: { step: Step }) {
  const active = dotIndex[step]
  return (
    <div className="flex items-center gap-2 mb-8">
      {[0, 1, 2].map(i => (
        <span key={i} className={`w-2 h-2 rounded-full transition-colors ${i <= active ? 'bg-amber' : 'bg-ink-border'}`} />
      ))}
    </div>
  )
}

const inputClass =
  'w-full bg-ink-card border border-ink-border rounded-xl px-4 py-3 text-sm text-bone placeholder:text-bone-muted focus:outline-none focus:border-amber/60 transition-colors'

export default function CreateProfileForm() {
  const router = useRouter()
  const [step, setStep] = useState<Step>('contact')

  // Step 1 — contact
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [step1Error, setStep1Error] = useState('')

  // Step OTP
  const [otp, setOtp] = useState('')
  const [otpError, setOtpError] = useState<OtpError>(null)
  const [isSending, setIsSending] = useState(false)
  const [isVerifying, setIsVerifying] = useState(false)
  const resend = useCountdown(30)

  // Step password
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [pwError, setPwError] = useState('')

  // ── Step 1 submit ──────────────────────────────────────────────────────────
  const handleStep1 = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim()) { setStep1Error('Please enter your full name.'); return }
    if (!isValidPhone(phone)) { setStep1Error('Enter a valid 10-digit phone number.'); return }
    setStep1Error('')
    setIsSending(true)
    await new Promise(r => setTimeout(r, 1200))
    setIsSending(false)
    setOtp(''); setOtpError(null)
    setStep('otp')
    resend.begin()
  }

  // ── OTP verify ─────────────────────────────────────────────────────────────
  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    if (otp.length < 6) { setOtpError('invalid_otp'); return }
    setIsVerifying(true)
    await new Promise(r => setTimeout(r, 1000))
    setIsVerifying(false)
    if (otp === '000000') { setOtpError('expired_otp'); return }
    if (otp === '111111') { setOtpError('invalid_otp'); return }
    setOtpError(null)
    setStep('password')
  }

  const handleResend = async () => {
    resend.begin(); setOtp(''); setOtpError(null)
    setIsSending(true)
    await new Promise(r => setTimeout(r, 1000))
    setIsSending(false)
  }

  // ── Password submit ────────────────────────────────────────────────────────
  const handlePassword = (e: React.FormEvent) => {
    e.preventDefault()
    if (!password.trim()) { setPwError('Please set a password.'); return }
    if (password.length < 8) { setPwError('Password must be at least 8 characters.'); return }
    if (password !== confirmPassword) { setPwError('Passwords do not match.'); return }

    const firstName = name.trim().split(' ')[0]
    localStorage.setItem('solearium_user', JSON.stringify({
      name: name.trim(), firstName,
      phone, email: email.trim(), password,
      identifier: phone,
    }))
    router.push('/dashboard')
  }

  // ── STEP 1: contact ────────────────────────────────────────────────────────
  if (step === 'contact') {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-5 py-16" style={{ background: '#0D0D0D' }}>
        <div className="w-full max-w-[420px]">
          <StepDots step={step} />
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-bone tracking-tight mb-3">Create your movement profile</h1>
            <p className="text-sm text-bone-muted leading-[1.75]">Your assessment builds it. This is where it begins.</p>
          </div>

          <form onSubmit={handleStep1} className="space-y-3" noValidate>
            <input
              type="text"
              placeholder="Full name"
              value={name}
              onChange={e => { setName(e.target.value); setStep1Error('') }}
              className={inputClass}
              autoComplete="name"
            />
            <PhoneInput value={phone} onChange={v => { setPhone(v); setStep1Error('') }} hasError={step1Error.includes('phone')} />
            <input
              type="email"
              placeholder="Email address (optional)"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className={inputClass}
              autoComplete="email"
            />
            <p className="text-xs text-bone-muted leading-[1.75] pt-1">
              We'll use your phone to link your assessments and send reports.
            </p>
            {step1Error && <p className="text-sm text-red-400">{step1Error}</p>}
            <div className="pt-1">
              <Button type="submit" size="lg" className="w-full justify-center" disabled={isSending}>
                {isSending ? 'Sending code…' : 'Continue →'}
              </Button>
            </div>
          </form>

          <div className="mt-8 text-center">
            <p className="text-xs text-bone-muted">
              Already have a profile?{' '}
              <a href="/login" className="text-bone hover:text-amber transition-colors">Sign in</a>
            </p>
          </div>
        </div>
      </div>
    )
  }

  // ── STEP OTP: verify phone ─────────────────────────────────────────────────
  if (step === 'otp') {
    const display = `+91 ${formatPhone(phone)}`
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-5 py-16" style={{ background: '#0D0D0D' }}>
        <div className="w-full max-w-[420px]">
          <StepDots step={step} />
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-bone tracking-tight mb-3">Verify your phone number</h1>
            <p className="text-sm text-bone-muted leading-[1.75]">
              We've sent a 6-digit code to <span className="text-bone">{display}</span>
            </p>
          </div>

          <form onSubmit={handleVerifyOtp} className="space-y-5" noValidate>
            <OtpInput value={otp} onChange={v => { setOtp(v); setOtpError(null) }} hasError={!!otpError} />

            {otpError === 'invalid_otp' && <p className="text-sm text-red-400">Incorrect code. Try again.</p>}
            {otpError === 'expired_otp' && <p className="text-sm text-red-400">Code expired. Request a new one.</p>}

            <div className="flex items-center justify-between text-xs">
              <button
                type="button"
                disabled={!resend.canAct || isSending}
                onClick={handleResend}
                className="text-bone-muted hover:text-bone-dim transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {isSending ? 'Sending…' : resend.canAct ? 'Resend code' : `Resend in ${resend.count}s`}
              </button>
              <button type="button" onClick={() => setStep('contact')} className="text-bone-muted hover:text-bone-dim transition-colors">
                Change number
              </button>
            </div>

            <Button type="submit" size="lg" className="w-full justify-center" disabled={otp.length < 6 || isVerifying}>
              {isVerifying ? 'Verifying…' : 'Verify →'}
            </Button>
          </form>
        </div>
      </div>
    )
  }

  // ── STEP 3: password ───────────────────────────────────────────────────────
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-5 py-16" style={{ background: '#0D0D0D' }}>
      <div className="w-full max-w-[420px]">
        <StepDots step={step} />
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-bone tracking-tight mb-3">Complete your profile</h1>
          <p className="text-sm text-bone-muted leading-[1.75]">Choose a password to secure your profile.</p>
        </div>

        <form onSubmit={handlePassword} className="space-y-3" noValidate>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => { setPassword(e.target.value); setPwError('') }}
            className={inputClass}
            autoComplete="new-password"
            autoFocus
          />
          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={e => { setConfirmPassword(e.target.value); setPwError('') }}
            className={inputClass}
            autoComplete="new-password"
          />
          <p className="text-xs text-bone-muted leading-[1.75] pt-1">You'll use this to access your profile.</p>
          {pwError && <p className="text-sm text-red-400">{pwError}</p>}
          <div className="pt-1">
            <Button type="submit" size="lg" className="w-full justify-center">Activate my profile →</Button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <button type="button" onClick={() => setStep('otp')} className="text-xs text-bone-muted hover:text-bone-dim transition-colors">
            ← Back
          </button>
        </div>
      </div>
    </div>
  )
}
