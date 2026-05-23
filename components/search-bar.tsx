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
    }, 3500)
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
    <form onSubmit={handleSubmit} className="w-full max-w-[680px]">
      <div className="relative group">
        <div className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
          isFocused
            ? 'bg-gradient-to-r from-[#9FE870]/10 via-[#9FE870]/5 to-[#9FE870]/10 blur-xl opacity-100'
            : 'opacity-0'
        }`} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyDown={handleKeyDown}
          placeholder={placeholders[placeholderIndex]}
          className={`relative w-full px-6 md:px-8 py-5 md:py-6 glass rounded-2xl text-base md:text-lg text-white placeholder:text-[#555] focus:outline-none transition-all duration-500 ${
            isFocused
              ? 'glass-card border-[#9FE870]/30 shadow-[0_0_40px_rgba(159,232,112,0.15)]'
              : 'glass-hover'
          }`}
        />
        <button
          type="submit"
          className={`absolute right-4 md:right-6 top-1/2 -translate-y-1/2 p-2.5 md:p-3 rounded-xl transition-all duration-300 ${
            isFocused
              ? 'text-[#9FE870] bg-white/5'
              : 'text-white/50 hover:text-white hover:bg-white/5'
          }`}
          aria-label="Search"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.3-4.3"/>
          </svg>
        </button>
      </div>
    </form>
  )
}
