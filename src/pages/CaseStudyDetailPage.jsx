import { useParams } from 'react-router-dom'
import { projectsData, getProjectById } from '../data/projectsData'
import { TechBadge } from '../components/shared/TechBadge'
import { Link } from 'react-router-dom'
import { SEOHead } from '../hooks/useSEO'

export function CaseStudyDetailPage() {
  const { id } = useParams()
  const project = getProjectById(id)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="container-custom text-center">
          <h1 className="font-display text-display-md font-bold text-chalk mb-4">Project Not Found</h1>
          <p className="text-body-lg text-titanium mb-8">The case study you&apos;re looking for doesn&apos;t exist.</p>
          <Link to="/work" className="btn-primary inline-flex">Back to Work</Link>
        </div>
      </div>
    )
  }

  const techNames = project.techStack.map(t => t.name).join(', ')
  const caseStudyJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${project.title} — Case Study`,
    description: project.tagline,
    url: `https://twoteamai.vercel.app/work/${project.id}`,
    author: { '@type': 'Organization', name: 'TwoTeamAI' },
    publisher: {
      '@type': 'Organization',
      name: 'TwoTeamAI',
      logo: { '@type': 'ImageObject', url: 'https://twoteamai.vercel.app/og-image.jpg' },
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://twoteamai.vercel.app' },
        { '@type': 'ListItem', position: 2, name: 'Work', item: 'https://twoteamai.vercel.app/work' },
        { '@type': 'ListItem', position: 3, name: project.title, item: `https://twoteamai.vercel.app/work/${project.id}` },
      ],
    },
  }

  return (
    <div className="min-h-screen">
      <SEOHead
        title={`${project.title} — ${project.category} Case Study`}
        description={`${project.tagline} — Built with ${techNames}. ${project.challenge?.slice(0, 100) || ''}`}
        keywords={`${project.title}, ${project.industry}, ${project.category}, ${techNames}, case study, TwoTeamAI`}
        canonical={`/work/${project.id}`}
        jsonLd={caseStudyJsonLd}
      />

      <section className="section-padding pt-28 lg:pt-32 relative" aria-labelledby="project-title">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(245,158,11,0.06)_0%,_transparent_70%)]" aria-hidden="true" />
        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4 animate-fade-in">
              <span className="px-3 py-1 text-caption font-medium text-chalk bg-amber/10 border border-amber/20 rounded-full">{project.category}</span>
              <span className="px-3 py-1 text-caption font-medium text-emerald bg-emerald/10 border border-emerald/20 rounded-full">{project.industry}</span>
              <span className="text-caption text-titanium/60">• {project.duration}{project.teamSize ? ` • ${project.teamSize} engineers` : ''}</span>
            </div>

            <h1 id="project-title" className="font-display text-display-lg font-bold text-chalk tracking-tight mb-6 animate-slide-up">
              {project.title}
            </h1>
            <p className="text-display-sm text-titanium leading-relaxed animate-slide-up stagger-1">{project.tagline}</p>
          </div>
        </div>
      </section>

      <section className="section-padding pb-0" aria-labelledby="overview-title">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="animate-slide-up">
                <h2 id="overview-title" className="font-display text-heading-lg font-semibold text-chalk mb-4">Project Overview</h2>
                <div className="prose prose-invert max-w-none">
                  <h3 className="font-display text-heading-md font-semibold text-chalk mb-3">The Challenge</h3>
                  <p className="text-body-lg text-titanium mb-6">{project.challenge}</p>

                  <h3 className="font-display text-heading-md font-semibold text-chalk mb-3">Our Solution</h3>
                  <p className="text-body-lg text-titanium mb-6">{project.solution}</p>
                </div>
              </div>

              <div className="animate-slide-up stagger-1">
                <h3 className="font-display text-heading-md font-semibold text-chalk mb-4">Key Features</h3>
                <ul className="grid md:grid-cols-2 gap-3" role="list">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 p-3 glass-card-hover">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald flex-shrink-0" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span className="text-body text-sand">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="animate-slide-up stagger-2">
                <h3 className="font-display text-heading-md font-semibold text-chalk mb-4">Technology Stack</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4" role="list" aria-label="Technologies used">
                  {project.techStack.map((tech, i) => (
                    <div key={i} className="glass-card p-4 text-center">
                      <div className="font-mono text-body font-medium text-chalk">{tech.name}</div>
                      <div className="tag-pill text-capitalize mt-1">{tech.category}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6 animate-slide-up stagger-3">
              <div className="glass-card p-6 sticky top-24">
                <h3 className="font-display text-heading-md font-semibold text-chalk mb-4">Results</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {project.results.map((result, i) => (
                    <div key={i} className="text-center p-4 bg-carbon/50 border border-hairline rounded-xl">
                      <div className="font-display text-display-sm font-bold text-amber">{result.metric}</div>
                      <div className="text-body-sm text-titanium">{result.label}</div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-hairline pt-6 mb-6">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full justify-center mb-3"
                    >
                      View Live Project
                    </a>
                  )}
                  <Link to="/contact" className="btn-secondary w-full justify-center" onClick={(e) => {
                    e.preventDefault()
                    const event = new CustomEvent('open-contact-modal', {
                      detail: { prefill: { projectType: 'custom', message: `Inspired by ${project.title} case study` } }
                    })
                    window.dispatchEvent(event)
                  }}>
                    Start Similar Project
                  </Link>
                </div>

                {project.testimonial && (
                  <div className="border-t border-hairline pt-6">
                    <blockquote className="text-body text-sand italic mb-4">"{project.testimonial.quote}"</blockquote>
                    <footer className="text-body-sm">
                      <div className="font-medium text-chalk">{project.testimonial.author}</div>
                      <div className="text-titanium/60">{project.testimonial.role}, {project.testimonial.company}</div>
                    </footer>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0 bg-charcoal/50 border-y border-hairline" aria-labelledby="related-title">
        <div className="container-custom text-center">
          <h2 id="related-title" className="font-display text-heading-lg font-semibold text-chalk mb-4">
            Explore More Work
          </h2>
          <p className="text-body-lg text-titanium mb-8 max-w-xl mx-auto">
            See how we&apos;ve helped other companies solve complex problems.
          </p>
          <Link to="/work" className="btn-secondary inline-flex px-8 py-3">
            View All Projects
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}