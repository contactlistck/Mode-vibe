'use client'

export interface Quote {
  id: string
  text: string
  attribution?: string
}

interface QuotesListProps {
  quotes: Quote[]
}

export function QuotesList({ quotes }: QuotesListProps) {
  return (
    <section className="mb-8 md:mb-12">
      <div className="glass-card rounded-xl px-5 py-3 md:px-6 md:py-4 mb-5 md:mb-6 inline-flex items-center gap-3">
        <span className="text-sm md:text-base font-semibold text-white">words</span>
        <span className="text-xs font-mono text-[#9FE870] bg-[#9FE870]/10 px-2 py-1 rounded-lg">#{quotes.length}</span>
      </div>
      <div className="space-y-4 md:space-y-5">
        {quotes.map((quote) => (
          <div
            key={quote.id}
            className="pl-5 md:pl-6 py-4 md:py-5 pr-5 md:pr-6 glass-card glass-card-hover rounded-xl border-l-2 border-[#9FE870] transition-all duration-500"
          >
            <p className="text-base md:text-lg lg:text-xl italic text-[#ccc] leading-relaxed">
              {`"${quote.text}"`}
            </p>
            {quote.attribution && (
              <p className="mt-3 text-sm text-[#888]">— {quote.attribution}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
