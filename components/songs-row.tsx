'use client'

import { SongData } from '@/lib/mock-data'

interface SongsRowProps {
  songs: SongData[]
}

export function SongsRow({ songs }: SongsRowProps) {
  return (
    <section className="mb-12">
      <div className="flex items-baseline gap-2 mb-4">
        <span className="text-sm font-medium text-white">songs</span>
        <span className="text-xs font-mono text-[#666]">#{songs.length}</span>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar">
        {songs.map((song) => (
          <div
            key={song.id}
            className="flex-shrink-0 w-[280px] group"
          >
            <div className="overflow-hidden rounded-xl bg-white/5 border border-white/7">
              <iframe
                width="100%"
                height="180"
                src={`https://www.youtube.com/embed/${song.youtubeId}`}
                frameBorder="0"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="block"
              />
              <div className="p-3">
                <h3 className="text-sm font-medium text-white truncate">{song.title}</h3>
                <p className="text-xs text-[#888] truncate">{song.artist}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
