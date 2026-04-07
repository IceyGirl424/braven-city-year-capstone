import React, { useState, useEffect } from 'react'

const ApplySection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    // Application deadline: January 15, 2026
    const deadline = new Date('2026-01-15T23:59:59').getTime()

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = deadline - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const handleApply = () => {
    alert('This would redirect to the City Year application portal. In production, this would link to the actual application system.')
  }

  return (
    <section 
      id="apply" 
      className="pre-footer-cta relative text-white overflow-hidden"
      style={{
        padding: '120px 20px',
        marginTop: 0,
        marginBottom: 0
      }}
    >
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/75 via-primary/65 to-primary-dark/75 z-0"></div>
      </div>
      
      {/* Subtle Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      ></div>
      
      <div className="relative z-10 max-w-[800px] mx-auto text-center">
        {/* Countdown Banner */}
        <div 
          className="bg-black/30 backdrop-blur-md rounded-[20px] p-10 mb-12 border-2 border-white/30 shadow-2xl"
        >
          <p 
            className="text-sm font-bold uppercase tracking-[2px] text-white mb-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
            style={{ letterSpacing: '2px' }}
          >
            APPLY FOR SPRING 2026 COHORT
          </p>
          {timeLeft.days > 0 ? (
            <div className="flex justify-center gap-6 md:gap-12">
              <div className="flex flex-col items-center">
                <span 
                  className="text-[2.5rem] md:text-[4rem] font-bold text-white leading-none mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
                >
                  {timeLeft.days}
                </span>
                <span 
                  className="text-sm font-semibold text-white uppercase tracking-wide drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]"
                  style={{ letterSpacing: '1px' }}
                >
                  DAYS
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span 
                  className="text-[2.5rem] md:text-[4rem] font-bold text-white leading-none mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
                >
                  {timeLeft.hours}
                </span>
                <span 
                  className="text-sm font-semibold text-white uppercase tracking-wide drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]"
                  style={{ letterSpacing: '1px' }}
                >
                  HOURS
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span 
                  className="text-[2.5rem] md:text-[4rem] font-bold text-white leading-none mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
                >
                  {timeLeft.minutes}
                </span>
                <span 
                  className="text-sm font-semibold text-white uppercase tracking-wide drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]"
                  style={{ letterSpacing: '1px' }}
                >
                  MINUTES
                </span>
              </div>
            </div>
          ) : (
            <p className="text-lg text-white">Application deadline passed</p>
          )}
        </div>

        {/* Main CTA Content */}
        <h2 
          className="text-4xl md:text-5xl font-bold mb-6 text-white leading-[1.2] drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
        >
          Ready to Make an Impact?
        </h2>
        <p 
          className="text-lg md:text-xl mb-10 text-white leading-relaxed max-w-[700px] mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] font-medium"
        >
          Join 35 AmeriCorps members working with over 1,200 students in Eastside San José and East Palo Alto.
        </p>
        
        <button
          onClick={handleApply}
          className="bg-white text-primary px-10 md:px-16 py-4 md:py-5 rounded-xl font-bold text-base md:text-lg hover:bg-neutral-light transition-all hover:-translate-y-1 shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_30px_rgba(0,0,0,0.25)] mb-8 min-h-[44px] w-full max-w-[320px] md:w-auto"
          style={{ 
            color: '#FF6B6B',
            fontWeight: '700'
          }}
        >
          Start Your Application
        </button>
        
        <p className="text-base text-white opacity-95">
          Questions? <a 
            href="#contact" 
            className="underline font-semibold hover:opacity-80 transition-opacity"
          >
            Connect with us
          </a>
        </p>
      </div>
    </section>
  )
}

export default ApplySection

