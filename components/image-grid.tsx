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
    <section className="mb-12">
      <span className="text-sm font-medium text-white mb-4 block">feels like</span>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`relative overflow-hidden rounded-lg bg-white/5 cursor-pointer group ${
              index % 3 === 0 ? 'row-span-2' : ''
            }`}
            style={{ aspectRatio: index % 3 === 0 ? '3/4' : '1/1' }}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              crossOrigin="anonymous"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
