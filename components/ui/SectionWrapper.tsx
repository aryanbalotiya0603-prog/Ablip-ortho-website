import { cn } from '@/lib/utils'

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
  as?: 'section' | 'div' | 'article'
  grid?: boolean
  glow?: 'amber' | 'teal' | 'none'
}

export default function SectionWrapper({
  children,
  className,
  id,
  as: Tag = 'section',
  glow = 'none',
}: SectionWrapperProps) {
  return (
    <Tag
      id={id}
      className={cn(
        'relative overflow-hidden',
        glow === 'amber' && 'glow-amber',
        glow === 'teal' && 'glow-teal',
        className
      )}
    >
      {children}
    </Tag>
  )
}
