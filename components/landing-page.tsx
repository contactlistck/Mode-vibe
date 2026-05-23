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
      {/* Lime glow - bottom left */}
      <div 
        className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ 
          background: 'rgba(159, 232, 112, 0.12)',
          filter: 'blur(120px)',
          transform: 'translate(-30%, 30%)'
        }}
      />
      
      {/* Purple glow - top right */}
      <div 
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ 
          background: 'rgba(120, 80, 255, 0.10)',
          filter: 'blur(120px)',
          transform: 'translate(30%, -30%)'
        }}
      />
      
      <div className="relative z-10 w-full max-w-[640px] flex flex-col items-center gap-6">
        <span className="text-xs font-mono text-[#666] tracking-wide">
          {"what's your vibe right now?"}
        </span>
        
        <SearchBar onSearch={onSearch} />
        
        <span className="text-xs font-mono text-[#444]">
          6 vibes curated &bull; songs, quotes, images
        </span>
        
        <TrendingTags tags={trendingTags} onTagClick={onSearch} />
      </div>
    </main>
  )
}
