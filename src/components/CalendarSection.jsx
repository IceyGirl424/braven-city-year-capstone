import React, { useState, useEffect } from 'react'
import { shifts } from '../data/shifts'

const CalendarSection = () => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(null)
  const [showSignupModal, setShowSignupModal] = useState(false)
  const [selectedShift, setSelectedShift] = useState(null)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' })
  const [formErrors, setFormErrors] = useState({})
  const [monthTransition, setMonthTransition] = useState('')
  const [signupConfirmation, setSignupConfirmation] = useState(null)

  // State for shifts with dynamic spots
  const [shiftsData, setShiftsData] = useState(() => {
    // Initialize with shifts data
    return shifts.map(shift => ({ ...shift }))
  })

  // Event dates with shifts - dynamically build from shifts data
  const eventDates = {}
  shiftsData.forEach(shift => {
    if (!eventDates[shift.date]) {
      eventDates[shift.date] = []
    }
    eventDates[shift.date].push(shift)
  })

  // Load signups from localStorage and update spots
  useEffect(() => {
    const savedSignups = localStorage.getItem('cityYearShiftSignups')
    if (savedSignups) {
      try {
        const parsed = JSON.parse(savedSignups)
        setShiftsData(prevShifts => {
          const updatedShifts = prevShifts.map(shift => {
            const shiftKey = `${shift.date}-${shift.id}`
            const signups = parsed[shiftKey] || []
            return {
              ...shift,
              spotsLeft: Math.max(0, shift.spotsLeft - signups.length)
            }
          })
          return updatedShifts
        })
      } catch (e) {
        console.error('Error loading signups:', e)
      }
    }
  }, [])

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const isPastDate = (date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const compareDate = new Date(date)
    compareDate.setHours(0, 0, 0, 0)
    return compareDate < today
  }

  const getDaysInMonth = (date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []
    
    // Add previous month's trailing days
    const prevMonth = new Date(year, month, 0)
    const prevMonthDays = prevMonth.getDate()
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      const dayDate = new Date(year, month - 1, prevMonthDays - i)
      days.push({
        date: dayDate,
        isCurrentMonth: false,
        isPast: isPastDate(dayDate)
      })
    }

    // Add current month's days
    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
      const hasEvents = eventDates[dateStr] && eventDates[dateStr].length > 0
      const dayDate = new Date(year, month, day)
      const isToday = new Date().toDateString() === dayDate.toDateString()
      
      days.push({
        date: dayDate,
        isCurrentMonth: true,
        hasEvents,
        isToday,
        isPast: isPastDate(dayDate)
      })
    }

    // Add next month's leading days to fill the grid
    const remainingDays = 42 - days.length
    for (let day = 1; day <= remainingDays; day++) {
      const dayDate = new Date(year, month + 1, day)
      days.push({
        date: dayDate,
        isCurrentMonth: false,
        isPast: isPastDate(dayDate)
      })
    }

    return days
  }

  const handlePrevMonth = () => {
    setMonthTransition('slide-out-left')
    setTimeout(() => {
      setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
      setSelectedDate(null)
      setMonthTransition('slide-in-right')
      setTimeout(() => setMonthTransition(''), 300)
    }, 150)
  }

  const handleNextMonth = () => {
    setMonthTransition('slide-out-right')
    setTimeout(() => {
      setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
      setSelectedDate(null)
      setMonthTransition('slide-in-left')
      setTimeout(() => setMonthTransition(''), 300)
    }, 150)
  }

  const handleDateClick = (day) => {
    if (day.isCurrentMonth && day.hasEvents && !day.isPast) {
      const dateStr = `${day.date.getFullYear()}-${String(day.date.getMonth() + 1).padStart(2, '0')}-${String(day.date.getDate()).padStart(2, '0')}`
      setSelectedDate(dateStr)
      setSignupConfirmation(null)
    }
  }

  const openSignupModal = (shift) => {
    setSelectedShift(shift)
    setShowSignupModal(true)
    setFormErrors({})
    setFormData({ name: '', email: '', phone: '' })
  }

  const closeSignupModal = () => {
    setShowSignupModal(false)
    setSelectedShift(null)
    setFormErrors({})
    setFormData({ name: '', email: '', phone: '' })
  }

  const validateForm = () => {
    const errors = {}
    if (!formData.name.trim()) errors.name = 'Full Name is required'
    if (!formData.email.trim()) {
      errors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid'
    }
    if (!formData.phone.trim()) errors.phone = 'Phone Number is required'
    return errors
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const errors = validateForm()
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }

    // Save signup
    const shiftKey = `${selectedDate}-${selectedShift.id}`
    const savedSignups = JSON.parse(localStorage.getItem('cityYearShiftSignups') || '{}')
    if (!savedSignups[shiftKey]) {
      savedSignups[shiftKey] = []
    }
    savedSignups[shiftKey].push({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      timestamp: new Date().toISOString()
    })
    localStorage.setItem('cityYearShiftSignups', JSON.stringify(savedSignups))

    // Update spots in state
    setShiftsData(prevShifts => {
      return prevShifts.map(shift => {
        if (shift.id === selectedShift.id && shift.date === selectedDate) {
          return {
            ...shift,
            spotsLeft: Math.max(0, shift.spotsLeft - 1)
          }
        }
        return shift
      })
    })

    setSignupConfirmation({
      name: formData.name,
      email: formData.email,
      shift: selectedShift
    })
    closeSignupModal()
  }

  const handleFormChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const days = getDaysInMonth(currentDate)
  const selectedShifts = selectedDate ? eventDates[selectedDate] : null

  return (
    <section id="calendar" className="volunteer-section bg-gradient-to-b from-neutral-light to-white relative overflow-hidden" style={{ padding: '100px 20px' }}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #2C3E50 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-dark">
            Volunteer with Us
          </h2>
            <p className="text-lg md:text-xl text-neutral-dark/80 max-w-3xl mx-auto">
              Not ready to commit? Test drive City Year for 4 hours. Browse the calendar below to find available volunteer spots.
            </p>
        </div>

        {/* Glassmorphism Calendar Container */}
        <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-6 md:p-10 border border-white/50 relative overflow-hidden">
            {/* Gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary"></div>
            
            {/* Calendar Header */}
            <div className="flex justify-between items-center mb-8 pb-6 border-b-2 border-neutral-dark/10">
            <button
              onClick={handlePrevMonth}
              className="text-primary text-3xl font-bold hover:bg-primary/10 px-4 py-2 rounded-xl transition-all hover:scale-110 active:scale-95 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Previous month"
            >
              ←
            </button>
            <h3 className={`text-2xl md:text-3xl font-bold text-neutral-dark transition-all duration-300 ${monthTransition}`}>
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h3>
            <button
              onClick={handleNextMonth}
              className="text-primary text-3xl font-bold hover:bg-primary/10 px-4 py-2 rounded-xl transition-all hover:scale-110 active:scale-95 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Next month"
            >
              →
            </button>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2 md:gap-3 mb-8">
            {dayNames.map((day) => (
              <div key={day} className="text-center font-bold text-neutral-dark/60 py-3 text-sm md:text-base">
                {day}
              </div>
            ))}
            {days.map((day, index) => {
              const dateStr = `${day.date.getFullYear()}-${String(day.date.getMonth() + 1).padStart(2, '0')}-${String(day.date.getDate()).padStart(2, '0')}`
              const isSelected = selectedDate === dateStr
              const hasAvailableShifts = eventDates[dateStr] && eventDates[dateStr].some(shift => shift.spotsLeft > 0)
              const isPast = day.isPast || false
              
              return (
                <button
                  key={index}
                  onClick={() => handleDateClick(day)}
                  disabled={!day.isCurrentMonth || !day.hasEvents || isPast}
                  className={`
                    calendar-day aspect-square rounded-xl border-2 font-semibold transition-all duration-300
                    relative group min-h-[44px]
                    ${!day.isCurrentMonth ? 'text-neutral-dark/20 bg-transparent border-transparent cursor-not-allowed' : ''}
                    ${day.isCurrentMonth && isPast ? 'text-neutral-dark/30 bg-neutral-dark/10 border-neutral-dark/20 cursor-not-allowed opacity-50' : ''}
                    ${day.isCurrentMonth && !day.hasEvents && !isPast ? 'text-neutral-dark/40 bg-neutral-light/50 border-neutral-dark/10 cursor-default' : ''}
                    ${day.isToday && !day.hasEvents && !isPast ? 'text-primary bg-primary/10 border-primary/30 font-bold' : ''}
                    ${hasAvailableShifts && !isSelected && !isPast ? 'text-accent bg-accent/10 border-accent/30 cursor-pointer hover:bg-accent/20' : ''}
                    ${isSelected ? 'selected text-white bg-gradient-primary border-primary shadow-xl scale-105 z-10' : ''}
                    ${day.hasEvents ? 'has-event' : ''}
                  `}
                >
                  <span className={`relative z-10 ${isPast && day.isCurrentMonth ? 'line-through' : ''}`}>
                    {day.date.getDate()}
                  </span>
                  {/* Event indicator dot */}
                  {day.hasEvents && !isPast && (
                    <div className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full z-10 ${
                      hasAvailableShifts ? 'bg-accent' : 'bg-neutral-dark/40'
                    }`}></div>
                  )}
                </button>
              )
            })}
          </div>

          {/* Shift Details with Glassmorphism */}
          {selectedDate && selectedShifts && selectedShifts.length > 0 && (
            <div className="mt-8 pt-8 border-t-2 border-neutral-dark/10 animate-fadeInUp">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-neutral-dark">
                Available Shifts - {new Date(selectedDate).toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </h3>
              <div className="space-y-4">
                {selectedShifts.map((shift, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 border-2 border-neutral-dark/10 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-2 h-2 rounded-full bg-accent"></div>
                          <div className="font-bold text-lg text-neutral-dark">{shift.time}</div>
                        </div>
                        <div className="text-neutral-dark font-medium mb-2">{shift.location}</div>
                        <div className="text-sm font-semibold mb-2"
                          style={{
                            color: shift.spotsLeft > 0 
                              ? (shift.spotsLeft < 3 ? '#FF6B6B' : shift.spotsLeft < 5 ? '#FFD93D' : '#4ECDC4')
                              : '#666666'
                          }}
                        >
                          {shift.spotsLeft > 0 
                            ? `${shift.spotsLeft} spot${shift.spotsLeft === 1 ? '' : 's'} left`
                            : 'Fully booked'}
                        </div>
                        {shift.description && (
                          <div className="text-sm text-neutral-dark/70 mt-2">{shift.description}</div>
                        )}
                      </div>
                      <button
                        onClick={() => openSignupModal(shift)}
                        disabled={shift.spotsLeft <= 0}
                        className={`px-8 py-3 rounded-xl font-bold text-base transition-all min-h-[44px] min-w-[140px] whitespace-nowrap flex items-center justify-center ${
                          shift.spotsLeft > 0
                            ? 'text-white hover:shadow-lg hover:scale-105 active:scale-95 cursor-pointer'
                            : 'bg-gray-200 text-gray-500 cursor-not-allowed opacity-60'
                        }`}
                        style={shift.spotsLeft > 0 ? {
                          background: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)'
                        } : {}}
                      >
                        {shift.spotsLeft > 0 ? 'Reserve My Spot' : 'Fully Booked'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedDate && (!selectedShifts || selectedShifts.length === 0) && (
            <div className="mt-8 pt-8 border-t-2 border-neutral-dark/10 text-center">
              <p className="text-neutral-dark/70 font-medium">No shifts available on this date. Please select another date.</p>
            </div>
          )}

          {signupConfirmation && (
            <div className="mt-8 pt-8 border-t-2 border-accent/30 bg-accent/10 rounded-2xl p-6 text-center animate-fadeInUp">
              <div className="text-4xl mb-3">✓</div>
              <h3 className="text-xl font-bold mb-2 text-neutral-dark">Thank you for signing up!</h3>
              <p className="text-neutral-dark/80">
                {signupConfirmation.name}, you've successfully signed up for the shift at{' '}
                {signupConfirmation.shift.location} on{' '}
                {new Date(selectedDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}.
                We've sent a confirmation to {signupConfirmation.email}.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Signup Modal with Glassmorphism */}
      {showSignupModal && selectedShift && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn"
          onClick={closeSignupModal}
        >
          <div 
            className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl max-w-md w-full p-6 md:p-8 border border-white/50 relative animate-fadeInUp"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeSignupModal}
              className="absolute top-4 right-4 text-neutral-dark/40 hover:text-neutral-dark text-3xl font-light w-10 h-10 flex items-center justify-center rounded-full hover:bg-neutral-light transition-all"
              aria-label="Close"
            >
              ×
            </button>

            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-dark mb-4">Reserve Your Spot</h3>
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-4 border border-primary/20">
                <p className="font-bold text-neutral-dark mb-1">{selectedShift.time}</p>
                <p className="text-sm text-neutral-dark/70">{selectedShift.location}</p>
                <p className="text-sm text-neutral-dark/60 mt-1">
                  {new Date(selectedDate).toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    month: 'long', 
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </p>
              </div>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-neutral-dark mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 border-2 border-neutral-dark/20 rounded-xl focus:border-primary focus:outline-none transition-all bg-white"
                  placeholder="John Doe"
                />
                {formErrors.name && <p className="text-primary text-xs mt-1">{formErrors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-neutral-dark mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 border-2 border-neutral-dark/20 rounded-xl focus:border-primary focus:outline-none transition-all bg-white"
                  placeholder="john.doe@example.com"
                />
                {formErrors.email && <p className="text-primary text-xs mt-1">{formErrors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-neutral-dark mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 border-2 border-neutral-dark/20 rounded-xl focus:border-primary focus:outline-none transition-all bg-white"
                  placeholder="(555) 123-4567"
                />
                {formErrors.phone && <p className="text-primary text-xs mt-1">{formErrors.phone}</p>}
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={closeSignupModal}
                  className="flex-1 px-6 py-3 border-2 border-neutral-dark/20 text-neutral-dark rounded-xl font-semibold hover:bg-neutral-light transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-gradient-primary text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-105 active:scale-95"
                >
                  Confirm Sign Up
                </button>
              </div>
            </form>

            <p className="text-xs text-neutral-dark/50 mt-4 text-center">
              * Required fields. We'll send you a confirmation email with shift details.
            </p>
          </div>
        </div>
      )}
    </section>
  )
}

export default CalendarSection
