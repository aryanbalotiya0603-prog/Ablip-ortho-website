'use client'

import { useRef, useEffect, useState, useCallback } from 'react'
import { Pause } from 'lucide-react'

export default function HowItWorksVideos() {
  const containerRef = useRef<HTMLDivElement>(null)
  const ref1 = useRef<HTMLVideoElement>(null)
  const ref2 = useRef<HTMLVideoElement>(null)
  const isVisibleRef = useRef(false)
  const [active, setActive] = useState<0 | 1 | 2>(0) // 0 = stopped
  const [userPaused, setUserPaused] = useState(false)

  const play = useCallback((n: 1 | 2) => {
    if (!isVisibleRef.current) return
    const v1 = ref1.current
    const v2 = ref2.current
    if (!v1 || !v2) return
    if (n === 1) {
      v2.pause()
      v2.currentTime = 0
      void v1.play().catch(() => {})
    } else {
      v1.pause()
      v1.currentTime = 0
      void v2.play().catch(() => {})
    }
    setActive(n)
    setUserPaused(false)
  }, [])

  useEffect(() => {
    const v1 = ref1.current
    const v2 = ref2.current
    if (!v1 || !v2) return

    const onEnd1 = () => { if (isVisibleRef.current) play(2) }
    const onEnd2 = () => { if (isVisibleRef.current) play(1) }
    v1.addEventListener('ended', onEnd1)
    v2.addEventListener('ended', onEnd2)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisibleRef.current = true
          play(1)
        } else {
          isVisibleRef.current = false
          v1.pause(); v1.currentTime = 0
          v2.pause(); v2.currentTime = 0
          setActive(0)
          setUserPaused(false)
        }
      },
      { threshold: 0.5 }
    )

    const el = containerRef.current
    if (el) observer.observe(el)

    return () => {
      isVisibleRef.current = false
      v1.removeEventListener('ended', onEnd1)
      v2.removeEventListener('ended', onEnd2)
      observer.disconnect()
      v1.pause(); v1.currentTime = 0
      v2.pause(); v2.currentTime = 0
    }
  }, [play])

  const handleClick = () => {
    const el = active === 1 ? ref1.current : active === 2 ? ref2.current : null
    if (!el) return
    if (el.paused) {
      void el.play().catch(() => {})
      setUserPaused(false)
    } else {
      el.pause()
      setUserPaused(true)
    }
  }

  return (
    <div ref={containerRef} className="flex flex-col gap-6 flex-1">

      {/* Video 1 */}
      <div
        className="relative rounded-2xl overflow-hidden bg-ink-card border border-ink-border cursor-pointer aspect-[4/3] lg:aspect-auto lg:flex-1 lg:min-h-0"
        onClick={handleClick}
      >
        <video
          ref={ref1}
          src="/media/solution-1.mp4"
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 bg-black transition-opacity duration-200 pointer-events-none ${active === 1 ? 'opacity-0' : 'opacity-30'}`} />
        {active === 1 && userPaused && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center">
              <Pause size={18} fill="white" className="text-white" />
            </div>
          </div>
        )}
      </div>

      {/* Video 2 */}
      <div
        className="relative rounded-2xl overflow-hidden bg-ink-card border border-ink-border cursor-pointer aspect-[4/3] lg:aspect-auto lg:flex-1 lg:min-h-0"
        onClick={handleClick}
      >
        <video
          ref={ref2}
          src="/media/solution-2.mp4"
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 bg-black transition-opacity duration-200 pointer-events-none ${active === 2 ? 'opacity-0' : 'opacity-30'}`} />
        {active === 2 && userPaused && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center">
              <Pause size={18} fill="white" className="text-white" />
            </div>
          </div>
        )}
      </div>

    </div>
  )
}
