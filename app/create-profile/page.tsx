import type { Metadata } from 'next'
import CreateProfileForm from './CreateProfileForm'

export const metadata: Metadata = {
  title: 'Create Your Movement Profile',
  robots: { index: false, follow: false },
}

export default function CreateProfilePage() {
  return <CreateProfileForm />
}
