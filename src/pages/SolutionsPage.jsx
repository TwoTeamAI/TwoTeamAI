import { solutionsData } from '../data/solutionsData'
import { Link } from 'react-router-dom'

export function SolutionsPage() {
  return (
    <div className="min-h-screen">
      <section className="section-padding pt-38 lg:pt-32 relative" aria-labelledby="solutions-hero-title">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(245,158,11,0.06)_0%,_transparent_70%)]" aria-hidden="true" />
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <span className="section-label">Problem-First Solutions</span>
            <h1 id="solutions-hero-title" className="font-display text-display-lg font-bold text-chalk tracking-tight mb-6">
              We don&apos;t sell services. <span className="text-gradient-amber">We solve problems.</span>
            </h1>
            <p className="text-body-lg text-titanium leading-relaxed">
              Choose the path that matches your situation. Each solution bundles the right services, process, and expertise for your specific challenge.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding" aria-labelledby="solutions-list-title">
        <div className="container-custom">
          <div className="space-y-8" role="list">
            {solutionsData.map((solution, index) => (
              <article
                key={solution.id}
                className={`card-interactive relative overflow-visible grid lg:grid-cols-12 gap-8 ${solution.badge ? 'relative' : ''} animate-slide-up mt-4`}
                role="listitem"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {solution.badge && (
                  <div className="absolute -top-4 left-6 lg:left-8 px-3 py-1 text-caption font-medium text-carbon bg-amber rounded-full">
                    {solution.badge}
                  </div>
                )}

                <div className="lg:col-span-7">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-caption text-titanium/60">{solution.process.length} phases</span>
                  </div>

                  <h2 className="font-display text-heading-lg font-semibold text-chalk mb-3">{solution.title}</h2>
                  <p className="text-body-lg text-emerald font-medium mb-4">{solution.tagline}</p>
                  <p className="text-body text-titanium mb-4">{solution.description}</p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="font-medium text-chalk mb-2">Best For</h3>
                      <p className="text-body-sm text-sand">{solution.targetAudience}</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-chalk mb-2">Key Outcomes</h3>
                      <ul className="space-y-1.5" role="list">
                        {solution.outcomes.slice(0, 3).map((outcome, i) => (
                          <li key={i} className="flex items-center gap-2 text-body-sm text-sand">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald flex-shrink-0" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6" role="list" aria-label="Included services">
                    <span className="text-caption text-titanium/60">Includes:</span>
                    {solution.keyServices.map((svcId, i) => {
                      const svc = {
                        'web-development': 'Web Dev',
                        'saas-solutions': 'SaaS',
                        'ai-solutions': 'AI/RAG',
                        'whatsapp-automation': 'WhatsApp',
                        'chatbot-assistants': 'Chatbots',
                        'software-modernization': 'Modernization',
                      }[svcId]
                      return <span key={i} className="tag-pill text-capitalize">{svc}</span>
                    })}
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="p-4 bg-carbon/50 border border-hairline rounded-xl">
                      <h3 className="font-medium text-chalk mb-3">Our Process</h3>
                      <ol className="space-y-2" role="list">
                        {solution.process.map((step, i) => (
                          <li key={i} className="flex items-start gap-2 text-body-sm text-sand">
                            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber/10 border border-amber/20 text-amber text-caption font-mono font-medium flex items-center justify-center">{i + 1}</span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>

                    {solution.caseStudy && (
                      <Link
                        to={`/work/${solution.caseStudy}`}
                        className="btn-secondary w-full justify-center"
                      >
                        View Case Study
                      </Link>
                    )}
                  </div>

                  <Link
                    to="/contact"
                    className="btn-primary w-full justify-center"
                    onClick={(e) => {
                      e.preventDefault()
                      const event = new CustomEvent('open-contact-modal', {
                        detail: { prefill: { projectType: solution.id, message: `Interested in ${solution.title} solution` } }
                      })
                      window.dispatchEvent(event)
                    }}
                  >
                    Start {solution.title} Project
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}