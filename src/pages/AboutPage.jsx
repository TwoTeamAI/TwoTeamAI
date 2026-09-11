import { Link } from 'react-router-dom'
import { SEOHead } from '../hooks/useSEO'

export function AboutPage() {
  const values = [
    {
      icon: '01',
      title: 'Problem-First Engineering',
      desc: 'We start with your problem, not our toolkit. Every architecture decision traces back to your constraints and goals.',
    },
    {
      icon: '02',
      title: 'Complete Ownership',
      desc: 'One team designs, builds, deploys, and maintains. Zero handoffs. Zero "that&apos;s not our department."',
    },
    {
      icon: '03',
      title: 'Production-Minded',
      desc: 'Observability, CI/CD, security, and rollback capability from day one. We build for the 3 AM pager, not the demo.',
    },
    {
      icon: '04',
      title: 'Transparent by Default',
      desc: 'Clear scope, regular demos, and direct communication. You know what is happening before we write a line of code.',
    },
    {
      icon: '05',
      title: 'AI Where It Matters',
      desc: 'Not AI for marketing. RAG pipelines that cite sources, agents that automate workflows, models that reduce real costs.',
    },
    {
      icon: '06',
      title: 'Long-Term Partnership',
      desc: 'Launch is the beginning. Monthly analytics, iteration planning, scaling strategy — we grow with you.',
    },
  ]

  const team = [
    { name: 'Arjun Patel', role: 'Founder & Lead Engineer', bio: '15+ years building scalable web platforms. Ex-FAANG. Obsessed with developer experience and production reliability.' },
    { name: 'Priya Sharma', role: 'Head of AI & Data', bio: 'ML engineer turned product leader. Built RAG systems for legal, finance, and healthcare. PhD in NLP.' },
    { name: 'Rajesh Kumar', role: 'Principal Architect', bio: 'Distributed systems expert. Designed multi-tenant SaaS platforms handling millions of users. Kubernetes & cloud-native advocate.' },
  ]

  return (
    <div className="min-h-screen">
      <SEOHead
        title="About TwoTeamAI — Senior Engineers, Zero Handoffs, Full Ownership"
        description="TwoTeamAI is a focused product engineering studio — two senior engineers, one designer, zero bureaucracy. We own your project from first sketch to millionth user. Based in India, remote-first."
        keywords="about TwoTeamAI, senior software engineers India, product engineering studio, remote development team, full stack engineers, AI engineers India, software agency India, freelance engineering team"
        canonical="/about"
      />
      <section className="section-padding pt-28 lg:pt-32 relative" aria-labelledby="about-hero-title">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(245,158,11,0.06)_0%,_transparent_70%)]" aria-hidden="true" />
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <span className="section-label">About TwoTeamAI</span>
            <h1 id="about-hero-title" className="font-display text-display-lg font-bold text-chalk tracking-tight mb-6">
              You bring the idea. <span className="text-gradient-amber">We take care of the technology.</span>
            </h1>
            <p className="text-body-lg text-titanium leading-relaxed">
              A focused product engineering studio built for ownership. No middlemen. No templates. Just senior engineers who own outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding" aria-labelledby="story-title">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 id="story-title" className="font-display text-display-md font-bold text-chalk mb-6">
                Why we exist
              </h2>
              <div className="prose prose-invert max-w-none space-y-4">
                <p className="text-body-lg text-titanium">
                  Most agencies optimize for billable hours. Most freelancers optimize for their next gig. Most in-house teams are stretched thin.
                </p>
                <p className="text-body-lg text-titanium">
                  We founded TwoTeamAI to fill a gap: a studio that thinks like a product team, moves like a startup, and delivers like an enterprise partner.
                </p>
                <p className="text-body-lg text-titanium">
                  Two engineers. One designer. Zero bureaucracy. We take full ownership — from the first sketch to the millionth user.
                </p>
                <p className="text-body-lg text-titanium">
                  Our name reflects our philosophy: <strong className="text-chalk">Two</strong> engineers, <strong className="text-chalk">Team</strong> mindset, <strong className="text-chalk">AI</strong>-augmented execution.
                </p>
              </div>
            </div>

            <div className="animate-slide-up stagger-1">
              <div className="aspect-square bg-gradient-to-br from-mineral to-charcoal rounded-2xl flex items-center justify-center relative overflow-hidden" role="img" aria-label="TwoTeamAI team workflow from discovery to launch">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(245,158,11,0.1)_0%,_transparent_50%)]" aria-hidden="true" />
                <div className="absolute inset-8 rounded-2xl border border-white/[0.06]" aria-hidden="true" />
                <div className="relative z-10 w-full max-w-sm p-8">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-caption font-mono text-amber">TEAM OPERATING SYSTEM</span>
                    <span className="flex items-center gap-1.5 text-caption text-emerald"><span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" />Live</span>
                  </div>

                  <div className="relative flex items-center justify-between mb-8">
                    <div className="absolute left-8 right-8 top-1/2 h-px bg-gradient-to-r from-amber/60 via-emerald/40 to-amber/60" aria-hidden="true" />
                    {[
                      { label: 'Discover', color: 'bg-amber text-carbon' },
                      { label: 'Build', color: 'bg-emerald text-carbon' },
                      { label: 'Launch', color: 'bg-sky-400 text-carbon' },
                    ].map((stage) => (
                      <div key={stage.label} className="relative flex flex-col items-center gap-2">
                        <span className={`flex items-center justify-center w-11 h-11 rounded-xl ${stage.color} shadow-lg`}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </span>
                        <span className="text-caption text-chalk">{stage.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-amber/20 bg-amber/5 p-4">
                      <div className="text-caption text-titanium/60 mb-2">Core team</div>
                      <div className="flex -space-x-2 mb-2">
                        {['AP', 'PS', 'RK'].map((initials) => (
                          <span key={initials} className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-mineral bg-bronze text-[10px] font-semibold text-chalk">{initials}</span>
                        ))}
                      </div>
                      <div className="text-body-sm font-medium text-chalk">Senior ownership</div>
                    </div>
                    <div className="rounded-xl border border-emerald/20 bg-emerald/5 p-4">
                      <div className="text-caption text-titanium/60 mb-2">Working style</div>
                      <div className="text-body-sm font-medium text-chalk">One team</div>
                      <div className="text-caption text-emerald mt-1">Zero handoffs</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal/50 border-y border-hairline" aria-labelledby="values-title">
        <div className="container-custom">
          <div className="section-header mb-12">
            <span className="section-label">Our Principles</span>
            <h2 id="values-title" className="section-title">
              Six values that guide every decision
            </h2>
            <p className="section-description">
              Not aspirational. Operational. These are the standards we hold ourselves to on every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
            {values.map((value, index) => (
              <article key={value.title} className="card-interactive" role="listitem" style={{ animationDelay: `${index * 80}ms` }}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber/10 border border-amber/20 flex items-center justify-center text-sm font-mono font-bold tracking-wider text-amber" aria-hidden="true">
                    {value.icon}
                  </div>
                  <h3 className="font-display text-heading-sm font-semibold text-chalk pt-1">{value.title}</h3>
                </div>
                <p className="text-body text-sand">{value.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" aria-labelledby="team-title">
        <div className="container-custom">
          <div className="section-header mb-12">
            <span className="section-label">The Team</span>
            <h2 id="team-title" className="section-title">
              Senior engineers. Real ownership.
            </h2>
            <p className="section-description">
              No junior handoffs. No account managers. The people you talk to in discovery are the people building your product.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6" role="list">
            {team.map((member, index) => (
              <article key={member.name} className="card-interactive text-center" role="listitem" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-amber/20 to-bronze/20 border border-amber/30 flex items-center justify-center text-4xl" aria-hidden="true">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="font-display text-heading-sm font-semibold text-chalk mb-1">{member.name}</h3>
                <p className="text-body-sm text-amber mb-4">{member.role}</p>
                <p className="text-body-sm text-sand">{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal/50 border-y border-hairline" aria-labelledby="engineering-title">
        <div className="container-custom">
          <div className="section-header mb-12 max-w-3xl">
            <span className="section-label">Engineering Standard</span>
            <h2 id="engineering-title" className="section-title">
              Our non-negotiables
            </h2>
            <p className="section-description">
              Every project ships with these baked in — not as add-ons, but as the baseline.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto" role="list">
            {[
              { label: 'Test Coverage >80%', desc: 'Unit, integration, e2e. CI blocks on failure.' },
              { label: 'Observability Built-In', desc: 'Logs, metrics, traces, alerts from day one.' },
              { label: 'Security Hardened', desc: 'OWASP Top 10. Dependency scanning. Secrets management.' },
              { label: 'Accessibility (WCAG 2.1)', desc: 'Semantic HTML. Keyboard nav. Screen reader tested.' },
              { label: 'Performance Budgets', desc: 'Core Web Vitals. Bundle analysis. Edge caching.' },
              { label: 'Documentation as Code', desc: 'Architecture decision records. API docs. Runbooks.' },
            ].map((item, index) => (
              <div key={item.label} className="glass-card p-5 glass-card-hover text-center" role="listitem" style={{ animationDelay: `${index * 60}ms` }}>
                <h3 className="font-display text-heading-sm font-semibold text-chalk mb-2">{item.label}</h3>
                <p className="text-body-sm text-sand">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" aria-labelledby="cta-title">
        <div className="container-custom text-center">
          <h2 id="cta-title" className="font-display text-heading-lg font-semibold text-chalk mb-4">
            Want to work with us?
            </h2>
          <p className="text-body-lg text-titanium mb-8 max-w-xl mx-auto">
            We&apos;re selective about the projects we take — but we&apos;re always open to conversations with ambitious builders.
          </p>
          <Link to="/contact" className="btn-primary inline-flex px-10 py-4 text-lg">
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  )
}