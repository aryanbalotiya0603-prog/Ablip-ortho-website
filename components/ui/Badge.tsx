import { cn } from '@/lib/utils'

type BadgeVariant = 'amber' | 'teal' | 'ghost' | 'bone'

interface BadgeProps {
  variant?: BadgeVariant
  children: React.ReactNode
  className?: string
}

const variants: Record<BadgeVariant, string> = {
  amber: 'bg-amber/10 text-amber border border-amber/20',
  teal: 'bg-teal/10 text-teal-light border border-teal/20',
  ghost: 'bg-ink-card text-bone-muted border border-ink-border',
  bone: 'bg-bone/5 text-bone-dim border border-bone/10',
}

export default function Badge({ variant = 'ghost', children, className }: BadgeProps) {
  return (
    <span className={cn('inline-flex items-center gap-1.5 text-xs font-medium tracking-wide px-3 py-1 rounded-full', variants[variant], className)}>
      {children}
    </span>
  )
}
