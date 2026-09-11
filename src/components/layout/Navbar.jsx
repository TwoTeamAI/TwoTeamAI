import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LogoIcon } from '../shared/Logo'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  const navLinks = [
    { path: '/services', label: 'Services' },
    { path: '/solutions', label: 'Solutions' },
    { path: '/work', label: 'Work' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
<header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-normal ${
        scrolled ? 'bg-carbon/30 backdrop-blur-sm border-b border-white/05 shadow-elevation-4' : 'bg-transparent/0 border-b/0'}
      `}
      role="banner"
    >
      <nav className="container-custom" aria-label="Main navigation">
        <div className={`flex items-center justify-between gap-4 transition-[height] duration-normal ${scrolled ? 'h-14 lg:h-16' : 'h-16 lg:h-20'}`}>
          <Link
            to="/"
            className="flex items-center gap-2.5 shrink-0 focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-carbon rounded-lg"
            aria-label="TwoTeamAI Home"
          >
            <LogoIcon className="w-8 h-8 shrink-0" size={32} />
            <span className="font-display text-heading-md font-semibold text-chalk tracking-tight hidden sm:block">
              TwoTeamAI
            </span>
          </Link>

          <span className="absolute left-1/2 -translate-x-1/2 font-display text-heading-sm font-semibold text-chalk tracking-tight sm:hidden">
            TwoTeamAI
          </span>

          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-body-sm font-medium rounded-lg transition-all duration-fast ${
                  location.pathname === link.path
                    ? 'text-amber bg-amber/10'
                    : 'text-titanium hover:text-chalk hover:bg-mineral/50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <Link
              to="/contact"
              className="btn-primary text-sm px-5 py-2.5"
            >
              Start a Project
            </Link>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg text-titanium hover:text-chalk hover:bg-mineral/50 transition-colors"
            onClick={() => {
              window.dispatchEvent(new Event('open-mobile-drawer'))
              setMobileMenuOpen(true)
            }}
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-drawer"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}