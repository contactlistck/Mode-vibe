'use client'

import { useState, useCallback, useRef } from 'react'
import { Header, useScrolled } from '@/components/header'
import { LandingPage } from '@/components/landing-page'
import { ResultsPage } from '@/components/results-page'
import { VibeTransition } from '@/components/vibe-transition'
import { getVibeData, getRandomVibe, VibeData } from '@/lib/mock-data'

export default function Home() {
  const [view, setView] = useState<'landing' | 'results'>('landing')
  const [vibeData, setVibeData] = useState<VibeData | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [showVibeTransition, setShowVibeTransition] = useState(false)
  const [transitionQuery, setTransitionQuery] = useState('')
  const pendingVibeData = useRef<VibeData | null>(null)
  const isScrolled = useScrolled()

  const handleSearch = useCallback((query: string) => {
    // Prepare the data immediately
    const data = getVibeData(query)
    pendingVibeData.current = data
    
    // Show the vibe transition
    setTransitionQuery(query)
    setShowVibeTransition(true)
  }, [])

  const handleTransitionComplete = useCallback(() => {
    setVibeData(pendingVibeData.current)
    setView('results')
    setShowVibeTransition(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const handleRandomVibe = useCallback(() => {
    const data = getRandomVibe()
    pendingVibeData.current = data
    
    setTransitionQuery(data.name)
    setShowVibeTransition(true)
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
      {showVibeTransition && (
        <VibeTransition 
          query={transitionQuery} 
          onComplete={handleTransitionComplete} 
        />
      )}
      
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
