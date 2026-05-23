'use client'

interface TrendingTagsProps {
  tags: string[]
  onTagClick: (tag: string) => void
}

export function TrendingTags({ tags, onTagClick }: TrendingTagsProps) {
  return (
    <div className="w-full max-w-[500px]">
      <div className="flex flex-wrap gap-2 justify-center">
        {tags.map((tag) => (
          <button
            key={tag}
            id={tag}
            onClick={() => onTagClick(tag)}
            className="px-4 py-2 text-sm font-mono text-[#999] bg-transparent border border-white/20 rounded-full hover:border-[#9FE870] hover:text-[#9FE870] transition-all duration-200"
          >
            #{tag}
          </button>
        ))}
      </div>
    </div>
  )
}
