export function ProcessSection() {
  const processSteps = [
    {
      number: '01',
      title: 'Discover',
      desc: 'Deep-dive workshop to understand your problem, users, constraints, and success metrics. We validate assumptions before writing code.',
      deliverables: ['Problem statement', 'User personas', 'Success metrics', 'Technical feasibility'],
      duration: '2 weeks',
      icon: 'DISCOVER',
    },
    {
      number: '02',
      title: 'Plan',
      desc: 'Architecture decisions, tech stack selection, database design, API contracts, and a phased roadmap with clear milestones.',
      deliverables: ['System architecture', 'Tech stack rationale', 'Database schema', 'Phased roadmap'],
      duration: '1 week',
      icon: 'PLAN',
    },
    {
      number: '03',
      title: 'Build',
      desc: 'Unified team builds frontend, backend, and infrastructure. Weekly demos, automated testing, and continuous deployment.',
      deliverables: ['Working software', 'Weekly demos', 'Test coverage >80%', 'Documentation'],
      duration: '4-12 weeks',
      icon: 'BUILD',
    },
    {
      number: '04',
      title: 'Launch',
      desc: 'Production deployment with monitoring, alerting, and rollback capability. Security hardening, and go-live checklist.',
      deliverables: ['Deployment', 'Monitoring & alerts', 'Runbooks', 'Launch checklist'],
      duration: '1 week',
      icon: 'SHIP',
    },
    {
      number: '05',
      title: 'Grow',
      desc: 'Post-launch partnership: analytics review, user feedback loops, performance optimization, and feature iterations.',
      deliverables: ['Monthly reports', 'Iteration planning', 'Scaling strategy', 'Priority support'],
      duration: 'Ongoing',
      icon: 'GROW',
    },
  ]

  return (
    <section className="section-padding" aria-labelledby="process-title">
      <div className="container-custom">
        <div className="section-header">
          <span className="section-label">How We Work</span>
          <h2 id="process-title" className="section-title">
            A 5-step roadmap from idea to production — and beyond.
          </h2>
          <p className="section-description">
            No waterfall. No surprises. Each phase has clear deliverables, fixed timelines, and go/no-go gates.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6" role="list">
          {processSteps.map((step, index) => (
            <article
              key={step.number}
              className="card-interactive relative overflow-hidden"
              role="listitem"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber/10 to-transparent rounded-bl-3xl" aria-hidden="true" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display text-3xl font-bold text-amber/50">{step.number}</span>
                  <span className="text-[10px] font-mono font-bold tracking-wider text-amber" aria-hidden="true">{step.icon}</span>
                </div>

                <h3 className="font-display text-heading-md font-semibold text-chalk mb-3">{step.title}</h3>
                <p className="text-body text-titanium mb-5">{step.desc}</p>

                <div className="mb-5">
                  <h4 className="font-medium text-body-sm text-chalk mb-2">Deliverables</h4>
                  <ul className="space-y-1.5" role="list">
                    {step.deliverables.map((d, i) => (
                      <li key={i} className="flex items-center gap-2 text-body-sm text-sand">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald flex-shrink-0" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-hairline flex items-center justify-between">
                  <span className="text-body-sm font-mono text-amber">{step.duration}</span>
                  <span className="text-caption text-titanium/60">Phase {index + 1} of 5</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 lg:mt-16 text-center">
          <p className="text-body-lg text-titanium mb-4">
            Ready to start Phase 1?
          </p>
          <a href="/contact" className="btn-primary inline-flex px-8 py-4 text-lg">
            Book Discovery Workshop
          </a>
        </div>
      </div>
    </section>
  )
}