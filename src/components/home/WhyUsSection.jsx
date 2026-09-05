export function WhyUsSection() {
  const differentiators = [
    {
      icon: 'TEAM',
      title: 'One Team, Complete Ownership',
      desc: 'No handoffs between design, dev, and DevOps. The same engineers who architect your system build, deploy, and maintain it.',
      metric: '0 handoffs',
    },
    {
      icon: 'SCOPE',
      title: 'Built Around Your Problem',
      desc: 'We don&apos;t push templates. Every architecture decision traces back to your specific constraints, users, and goals.',
      metric: '100% custom',
    },
    {
      icon: 'AI',
      title: 'AI Where It Actually Helps',
      desc: 'Not AI for marketing. RAG pipelines that cite sources, agents that automate workflows, models that reduce costs — production-grade.',
      metric: '92% accuracy',
    },
    {
      icon: 'OPS',
      title: 'Production-Minded Development',
      desc: 'Observability, CI/CD, security hardening, and rollback capability from day one. We build for the 3 AM pager, not the demo.',
      metric: '99.99% SLA',
    },
    {
      icon: 'CLEAR',
      title: 'Clear From Day One',
      desc: 'A shared plan, regular demos, and direct communication keep every decision visible from kickoff to launch.',
      metric: 'No surprises',
    },
    {
      icon: 'CARE',
      title: 'Continuous Partnership',
      desc: 'Launch is the beginning. Monthly analytics, iteration planning, scaling strategy, and priority support — we grow with you.',
      metric: 'Long-term',
    },
  ]

  return (
    <section className="hidden md:block section-padding" aria-labelledby="why-us-title">
      <div className="container-custom">
        <div className="section-header">
          <span className="section-label">Why TwoTeamAI</span>
          <h2 id="why-us-title" className="section-title">
            Different by design. Better by default.
          </h2>
          <p className="section-description">
            Six reasons companies choose us over traditional agencies, freelancers, or in-house hiring.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {differentiators.map((item, index) => (
            <article
              key={item.title}
              className="card-interactive"
              role="listitem"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber/10 border border-amber/20 flex items-center justify-center text-[10px] font-mono font-bold tracking-wider text-amber" aria-hidden="true">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-display text-heading-sm font-semibold text-chalk">{item.title}</h3>
                  <p className="text-body-sm text-titanium mt-1">{item.desc}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-hairline">
                <div className="flex items-center justify-between">
                  <span className="text-caption font-mono text-amber">{item.metric}</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-titanium/40" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}