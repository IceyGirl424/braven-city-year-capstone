import React, { useState, useEffect, useRef } from 'react'
import PartnersStrip from './PartnersStrip'

const WhyCityYear = () => {
  const [expandedCard, setExpandedCard] = useState(null)
  const [visibleCards, setVisibleCards] = useState([])
  const [animatedStats, setAnimatedStats] = useState({})
  const [expandedMilestone, setExpandedMilestone] = useState(null)
  const sectionRef = useRef(null)

  const benefits = [
    {
      icon: (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.564 23.564 0 0112 15c-1.725 0-3.43-.14-5.11-.407M21 13.255V10a3 3 0 00-3-3h-4.095l-1.723-2.095A3 3 0 009.105 3H7a3 3 0 00-3 3v4.095M21 13.255V19a3 3 0 01-3 3H6a3 3 0 01-3-3v-4.745M21 13.255l-3.5-3.5M3.5 9.755l3.5 3.5m0 0l3.5-3.5M7 13.255l3.5 3.5" />
        </svg>
      ),
      title: 'Real-World Experience',
      description: 'Gain hands-on experience in education, mentorship, and community service that looks great on any resume or college application.',
      stat: '500+',
      statLabel: 'hours of hands-on experience',
      progress: 85,
      testimonial: '"City Year gave me the confidence to lead and the skills to succeed in any career."',
      author: '— Sarah M., Alumna',
      expandedContent: 'Work directly with students in classrooms, after-school programs, and community events. Build a portfolio of real accomplishments that employers and colleges value.'
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      title: 'Career Clarity',
      description: 'Discover your passions and career path through meaningful work—whether you\'re interested in education, social work, or exploring new fields.',
      stat: '78%',
      statLabel: 'find career direction',
      progress: 78,
      testimonial: '"I thought I wanted to be a doctor, but City Year showed me my passion for education."',
      author: '— Marcus T., Alumnus',
      expandedContent: 'Explore different career paths through workshops, networking events, and real-world experience. Many alumni discover new passions they never knew they had.'
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Professional Network',
      description: 'Connect with Fortune 500 partners, educators, and community leaders who can open doors to future opportunities.',
      stat: '500+',
      statLabel: 'corporate connections',
      progress: 90,
      testimonial: '"The connections I made at City Year led directly to my current job at a Fortune 500 company."',
      author: '— Jessica L., Alumna',
      expandedContent: 'Attend exclusive networking events with partners like Deloitte, Comcast, and Starbucks. Build relationships that last a lifetime and open doors to internships and jobs.'
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: 'Financial Support',
      description: 'Earn a bi-weekly stipend of $1,300+ and an AmeriCorps education award to help pay for college or student loans.',
      stat: '$47,495',
      statLabel: 'total compensation value',
      progress: 100,
      testimonial: '"The education award helped me pay off my student loans and start my career debt-free."',
      author: '— David K., Alumnus',
      expandedContent: 'Receive $1,300+ every two weeks plus a $6,895 education award. Health insurance is fully covered, and you get professional development training worth thousands.'
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Personal Growth',
      description: 'Develop leadership, communication, and problem-solving skills that will serve you throughout your career and life.',
      stat: '95%',
      statLabel: 'report increased confidence',
      progress: 95,
      testimonial: '"I grew more in one year at City Year than in four years of college."',
      author: '— Amanda R., Alumna',
      expandedContent: 'Build essential soft skills through real challenges. Lead projects, manage relationships, solve problems, and grow into the leader you were meant to be.'
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Purpose & Impact',
      description: 'Make a real difference in students\' lives while building a sense of purpose and fulfillment that goes beyond a traditional gap year.',
      stat: '1,200+',
      statLabel: 'students impacted',
      progress: 100,
      testimonial: '"Knowing I changed a student\'s life is worth more than any salary."',
      author: '— Michael P., Current Member',
      expandedContent: 'See the direct impact of your work every day. Watch students grow, succeed, and believe in themselves because of your support. This is more than a job—it\'s a calling.'
    }
  ]

  // Intersection Observer for scroll animations
  useEffect(() => {
    const animateStat = (index, targetValue, originalStat) => {
      const duration = 2000
      const steps = 60
      const increment = targetValue / steps
      let current = 0
      const hasPlus = originalStat.includes('+')
      const hasPercent = originalStat.includes('%')
      const hasDollar = originalStat.includes('$')

      const timer = setInterval(() => {
        current += increment
        if (current >= targetValue) {
          setAnimatedStats(prev => ({ ...prev, [index]: true }))
          clearInterval(timer)
        } else {
          const displayValue = Math.floor(current)
          let formattedValue = displayValue.toString()
          if (hasDollar) formattedValue = `$${displayValue.toLocaleString()}`
          if (hasPercent) formattedValue = `${displayValue}%`
          if (hasPlus) formattedValue = `${displayValue.toLocaleString()}+`
          
          setAnimatedStats(prev => ({ ...prev, [index]: formattedValue }))
        }
      }, duration / steps)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index)
            setVisibleCards((prev) => {
              if (prev.includes(index)) return prev
              return [...prev, index]
            })
            
            // Trigger stat animation when card becomes visible
            if (!animatedStats[index]) {
              const benefit = benefits[index]
              let targetValue = 0
              
              // Parse the stat value for animation
              if (benefit.stat.includes('+')) {
                targetValue = parseInt(benefit.stat.replace(/[^0-9]/g, ''))
              } else if (benefit.stat.includes('%')) {
                targetValue = parseInt(benefit.stat.replace(/[^0-9]/g, ''))
              } else if (benefit.stat.includes('$')) {
                targetValue = parseInt(benefit.stat.replace(/[^0-9]/g, ''))
              }
              
              if (targetValue > 0) {
                animateStat(index, targetValue, benefit.stat)
              } else {
                setAnimatedStats(prev => ({ ...prev, [index]: true }))
              }
            }
          }
        })
      },
      { threshold: 0.1 }
    )

    const cards = sectionRef.current?.querySelectorAll('[data-index]')
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [animatedStats, benefits])

  return (
    <section className="why-city-year-section bg-white relative overflow-hidden" style={{ padding: '100px 20px' }}>
      {/* Subtle logo pattern background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 10 L60 40 L90 40 L70 60 L80 90 L50 75 L20 90 L30 60 L10 40 L40 40 Z' fill='%23FF6B6B'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
            backgroundRepeat: 'repeat'
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12" ref={sectionRef}>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 text-neutral-dark">
            Why City Year?
          </h2>
          <p className="text-xl md:text-2xl text-neutral-dark/80 max-w-3xl mx-auto font-semibold">
            Six ways City Year sets you up for success
          </p>
        </div>

        {/* Enhanced Timeline with 6 Milestones */}
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-black text-center mb-2 text-neutral-dark">
            Your Journey: Day 1 to Career Launch
          </h3>
          <p className="text-center text-sm text-neutral-dark/60 mb-8 italic">
            Click on any milestone to learn more about your progress
          </p>
          
          {/* Desktop: Horizontal Timeline */}
          <div className="hidden md:block relative py-12">
            {/* Background horizontal line */}
            <div 
              className="absolute left-0 right-0 z-0"
              style={{ 
                top: '50%',
                transform: 'translateY(-50%)',
                height: '4px',
                background: 'linear-gradient(to right, #FF6B6B 0%, #FF8E53 16%, #4ECDC4 33%, #45B8B0 50%, #FFD93D 66%, #FFC700 83%, #FF6B6B 100%)',
                borderRadius: '2px'
              }}
            ></div>
            
            <div className="flex items-center justify-between gap-1 px-4 relative z-10">
              {[
                { time: 'Day 1', title: 'Orientation & Training Begins', icon: '🚀', color: '#FF6B6B', details: 'Welcome week, team building, and initial training sessions', testimonial: 'This is where it all starts!' },
                { time: 'Month 1', title: 'First Student Connections', icon: '🤝', color: '#FF8E53', details: 'Begin working with students, build relationships', testimonial: 'Meeting my first student changed everything.' },
                { time: 'Month 3', title: 'Leadership Skills Emerge', icon: '⭐', color: '#4ECDC4', details: 'Take on more responsibility, lead projects', testimonial: 'I discovered I was a natural leader.' },
                { time: 'Month 6', title: 'Measurable Student Progress', icon: '📈', color: '#45B8B0', details: 'See real impact as students improve academically', testimonial: 'Seeing my student succeed was incredible.' },
                { time: 'Month 9', title: 'Career Network Activated', icon: '🌐', color: '#FFD93D', details: 'Attend networking events, connect with partners', testimonial: 'The connections I made opened so many doors.' },
                { time: 'Year 1', title: 'Launch Into Your Future', icon: '🎯', color: '#FFC700', details: 'Graduate with skills, network, and clear career path', testimonial: 'City Year set me up for success.' }
              ].map((milestone, index) => (
                <div key={index} className="flex-1 relative">
                  <button
                    onClick={() => setExpandedMilestone(expandedMilestone === index ? null : index)}
                    className="w-full"
                  >
                    <div 
                      className="w-20 h-14 flex flex-col items-center justify-center text-white font-bold text-xs relative z-10 cursor-pointer transition-all hover:scale-110"
                      style={{
                        clipPath: index === 0 ? 'polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%)' : 
                                  index === 5 ? 'polygon(10% 0, 100% 0, 100% 100%, 10% 100%, 0 50%)' :
                                  'polygon(10% 0, 100% 0, 100% 100%, 10% 100%, 0 50%)',
                        background: `linear-gradient(135deg, ${milestone.color} 0%, ${milestone.color}dd 100%)`,
                        boxShadow: expandedMilestone === index ? '0 8px 16px rgba(0, 0, 0, 0.2)' : '0 2px 4px rgba(0, 0, 0, 0.1)'
                      }}
                    >
                      <div className="text-base mb-0.5">{milestone.icon}</div>
                      <div className="font-black text-xs leading-tight">{milestone.time}</div>
                    </div>
                    {/* Marker */}
                    <div className={`absolute ${index % 2 === 0 ? '-bottom-6' : '-top-6'} left-1/2 transform -translate-x-1/2 z-20`}>
                      <div className={`w-0.5 h-5 bg-neutral-dark/50 mx-auto ${index % 2 === 0 ? 'mb-1' : 'mt-1'}`}></div>
                      <div 
                        className="w-5 h-5 rounded-full border-3 border-black shadow-lg"
                        style={{ 
                          borderWidth: '3px',
                          backgroundColor: milestone.color
                        }}
                      ></div>
                    </div>
                  </button>
                  
                  {/* Expanded Details */}
                  {expandedMilestone === index && (
                    <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-30 w-64 bg-white rounded-xl p-4 shadow-2xl border-2 border-primary animate-fadeInUp">
                      <h4 className="font-black text-lg text-neutral-dark mb-2">{milestone.title}</h4>
                      <p className="text-sm text-neutral-dark/70 mb-3">{milestone.details}</p>
                      <div className="text-xs text-primary font-semibold italic">
                        "{milestone.testimonial}"
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: Vertical Timeline */}
          <div className="md:hidden space-y-8">
            {[
              { time: 'Day 1', title: 'Orientation & Training Begins', icon: '🚀', color: '#FF6B6B', details: 'Welcome week, team building, and initial training sessions', progress: 0 },
              { time: 'Month 1', title: 'First Student Connections', icon: '🤝', color: '#FF8E53', details: 'Begin working with students, build relationships', progress: 17 },
              { time: 'Month 3', title: 'Leadership Skills Emerge', icon: '⭐', color: '#4ECDC4', details: 'Take on more responsibility, lead projects', progress: 33 },
              { time: 'Month 6', title: 'Measurable Student Progress', icon: '📈', color: '#45B8B0', details: 'See real impact as students improve academically', progress: 50 },
              { time: 'Month 9', title: 'Career Network Activated', icon: '🌐', color: '#FFD93D', details: 'Attend networking events, connect with partners', progress: 67 },
              { time: 'Year 1', title: 'Launch Into Your Future', icon: '🎯', color: '#FFC700', details: 'Graduate with skills, network, and clear career path', progress: 100 }
            ].map((milestone, index) => (
              <div key={index} className="relative pl-8">
                <div 
                  className="absolute left-0 top-0 w-6 h-6 rounded-full border-3 border-black shadow-lg flex items-center justify-center"
                  style={{ 
                    borderWidth: '3px',
                    backgroundColor: milestone.color
                  }}
                >
                  <span className="text-xs">{milestone.icon}</span>
                </div>
                {index < 5 && (
                  <div 
                    className="absolute left-3 top-6 w-0.5"
                    style={{ 
                      height: 'calc(100% + 2rem)',
                      backgroundColor: milestone.color,
                      opacity: 0.3
                    }}
                  ></div>
                )}
                <button
                  onClick={() => setExpandedMilestone(expandedMilestone === index ? null : index)}
                  className="w-full text-left"
                >
                  <div className="bg-white rounded-xl p-4 shadow-lg border-2 border-neutral-dark/10 hover:border-primary transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-black text-lg text-neutral-dark">{milestone.time}</div>
                      <div className="text-xs font-semibold text-primary">{milestone.progress}%</div>
                    </div>
                    <h4 className="font-bold text-neutral-dark mb-2">{milestone.title}</h4>
                    {expandedMilestone === index && (
                      <div className="mt-2 pt-2 border-t border-primary/20">
                        <p className="text-sm text-neutral-dark/70">{milestone.details}</p>
                      </div>
                    )}
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Alternating Cards */}
        <div className="space-y-8 mb-12">
          {benefits.map((benefit, index) => {
            const isLeft = index % 2 === 0
            const isVisible = visibleCards.includes(index)
            const isExpanded = expandedCard === index

            return (
              <div
                key={index}
                data-index={index}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className={`flex flex-col ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center group cursor-pointer`}
                  onClick={() => setExpandedCard(isExpanded ? null : index)}
                >
                  {/* Icon/Image Side - Different sizes */}
                  <div className={`flex-shrink-0 ${isLeft ? 'lg:w-1/3' : 'lg:w-1/3'} w-full`}>
                    <div
                      className={`rounded-2xl p-8 transition-all duration-300 ${
                        isExpanded
                          ? 'bg-white scale-105 shadow-2xl border-4 border-primary'
                          : 'bg-white border-2 border-neutral-dark/10 hover:shadow-xl'
                      }`}
                      style={isExpanded ? {
                        background: 'linear-gradient(135deg, rgba(255, 107, 107, 0.1) 0%, rgba(78, 205, 196, 0.1) 100%)'
                      } : {}}
                      onMouseEnter={(e) => {
                        if (!isExpanded) {
                          e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 107, 107, 0.1) 0%, rgba(78, 205, 196, 0.1) 100%)'
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isExpanded) {
                          e.currentTarget.style.background = ''
                        }
                      }}
                    >
                      <div 
                        className={`text-primary mb-4 transition-all duration-300 ${
                          isExpanded ? 'animate-pulse' : ''
                        } group-hover:rotate-12 group-hover:scale-110`}
                      >
                        {React.cloneElement(benefit.icon, {
                          className: `${benefit.icon.props.className} transition-transform duration-300 group-hover:rotate-6`
                        })}
                      </div>
                      <div 
                        className="text-4xl font-black mb-2 transition-all duration-300"
                        style={{
                          color: '#2C3E50',
                          textShadow: animatedStats[index] === true || (animatedStats[index] && animatedStats[index] !== benefit.stat)
                            ? '0 0 20px rgba(255, 107, 107, 0.6), 0 0 40px rgba(255, 107, 107, 0.4)'
                            : 'none'
                        }}
                      >
                        {animatedStats[index] && animatedStats[index] !== true ? animatedStats[index] : benefit.stat}
                      </div>
                      <div className="text-sm text-neutral-dark/70 font-semibold">{benefit.statLabel}</div>
                    </div>
                  </div>

                  {/* Content Side - Different sizes based on index */}
                  <div className={`flex-1 ${isLeft ? 'lg:text-left' : 'lg:text-right'} text-center ${index % 3 === 0 ? 'lg:scale-105' : index % 3 === 1 ? 'lg:scale-95' : ''}`}>
                    <div
                      className={`rounded-2xl p-8 transition-all duration-300 ${
                        isExpanded
                          ? 'bg-white border-4 border-primary shadow-2xl'
                          : 'bg-white border-2 border-neutral-dark/10 hover:border-primary hover:shadow-xl'
                      }`}
                      onMouseEnter={(e) => {
                        if (!isExpanded) {
                          e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 107, 107, 0.05) 0%, rgba(78, 205, 196, 0.05) 100%)'
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isExpanded) {
                          e.currentTarget.style.background = ''
                        }
                      }}
                    >
                      <h3 className="text-3xl font-black text-neutral-dark mb-4">{benefit.title}</h3>
                      <p className="text-lg text-neutral-dark/80 mb-4 leading-relaxed">{benefit.description}</p>

                      {/* Progress Bar */}
                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-semibold text-neutral-dark/70">Skill Development</span>
                          <span className="text-sm font-bold text-primary">{benefit.progress}%</span>
                        </div>
                        <div className="h-2 bg-neutral-dark/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000"
                            style={{ width: isVisible ? `${benefit.progress}%` : '0%' }}
                          ></div>
                        </div>
                      </div>

                      {/* Testimonial */}
                      <div className="bg-primary/5 rounded-lg p-4 mb-4 border-l-4 border-primary">
                        <p className="text-sm italic text-neutral-dark/80 mb-2">"{benefit.testimonial}"</p>
                        <p className="text-xs font-semibold text-primary">{benefit.author}</p>
                      </div>

                      {/* Expanded Content */}
                      {isExpanded && (
                        <div className="mt-4 pt-4 border-t-2 border-primary/20 animate-fadeInUp">
                          <p className="text-neutral-dark/70 leading-relaxed mb-4">{benefit.expandedContent}</p>
                          <button
                            className="px-6 py-2 bg-gradient-to-r from-primary to-primary-dark text-black rounded-lg font-bold hover:shadow-lg transition-all"
                            onClick={(e) => {
                              e.stopPropagation()
                              // Could link to success stories
                            }}
                          >
                            Learn More
                          </button>
                        </div>
                      )}

                      {!isExpanded && (
                        <div className="text-sm font-semibold text-primary mt-4 group-hover:underline">
                          Click to expand →
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Partners Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-2">
              Backed by industry leaders
            </h3>
            <p className="text-lg text-neutral-dark/70">
              Our partners open doors to internships, jobs, and career opportunities
            </p>
          </div>
          <PartnersStrip />
        </div>
      </div>
    </section>
  )
}

export default WhyCityYear

