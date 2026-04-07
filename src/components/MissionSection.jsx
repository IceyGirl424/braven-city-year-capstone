import React, { useState, useEffect, useRef } from 'react'

const MissionSection = () => {
  const [studentCount, setStudentCount] = useState(0)
  const [isStatsVisible, setIsStatsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [hoveredCard, setHoveredCard] = useState(null)
  const [animatedStats, setAnimatedStats] = useState({})
  const sectionRef = useRef(null)
  const statsCardRef = useRef(null)

  const animateCardStat = (index, targetValue, originalStat) => {
    const duration = 2000
    const steps = 60
    const increment = targetValue / steps
    let current = 0
    const hasPercent = originalStat.includes('%')

    const timer = setInterval(() => {
      current += increment
      if (current >= targetValue) {
        setAnimatedStats(prev => ({ ...prev, [index]: true }))
        clearInterval(timer)
      } else {
        const displayValue = Math.floor(current)
        let formattedValue = displayValue.toString()
        if (hasPercent) formattedValue = `${displayValue}%`
        
        setAnimatedStats(prev => ({ ...prev, [index]: formattedValue }))
      }
    }, duration / steps)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate card stats when they come into view
            const cardIndex = parseInt(entry.target.dataset.cardIndex)
            if (!isNaN(cardIndex) && cardIndex >= 0 && !animatedStats[cardIndex]) {
              // Get stat from the element's data attribute or parse from displayed text
              const statElement = entry.target.querySelector('[data-stat]')
              if (statElement) {
                const originalStat = statElement.dataset.stat
                let targetValue = 0
                
                // Parse the stat value for animation
                if (originalStat.includes('%')) {
                  targetValue = parseInt(originalStat.replace(/[^0-9]/g, ''))
                } else {
                  targetValue = parseInt(originalStat.replace(/[^0-9]/g, ''))
                }
                
                if (targetValue > 0) {
                  animateCardStat(cardIndex, targetValue, originalStat)
                } else {
                  setAnimatedStats(prev => ({ ...prev, [cardIndex]: true }))
                }
              }
            }
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll('[data-card-index]')
      cards.forEach((card) => observer.observe(card))
    }

    return () => observer.disconnect()
  }, [animatedStats])

  // Animation function matching StatTicker pattern
  const animateValue = (start, end, duration, callback) => {
    let startTimestamp = null
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      const value = Math.floor(progress * (end - start) + start)
      callback(value)
      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }
    window.requestAnimationFrame(step)
  }

  // Observer for the stats card with student count - matching StatTicker pattern
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsStatsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (statsCardRef.current) {
      observer.observe(statsCardRef.current)
    }

    return () => {
      if (statsCardRef.current) {
        observer.unobserve(statsCardRef.current)
      }
    }
  }, [])

  // Animate student count when visible - matching StatTicker pattern
  useEffect(() => {
    if (isStatsVisible && !hasAnimated) {
      setHasAnimated(true)
      animateValue(0, 1200, 2500, setStudentCount)
    }
  }, [isStatsVisible, hasAnimated])

  // Custom Star/Sun SVG Icon Component
  const StarIcon = ({ className = "w-12 h-12", color = "#FF6B6B" }) => (
    <svg className={className} fill={color} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
    </svg>
  )

  const focusAreas = [
    {
      title: 'Academic Support',
      description: 'Provide academic support and tutoring in math and English',
      stat: '247',
      statLabel: 'tutoring hours weekly',
      testimonial: '"My City Year tutor helped me go from failing to honor roll!" - Student, East San José',
      size: 'normal'
    },
    {
      title: 'Mentorship',
      description: 'Mentor students to build confidence and social-emotional skills',
      stat: '89%',
      statLabel: 'report increased confidence',
      testimonial: '"Having a mentor who believed in me changed everything." - Student, East Palo Alto',
      size: 'large'
    },
    {
      title: 'School Climate',
      description: 'Help create a welcoming, safe, and supportive school environment where every student feels they belong',
      stat: '32%',
      statLabel: 'reduction in absences',
      testimonial: '"School feels like a safe place now, I actually want to come." - Student',
      size: 'normal'
    },
    {
      title: 'Partnership',
      description: 'Partner with educators to ensure every student succeeds',
      stat: '15',
      statLabel: 'school partnerships',
      testimonial: '"City Year members are essential to our success." - Principal',
      size: 'normal'
    }
  ]

  return (
    <section 
      id="about" 
      className="mission-section relative overflow-hidden" 
      style={{ padding: '100px 20px' }}
      ref={sectionRef}
    >
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'
        }}
      >
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 107, 107, 0.5) 0%, rgba(255, 142, 83, 0.5) 100%)'
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-white drop-shadow-lg">
              Our Mission
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto drop-shadow-md">
              City Year Bay Area is challenging the educational status quo to ensure that every student in our communities has access to an excellent education and the skills to pursue diverse, successful careers.
            </p>
          </div>

          {/* Stats Card with Animated Number */}
          <div 
            ref={statsCardRef}
            className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 mb-8 shadow-2xl border-2 border-white/50"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-dark text-center">
              Supporting High School Graduates
            </h3>
            <div className="text-center mb-6">
              <p className="text-neutral-dark/80 leading-relaxed mb-4">
                We're currently working with <span className="font-bold text-primary text-xl">35 highly-skilled AmeriCorps members</span> who are supporting over
              </p>
              <div className="inline-block">
                <span 
                  className="font-black text-5xl md:text-6xl lg:text-7xl text-primary drop-shadow-lg"
                  style={{
                    textShadow: isStatsVisible ? '0 0 20px rgba(255, 107, 107, 0.6), 0 0 40px rgba(255, 107, 107, 0.4)' : 'none',
                    transition: 'text-shadow 0.3s ease'
                  }}
                >
                  {studentCount.toLocaleString()}
                </span>
                <span className="font-bold text-3xl md:text-4xl text-primary ml-2">students</span>
              </div>
              <p className="text-neutral-dark/80 leading-relaxed mt-4">
                throughout Eastside San José and East Palo Alto.
              </p>
            </div>
            <p className="text-neutral-dark/80 leading-relaxed text-center">
              Our members work alongside teachers and community partners to provide one-on-one tutoring, mentorship, and support that helps students stay on track, graduate, and pursue their dreams.
            </p>
          </div>

          {/* Where We Make Impact - Visual Story Cards */}
          <div className="mb-12">
            <h3 className="text-3xl md:text-4xl font-black mb-4 text-white text-center drop-shadow-lg">
              Where We Make Impact
            </h3>
            <p className="text-white/90 text-center mb-8 max-w-2xl mx-auto drop-shadow-md">
              Transforming education across 15 schools in two Bay Area communities
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Eastside San José Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/75 via-primary/65 to-primary-dark/75"></div>
                </div>
                
                <div className="relative z-10 p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                    <h4 className="text-2xl md:text-3xl font-black text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">Eastside San José</h4>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl md:text-5xl font-black text-secondary drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">953</span>
                      <span className="text-lg font-semibold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">students</span>
                    </div>
                    <div className="text-sm font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Across 8 partner schools</div>
                    <div className="text-sm font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">22 AmeriCorps members serving</div>
                  </div>
                  
                  <div className="bg-black/40 backdrop-blur-md rounded-lg p-4 mb-4 border-2 border-white/40">
                    <p className="text-sm italic leading-relaxed font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                      "City Year members have become essential to our school community. They're making a real difference in our students' lives."
                    </p>
                    <p className="text-xs mt-2 font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">— Principal, Eastside San José Elementary</p>
                  </div>
                  
                  <button className="px-6 py-3 bg-white text-primary rounded-lg font-bold hover:bg-secondary hover:text-white transition-all transform hover:scale-105 shadow-lg">
                    Meet Our Team
                  </button>
                </div>
              </div>

              {/* East Palo Alto Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/75 via-accent/65 to-accent-dark/75"></div>
                </div>
                
                <div className="relative z-10 p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <h4 className="text-2xl md:text-3xl font-black text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">East Palo Alto</h4>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl md:text-5xl font-black text-secondary drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">247</span>
                      <span className="text-lg font-semibold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">students</span>
                    </div>
                    <div className="text-sm font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Across 7 partner schools</div>
                    <div className="text-sm font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">13 AmeriCorps members serving</div>
                  </div>
                  
                  <div className="bg-black/40 backdrop-blur-md rounded-lg p-4 mb-4 border-2 border-white/40">
                    <p className="text-sm italic leading-relaxed font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                      "The support from City Year has transformed our school culture. Students are more engaged and confident."
                    </p>
                    <p className="text-xs mt-2 font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">— Teacher, East Palo Alto Middle School</p>
                  </div>
                  
                  <button className="px-6 py-3 bg-white text-accent rounded-lg font-bold hover:bg-secondary hover:text-white transition-all transform hover:scale-105 shadow-lg">
                    Meet Our Team
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Flow: Struggle → Support → Success */}
          <div className="mb-12 bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border-2 border-white/50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="text-6xl mb-4">😟</div>
                <h4 className="text-2xl font-black text-neutral-dark mb-2">Struggle</h4>
                <p className="text-neutral-dark/70">Students facing academic and social challenges</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <svg className="w-16 h-16 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
                    <path d="M2 17L12 22L22 17M2 12L12 17L22 12"/>
                  </svg>
                </div>
                <h4 className="text-2xl font-black text-primary mb-2">Support</h4>
                <p className="text-neutral-dark/70">City Year members provide personalized help</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">🎉</div>
                <h4 className="text-2xl font-black text-secondary mb-2">Success</h4>
                <p className="text-neutral-dark/70">Students graduate and pursue their dreams</p>
              </div>
            </div>
          </div>

          {/* Focus Areas Cards with Custom Icons and Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((area, index) => (
              <div
                key={index}
                data-card-index={index}
                className={`bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl border-2 border-white/50 hover:border-primary hover:shadow-2xl transition-all relative overflow-hidden ${
                  area.size === 'large' ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex justify-center mb-4">
                  <StarIcon className="w-12 h-12" color="#FF6B6B" />
                </div>
                <h4 className="font-bold text-lg mb-2 text-neutral-dark text-center">{area.title}</h4>
                <p className="text-sm text-neutral-dark/70 leading-relaxed text-center mb-4">{area.description}</p>
                
                {/* Statistics */}
                <div className="text-center mb-4 pb-4 border-b-2 border-primary/20">
                  <div 
                    data-stat={area.stat}
                    className="text-3xl font-black text-primary mb-1 transition-all duration-300"
                    style={{
                      textShadow: animatedStats[index] === true || (animatedStats[index] && animatedStats[index] !== area.stat)
                        ? '0 0 20px rgba(255, 107, 107, 0.6), 0 0 40px rgba(255, 107, 107, 0.4)'
                        : 'none'
                    }}
                  >
                    {animatedStats[index] && animatedStats[index] !== true ? animatedStats[index] : area.stat}
                  </div>
                  <div className="text-xs text-neutral-dark/60 font-semibold">{area.statLabel}</div>
                </div>

                {/* Testimonial on Hover */}
                {hoveredCard === index && (
                  <div className="absolute inset-0 bg-white/98 backdrop-blur-sm rounded-xl p-6 flex items-center justify-center animate-fadeIn z-10 border-4 border-primary shadow-2xl">
                    <p className="text-neutral-dark text-sm md:text-base italic text-center leading-relaxed font-medium">"{area.testimonial}"</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionSection

