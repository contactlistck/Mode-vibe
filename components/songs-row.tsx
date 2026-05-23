'use client'

export interface Song {
  id: string
  title: string
  artist: string
  albumArt: string
}

interface SongsRowProps {
  songs: Song[]
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
            className="flex-shrink-0 w-[160px] group cursor-pointer"
          >
            <div className="relative aspect-square mb-3 overflow-hidden rounded-xl bg-white/5 border border-white/7">
              <img
                src={song.albumArt}
                alt={`${song.title} album art`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                crossOrigin="anonymous"
              />
            </div>
            <h3 className="text-sm font-medium text-white truncate">{song.title}</h3>
            <p className="text-xs text-[#888] truncate">{song.artist}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
