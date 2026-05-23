'use client'

interface TrendingTagsProps {
  tags: string[]
  onTagClick: (tag: string) => void
}

export function TrendingTags({ tags, onTagClick }: TrendingTagsProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagClick(tag)}
          className="px-3 py-1.5 text-xs font-mono text-[#888] bg-white/5 border border-white/10 rounded-full hover:border-[#9FE870] hover:text-[#9FE870] transition-all duration-200"
        >
          #{tag}
        </button>
      ))}
    </div>
  )
}
