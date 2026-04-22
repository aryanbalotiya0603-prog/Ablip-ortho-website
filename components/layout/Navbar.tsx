'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import Button from '@/components/ui/Button'
import ThemeToggle from '@/components/ui/ThemeToggle'

type NavChild = { label: string; href: string }
type NavLink = { label: string; href: string; children?: NavChild[] }

const navLinks: NavLink[] = [
  {
    label: 'Platform',
    href: '/platform',
    children: [
      { label: 'Complete System', href: '/platform' },
      { label: 'How it works', href: '/how-it-works' },
      { label: 'Continuous Sensing', href: '/products/smart-insoles' },
    ],
  },
  {
    label: 'Solutions',
    href: '/solutions',
    children: [
      { label: 'Medical conditions', href: '/solutions/diabetic-foot' },
      { label: 'Injury & recovery', href: '/solutions/recovery' },
      { label: 'Structural foot issues', href: '/solutions/structural-support' },
      { label: 'Athletes & active individuals', href: '/solutions/performance' },
      { label: 'Standing/walking professions', href: '/solutions/everyday-movement' },
      { label: 'General movement awareness', href: '/solutions/everyday-movement' },
    ],
  },
  {
    label: 'Company',
    href: '/company',
    children: [
      { label: 'About us', href: '/company' },
      { label: 'Vision', href: '/vision' },
      { label: 'Research', href: '/research' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setOpen(false)
    setExpandedMobile(null)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const isLinkActive = (link: NavLink) => {
    if (link.children) {
      return (
        pathname === link.href ||
        (pathname?.startsWith(link.href + '/') ?? false) ||
        link.children.some(c => pathname === c.href || (pathname?.startsWith(c.href + '/') ?? false))
      )
    }
    return pathname === link.href || (pathname?.startsWith(link.href + '/') ?? false)
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled ? 'bg-ink/95 backdrop-blur-md border-b border-ink-border' : 'bg-transparent'
        )}
      >
        <div className="container-wide px-5 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
              <LogoMark />
              <span className="text-base font-bold tracking-tight text-bone group-hover:text-amber transition-colors duration-200">
                Sole-arium
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(link.href)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={cn(
                        'flex items-center gap-1 text-sm px-3.5 py-2 rounded-full transition-colors duration-200',
                        isLinkActive(link) ? 'text-amber' : 'text-bone-dim hover:text-bone'
                      )}
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={cn(
                          'transition-transform duration-200',
                          activeDropdown === link.href && 'rotate-180'
                        )}
                      />
                    </button>
                    {activeDropdown === link.href && (
                      <div className="absolute top-full left-0 pt-1">
                        <div className="bg-ink-card border border-ink-border rounded-xl p-1.5 min-w-[180px] shadow-xl">
                          {link.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className={cn(
                                'flex items-center text-sm px-3 py-2 rounded-lg transition-colors',
                                pathname === child.href
                                  ? 'text-amber bg-ink'
                                  : 'text-bone-dim hover:text-bone hover:bg-ink'
                              )}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'text-sm px-3.5 py-2 rounded-full transition-colors duration-200',
                      isLinkActive(link) ? 'text-amber' : 'text-bone-dim hover:text-bone'
                    )}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Desktop right actions */}
            <div className="hidden lg:flex items-center gap-3">
              <ThemeToggle />
              <Link href="/login" className="text-sm text-bone-muted hover:text-bone-dim transition-colors duration-200">
                Login
              </Link>
              <Button href="/book/you" size="sm">Book Assessment</Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center gap-1">
              <ThemeToggle />
              <button
                className="p-2 text-bone-dim hover:text-bone transition-colors"
                onClick={() => setOpen(!open)}
                aria-label={open ? 'Close menu' : 'Open menu'}
              >
                {open ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-ink/95 backdrop-blur-md" onClick={() => setOpen(false)} />
          <nav className="relative flex flex-col h-full pt-20 px-6 pb-8" aria-label="Mobile navigation">
            <div className="flex-1 space-y-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.href}>
                    <button
                      onClick={() => setExpandedMobile(expandedMobile === link.href ? null : link.href)}
                      className={cn(
                        'flex items-center justify-between w-full text-lg font-medium py-3 border-b border-ink-border transition-colors duration-200',
                        isLinkActive(link) ? 'text-amber' : 'text-bone-dim hover:text-bone'
                      )}
                    >
                      {link.label}
                      <ChevronDown
                        size={18}
                        className={cn('transition-transform duration-200', expandedMobile === link.href && 'rotate-180')}
                      />
                    </button>
                    {expandedMobile === link.href && (
                      <div className="py-2 pl-4 space-y-1 border-b border-ink-border">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className={cn(
                              'flex items-center text-base py-2 transition-colors',
                              pathname === child.href ? 'text-amber' : 'text-bone-muted hover:text-bone-dim'
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'flex items-center text-lg font-medium py-3 border-b border-ink-border transition-colors duration-200',
                      pathname === link.href ? 'text-amber' : 'text-bone-dim hover:text-bone'
                    )}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Link href="/login" className="flex items-center text-lg font-medium py-3 border-b border-ink-border text-bone-muted hover:text-bone-dim transition-colors">
                Login
              </Link>
            </div>
            <div className="pt-6">
              <Button href="/book/you" size="lg" className="w-full justify-center">
                Book Assessment
              </Button>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}

function LogoMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect width="28" height="28" rx="6" fill="#E8A020" fillOpacity="0.12" />
      <path
        d="M14 6C9.58 6 6 9.58 6 14C6 18.42 9.58 22 14 22C18.42 22 22 18.42 22 14"
        stroke="#E8A020"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M18 6L22 10M22 6L18 10"
        stroke="#E8A020"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="14" cy="14" r="3" fill="#E8A020" fillOpacity="0.6" />
    </svg>
  )
}
