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
    <main className="min-h-screen pt-24 md:pt-28 pb-20 md:pb-24 relative">
      {/* Premium gradient backgrounds */}
      <div
        className="absolute top-0 left-0 w-full h-[500px] pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(159, 232, 112, 0.08) 0%, transparent 100%)',
        }}
      />
      <div
        className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full blur-[180px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(159, 232, 112, 0.04) 0%, transparent 60%)',
          transform: 'translate(40%, -20%)'
        }}
      />

      <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 padding-viewport max-w-7xl mx-auto">
        <VibeHeader vibeName={vibeData.name} quote={vibeData.emotionalQuote} />

        <SongsRow songs={vibeData.songs} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          <div className="lg:col-span-7">
            <ImageGrid images={vibeData.images} />
          </div>
          <div className="lg:col-span-5 space-y-6 md:space-y-8">
            <QuotesList quotes={vibeData.quotes} />
            <RelatedVibes vibes={vibeData.relatedVibes} onVibeClick={onVibeClick} />
          </div>
        </div>
      </div>
    </main>
  )
}
