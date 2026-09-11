import { servicesData } from '../data/servicesData'
import { Link } from 'react-router-dom'
import { TechBadge } from '../components/shared/TechBadge'
import { SEOHead } from '../hooks/useSEO'

const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'TwoTeamAI Services',
  description: 'Six core product engineering services offered by TwoTeamAI',
  url: 'https://twoteamai.vercel.app/services',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Web Development', url: 'https://twoteamai.vercel.app/services#web-development' },
    { '@type': 'ListItem', position: 2, name: 'SaaS Solutions', url: 'https://twoteamai.vercel.app/services#saas-solutions' },
    { '@type': 'ListItem', position: 3, name: 'AI Solutions', url: 'https://twoteamai.vercel.app/services#ai-solutions' },
    { '@type': 'ListItem', position: 4, name: 'WhatsApp Automation', url: 'https://twoteamai.vercel.app/services#whatsapp-automation' },
    { '@type': 'ListItem', position: 5, name: 'Chatbot Assistants', url: 'https://twoteamai.vercel.app/services#chatbot-assistants' },
    { '@type': 'ListItem', position: 6, name: 'Software Modernization', url: 'https://twoteamai.vercel.app/services#software-modernization' },
  ],
}


export function ServicesPage() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Services — Web Development, SaaS, AI & Automation"
        description="Six core product engineering services: web app development, SaaS platforms, AI & RAG solutions, WhatsApp automation, AI chatbots, and software modernization. Full lifecycle ownership."
        keywords="web development services India, SaaS development company, AI solutions provider, WhatsApp business automation, chatbot development, software modernization, React development, Node.js backend"
        canonical="/services"
        jsonLd={servicesJsonLd}
      />
      <section className="section-padding pt-28 lg:pt-32 relative" aria-labelledby="services-hero-title">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(245,158,11,0.06)_0%,_transparent_70%)]" aria-hidden="true" />
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <span className="section-label">Our Capabilities</span>
            <h1 id="services-hero-title" className="font-display text-display-lg font-bold text-chalk tracking-tight mb-6">
              Six core services. <span className="text-gradient-amber">One team.</span>
            </h1>
            <p className="text-body-lg text-titanium leading-relaxed">
              Each service is a complete product capability — not just a skill set. We own the full lifecycle from architecture to production.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding" aria-labelledby="services-list-title">
        <div className="container-custom">
          <div className="space-y-8" role="list">
            {servicesData.map((service, index) => (
              <article
                key={service.id}
                id={service.id}
                className="card-interactive grid lg:grid-cols-12 gap-8 animate-slide-up"
                role="listitem"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="lg:col-span-4 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-16 h-16 rounded-xl bg-amber/10 border border-amber/20 flex items-center justify-center text-3xl" aria-hidden="true">
                      {serviceIcons[service.id]}
                    </div>
                    <div>
                      <h2 className="font-display text-heading-lg font-semibold text-chalk">{service.title}</h2>
                      <span className="text-body-sm font-mono text-amber">{service.timeline}</span>
                    </div>
                  </div>
                  <p className="text-body-lg text-titanium">{service.longDesc}</p>
                </div>

                <div className="lg:col-span-8">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="font-medium text-chalk mb-3">Key Capabilities</h3>
                      <ul className="space-y-2" role="list">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-body-sm text-sand">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald flex-shrink-0" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium text-chalk mb-3">Technology Stack</h3>
                      <div className="flex flex-wrap gap-2" role="list" aria-label={`${service.title} technologies`}>
                        {service.techStack.map((tech, i) => (
                          <TechBadge key={i} label={tech} variant="amber" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="btn-primary inline-flex"
                    onClick={(e) => {
                      e.preventDefault()
                      const event = new CustomEvent('open-contact-modal', {
                        detail: { prefill: { projectType: service.id.replace('-', ''), message: `Interested in ${service.title}` } }
                      })
                      window.dispatchEvent(event)
                    }}
                  >
                    Start a {service.title} Project
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="font-display text-heading-lg font-semibold text-chalk mb-4">
              Need something different?
            </h2>
            <p className="text-body-lg text-titanium mb-6 max-w-xl mx-auto">
              Custom integrations, legacy migrations, unique architectures — if it runs on code, we can build it.
            </p>
            <Link to="/contact" className="btn-secondary inline-flex px-8 py-3">
              Discuss Custom Work
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal/50 border-y border-hairline" aria-labelledby="process-cta-title">
        <div className="container-custom text-center">
          <h2 id="process-cta-title" className="font-display text-display-md font-bold text-chalk mb-4">
            Ready to see how we work?
          </h2>
          <p className="text-body-lg text-titanium mb-8 max-w-xl mx-auto">
            Our 5-phase process takes you from idea to production with clear deliverables, fixed timelines, and zero surprises.
          </p>
          <Link to="/contact" className="btn-primary inline-flex px-10 py-4 text-lg">
            Book Discovery Workshop
          </Link>
        </div>
      </section>
    </div>
  )
}

const serviceIcons = {
  'web-development': (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
      <path d="M8 21h8M12 17v4"></path>
    </svg>
  ),
  'saas-solutions': (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
      <path d="M8 21h8M12 17v4"></path>
      <path d="M4 11h16"></path>
    </svg>
  ),
  'ai-solutions': (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73C10.4 5.39 10 4.74 10 4a2 2 0 0 1 2-2z"></path>
    </svg>
  ),
  'whatsapp-automation': (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
  ),
  'chatbot-assistants': (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 8V4H8M21 12a2 2 0 0 1-2 2h-7a2 2 0 1 1 0-4h1a8 8 0 0 1 2 6.5M21 8a10 10 0 1 1-20 0M21 12a2 2 0 0 1-2 2"></path>
    </svg>
  ),
  'software-modernization': (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M23 4v6h-6"></path>
      <path d="M1 20v-6h6"></path>
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
    </svg>
  ),
}