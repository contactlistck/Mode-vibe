'use client'

import { useEffect, useState } from 'react'

interface VibeTransitionProps {
  query: string
  onComplete: () => void
}

export function VibeTransition({ query, onComplete }: VibeTransitionProps) {
  const [phase, setPhase] = useState<'fade-in' | 'visible' | 'fade-out'>('fade-in')
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Phase 1: Fade in (0-200ms)
    const fadeInTimer = setTimeout(() => {
      setPhase('visible')
    }, 200)

    // Phase 2: Progress bar grows (200ms-2200ms)
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100
        return prev + 1
      })
    }, 20) // 2000ms / 100 steps = 20ms per step

    // Phase 3: Fade out (2200ms-2800ms)
    const fadeOutTimer = setTimeout(() => {
      setPhase('fade-out')
    }, 2200)

    // Phase 4: Complete (2800ms)
    const completeTimer = setTimeout(() => {
      onComplete()
    }, 2800)

    return () => {
      clearTimeout(fadeInTimer)
      clearInterval(progressInterval)
      clearTimeout(fadeOutTimer)
      clearTimeout(completeTimer)
    }
  }, [onComplete])

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#0A0A0A] flex items-center justify-center transition-opacity duration-500 ${
        phase === 'fade-in' ? 'opacity-0' : phase === 'fade-out' ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Purple glow - top right */}
      <div 
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ 
          background: 'rgba(120, 80, 255, 0.06)',
          filter: 'blur(120px)',
          transform: 'translate(30%, -30%)'
        }}
      />
      
      {/* Lime glow - bottom left */}
      <div 
        className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ 
          background: 'rgba(159, 232, 112, 0.06)',
          filter: 'blur(120px)',
          transform: 'translate(-30%, 30%)'
        }}
      />

      <div className={`flex flex-col items-center gap-6 transition-all duration-500 ${
        phase === 'visible' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        {/* Small uppercase label */}
        <span 
          className="text-[11px] uppercase tracking-[0.25em] text-[#444]"
          style={{ fontFamily: 'var(--font-syne)' }}
        >
          matching your vibe
        </span>

        {/* User's search query */}
        <h1 
          className="text-3xl md:text-5xl font-bold text-white text-center max-w-md px-4"
          style={{ fontFamily: 'var(--font-syne)' }}
        >
          {query}
        </h1>

        {/* Progress bar */}
        <div className="w-[200px] h-[1px] mt-4 relative">
          {/* Empty track */}
          <div className="absolute inset-0 bg-white/[0.08] rounded-full" />
          
          {/* Fill */}
          <div 
            className="absolute inset-y-0 left-0 rounded-full transition-all duration-100 ease-linear"
            style={{ 
              width: `${progress}%`,
              background: '#9FE870',
              boxShadow: '0 0 12px rgba(159, 232, 112, 0.5)'
            }}
          />
        </div>
      </div>
    </div>
  )
}
