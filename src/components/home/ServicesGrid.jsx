import { servicesData } from '../../data/servicesData'
import { Link } from 'react-router-dom'

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

const highlightCard = {
  id: 'custom',
  title: 'Have Something Different?',
  shortDesc: 'Tell us what you&apos;re trying to build. We&apos;ll help you figure out the right approach.',
  icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M12 6v6l4 2"></path>
    </svg>
  ),
  techStack: ['Custom Scope', 'Flexible Engagement', 'Discovery First'],
  timeline: 'Variable',
}

export function ServicesGrid() {
  const allServices = [...servicesData, highlightCard]

  return (
    <section id="services-section" className="section-padding" aria-labelledby="services-title">
      <div className="container-custom">
        <div className="section-header">
          <span className="section-label">What We Build</span>
          <h2 id="services-title" className="section-title">
            Six core capabilities <br/>
            One team that owns it all
          </h2>
          <p className="section-description">
            From marketing sites to AI-powered platforms. Each service is a complete product capability, not just a skill set.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {allServices.map((service, index) => (
            <article
              key={service.id}
              className={`card-interactive ${service.id === 'custom' ? 'md:col-span-2 lg:col-span-1 lg:col-start-2 border-amber/40 bg-gradient-to-br from-amber/15 via-amber/5 to-transparent shadow-amber-glow/10 hover:border-amber hover:-translate-y-1' : ''}`}
              role="listitem"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {service.id === 'custom' && (
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber text-carbon flex items-center justify-center" aria-hidden="true">
                    {service.icon}
                  </div>
                  <span className="text-caption font-mono font-medium text-amber">START A CONVERSATION</span>
                </div>
              )}

              <h3 className={`font-display text-heading-md font-semibold text-chalk mb-2 ${service.id === 'custom' ? 'text-heading-lg' : ''}`}>{service.title}</h3>
              <p className="text-body text-titanium mb-5">{service.shortDesc}</p>

              {/* <div className="flex flex-wrap gap-2 mb-5" role="list" aria-label={`${service.title} technologies`}>
                {service.techStack.slice(0, 4).map((tech, i) => (
                  <TechBadge key={i} label={tech} variant="amber" />
                ))}
                {service.techStack.length > 4 && (
                  <TechBadge label={`+${service.techStack.length - 4} more`} variant="default" />
                )}
              </div> */}

              <div className="flex items-center gap-4 pt-4 border-t border-hairline">
                {/* <span className="text-body-sm font-mono text-titanium">{service.timeline}</span> */}
                {/* {service.id !== 'custom' && (
                  <Link
                    to={`/services#${service.id}`}
                    className="btn-ghost text-sm flex-1 text-center"
                  >
                    View Details
                  </Link>
                )} */}
                {service.id === 'custom' && (
                  <Link
                    to="/contact"
                    className="btn-primary text-sm flex-1 justify-center group-hover:shadow-amber-glow"
                  >
                    Tell Us What You&apos;re Building
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}