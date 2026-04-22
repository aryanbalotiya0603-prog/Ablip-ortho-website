import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://solearium.in'),
  title: {
    default: 'Sole-arium — Biomechanical Intelligence for How India Moves',
    template: '%s | Sole-arium',
  },
  description:
    'Sole-arium is India\'s biomechanical intelligence platform. AI-powered gait analysis, smart insoles, and precision-crafted orthotics — built for Indian bodies. Starting beneath the foot.',
  keywords: [
    'gait analysis India',
    'smart insoles India',
    'plantar pressure monitoring',
    'diabetic foot monitoring India',
    'biomechanical intelligence',
    'custom orthotics India',
    'movement analysis app',
    'ABLIP gait app',
    'foot pressure sensor',
    'recovery gait tracking',
  ],
  authors: [{ name: 'Sole-arium Technologies' }],
  creator: 'Sole-arium Technologies Pvt. Ltd.',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://solearium.in',
    siteName: 'Sole-arium',
    title: 'Sole-arium — Biomechanical Intelligence for How India Moves',
    description:
      'AI-powered gait analysis and smart insoles built for Indian bodies. Clinical-grade biomechanical intelligence, without the hospital queue.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sole-arium — Biomechanical Intelligence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sole-arium — Biomechanical Intelligence',
    description: 'AI-powered gait analysis and smart insoles built for Indian bodies.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://solearium.in',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0D0D0D',
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Sole-arium',
  url: 'https://solearium.in',
  logo: 'https://solearium.in/logo.svg',
  description:
    "India's biomechanical intelligence platform. AI-powered gait analysis and precision smart insoles built for Indian bodies.",
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@solearium.in',
    contactType: 'customer support',
    areaServed: 'IN',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'New Delhi',
    addressCountry: 'IN',
  },
  sameAs: [],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Sole-arium',
  url: 'https://solearium.in',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://solearium.in/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Anti-flash: apply saved theme class before React hydrates */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light')document.documentElement.classList.add('light');}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-screen bg-ink text-bone antialiased">
        <ThemeProvider>
          <Navbar />
          <main className="pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
