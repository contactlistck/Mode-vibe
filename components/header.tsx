'use client'

import { useEffect, useState } from 'react'

interface HeaderProps {
  isScrolled: boolean
  onRandomVibe: () => void
  onLogoClick?: () => void
}

export function Header({ isScrolled, onRandomVibe, onLogoClick }: HeaderProps) {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-16 md:h-20 flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 padding-viewport transition-all duration-500 ${
        isScrolled
          ? 'glass-heavy border-b border-white/[0.08]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <button
        onClick={onLogoClick}
        className="font-[family-name:var(--font-syne)] text-xl md:text-2xl font-bold tracking-tight text-white hover:text-[#9FE870] transition-all duration-300 hover:scale-105"
      >
        VIBES
      </button>
      <button
        onClick={onRandomVibe}
        className="px-4 md:px-6 py-2 md:py-2.5 text-xs md:text-sm font-medium text-white/90 glass glass-hover rounded-full transition-all duration-300 hover:text-[#9FE870] hover:border-[#9FE870]/30"
      >
        Random Vibe
      </button>
    </header>
  )
}

export function useScrolled() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return isScrolled
}
