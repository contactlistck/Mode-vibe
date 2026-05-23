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
      {/* Purple glow - top right - larger and more visible */}
      <div 
        className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full pointer-events-none animate-float-slow"
        style={{ 
          background: 'radial-gradient(circle, rgba(140, 100, 255, 0.5) 0%, rgba(140, 100, 255, 0.2) 40%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      
      {/* Lime glow - bottom left - larger and more visible */}
      <div 
        className="absolute bottom-[-150px] left-[-150px] w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full pointer-events-none animate-float-slow-reverse"
        style={{ 
          background: 'radial-gradient(circle, rgba(159, 232, 112, 0.5) 0%, rgba(159, 232, 112, 0.2) 40%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      
      <div className="relative z-10 w-full max-w-[640px] flex flex-col items-center gap-5">
        <span className="text-sm font-mono text-[#888] tracking-wide">
          {"what's your vibe right now?"}
        </span>
        
        <SearchBar onSearch={onSearch} />
        
        <TrendingTags tags={trendingTags} onTagClick={onSearch} />
        
        <span className="text-xs font-mono text-[#555] mt-2">
          6 vibes curated &bull; songs, quotes, images
        </span>
      </div>
    </main>
  )
}
