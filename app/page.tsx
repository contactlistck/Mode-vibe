'use client'

import { useState, useCallback } from 'react'
import { Header, useScrolled } from '@/components/header'
import { LandingPage } from '@/components/landing-page'
import { ResultsPage } from '@/components/results-page'
import { getVibeData, getRandomVibe, VibeData } from '@/lib/mock-data'

export default function Home() {
  const [view, setView] = useState<'landing' | 'results'>('landing')
  const [vibeData, setVibeData] = useState<VibeData | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const isScrolled = useScrolled()

  const handleSearch = useCallback((query: string) => {
    setIsTransitioning(true)
    
    // Small delay for smooth transition
    setTimeout(() => {
      const data = getVibeData(query)
      setVibeData(data)
      setView('results')
      setIsTransitioning(false)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 200)
  }, [])

  const handleRandomVibe = useCallback(() => {
    setIsTransitioning(true)
    
    setTimeout(() => {
      const data = getRandomVibe()
      setVibeData(data)
      setView('results')
      setIsTransitioning(false)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 200)
  }, [])

  const handleVibeClick = useCallback((vibe: string) => {
    handleSearch(vibe)
  }, [handleSearch])

  const handleLogoClick = useCallback(() => {
    setIsTransitioning(true)
    
    setTimeout(() => {
      setView('landing')
      setVibeData(null)
      setIsTransitioning(false)
    }, 200)
  }, [])

  return (
    <div className={`min-h-screen bg-[#0A0A0A] transition-opacity duration-400 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
      <Header 
        isScrolled={isScrolled || view === 'results'} 
        onRandomVibe={handleRandomVibe}
        onLogoClick={handleLogoClick}
      />
      
      {view === 'landing' ? (
        <LandingPage onSearch={handleSearch} />
      ) : (
        vibeData && <ResultsPage vibeData={vibeData} onVibeClick={handleVibeClick} />
      )}
    </div>
  )
}
