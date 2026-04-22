import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center section-pad">
      <div className="container-tight text-center">
        <div className="relative mb-8">
          <p className="text-[10rem] font-bold text-ink-border leading-none select-none" aria-hidden="true">404</p>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-amber/10 border border-amber/20 flex items-center justify-center">
              <span className="text-2xl font-bold text-amber">?</span>
            </div>
          </div>
        </div>
        <h1 className="heading-lg mb-4">Page not found.</h1>
        <p className="body-md max-w-md mx-auto mb-8">
          The page you are looking for does not exist or has been moved. Let&rsquo;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/" size="lg">Back to home</Button>
          <Button href="/products/ablip" variant="secondary" size="lg">Explore ABLIP</Button>
        </div>
        <div className="mt-12 flex items-center justify-center gap-6 text-sm text-bone-muted">
          <Link href="/products/ablip" className="hover:text-amber transition-colors">ABLIP</Link>
          <Link href="/contact" className="hover:text-amber transition-colors">Contact</Link>
          <Link href="/faq" className="hover:text-amber transition-colors">FAQ</Link>
        </div>
      </div>
    </section>
  )
}
