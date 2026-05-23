'use client'

import { SearchBar } from '@/components/search-bar'
import { TrendingTags } from '@/components/trending-tags'
import { trendingTags } from '@/lib/mock-data'

interface LandingPageProps {
  onSearch: (query: string) => void
}

export function LandingPage({ onSearch }: LandingPageProps) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Gradient orb */}
      <div 
        className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none"
        style={{ 
          background: 'radial-gradient(circle, #1a0533 0%, transparent 70%)',
          opacity: 0.6,
          transform: 'translate(-30%, 30%)'
        }}
      />
      
      <div className="relative z-10 w-full max-w-[640px] flex flex-col items-center gap-6">
        <span className="text-xs font-mono text-[#666] tracking-wide">
          {"what's your vibe right now?"}
        </span>
        
        <SearchBar onSearch={onSearch} />
        
        <TrendingTags tags={trendingTags} onTagClick={onSearch} />
      </div>
    </main>
  )
}
