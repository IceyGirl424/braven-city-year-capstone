import React, { useState, useEffect, useRef } from 'react'
import { alumni, fields } from '../data/alumni'
import AlumniCard from './alumni/AlumniCard'
import SchoolsStrip from './SchoolsStrip'

const CityYearEffect = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [tutoringHours, setTutoringHours] = useState(0)
  const [studentsReached, setStudentsReached] = useState(0)
  const [isPulsing, setIsPulsing] = useState(false)
  const ref = useRef(null)

  const targetHours = 247
  const targetStudents = 1200
  const currentStudents = 1247
  const activeMembers = 35

  // Limit to 6 alumni for display
  const displayAlumni = alumni.slice(0, 6)

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

      // Animate students reached
      const studentsInterval = setInterval(() => {
        setStudentsReached((prev) => {
          if (prev < currentStudents) {
            return Math.min(prev + 10, currentStudents)
          }
          return prev
        })
      }, 30)

      // Pulsing animation for active members
      const pulseInterval = setInterval(() => {
        setIsPulsing(true)
        setTimeout(() => setIsPulsing(false), 600)
      }, 2000)

      return () => {
        clearInterval(hoursInterval)
        clearInterval(studentsInterval)
        clearInterval(pulseInterval)
      }
    }
  }, [isVisible, targetHours, currentStudents])

  const progressPercentage = Math.min((currentStudents / targetStudents) * 100, 100)

  return (
    <section ref={ref} id="city-year-effect" className="bg-gradient-to-b from-white via-neutral-light/30 to-white" style={{ padding: '100px 20px' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4 text-neutral-dark leading-tight">
            The City Year Effect:<br />
            <span className="text-primary">From Impact to Career Success</span>
          </h2>
          <p className="text-xl md:text-2xl text-neutral-dark/70 max-w-3xl mx-auto">
            Watch our real-time impact transform into real career outcomes
          </p>
        </div>

        {/* Top Row: 3 Compact Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Tutoring Hours Card */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-primary/20 hover:border-primary transition-all transform hover:scale-105">
            <div className="text-sm text-neutral-dark/60 mb-2 font-semibold uppercase tracking-wide">Tutoring Hours</div>
            <div className="text-4xl md:text-5xl font-black text-primary mb-1">
              {tutoringHours}
            </div>
            <div className="text-xs text-neutral-dark/60">This week</div>
          </div>

          {/* Students Reached Card */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-accent/20 hover:border-accent transition-all transform hover:scale-105">
            <div className="text-sm text-neutral-dark/60 mb-2 font-semibold uppercase tracking-wide">Students Reached</div>
            <div className="text-4xl md:text-5xl font-black text-accent mb-2">
              {studentsReached.toLocaleString()}
            </div>
            <div className="w-full bg-neutral-dark/10 rounded-full h-2 mb-1">
              <div
                className="bg-gradient-to-r from-accent to-primary h-2 rounded-full transition-all duration-1000"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <div className="text-xs text-neutral-dark/60">Goal: {targetStudents.toLocaleString()}</div>
          </div>

          {/* Active Members Card */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-secondary/20 hover:border-secondary transition-all transform hover:scale-105 relative overflow-hidden">
            <div className="text-sm text-neutral-dark/60 mb-2 font-semibold uppercase tracking-wide">Active Members</div>
            <div className={`text-4xl md:text-5xl font-black text-secondary mb-1 transition-all ${isPulsing ? 'scale-110' : ''}`}>
              {activeMembers}
            </div>
            <div className="text-xs text-neutral-dark/60">Serving now</div>
            {isPulsing && (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-secondary/20 rounded-full animate-ping"></div>
            )}
          </div>
        </div>

        {/* Visual Connector: Flowing Arrow/Gradient */}
        <div className="relative mb-16">
          <div className="flex items-center justify-center">
            <div className="flex-1 h-1 bg-gradient-to-r from-transparent via-primary to-accent"></div>
            <div className="mx-4">
              <svg className="w-12 h-12 text-primary transform rotate-90" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex-1 h-1 bg-gradient-to-l from-transparent via-accent to-secondary"></div>
          </div>
          <div className="text-center mt-4">
            <p className="text-lg font-bold text-neutral-dark/70 italic">
              Impact Today → Career Success Tomorrow
            </p>
          </div>
        </div>

        {/* Animated Schools Strip */}
        <div className="mb-16">
          <SchoolsStrip />
        </div>

        {/* Bottom Rows: Alumni Cards - Masonry Layout */}
        <div className="mb-8">
          <h3 className="text-3xl md:text-4xl font-black text-center mb-4 text-neutral-dark">
            Where Our Alumni Are Now
          </h3>
          <p className="text-center text-neutral-dark/70 mb-8 max-w-2xl mx-auto">
            See how City Year alumni are making their mark across industries
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {['All', 'Tech', 'Education', 'Healthcare', 'Nonprofit'].map((field) => (
            <button
              key={field}
              className="px-4 py-2 rounded-lg font-semibold transition-all border-2 min-h-[44px]"
              style={{
                backgroundColor: field === 'All' ? '#FF6B6B' : 'white',
                color: field === 'All' ? 'white' : '#2C3E50',
                borderColor: field === 'All' ? '#FF6B6B' : '#2C3E50/20'
              }}
            >
              {field}
            </button>
          ))}
        </div>

        {/* Compact Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {displayAlumni.map((alum, index) => (
            <div 
              key={index}
              className="transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
            >
              <AlumniCard alumni={alum} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        .animate-ping {
          animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  )
}

export default CityYearEffect

