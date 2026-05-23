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
      className={`fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-4 md:px-8 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0A0A0A]/80 backdrop-blur-md' 
          : 'bg-transparent'
      }`}
    >
      <button 
        onClick={onLogoClick}
        className="font-[family-name:var(--font-syne)] text-xl font-bold tracking-tight text-white hover:text-[#9FE870] transition-colors"
      >
        VIBES
      </button>
      <button
        onClick={onRandomVibe}
        className="px-4 py-2 text-sm text-white/80 border border-white/10 rounded-full hover:border-white/20 hover:text-white transition-all duration-200"
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
