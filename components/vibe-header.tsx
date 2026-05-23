'use client'

interface VibeHeaderProps {
  vibeName: string
  quote: string
}

export function VibeHeader({ vibeName, quote }: VibeHeaderProps) {
  return (
    <section className="mb-10 md:mb-16">
      <div className="glass-card rounded-2xl px-8 py-6 md:px-12 md:py-8 lg:px-16 lg:py-10 mb-6 md:mb-8">
        <span className="text-xs font-mono uppercase tracking-widest text-[#888] mb-3 md:mb-4 block">
          VIBE HEADER SECTION
        </span>
        <h1 className="font-[family-name:var(--font-syne)] text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 text-balance leading-tight">
          {vibeName}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl italic text-[#888] max-w-3xl mb-6 md:mb-8 leading-relaxed">
          {quote}
        </p>
        <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-[#9FE870] to-[#9FE870]/50 rounded-full" />
      </div>
    </section>
  )
}
