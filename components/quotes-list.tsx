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
    <section className="mb-12">
      <span className="text-sm font-medium text-white mb-4 block">words</span>
      <div className="space-y-4">
        {quotes.map((quote) => (
          <div
            key={quote.id}
            className="pl-4 py-4 pr-6 bg-white/3 border-l-2 border-[#9FE870] rounded-r-lg"
          >
            <p className="text-lg md:text-xl italic text-[#ccc] leading-relaxed">
              {`"${quote.text}"`}
            </p>
            {quote.attribution && (
              <p className="mt-2 text-sm text-[#666]">— {quote.attribution}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
