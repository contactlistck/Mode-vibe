'use client'

interface RelatedVibesProps {
  vibes: string[]
  onVibeClick: (vibe: string) => void
}

export function RelatedVibes({ vibes, onVibeClick }: RelatedVibesProps) {
  return (
    <section className="mb-12">
      <div className="flex items-baseline gap-2 mb-4">
        <span className="text-sm font-medium text-white">explore more</span>
        <span className="text-xs font-mono text-[#666]">#{vibes.length}</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {vibes.map((vibe) => (
          <button
            key={vibe}
            onClick={() => onVibeClick(vibe)}
            className="px-4 py-2 text-sm text-[#ccc] bg-white/5 border border-white/10 rounded-full hover:border-[#9FE870] hover:text-[#9FE870] transition-all duration-200"
          >
            #{vibe}
          </button>
        ))}
      </div>
    </section>
  )
}
