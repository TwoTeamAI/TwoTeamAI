import { projectsData, getFeaturedProjects } from '../../data/projectsData'
import { Link } from 'react-router-dom'
import { TechBadge } from '../shared/TechBadge'
import { ProjectVisual } from '../shared/ProjectVisual'

export function CaseStudiesSpotlight() {
  const featuredProjects = getFeaturedProjects(3)

  return (
    <section className="section-padding bg-charcoal/50 border-y border-hairline" aria-labelledby="case-studies-title">
      <div className="container-custom">
        <div className="section-header mb-8 lg:mb-12">
          <span className="section-label">Built, Not Just Promised</span>
          <h2 id="case-studies-title" className="section-title">
            Real products. Real results. Real clients.
          </h2>
          <p className="section-description">
            Three flagship projects that showcase our range: a logistics marketplace, an enterprise operations platform, and an AI knowledge assistant.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-10 lg:mb-12" role="list">
          {featuredProjects.map((project, index) => (
            <article
              key={project.id}
              className="card-interactive group relative overflow-hidden flex flex-col"
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
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 text-caption font-mono text-emerald bg-emerald/10 border border-emerald/20 rounded">
                    {project.industry}
                  </span>
                  <span className="text-caption text-titanium/60">• {project.duration} • {project.teamSize} engineers</span>
                </div>

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

                <div className="pt-4 border-t border-hairline flex items-center gap-3">
                  <Link
                    to={`/work/${project.id}`}
                    className="btn-secondary text-sm flex-1 justify-center"
                  >
                    View Case Study
                  </Link>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost text-sm px-4"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link to="/work" className="btn-secondary inline-flex px-8 py-3">
            View All Projects
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}