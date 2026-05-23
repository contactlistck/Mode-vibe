'use client'

interface RelatedVibesProps {
  vibes: string[]
  onVibeClick: (vibe: string) => void
}

export function RelatedVibes({ vibes, onVibeClick }: RelatedVibesProps) {
  return (
    <section className="mb-8 md:mb-12">
      <div className="glass-card rounded-xl px-5 py-3 md:px-6 md:py-4 mb-5 md:mb-6 inline-flex items-center gap-3">
        <span className="text-sm md:text-base font-semibold text-white">explore more</span>
        <span className="text-xs font-mono text-[#9FE870] bg-[#9FE870]/10 px-2 py-1 rounded-lg">#{vibes.length}</span>
      </div>
      <div className="flex flex-wrap gap-2 md:gap-3">
        {vibes.map((vibe) => (
          <button
            key={vibe}
            onClick={() => onVibeClick(vibe)}
            className="px-4 md:px-5 py-2 md:py-2.5 text-sm md:text-base font-medium text-[#ccc] glass glass-hover rounded-full hover:border-[#9FE870]/40 hover:text-[#9FE870] hover:bg-[#9FE870]/10 transition-all duration-300 hover:scale-105"
          >
            #{vibe}
          </button>
        ))}
      </div>
    </section>
  )
}
