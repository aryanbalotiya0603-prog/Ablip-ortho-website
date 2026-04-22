'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps {
  variant?: Variant
  size?: Size
  href?: string
  external?: boolean
  className?: string
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const base = 'inline-flex items-center justify-center gap-2 font-semibold tracking-tight transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber focus-visible:outline-offset-2 rounded-full'

const variants: Record<Variant, string> = {
  primary: 'bg-amber text-ink hover:bg-amber-dim active:scale-95',
  secondary: 'bg-ink-card border border-ink-border text-bone hover:border-amber/60 hover:text-amber active:scale-95',
  ghost: 'text-bone-dim hover:text-amber hover:bg-amber/5 active:scale-95',
  outline: 'border border-amber text-amber hover:bg-amber hover:text-ink active:scale-95',
}

const sizes: Record<Size, string> = {
  sm: 'text-sm px-4 py-2',
  md: 'text-sm px-6 py-3',
  lg: 'text-base px-8 py-4',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  external,
  className,
  children,
  onClick,
  type = 'button',
  disabled,
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], disabled && 'opacity-50 cursor-not-allowed pointer-events-none', className)

  if (href) {
    return external ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    ) : (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
