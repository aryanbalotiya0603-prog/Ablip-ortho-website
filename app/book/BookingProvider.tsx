'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export interface BookingData {
  fullName: string
  contact: string
  intent: string
  age: string
  gender: string
  contextAnswers: Record<string, string>
  assessmentType: 'ablip' | 'clinical' | ''
  scheduledDate: string
  scheduledTime: string
  location: string
  consentGiven: boolean
}

const defaultData: BookingData = {
  fullName: '',
  contact: '',
  intent: '',
  age: '',
  gender: '',
  contextAnswers: {},
  assessmentType: '',
  scheduledDate: '',
  scheduledTime: '',
  location: '',
  consentGiven: false,
}

interface BookingContextType {
  data: BookingData
  update: (partial: Partial<BookingData>) => void
  reset: () => void
}

const BookingContext = createContext<BookingContextType | null>(null)
const STORAGE_KEY = 'solearium_booking'

export function BookingProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<BookingData>(defaultData)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem(STORAGE_KEY)
      if (stored) setData(JSON.parse(stored))
    } catch {}
    setHydrated(true)
  }, [])

  const update = (partial: Partial<BookingData>) => {
    setData(prev => {
      const next = { ...prev, ...partial }
      try { sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next)) } catch {}
      return next
    })
  }

  const reset = () => {
    try { sessionStorage.removeItem(STORAGE_KEY) } catch {}
    setData(defaultData)
  }

  if (!hydrated) return null

  return (
    <BookingContext.Provider value={{ data, update, reset }}>
      {children}
    </BookingContext.Provider>
  )
}

export function useBooking() {
  const ctx = useContext(BookingContext)
  if (!ctx) throw new Error('useBooking must be used within BookingProvider')
  return ctx
}
