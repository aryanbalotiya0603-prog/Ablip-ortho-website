'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
  className?: string
}

export default function FAQAccordion({ items, className }: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className={cn('divide-y divide-ink-border', className)}>
      {items.map((item, i) => (
        <div key={i} className="py-5">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-start justify-between gap-4 text-left group"
            aria-expanded={open === i}
          >
            <span className={cn('text-base font-medium transition-colors duration-200', open === i ? 'text-amber' : 'text-bone group-hover:text-amber')}>
              {item.question}
            </span>
            <span className={cn('flex-shrink-0 mt-0.5 transition-colors duration-200', open === i ? 'text-amber' : 'text-bone-muted')}>
              {open === i ? <Minus size={18} /> : <Plus size={18} />}
            </span>
          </button>
          {open === i && (
            <p className="mt-3 text-sm text-bone-dim leading-relaxed pr-8">
              {item.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}
