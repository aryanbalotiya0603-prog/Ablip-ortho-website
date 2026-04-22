import Link from 'next/link'
import { Mail, MapPin, ArrowUpRight } from 'lucide-react'

function LinkedInIcon({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
    </svg>
  )
}

const footerLinks = {
  Platform: [
    { label: 'Complete System', href: '/platform' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Continuous Sensing', href: '/products/smart-insoles' },
  ],
  Solutions: [
    { label: 'Medical Conditions', href: '/solutions/diabetic-foot' },
    { label: 'Injury & Recovery', href: '/solutions/recovery' },
    { label: 'Structural Foot Issues', href: '/solutions/structural-support' },
    { label: 'Athletes & Active', href: '/solutions/performance' },
    { label: 'Standing Professions', href: '/solutions/everyday-movement' },
    { label: 'Movement Awareness', href: '/solutions/everyday-movement' },
  ],
  Company: [
    { label: 'About Us', href: '/company' },
    { label: 'Vision', href: '/vision' },
    { label: 'Research', href: '/research' },
    { label: 'FAQ', href: '/faq' },
  ],
  Contact: [
    { label: 'Contact Us', href: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-ink-soft border-t border-ink-border">
      <div className="container-wide section-pad">
        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group w-fit">
              <LogoMark />
              <span className="text-base font-bold tracking-tight text-bone group-hover:text-amber transition-colors">
                Sole-arium
              </span>
            </Link>
            <p className="text-sm text-bone-muted leading-relaxed max-w-xs mb-6">
              The biomechanical intelligence layer for how India moves — starting beneath the foot.
            </p>
            <div className="space-y-2.5">
              <a href="mailto:business@sole-arium.com" className="flex items-center gap-2 text-sm text-bone-muted hover:text-amber transition-colors">
                <Mail size={14} />
                business@sole-arium.com
              </a>
              <div className="flex items-start gap-2 text-sm text-bone-muted">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                <span>IIT Delhi, New Delhi, India</span>
              </div>
              <div className="flex items-center gap-3 pt-1">
                <a
                  href="mailto:business@sole-arium.com"
                  aria-label="Email Sole-arium"
                  className="text-bone-muted hover:text-amber transition-colors"
                >
                  <Mail size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/company/sole-arium/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Sole-arium on LinkedIn"
                  className="text-bone-muted hover:text-amber transition-colors"
                >
                  <LinkedInIcon size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section}>
                <p className="text-xs font-semibold tracking-widest uppercase text-amber mb-4">{section}</p>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-sm text-bone-muted hover:text-bone-dim transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA strip */}
        <div className="border border-ink-border rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-12 bg-ink-card">
          <div>
            <p className="text-base font-semibold text-bone mb-1">Ready to understand how you move?</p>
            <p className="text-sm text-bone-muted">Book a biomechanical assessment or join the waitlist.</p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link
              href="/products/ablip"
              className="text-sm font-medium text-bone-dim hover:text-amber transition-colors flex items-center gap-1"
            >
              Start with ABLIP <ArrowUpRight size={14} />
            </Link>
            <Link
              href="/book/you"
              className="inline-flex items-center gap-2 bg-amber text-ink text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-amber-dim transition-colors"
            >
              Book Assessment
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-ink-border">
          <p className="text-xs text-bone-muted">
            © {new Date().getFullYear()} Sole-arium Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="text-xs text-bone-muted hover:text-bone-dim transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-bone-muted hover:text-bone-dim transition-colors">Terms of Use</Link>
            <Link href="/faq" className="text-xs text-bone-muted hover:text-bone-dim transition-colors">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function LogoMark() {
  return (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect width="28" height="28" rx="6" fill="#E8A020" fillOpacity="0.12" />
      <path d="M14 6C9.58 6 6 9.58 6 14C6 18.42 9.58 22 14 22C18.42 22 22 18.42 22 14" stroke="#E8A020" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 6L22 10M22 6L18 10" stroke="#E8A020" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="14" cy="14" r="3" fill="#E8A020" fillOpacity="0.6" />
    </svg>
  )
}
