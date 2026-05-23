'use client'

import { useState, useEffect } from 'react'

interface SearchBarProps {
  onSearch: (query: string) => void
}

const placeholders = [
  "sad night drive after breakup...",
  "neet exam panic 3am...",
  "winning but still empty...",
  "rainy day nostalgia...",
  "late night gym session..."
]

export function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('')
  const [placeholderIndex, setPlaceholderIndex] = useState(0)
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholders.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      onSearch(query.trim())
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit(e as unknown as React.FormEvent)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-[640px]">
      <div 
        className={`relative rounded-2xl transition-all duration-500 ${
          isFocused 
            ? 'shadow-[0_0_40px_rgba(159,232,112,0.15)]' 
            : ''
        }`}
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyDown={handleKeyDown}
          placeholder={placeholders[placeholderIndex]}
          style={{
            background: 'rgba(255, 255, 255, 0.04)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
          className={`w-full px-6 py-5 border rounded-2xl text-white text-lg placeholder:text-[#555] focus:outline-none transition-all duration-500 ${
            isFocused 
              ? 'border-[#9FE870]/60 bg-white/[0.06]' 
              : 'border-white/10 hover:border-white/20'
          }`}
        />
        <button
          type="submit"
          className={`absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-xl transition-all duration-300 ${
            isFocused 
              ? 'text-[#9FE870] bg-[#9FE870]/10' 
              : 'text-white/40 hover:text-white/70'
          }`}
          aria-label="Search"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.3-4.3"/>
          </svg>
        </button>
      </div>
    </form>
  )
}
