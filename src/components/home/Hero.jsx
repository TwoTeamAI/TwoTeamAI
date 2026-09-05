import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ArchitectureSandbox } from './ArchitectureSandbox'

export function Hero() {
  return (
    <section className="relative min-h-0 lg:min-h-screen flex items-center justify-center pt-16 lg:pt-20 overflow-hidden" aria-labelledby="hero-title">
      <div className="absolute inset-0 animate-ambient-glow bg-[radial-gradient(ellipse_at_center,_rgba(245,158,11,0.06)_0%,_transparent_70%)]" aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(9,10,12,0)_0%,_#090A0C_100%)]" aria-hidden="true" />

      <div className="container-custom relative py-8 lg:py-20">
        <div className="max-w-4xl mx-auto text-center mb-8 lg:mb-16 animate-fade-in">
          <span className="section-label stagger-1">Product Engineering for Ambitious Ideas</span>
          <h1 id="hero-title" className="font-display text-display-xl font-bold text-chalk tracking-tight stagger-2 text-balance">
            Have an idea?{' '}
            <span className="text-gradient-amber">Let's build it.</span>
          </h1>
          <p className="text-body-lg lg:text-body text-titanium leading-relaxed max-w-2xl mx-auto mt-6 stagger-3">
            TwoTeamAI builds modern web applications, SaaS platforms, AI-powered solutions, and business automation — from idea to production.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 lg:mb-20 animate-slide-up stagger-4">
          <Link to="/contact" className="btn-primary animate-shimmer text-lg px-8 py-4">
            Start Your Project
          </Link>
          <Link to="/work" className="btn-secondary text-lg px-8 py-4">
            Explore Our Work
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 lg:mb-20 animate-fade-in stagger-5" role="list" aria-label="Service categories">
          {['Web Development', 'SaaS', 'AI', 'Automation', 'WhatsApp', 'Software Modernization'].map((cat, i) => (
            <span key={cat} className="tag-pill stagger-1" style={{ animationDelay: `${(i + 1) * 100}ms` }}>
              {cat}
            </span>
          ))}
        </div>

        <ArchitectureSandbox />
      </div>

      <button
        type="button"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in stagger-6 p-2 rounded-full focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-carbon"
        onClick={() => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll to services"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="1.5" className="animate-bounce">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </button>
    </section>
  )
}