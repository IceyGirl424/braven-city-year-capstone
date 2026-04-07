import React, { useState, useEffect } from 'react'

const CountdownTimer = () => {
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

  return (
    <div className="bg-gradient-primary rounded-xl p-6 md:p-8 text-white shadow-lg">
      <div className="text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-2">
          Apply for Spring 2026 Cohort
        </h3>
        <p className="text-lg mb-6 opacity-90">
          {timeLeft.days > 0 ? `${timeLeft.days} days left` : 'Application deadline passed'}
        </p>
        {timeLeft.days > 0 && (
          <div className="flex justify-center gap-4 md:gap-6">
            <div className="bg-white/20 rounded-lg px-4 py-3 min-w-[70px]">
              <div className="text-3xl md:text-4xl font-bold">{timeLeft.days}</div>
              <div className="text-sm opacity-90">Days</div>
            </div>
            <div className="bg-white/20 rounded-lg px-4 py-3 min-w-[70px]">
              <div className="text-3xl md:text-4xl font-bold">{timeLeft.hours}</div>
              <div className="text-sm opacity-90">Hours</div>
            </div>
            <div className="bg-white/20 rounded-lg px-4 py-3 min-w-[70px]">
              <div className="text-3xl md:text-4xl font-bold">{timeLeft.minutes}</div>
              <div className="text-sm opacity-90">Minutes</div>
            </div>
          </div>
        )}
        <button
          onClick={() => {
            const element = document.getElementById('apply')
            if (element) element.scrollIntoView({ behavior: 'smooth' })
          }}
          className="mt-6 bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-neutral-light transition-all hover-scale min-h-[44px]"
        >
          Apply Now
        </button>
      </div>
    </div>
  )
}

export default CountdownTimer

