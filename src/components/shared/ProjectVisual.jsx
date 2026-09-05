function CargoFlowVisual() {
  return (
    <div className="w-full max-w-xs rounded-xl border border-emerald/20 bg-[#101B1A] p-4 shadow-2xl" aria-hidden="true">
      <div className="flex items-center justify-between mb-4">
        <span className="text-caption font-mono text-emerald">LIVE FLEET MAP</span>
        <span className="flex items-center gap-1 text-[10px] text-emerald"><span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" />12 active</span>
      </div>
      <div className="relative h-24 rounded-lg bg-[#172A29] overflow-hidden">
        <div className="absolute inset-x-5 top-5 h-px bg-emerald/30 rotate-12" />
        <div className="absolute inset-x-8 top-12 h-px bg-emerald/20 -rotate-6" />
        <div className="absolute left-10 top-7 w-2.5 h-2.5 rounded-full bg-amber ring-4 ring-amber/20" />
        <div className="absolute right-12 bottom-5 w-2.5 h-2.5 rounded-full bg-emerald ring-4 ring-emerald/20" />
        <div className="absolute left-1/2 bottom-3 w-2 h-2 rounded-full bg-sky-400 ring-4 ring-sky-400/20" />
      </div>
      <div className="grid grid-cols-3 gap-2 mt-3 text-center">
        <div><div className="text-sm font-semibold text-chalk">248</div><div className="text-[9px] text-titanium/60">Shipments</div></div>
        <div><div className="text-sm font-semibold text-chalk">98.4%</div><div className="text-[9px] text-titanium/60">On time</div></div>
        <div><div className="text-sm font-semibold text-chalk">24/7</div><div className="text-[9px] text-titanium/60">Tracking</div></div>
      </div>
    </div>
  )
}

function EmsVisual() {
  return (
    <div className="w-full max-w-xs rounded-xl border border-amber/20 bg-[#191713] p-4 shadow-2xl" aria-hidden="true">
      <div className="flex items-center justify-between mb-4">
        <span className="text-caption font-mono text-amber">OPERATIONS OVERVIEW</span>
        <span className="text-[10px] text-titanium/60">This month</span>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-4">
        <div className="rounded-lg bg-amber/10 p-3"><div className="text-lg font-semibold text-chalk">186</div><div className="text-[9px] text-titanium/60">Employees</div></div>
        <div className="rounded-lg bg-emerald/10 p-3"><div className="text-lg font-semibold text-chalk">94%</div><div className="text-[9px] text-titanium/60">Attendance</div></div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between text-[10px] text-titanium"><span>Leave approvals</span><span className="text-emerald">18 completed</span></div>
        <div className="h-1.5 rounded-full bg-mineral"><div className="h-full w-4/5 rounded-full bg-amber" /></div>
        <div className="flex items-center justify-between text-[10px] text-titanium"><span>Expense reports</span><span className="text-amber">12 pending</span></div>
        <div className="h-1.5 rounded-full bg-mineral"><div className="h-full w-3/5 rounded-full bg-emerald" /></div>
      </div>
    </div>
  )
}

function AiAssistantVisual() {
  return (
    <div className="w-full max-w-xs rounded-xl border border-sky-400/20 bg-[#111923] p-4 shadow-2xl" aria-hidden="true">
      <div className="flex items-center gap-2 mb-4">
        <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-sky-400/15 text-sky-300 text-xs">AI</span>
        <div><div className="text-caption font-mono text-sky-300">KNOWLEDGE ASSISTANT</div><div className="text-[9px] text-emerald">Ready to answer</div></div>
      </div>
      <div className="rounded-lg bg-sky-400/10 p-3 mb-2 text-[10px] leading-relaxed text-titanium">What are the renewal terms in the supplier agreement?</div>
      <div className="rounded-lg border border-sky-400/15 bg-carbon/50 p-3 text-[10px] leading-relaxed text-chalk">The agreement renews annually unless either party gives 60 days&apos; notice. <span className="text-sky-300">[Source 04]</span></div>
      <div className="flex items-center gap-2 mt-3 text-[9px] text-titanium/60"><span className="w-1.5 h-1.5 rounded-full bg-emerald" />3 documents searched <span className="ml-auto">1.8s</span></div>
    </div>
  )
}

function CervicareVisual() {
  return (
    <div className="w-full max-w-xs rounded-xl border border-rose-300/20 bg-[#191517] p-4 shadow-2xl" aria-hidden="true">
      <div className="flex items-center justify-between mb-4">
        <span className="text-caption font-mono text-rose-200">ML DIAGNOSTICS</span>
        <span className="text-[10px] text-emerald">Case #CV-1042</span>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="rounded-lg border border-emerald/20 bg-emerald/10 p-3"><div className="text-sm font-semibold text-chalk">Normal</div><div className="text-[9px] text-emerald mt-1">Confidence 0.91</div></div>
        <div className="rounded-lg border border-rose-300/20 bg-rose-300/10 p-3"><div className="text-sm font-semibold text-chalk">Abnormal</div><div className="text-[9px] text-rose-200 mt-1">Review pathway</div></div>
      </div>
      <div className="rounded-lg bg-carbon/60 p-3 mb-3">
        <div className="flex items-center justify-between text-[10px] text-titanium mb-2"><span>Case coordination</span><span className="text-amber">In review</span></div>
        <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber" /><span className="h-px flex-1 bg-amber/30" /><span className="w-2 h-2 rounded-full bg-emerald" /><span className="h-px flex-1 bg-emerald/30" /><span className="w-2 h-2 rounded-full bg-sky-400" /></div>
        <div className="flex justify-between mt-2 text-[9px] text-titanium/60"><span>Field</span><span>Doctor</span><span>Lab</span></div>
      </div>
      <div className="text-[9px] text-titanium/60">Image analysis + coordinated care workflow</div>
    </div>
  )
}

export function ProjectVisual({ projectId }) {
  const visuals = {
    cargoflow: CargoFlowVisual,
    ems: EmsVisual,
    'ai-assistant': AiAssistantVisual,
    cervicare: CervicareVisual,
  }
  const Visual = visuals[projectId] || CargoFlowVisual

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-mineral via-charcoal to-carbon p-5 transition-transform duration-slow group-hover:scale-[1.03]" role="img" aria-label={`${projectId} product interface preview`}>
      <Visual />
    </div>
  )
}