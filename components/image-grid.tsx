'use client'

export interface Image {
  id: string
  url: string
  alt: string
}

interface ImageGridProps {
  images: Image[]
}

export function ImageGrid({ images }: ImageGridProps) {
  return (
    <section className="mb-8 md:mb-12">
      <div className="glass-card rounded-xl px-5 py-3 md:px-6 md:py-4 mb-5 md:mb-6 inline-flex items-center gap-3">
        <span className="text-sm md:text-base font-semibold text-white">feels like</span>
        <span className="text-xs font-mono text-[#9FE870] bg-[#9FE870]/10 px-2 py-1 rounded-lg">#{images.length}</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`relative overflow-hidden rounded-xl glass-card glass-card-hover cursor-pointer group transition-all duration-500 ${
              index % 3 === 0 ? 'row-span-2' : ''
            }`}
            style={{ aspectRatio: index % 3 === 0 ? '3/4' : '1/1' }}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              crossOrigin="anonymous"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </section>
  )
}
