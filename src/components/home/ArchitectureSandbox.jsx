import { useEffect, useState } from 'react'

const architectures = {
  saas: {
    label: 'SaaS Platform',
    stages: [
      { id: 'brief', label: 'Idea Brief', desc: 'Problem definition, target users, success metrics', icon: 'BRIEF' },
      { id: 'spec', label: 'Product Spec & UI/UX', desc: 'User flows, wireframes, design system, prototypes', icon: 'UI/UX' },
      { id: 'engineering', label: 'Full-Stack Engineering', desc: 'Auth, database, API, multi-tenancy, billing', icon: 'API' },
      { id: 'cloud', label: 'Cloud Launch', desc: 'CI/CD, infrastructure, monitoring, scaling', icon: 'CLOUD' },
      { id: 'production', label: 'Live: 99.99% Operational', desc: 'SLA monitoring, feature flags, analytics', icon: 'LIVE' },
    ],
  },
  ai: {
    label: 'AI Assistant / RAG',
    stages: [
      { id: 'brief', label: 'Use Case Definition', desc: 'Data sources, query types, accuracy targets', icon: 'BRIEF' },
      { id: 'spec', label: 'Pipeline Architecture', desc: 'Chunking strategy, embedding model, vector DB', icon: 'RAG' },
      { id: 'engineering', label: 'RAG Development', desc: 'Ingestion, retrieval, re-ranking, generation', icon: 'API' },
      { id: 'cloud', label: 'Production Deploy', desc: 'API, evaluation, guardrails, cost monitoring', icon: 'CLOUD' },
      { id: 'production', label: 'Live: <2s Latency', desc: 'Feedback loops, continuous improvement', icon: 'LIVE' },
    ],
  },
  whatsapp: {
    label: 'WhatsApp Automation',
    stages: [
      { id: 'brief', label: 'Flow Mapping', desc: 'User journeys, templates, integration points', icon: 'FLOW' },
      { id: 'spec', label: 'Conversation Design', desc: 'Message templates, decision trees, fallbacks', icon: 'CHAT' },
      { id: 'engineering', label: 'API Integration', desc: 'Webhooks, CRM sync, broadcast engine', icon: 'API' },
      { id: 'cloud', label: 'Meta Approval & Launch', desc: 'Template approval, phone verification, go-live', icon: 'CLOUD' },
      { id: 'production', label: 'Live: 98% Open Rate', desc: 'Analytics, A/B testing, optimization', icon: 'LIVE' },
    ],
  },
  web: {
    label: 'Web Portal',
    stages: [
      { id: 'brief', label: 'Requirements & IA', desc: 'Content strategy, user roles, SEO plan', icon: 'BRIEF' },
      { id: 'spec', label: 'Design System & Prototypes', desc: 'Components, responsive layouts, accessibility', icon: 'UI/UX' },
      { id: 'engineering', label: 'Frontend & CMS', desc: 'Next.js, headless CMS, performance, SEO', icon: 'WEB' },
      { id: 'cloud', label: 'Deploy & Optimize', desc: 'Edge caching, image optimization, Core Web Vitals', icon: 'CLOUD' },
      { id: 'production', label: 'Live: 100/100 Lighthouse', desc: 'Monitoring, A/B testing, content workflows', icon: 'LIVE' },
    ],
  },
}

export function ArchitectureSandbox() {
  const [activeArch, setActiveArch] = useState('saas')
  const [activeStage, setActiveStage] = useState('null')
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const architectureKeys = Object.keys(architectures)
    const timer = setInterval(() => {
      setActiveArch((currentArch) => {
        const currentIndex = architectureKeys.indexOf(currentArch)
        return architectureKeys[(currentIndex + 1) % architectureKeys.length]
      })
      setActiveStage('null')
    }, 5000)

    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const arch = architectures[activeArch]
  const stageOrder = arch.stages.map(s => s.id)
  const stageIndex = stageOrder.indexOf(activeStage)

  return (
    <div
      className="relative max-w-5xl mx-auto animate-slide-up stagger-6"
      role="region"
      aria-label="Architecture Sandbox"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      onFocus={() => setIsAutoPlaying(false)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsAutoPlaying(true)
      }}
    >
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8" role="tablist" aria-label="Architecture type">
        {Object.entries(architectures).map(([key, value]) => (
          <button
            key={key}
            role="tab"
            aria-selected={activeArch === key}
            aria-controls={`panel-${key}`}
            id={`tab-${key}`}
            onClick={() => { setActiveArch(key); setActiveStage('null'); setIsAutoPlaying(false) }}
            className={`tag-pill ${activeArch === key ? 'tag-pill-active' : ''} px-5 py-2.5 text-body-sm transition-all duration-fast hover:text-chalk hover:bg-mineral/50`}
          >
            {value.label}
          </button>
        ))}
      </div>

            <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber/30 via-transparent to-emerald/30 -translate-x-1/2 lg:block hidden" aria-hidden="true" />

                <div className="relative hidden lg:block lg:pl-12" role="tabpanel" id={`panel-${activeArch}`} aria-labelledby={`tab-${activeArch}`}>
          {arch.stages.map((stage, index) => {
            const isSelected = activeStage === stage.id;

            return (
              <div
                key={stage.id}
                onClick={() => setActiveStage(stage.id)}
                className="group relative flex items-start gap-6 mb-8 last:mb-0 cursor-pointer transition-all duration-300 opacity-75 hover:opacity-100 hover:-translate-y-0.5"
              >
                {/* Stage Icon */}
                <div
                  className={`relative flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-[10px] font-mono font-bold tracking-wider z-10 transition-all duration-300 ${
                    isSelected
                      ? 'bg-gradient-to-br from-amber to-bronze text-carbon shadow-amber-glow scale-105'
                      : 'bg-mineral border border-white/[0.08] text-titanium/60 group-hover:border-amber/50 group-hover:bg-amber/15 group-hover:text-amber group-hover:shadow-[0_0_20px_rgba(245,158,11,0.25)] group-hover:scale-105'
                  }`}
                  aria-hidden="true"
                >
                  {stage.icon}
                </div>

                {/* Stage Card */}
                <div className="flex-1 min-w-0">
                  <div
                    className={`glass-card p-5 rounded-2xl transition-all duration-300 ${
                      isSelected
                        ? 'border-amber/40 bg-mineral/90 shadow-[0_0_25px_rgba(245,158,11,0.18)]'
                        : 'border-white/[0.06] bg-mineral/40 group-hover:border-amber/40 group-hover:bg-mineral/70 group-hover:shadow-[0_8px_30px_rgba(245,158,11,0.18)]'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className={`text-caption font-mono font-semibold px-2 py-0.5 rounded transition-all duration-300 ${
                          isSelected
                            ? 'bg-amber text-carbon font-bold'
                            : 'bg-mineral/60 border border-white/[0.08] text-titanium/70 group-hover:bg-amber/20 group-hover:text-amber group-hover:border-amber/30'
                        }`}
                      >
                        {index + 1}
                      </span>
                      <h3
                        className={`font-display text-heading-sm font-semibold transition-colors duration-300 ${
                          isSelected
                            ? 'text-amber'
                            : 'text-chalk/80 group-hover:text-amber'
                        }`}
                      >
                        {stage.label}
                      </h3>
                    </div>
                    <p
                      className={`text-body-sm leading-relaxed transition-colors duration-300 ${
                        isSelected
                          ? 'text-chalk'
                          : 'text-titanium/70 group-hover:text-chalk/90'
                      }`}
                    >
                      {stage.desc}
                    </p>
                  </div>
                </div>

                {/* Connecting Line */}
                {index < arch.stages.length - 1 && (
                  <div className="absolute left-[27px] top-[56px] w-0.5 h-[calc(100%_-_56px)] bg-gradient-to-b from-amber/30 via-transparent to-emerald/30 hidden lg:block" aria-hidden="true" />
                )}
              </div>
            );
          })}
        </div>
        <div className="lg:hidden space-y-4 mt-8" role="tablist" aria-label="Stage selector">
          {arch.stages.map((stage, index) => (
            <button
              key={stage.id}
              role="tab"
              aria-selected={activeStage === stage.id}
              onClick={() => setActiveStage(stage.id)}
              className={`w-full text-left p-4 rounded-xl transition-all duration-fast ${
                activeStage === stage.id
                  ? 'bg-amber/10 border-amber/30 text-chalk'
                  : 'bg-mineral/50 border-hairline text-titanium hover:text-chalk hover:bg-mineral'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`w-10 h-10 rounded-xl flex items-center justify-center text-[9px] font-mono font-bold tracking-wider ${
                  activeStage === stage.id
                    ? 'bg-gradient-to-br from-amber to-bronze text-carbon'
                    : 'bg-mineral border border-hairline text-titanium/50'
                }`} aria-hidden="true">
                  {stage.icon}
                </span>
                <div>
                  <div className="font-medium text-body-sm">{stage.label}</div>
                  <div className="text-caption text-titanium/60">{stage.desc}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 p-6 bg-gradient-to-r from-amber/5 via-transparent to-emerald/5 border border-hairline rounded-2xl text-center">
        <p className="text-body-lg text-chalk font-medium">
          <span className="text-gradient-amber">Your architecture</span> adapts to what you're building.
        </p>
        <p className="mt-2 text-body text-titanium">
          Select a project type above to see how we take it from idea to production.
        </p>
      </div>
    </div>
  )
}