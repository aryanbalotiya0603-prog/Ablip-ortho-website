import type { Metadata } from 'next'
import { BookingProvider } from './BookingProvider'

export const metadata: Metadata = {
  title: 'Book Assessment — Sole-arium',
  description: 'Start your clinical foot assessment with Sole-arium.',
}

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return <BookingProvider>{children}</BookingProvider>
}
