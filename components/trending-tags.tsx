'use client'

interface TrendingTagsProps {
  tags: string[]
  onTagClick: (tag: string) => void
}

export function TrendingTags({ tags, onTagClick }: TrendingTagsProps) {
  return (
    <div className="flex flex-wrap gap-2 md:gap-3 justify-center max-w-2xl">
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagClick(tag)}
          className="px-4 md:px-5 py-2 md:py-2.5 text-xs md:text-sm font-medium text-[#888] glass glass-hover rounded-full hover:border-[#9FE870]/40 hover:text-[#9FE870] hover:bg-[#9FE870]/10 transition-all duration-300 hover:scale-105"
        >
          #{tag}
        </button>
      ))}
    </div>
  )
}
