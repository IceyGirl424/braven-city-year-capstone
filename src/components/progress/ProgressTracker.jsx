import React, { useState, useEffect } from 'react'

const ProgressTracker = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMinimized, setIsMinimized] = useState(() => {
    // Check localStorage for minimized state
    const saved = localStorage.getItem('progressTrackerMinimized')
    return saved === 'true'
  })
  const [completedSteps, setCompletedSteps] = useState({
    info: false,
    volunteer: false,
    apply: false
  })

  useEffect(() => {
    // Check scroll position to mark steps as complete
    const handleScroll = () => {
      const infoSection = document.getElementById('faq') || document.getElementById('about')
      const volunteerSection = document.getElementById('calendar')
      const applySection = document.getElementById('apply')

      if (infoSection && window.scrollY > infoSection.offsetTop - 200) {
        setCompletedSteps(prev => ({ ...prev, info: true }))
      }
      if (volunteerSection && window.scrollY > volunteerSection.offsetTop - 200) {
        setCompletedSteps(prev => ({ ...prev, volunteer: true }))
      }
      if (applySection && window.scrollY > applySection.offsetTop - 200) {
        setCompletedSteps(prev => ({ ...prev, apply: true }))
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('progress-tracker')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const steps = [
    {
      id: 'info',
      label: 'Sign up for info session',
      completed: completedSteps.info,
      count: '137 people this month',
      link: '#faq'
    },
    {
      id: 'volunteer',
      label: 'Attend 4-hour volunteer shift',
      completed: completedSteps.volunteer,
      count: null,
      link: '#calendar'
    },
    {
      id: 'apply',
      label: 'Submit application',
      completed: completedSteps.apply,
      count: 'Deadline: Jan 15, 2026',
      link: '#apply'
    }
  ]

  const handleMinimize = () => {
    setIsMinimized(true)
    localStorage.setItem('progressTrackerMinimized', 'true')
  }

  const handleExpand = () => {
    setIsMinimized(false)
    localStorage.setItem('progressTrackerMinimized', 'false')
  }

  if (isMinimized) {
    return (
      <div
        id="progress-tracker"
        className={`hidden lg:block fixed bottom-5 right-5 z-40 transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <button
          onClick={handleExpand}
          className="bg-primary text-white rounded-full w-14 h-14 shadow-2xl flex items-center justify-center hover:bg-primary-dark transition-all hover:scale-110"
          aria-label="Expand progress tracker"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    )
  }

  return (
    <div
      id="progress-tracker"
      className={`hidden lg:block fixed bottom-5 right-5 z-40 transition-all duration-500 max-w-[320px] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="bg-white rounded-xl shadow-2xl p-6 border-2 border-primary relative">
        {/* Close/Minimize Button */}
        <button
          onClick={handleMinimize}
          className="absolute top-3 right-3 text-neutral-dark/50 hover:text-neutral-dark transition-colors p-1 rounded-full hover:bg-neutral-light"
          aria-label="Minimize progress tracker"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="text-sm font-bold text-neutral-dark mb-4 pr-6">Your Journey</div>
        <div className="space-y-4">
          {steps.map((step, index) => (
            <a
              key={step.id}
              href={step.link}
              className="flex items-start gap-3 group"
            >
              <div className="flex-shrink-0 mt-0.5">
                {step.completed ? (
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                ) : (
                  <div className="w-6 h-6 rounded-full border-2 border-neutral-dark/30"></div>
                )}
              </div>
              <div className="flex-1">
                <div className={`text-sm font-semibold ${step.completed ? 'text-neutral-dark' : 'text-neutral-dark/70'}`}>
                  Step {index + 1}: {step.label}
                </div>
                {step.count && (
                  <div className="text-xs text-neutral-dark/50 mt-1">{step.count}</div>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProgressTracker

