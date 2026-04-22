'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Button from '@/components/ui/Button'
import OtpInput from '@/components/ui/OtpInput'
import PhoneInput, { isValidPhone } from '@/components/ui/PhoneInput'

type PasswordError = 'wrong_credentials' | 'no_account' | 'too_many_attempts' | null
type OtpError = 'invalid_phone' | 'invalid_otp' | 'expired_otp' | null
type LoginMode = 'password' | 'otp'

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

export default function LoginForm() {
  const router = useRouter()

  // ── Password mode ─────────────────────────────────────────────────────────
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [pwError, setPwError] = useState<PasswordError>(null)
  const [attempts, setAttempts] = useState(0)

  // ── OTP mode ──────────────────────────────────────────────────────────────
  const [loginMode, setLoginMode] = useState<LoginMode>('password')
  const [otpPhone, setOtpPhone] = useState('')
  const [otpStep, setOtpStep] = useState<1 | 2>(1)
  const [otp, setOtp] = useState('')
  const [otpError, setOtpError] = useState<OtpError>(null)
  const [isSending, setIsSending] = useState(false)
  const [isVerifying, setIsVerifying] = useState(false)
  const resend = useCountdown(30)

  // ── Password: submit ──────────────────────────────────────────────────────
  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isValidPhone(phone)) { setPwError('wrong_credentials'); return }
    if (!password.trim()) { setPwError('wrong_credentials'); return }
    const newAttempts = attempts + 1
    setAttempts(newAttempts)
    if (newAttempts >= 3) { setPwError('too_many_attempts'); return }
    const stored = typeof window !== 'undefined' ? localStorage.getItem('solearium_user') : null
    if (stored) {
      try {
        const user = JSON.parse(stored)
        if (user.phone === phone && user.password === password) { router.push('/dashboard'); return }
        setPwError('wrong_credentials'); return
      } catch { /* fall through */ }
    }
    setPwError('no_account')
  }

  // ── OTP: send code ────────────────────────────────────────────────────────
  const handleSendCode = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isValidPhone(otpPhone)) { setOtpError('invalid_phone'); return }
    setOtpError(null)
    setIsSending(true)
    await new Promise(r => setTimeout(r, 1200)) // simulate API
    setIsSending(false)
    setOtp('')
    setOtpStep(2)
    resend.begin()
  }

  // ── OTP: verify ───────────────────────────────────────────────────────────
  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    if (otp.length < 6) { setOtpError('invalid_otp'); return }
    setOtpError(null)
    setIsVerifying(true)
    await new Promise(r => setTimeout(r, 1000))
    setIsVerifying(false)
    // Demo: "000000" = expired, "111111" = invalid, anything else = success
    if (otp === '000000') { setOtpError('expired_otp'); return }
    if (otp === '111111') { setOtpError('invalid_otp'); return }
    router.push('/dashboard')
  }

  const handleResend = async () => {
    resend.begin()
    setOtp('')
    setOtpError(null)
    setIsSending(true)
    await new Promise(r => setTimeout(r, 1000))
    setIsSending(false)
  }

  const switchToOtp = () => {
    setLoginMode('otp'); setOtpStep(1)
    setOtpPhone(phone); setOtp(''); setOtpError(null)
  }
  const switchToPassword = () => {
    setLoginMode('password'); setOtpStep(1); setOtp(''); setOtpError(null)
  }

  // ── PASSWORD MODE ─────────────────────────────────────────────────────────
  if (loginMode === 'password') {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-5 py-16" style={{ background: '#0D0D0D' }}>
        <div className="w-full max-w-[420px]">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-bone tracking-tight mb-3">Your movement profile</h1>
            <p className="text-sm text-bone-muted leading-[1.75]">Sign in to access your reports, assessments, and prescription history.</p>
          </div>

          <form onSubmit={handlePasswordSubmit} className="space-y-3" noValidate>
            <PhoneInput value={phone} onChange={v => { setPhone(v); setPwError(null) }} hasError={pwError === 'wrong_credentials'} />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => { setPassword(e.target.value); setPwError(null) }}
              className={inputClass}
              autoComplete="current-password"
            />

            <div className="pt-0.5">
              <button type="button" onClick={switchToOtp} className="text-xs text-bone-muted hover:text-bone-dim transition-colors">
                Sign in with OTP instead →
              </button>
            </div>

            {pwError === 'wrong_credentials' && <p className="text-sm text-red-400">Incorrect phone number or password.</p>}
            {pwError === 'no_account' && (
              <div className="space-y-1.5">
                <p className="text-sm text-bone-muted">No profile found with this number.</p>
                <Link href="/create-profile" className="text-sm font-medium text-amber hover:text-amber-dim transition-colors">
                  Create your movement profile to get started →
                </Link>
              </div>
            )}
            {pwError === 'too_many_attempts' && (
              <p className="text-sm text-bone-muted">Access temporarily paused. Check your email for a reset link.</p>
            )}

            <div className="pt-1">
              <Button type="submit" size="lg" className="w-full justify-center">Continue</Button>
            </div>
          </form>

          <div className="mt-5 text-center">
            <Link href="/forgot-password" className="text-xs text-bone-muted hover:text-bone-dim transition-colors">Forgot password?</Link>
          </div>

          <div className="my-8 border-t border-ink-border" />
          <div className="text-center space-y-2">
            <p className="text-sm text-bone-muted">No profile yet?</p>
            <Link href="/create-profile" className="text-sm font-medium text-bone hover:text-amber transition-colors">
              Create your movement profile →
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // ── OTP MODE — STEP 1 ─────────────────────────────────────────────────────
  if (otpStep === 1) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-5 py-16" style={{ background: '#0D0D0D' }}>
        <div className="w-full max-w-[420px]">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-bone tracking-tight mb-3">Sign in with OTP</h1>
            <p className="text-sm text-bone-muted leading-[1.75]">We'll send a 6-digit code to your number.</p>
          </div>

          <form onSubmit={handleSendCode} className="space-y-3" noValidate>
            <PhoneInput value={otpPhone} onChange={v => { setOtpPhone(v); setOtpError(null) }} hasError={otpError === 'invalid_phone'} autoFocus />
            {otpError === 'invalid_phone' && <p className="text-sm text-red-400">Enter a valid 10-digit number.</p>}
            <div className="pt-1">
              <Button type="submit" size="lg" className="w-full justify-center" disabled={isSending}>
                {isSending ? 'Sending code…' : 'Send code'}
              </Button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <button type="button" onClick={switchToPassword} className="text-xs text-bone-muted hover:text-bone-dim transition-colors">
              ← Use password instead
            </button>
          </div>
        </div>
      </div>
    )
  }

  // ── OTP MODE — STEP 2 ─────────────────────────────────────────────────────
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-5 py-16" style={{ background: '#0D0D0D' }}>
      <div className="w-full max-w-[420px]">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-bone tracking-tight mb-3">Enter your code</h1>
          <p className="text-sm text-bone-muted leading-[1.75]">
            Sent to <span className="text-bone">+91 {otpPhone.slice(0,5)} {otpPhone.slice(5)}</span>
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
            <button type="button" onClick={() => { setOtpStep(1); setOtp(''); setOtpError(null) }} className="text-bone-muted hover:text-bone-dim transition-colors">
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
