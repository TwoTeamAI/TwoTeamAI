export function TechBadge({ label, variant = 'default', icon, className = '' }) {
  const variants = {
    default: 'tech-badge',
    amber: 'tech-badge border-amber/30 text-amber hover:bg-amber/10',
    emerald: 'tech-badge border-emerald/30 text-emerald hover:bg-emerald/10',
    bronze: 'tech-badge border-bronze/30 text-bronze hover:bg-bronze/10',
  }

  return (
    <span className={`${variants[variant]} ${className}`}>
      {icon && <span aria-hidden="true">{icon}</span>}
      {label}
    </span>
  )
}

export function TechBadgeGroup({ items, className = '' }) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`} role="list" aria-label="Technologies">
      {items.map((item, index) => (
        <TechBadge key={index} {...item} />
      ))}
    </div>
  )
}