'use client'

interface TrendingTagsProps {
  tags: string[]
  onTagClick: (tag: string) => void
}

export function TrendingTags({ tags, onTagClick }: TrendingTagsProps) {
  return (
    <div className="w-full max-w-[640px] overflow-x-auto hide-scrollbar">
      <div className="flex gap-2 justify-start md:justify-center min-w-max px-4 md:px-0">
        {tags.map((tag) => (
          <button
            key={tag}
            id={tag}
            onClick={() => onTagClick(tag)}
            className="px-3 py-1.5 text-xs font-mono text-[#888] bg-white/5 border border-white/10 rounded-full hover:border-[#9FE870] hover:text-[#9FE870] transition-all duration-200 whitespace-nowrap flex-shrink-0"
          >
            #{tag}
          </button>
        ))}
      </div>
    </div>
  )
}
