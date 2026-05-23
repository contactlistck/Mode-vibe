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
    <section className="mb-10 md:mb-16">
      <div className="glass-card rounded-xl px-5 py-3 md:px-6 md:py-4 mb-6 inline-flex items-center gap-3">
        <span className="text-sm md:text-base font-semibold text-white">songs</span>
        <span className="text-xs font-mono text-[#9FE870] bg-[#9FE870]/10 px-2 py-1 rounded-lg">#{songs.length}</span>
      </div>
      <div className="flex gap-3 md:gap-4 overflow-x-auto pb-6 md:pb-8 hide-scrollbar">
        {songs.map((song) => (
          <div
            key={song.id}
            className="flex-shrink-0 w-[140px] md:w-[160px] lg:w-[180px] group cursor-pointer"
          >
            <div className="relative aspect-square mb-3 md:mb-4 overflow-hidden rounded-xl glass-card glass-card-hover transition-all duration-500">
              <img
                src={song.albumArt}
                alt={`${song.title} album art`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                crossOrigin="anonymous"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <h3 className="text-sm md:text-base font-medium text-white truncate mb-1">{song.title}</h3>
            <p className="text-xs md:text-sm text-[#888] truncate">{song.artist}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
