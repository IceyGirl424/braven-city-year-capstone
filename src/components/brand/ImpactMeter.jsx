import React, { useState, useEffect, useRef } from 'react'

const ImpactMeter = () => {
  const [impact, setImpact] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  useEffect(() => {
    if (isVisible) {
      const target = 1247
      const duration = 2000
      let start = 0
      const startTime = Date.now()

      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        const current = Math.floor(progress * target)
        setImpact(current)
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [isVisible])

  const percentage = (impact / 1200) * 100

  return (
    <div ref={ref} className="bg-gradient-to-br from-secondary/20 to-primary/20 rounded-3xl p-8 border-2 border-secondary/30">
      <h3 className="text-2xl font-black text-neutral-dark mb-6 text-center">Real-Time Impact</h3>
      <div className="relative">
        <div className="text-center mb-6">
          <div className="text-6xl font-black text-primary mb-2">{impact.toLocaleString()}</div>
          <div className="text-lg text-neutral-dark/70">Students Impacted This Year</div>
        </div>
        <div className="relative h-8 bg-neutral-dark/10 rounded-full overflow-hidden">
          <div 
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-accent to-secondary rounded-full transition-all duration-1000 flex items-center justify-end pr-4"
            style={{ width: `${Math.min(percentage, 100)}%` }}
          >
            {percentage >= 10 && (
              <span className="text-white font-bold text-sm">{Math.round(percentage)}%</span>
            )}
          </div>
        </div>
        <div className="flex justify-between mt-2 text-xs text-neutral-dark/60">
          <span>0</span>
          <span className="font-bold">1,200 Goal</span>
          <span>2,000</span>
        </div>
      </div>
    </div>
  )
}

export default ImpactMeter

