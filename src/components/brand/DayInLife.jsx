import React, { useState } from 'react'

const DayInLife = () => {
  const [activeTime, setActiveTime] = useState(0)

  const timeline = [
    { time: '7:00 AM', activity: 'Morning Prep', description: 'Team meeting and daily planning', icon: '☕' },
    { time: '8:00 AM', activity: 'School Arrival', description: 'Arrive at partner school', icon: '🏫' },
    { time: '9:00 AM', activity: 'Classroom Support', description: 'Assist teachers with lessons', icon: '📚' },
    { time: '12:00 PM', activity: 'Lunch & Mentoring', description: 'One-on-one student check-ins', icon: '🍎' },
    { time: '2:00 PM', activity: 'After-School Program', description: 'Tutoring and enrichment', icon: '✏️' },
    { time: '4:00 PM', activity: 'Team Reflection', description: 'Daily debrief and planning', icon: '💭' },
    { time: '5:00 PM', activity: 'End of Day', description: 'Professional development or personal time', icon: '🌅' }
  ]

  return (
    <div className="bg-white rounded-3xl p-8 border-2 border-neutral-dark/10 shadow-xl">
      <h3 className="text-3xl font-black text-neutral-dark mb-8 text-center">A Day in the Life</h3>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-secondary"></div>
        
        <div className="space-y-6">
          {timeline.map((item, index) => (
            <div
              key={index}
              className="relative flex items-start gap-6 cursor-pointer group"
              onMouseEnter={() => setActiveTime(index)}
              onClick={() => setActiveTime(index)}
            >
              {/* Time circle */}
              <div className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center font-black text-lg transition-all ${
                activeTime === index 
                  ? 'bg-gradient-primary text-white scale-110 shadow-xl' 
                  : 'bg-white border-2 border-primary text-primary'
              }`}>
                {activeTime === index ? item.icon : index + 1}
              </div>
              
              {/* Content */}
              <div className={`flex-1 pt-2 transition-all ${
                activeTime === index ? 'transform translate-x-2' : ''
              }`}>
                <div className="flex items-center gap-3 mb-1">
                  <span className="font-black text-lg text-neutral-dark">{item.time}</span>
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h4 className="font-bold text-xl text-neutral-dark mb-1">{item.activity}</h4>
                <p className={`text-neutral-dark/70 transition-all ${
                  activeTime === index ? 'opacity-100' : 'opacity-70'
                }`}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DayInLife

