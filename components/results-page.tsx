'use client'

import { VibeHeader } from '@/components/vibe-header'
import { SongsRow } from '@/components/songs-row'
import { ImageGrid } from '@/components/image-grid'
import { QuotesList } from '@/components/quotes-list'
import { RelatedVibes } from '@/components/related-vibes'
import { VibeData } from '@/lib/mock-data'

interface ResultsPageProps {
  vibeData: VibeData
  onVibeClick: (vibe: string) => void
}

export function ResultsPage({ vibeData, onVibeClick }: ResultsPageProps) {
  return (
    <main className="min-h-screen pt-20 pb-16 relative">
      {/* Subtle gradient background */}
      <div 
        className="absolute top-0 left-0 w-full h-[400px] pointer-events-none"
        style={{ 
          background: 'linear-gradient(180deg, rgba(26, 5, 51, 0.3) 0%, transparent 100%)',
        }}
      />
      
      <div className="relative z-10 px-4 md:px-8 lg:px-16 max-w-5xl">
        <VibeHeader vibeName={vibeData.name} quote={vibeData.emotionalQuote} />
        
        <SongsRow songs={vibeData.songs} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ImageGrid images={vibeData.images} />
          <div>
            <QuotesList quotes={vibeData.quotes} />
            <RelatedVibes vibes={vibeData.relatedVibes} onVibeClick={onVibeClick} />
          </div>
        </div>
      </div>
    </main>
  )
}
