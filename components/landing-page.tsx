'use client'

import { SearchBar } from '@/components/search-bar'
import { TrendingTags } from '@/components/trending-tags'
import { trendingTags } from '@/lib/mock-data'

interface LandingPageProps {
  onSearch: (query: string) => void
}

export function LandingPage({ onSearch }: LandingPageProps) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 padding-viewport relative overflow-hidden">
      {/* Premium gradient orbs */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full blur-[120px] md:blur-[180px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(159, 232, 112, 0.06) 0%, transparent 60%)',
          transform: 'translate(-40%, 40%)'
        }}
      />
      <div
        className="absolute top-1/3 right-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full blur-[100px] md:blur-[140px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(159, 232, 112, 0.04) 0%, transparent 60%)',
          transform: 'translate(30%, -20%)'
        }}
      />

      <div className="relative z-10 w-full max-w-[680px] flex flex-col items-center gap-8 md:gap-12">
        <div className="glass-card rounded-2xl px-8 py-6 md:px-12 md:py-8">
          <span className="text-xs md:text-sm font-mono text-[#888] tracking-widest uppercase">
            {"what's your vibe right now?"}
          </span>
        </div>

        <SearchBar onSearch={onSearch} />

        <TrendingTags tags={trendingTags} onTagClick={onSearch} />
      </div>
    </main>
  )
}
