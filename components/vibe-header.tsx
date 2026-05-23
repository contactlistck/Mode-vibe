'use client'

interface VibeHeaderProps {
  vibeName: string
  quote: string
}

export function VibeHeader({ vibeName, quote }: VibeHeaderProps) {
  return (
    <section className="mb-12">
      <span className="text-xs font-mono uppercase tracking-wider text-[#666] mb-2 block">
        VIBE HEADER SECTION
      </span>
      <h1 className="font-[family-name:var(--font-syne)] text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 text-balance">
        {vibeName}
      </h1>
      <p className="text-lg md:text-xl italic text-[#888] max-w-2xl mb-4">
        {quote}
      </p>
      <div className="w-12 h-0.5 bg-[#9FE870]" />
    </section>
  )
}
