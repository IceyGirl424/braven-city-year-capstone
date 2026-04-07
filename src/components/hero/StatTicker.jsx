import React, { useState, useEffect, useRef } from 'react'

const StatTicker = () => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
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

  const [members, setMembers] = useState(0)
  const [students, setStudents] = useState(0)

  useEffect(() => {
    if (isVisible) {
      animateValue(0, 35, 2000, setMembers)
      animateValue(0, 1200, 2500, setStudents)
    }
  }, [isVisible])

  return (
    <div
      ref={ref}
      className="inline-flex items-center gap-4 bg-[rgba(255,107,107,0.9)] px-8 py-3 rounded-[50px] text-white font-semibold text-lg animate-fadeInUp"
    >
      <span className="font-bold">{members}</span>
      <span>members</span>
      <span className="text-2xl">→</span>
      <span className="font-bold">{students.toLocaleString()}+</span>
      <span>students impacted this year</span>
    </div>
  )
}

export default StatTicker

