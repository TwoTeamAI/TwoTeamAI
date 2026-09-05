import { projectsData } from '../data/projectsData'
import { Link } from 'react-router-dom'
import { TechBadge } from '../components/shared/TechBadge'
import { ProjectVisual } from '../components/shared/ProjectVisual'

export function WorkPage() {
  return (
    <div className="min-h-screen">
      <section className="section-padding pt-28 pb-8 lg:pt-32 lg:pb-12 relative" aria-labelledby="work-hero-title">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(245,158,11,0.06)_0%,_transparent_70%)]" aria-hidden="true" />
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <span className="section-label">Our Portfolio</span>
            <h1 id="work-hero-title" className="font-display text-display-lg font-bold text-chalk tracking-tight mb-6">
              Built, not just promised.
            </h1>
            <p className="text-body-lg text-titanium leading-relaxed">
              Three flagship projects that showcase our range: a logistics marketplace, an enterprise operations platform, and an AI knowledge assistant.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding pt-8 lg:pt-12 pb-0" aria-labelledby="projects-list-title">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6 max-w-[1600px] mx-auto" role="list">
            {projectsData.map((project, index) => (
              <article
                key={project.id}
                className="card-interactive relative overflow-hidden flex flex-col animate-slide-up"
                role="listitem"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-video bg-gradient-to-br from-mineral to-charcoal relative overflow-hidden">
                  <ProjectVisual projectId={project.id} />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-caption font-medium text-chalk bg-carbon/80 backdrop-blur-sm border border-hairline rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="flex-1 flex flex-col p-6">
                  <span className="self-start px-3 py-1 mb-3 text-caption font-medium text-emerald bg-emerald/10 border border-emerald/20 rounded-full">
                    {project.industry}
                  </span>
                  <h3 className="font-display text-heading-lg font-semibold text-chalk mb-2">{project.title}</h3>
                  <p className="text-body text-titanium mb-4 flex-1">{project.tagline}</p>

                  <div className="flex flex-wrap gap-2 mb-5" role="list" aria-label={`${project.title} technologies`}>
                    {project.techStack.slice(0, 4).map((tech, i) => (
                      <TechBadge key={i} label={tech.name} variant="amber" />
                    ))}
                    {project.techStack.length > 4 && (
                      <TechBadge label={`+${project.techStack.length - 4} more`} variant="default" />
                    )}
                  </div>

                  <div className="pt-4 border-t border-hairline">
                    <Link
                      to={`/work/${project.id}`}
                      className="btn-secondary w-full justify-center"
                    >
                      View Full Case Study
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pt-12 lg:pt-16" aria-labelledby="cta-title">
        <div className="container-custom text-center">
          <h2 id="cta-title" className="font-display text-heading-lg font-semibold text-chalk mb-4">
            Have a project in mind?
          </h2>
          <p className="text-body-lg text-titanium mb-8 max-w-xl mx-auto">
            Let&apos;s discuss what you&apos;re building. We&apos;ll share relevant experience and outline how we&apos;d approach it.
          </p>
          <Link to="/contact" className="btn-primary inline-flex px-10 py-4 text-lg">
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  )
}