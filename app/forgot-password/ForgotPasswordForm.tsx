'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import OtpInput from '@/components/ui/OtpInput'
import PhoneInput, { isValidPhone, formatPhone } from '@/components/ui/PhoneInput'

type Step = 1 | 2 | 3 | 4
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

const inputClass =
  'w-full bg-ink-card border border-ink-border rounded-xl px-4 py-3 text-sm text-bone placeholder:text-bone-muted focus:outline-none focus:border-amber/60 transition-colors'

export default function ForgotPasswordForm() {
  const [step, setStep] = useState<Step>(1)

  // Step 1
  const [phone, setPhone] = useState('')
  const [step1Error, setStep1Error] = useState('')
  const [isSending, setIsSending] = useState(false)

  // Step 2
  const [otp, setOtp] = useState('')
  const [otpError, setOtpError] = useState<OtpError>(null)
  const [isVerifying, setIsVerifying] = useState(false)
  const resend = useCountdown(30)

  // Step 3
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [pwError, setPwError] = useState('')

  // ── Step 1 ────────────────────────────────────────────────────────────────
  const handleSendCode = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isValidPhone(phone)) { setStep1Error('Enter a valid 10-digit number.'); return }
    setStep1Error('')
    setIsSending(true)
    await new Promise(r => setTimeout(r, 1200))
    setIsSending(false)
    setOtp(''); setOtpError(null)
    setStep(2); resend.begin()
  }

  // ── Step 2 ────────────────────────────────────────────────────────────────
  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    if (otp.length < 6) { setOtpError('invalid_otp'); return }
    setIsVerifying(true)
    await new Promise(r => setTimeout(r, 1000))
    setIsVerifying(false)
    if (otp === '000000') { setOtpError('expired_otp'); return }
    if (otp === '111111') { setOtpError('invalid_otp'); return }
    setOtpError(null); setStep(3)
  }

  const handleResend = async () => {
    resend.begin(); setOtp(''); setOtpError(null)
    setIsSending(true)
    await new Promise(r => setTimeout(r, 1000))
    setIsSending(false)
  }

  // ── Step 3 ────────────────────────────────────────────────────────────────
  const handleUpdatePassword = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newPassword.trim()) { setPwError('Please enter a new password.'); return }
    if (newPassword.length < 8) { setPwError('Password must be at least 8 characters.'); return }
    if (newPassword !== confirmPassword) { setPwError('Passwords do not match.'); return }
    const stored = typeof window !== 'undefined' ? localStorage.getItem('solearium_user') : null
    if (stored) {
      try {
        const user = JSON.parse(stored)
        localStorage.setItem('solearium_user', JSON.stringify({ ...user, password: newPassword }))
      } catch { /* ignore */ }
    }
    setStep(4)
  }

  // ── STEP 1 ────────────────────────────────────────────────────────────────
  if (step === 1) return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-5 py-16" style={{ background: '#0D0D0D' }}>
      <div className="w-full max-w-[420px]">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-bone tracking-tight mb-3">Reset your password</h1>
          <p className="text-sm text-bone-muted leading-[1.75]">Enter the phone number linked to your profile.</p>
        </div>
        <form onSubmit={handleSendCode} className="space-y-3" noValidate>
          <PhoneInput value={phone} onChange={v => { setPhone(v); setStep1Error('') }} hasError={!!step1Error} autoFocus />
          {step1Error && <p className="text-sm text-red-400">{step1Error}</p>}
          <div className="pt-1">
            <Button type="submit" size="lg" className="w-full justify-center" disabled={isSending}>
              {isSending ? 'Sending code…' : 'Send reset code'}
            </Button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <Link href="/login" className="text-xs text-bone-muted hover:text-bone-dim transition-colors">← Back to sign in</Link>
        </div>
      </div>
    </div>
  )

  // ── STEP 2 ────────────────────────────────────────────────────────────────
  if (step === 2) return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-5 py-16" style={{ background: '#0D0D0D' }}>
      <div className="w-full max-w-[420px]">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-bone tracking-tight mb-3">Enter verification code</h1>
          <p className="text-sm text-bone-muted leading-[1.75]">
            Sent to <span className="text-bone">+91 {formatPhone(phone)}</span>
          </p>
        </div>
        <form onSubmit={handleVerifyOtp} className="space-y-5" noValidate>
          <OtpInput value={otp} onChange={v => { setOtp(v); setOtpError(null) }} hasError={!!otpError} />
          {otpError === 'invalid_otp' && <p className="text-sm text-red-400">Incorrect code. Try again.</p>}
          {otpError === 'expired_otp' && <p className="text-sm text-red-400">Code expired. Request a new one.</p>}
          <div className="flex items-center justify-between text-xs">
            <button type="button" disabled={!resend.canAct || isSending} onClick={handleResend}
              className="text-bone-muted hover:text-bone-dim transition-colors disabled:opacity-40 disabled:cursor-not-allowed">
              {isSending ? 'Sending…' : resend.canAct ? 'Resend code' : `Resend in ${resend.count}s`}
            </button>
            <button type="button" onClick={() => setStep(1)} className="text-bone-muted hover:text-bone-dim transition-colors">
              Try a different number
            </button>
          </div>
          <Button type="submit" size="lg" className="w-full justify-center" disabled={otp.length < 6 || isVerifying}>
            {isVerifying ? 'Verifying…' : 'Verify'}
          </Button>
        </form>
      </div>
    </div>
  )

  // ── STEP 3 ────────────────────────────────────────────────────────────────
  if (step === 3) return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-5 py-16" style={{ background: '#0D0D0D' }}>
      <div className="w-full max-w-[420px]">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-bone tracking-tight mb-3">Create a new password</h1>
          <p className="text-sm text-bone-muted leading-[1.75]">Minimum 8 characters.</p>
        </div>
        <form onSubmit={handleUpdatePassword} className="space-y-3" noValidate>
          <input type="password" placeholder="New password" value={newPassword}
            onChange={e => { setNewPassword(e.target.value); setPwError('') }}
            className={inputClass} autoComplete="new-password" autoFocus />
          <input type="password" placeholder="Confirm new password" value={confirmPassword}
            onChange={e => { setConfirmPassword(e.target.value); setPwError('') }}
            className={inputClass} autoComplete="new-password" />
          {pwError && <p className="text-sm text-red-400">{pwError}</p>}
          <div className="pt-1">
            <Button type="submit" size="lg" className="w-full justify-center">Update password</Button>
          </div>
        </form>
      </div>
    </div>
  )

  // ── STEP 4: success ───────────────────────────────────────────────────────
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-5 py-16" style={{ background: '#0D0D0D' }}>
      <div className="w-full max-w-[420px]">
        <div className="mb-8">
          <div className="w-10 h-px bg-amber mb-6" />
          <h1 className="text-2xl font-bold text-bone tracking-tight mb-3">Password updated.</h1>
          <p className="text-sm text-bone-muted leading-[1.75]">You can now sign in with your new password.</p>
        </div>
        <Button href="/login" size="lg" className="w-full justify-center">Sign in →</Button>
      </div>
    </div>
  )
}
