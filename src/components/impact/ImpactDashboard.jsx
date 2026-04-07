import React, { useState, useEffect, useRef } from 'react'

const ImpactDashboard = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [tutoringHours, setTutoringHours] = useState(0)
  const [studentsHelped, setStudentsHelped] = useState(0)
  const [currentSpotlight, setCurrentSpotlight] = useState(0)
  const ref = useRef(null)

  const targetHours = 247
  const targetStudents = 1200
  const currentStudents = 1247

  const spotlights = [
    {
      name: 'Maya R.',
      quote: '"Seeing my students\' confidence grow has been the most rewarding part of this year."',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
    },
    {
      name: 'James T.',
      quote: '"City Year gave me clarity on what I want to do with my life—and the skills to get there."',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
    },
    {
      name: 'Sofia L.',
      quote: '"The community here is incredible. I\'ve made friends for life while making a real difference."',
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop'
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
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
      // Animate tutoring hours
      const hoursInterval = setInterval(() => {
        setTutoringHours((prev) => {
          if (prev < targetHours) {
            return Math.min(prev + 5, targetHours)
          }
          return prev
        })
      }, 50)

      // Animate students helped
      const studentsInterval = setInterval(() => {
        setStudentsHelped((prev) => {
          if (prev < currentStudents) {
            return Math.min(prev + 10, currentStudents)
          }
          return prev
        })
      }, 30)

      return () => {
        clearInterval(hoursInterval)
        clearInterval(studentsInterval)
      }
    }
  }, [isVisible, targetHours, currentStudents])

  useEffect(() => {
    const spotlightInterval = setInterval(() => {
      setCurrentSpotlight((prev) => (prev + 1) % spotlights.length)
    }, 3000)

    return () => clearInterval(spotlightInterval)
  }, [spotlights.length])

  const progressPercentage = Math.min((currentStudents / targetStudents) * 100, 100)

  return (
    <section ref={ref} className="impact-section bg-secondary/20" style={{ padding: '100px 20px' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-dark">
            Real-Time Impact
          </h2>
          <p className="text-lg text-neutral-dark/80">
            See what our members are accomplishing right now
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Tutoring Hours */}
          <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-primary">
            <div className="text-sm text-neutral-dark/60 mb-2">Tutoring Hours This Week</div>
            <div className="text-5xl font-bold text-primary mb-2">
              {tutoringHours}
            </div>
            <div className="text-sm text-neutral-dark/70">hours of one-on-one support</div>
          </div>

          {/* Students Helped */}
          <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-accent">
            <div className="text-sm text-neutral-dark/60 mb-2">Students Helped This Year</div>
            <div className="text-5xl font-bold text-accent mb-2">
              {studentsHelped.toLocaleString()}
            </div>
            <div className="text-sm text-neutral-dark/70 mb-3">Target: {targetStudents.toLocaleString()}</div>
            <div className="w-full bg-neutral-dark/10 rounded-full h-3">
              <div
                className="bg-accent h-3 rounded-full transition-all duration-1000 flex items-center justify-end pr-2"
                style={{ width: `${progressPercentage}%` }}
              >
                {currentStudents > targetStudents && (
                  <span className="text-xs font-bold text-white">🎉</span>
                )}
              </div>
            </div>
            {currentStudents > targetStudents && (
              <div className="text-sm text-accent font-semibold mt-2">Goal exceeded!</div>
            )}
          </div>
        </div>

        {/* Member Spotlight */}
        <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-secondary">
          <div className="text-sm text-neutral-dark/60 mb-4 text-center">Member Spotlight</div>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src={spotlights[currentSpotlight].photo}
              alt={spotlights[currentSpotlight].name}
              className="w-24 h-24 rounded-full object-cover border-4 border-secondary"
            />
            <div className="flex-1 text-center md:text-left">
              <div className="font-bold text-xl text-neutral-dark mb-2">
                {spotlights[currentSpotlight].name}
              </div>
              <div className="text-neutral-dark/80 italic text-lg">
                "{spotlights[currentSpotlight].quote}"
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {spotlights.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSpotlight(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSpotlight ? 'w-8 bg-secondary' : 'w-2 bg-secondary/30'
                }`}
                aria-label={`View spotlight ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImpactDashboard

