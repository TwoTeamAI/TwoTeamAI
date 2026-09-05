import { Link } from 'react-router-dom'

export function ProblemSection() {
  const traditional = [
    { step: '01', title: 'Requirements Ping-Pong', desc: 'Weeks of back-and-forth docs, changing scope, unclear priorities' },
    { step: '02', title: 'Design Handoff Gaps', desc: 'Designers and developers speak different languages, lost in translation' },
    { step: '03', title: 'Fragmented Execution', desc: 'Separate teams for frontend, backend, DevOps — integration nightmares' },
    { step: '04', title: 'Surprise Delays & Costs', desc: 'Technical debt discovered late, budget overruns, missed deadlines' },
    { step: '05', title: 'Launch & Abandon', desc: 'No post-launch ownership, bugs accumulate, technology rots' },
  ]

  const twoteamai = [
    { step: '01', title: 'Discovery Workshop', desc: 'Structured 2-week sprint to define, validate, and scope your product' },
    { step: '02', title: 'Unified Design & Dev', desc: 'Same team designs and builds — zero handoff friction, pixel-perfect execution' },
    { step: '03', title: 'Full-Stack Ownership', desc: 'One team owns frontend, backend, cloud, AI — seamless integration by default' },
    { step: '04', title: 'Transparent Scope', desc: 'Clear phases, weekly demos, and no surprise scope changes' },
    { step: '05', title: 'Continuous Partnership', desc: 'Post-launch growth: monitoring, iteration, scaling, new features' },
  ]

  return (
    <section className="hidden md:block section-padding bg-charcoal/50 border-y border-hairline" aria-labelledby="problem-title">
      <div className="container-custom">
        <div className="section-header">
          <span className="section-label">The Problem</span>
          <h2 id="problem-title" className="section-title">
            Your idea shouldn&apos;t stop at &apos;What if?&apos;
          </h2>
          <p className="section-description">
            Traditional development is broken. We fixed the process so you don&apos;t have to suffer through it.
          </p>
        </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Column 1: Traditional Development */}
          <div className="flex flex-col gap-4">
            <div className="p-6 bg-carbon/50 border border-hairline rounded-2xl min-h-[116px] flex flex-col justify-center">
              <h3 className="font-display text-heading-md font-semibold text-chalk mb-1">Traditional Development</h3>
              <p className="text-body-sm text-titanium">The old way: fragmented teams, endless handoffs, and costly surprises.</p>
            </div>

            <dl className="space-y-3" role="list">
              {traditional.map((item, index) => (
                <div
                  key={item.step}
                  className="flex items-center gap-4 p-4 glass-card-hover rounded-xl border border-hairline min-h-[92px] group relative overflow-hidden animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-amber/10 border border-amber/20 flex items-center justify-center font-mono font-bold text-body-sm text-amber">
                    {item.step}
                  </div>
                  <div className="flex-1 min-w-0">
                    <dt className="font-display font-semibold text-chalk text-body mb-0.5">{item.title}</dt>
                    <dd className="text-body-sm text-titanium line-clamp-2">{item.desc}</dd>
                  </div>
                  <svg className="w-5 h-5 text-amber/40 group-hover:text-amber transition-colors shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
              ))}
            </dl>
          </div>

          {/* Column 2: TwoTeamAI Fast-Track */}
          <div className="flex flex-col gap-4">
            <div className="p-6 bg-gradient-to-br from-amber/10 via-carbon/40 to-transparent border border-amber/20 rounded-2xl min-h-[116px] flex flex-col justify-center">
              <h3 className="font-display text-heading-md font-semibold text-chalk mb-1">TwoTeamAI Fast-Track</h3>
              <p className="text-body-sm text-emerald">Our way: one team, transparent process, production-ready from day one.</p>
            </div>

            <dl className="space-y-3" role="list">
              {twoteamai.map((item, index) => (
                <div
                  key={item.step}
                  className="flex items-center gap-4 p-4 glass-card-hover rounded-xl border border-emerald/20 bg-emerald/[0.02] min-h-[92px] group relative overflow-hidden animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-emerald/10 border border-emerald/20 flex items-center justify-center font-mono font-bold text-body-sm text-emerald">
                    {item.step}
                  </div>
                  <div className="flex-1 min-w-0">
                    <dt className="font-display font-semibold text-chalk text-body mb-0.5">{item.title}</dt>
                    <dd className="text-body-sm text-titanium line-clamp-2">{item.desc}</dd>
                  </div>
                  <svg className="w-5 h-5 text-emerald group-hover:scale-110 transition-transform shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}