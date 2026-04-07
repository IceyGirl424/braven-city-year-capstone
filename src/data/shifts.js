// Generate future dates starting from today
const today = new Date()
const getFutureDate = (daysFromToday) => {
  const date = new Date(today)
  date.setDate(date.getDate() + daysFromToday)
  return date.toISOString().split('T')[0]
}

export const shifts = [
  { 
    id: 'shift-1',
    date: getFutureDate(7), // 1 week from today
    time: '9am-1pm', 
    spotsLeft: 5, 
    type: 'Classroom Support',
    location: 'Eastside San José Elementary',
    description: 'Help students with reading and math in small groups'
  },
  { 
    id: 'shift-2',
    date: getFutureDate(9), 
    time: '10am-2pm', 
    spotsLeft: 2, 
    type: 'Mentoring',
    location: 'East Palo Alto Middle School',
    description: 'One-on-one mentoring session with middle school students'
  },
  { 
    id: 'shift-3',
    date: getFutureDate(11), 
    time: '1pm-4pm', 
    spotsLeft: 8, 
    type: 'After-School Program',
    location: 'San José High School',
    description: 'Support after-school homework help and enrichment activities'
  },
  { 
    id: 'shift-4',
    date: getFutureDate(14), 
    time: '9am-12pm', 
    spotsLeft: 3, 
    type: 'Classroom Support',
    location: 'Eastside San José Elementary',
    description: 'Assist teachers with classroom activities and student support'
  },
  { 
    id: 'shift-5',
    date: getFutureDate(16), 
    time: '10am-2pm', 
    spotsLeft: 6, 
    type: 'Mentoring',
    location: 'East Palo Alto Community Center',
    description: 'Group mentoring and life skills workshops'
  },
  { 
    id: 'shift-6',
    date: getFutureDate(17), 
    time: '1pm-5pm', 
    spotsLeft: 4, 
    type: 'After-School Program',
    location: 'San José High School',
    description: 'College prep and career exploration activities'
  },
  { 
    id: 'shift-7',
    date: getFutureDate(21), 
    time: '9am-1pm', 
    spotsLeft: 7, 
    type: 'Classroom Support',
    location: 'Eastside San José Elementary',
    description: 'Reading intervention and literacy support'
  },
  { 
    id: 'shift-8',
    date: getFutureDate(23), 
    time: '10am-2pm', 
    spotsLeft: 1, 
    type: 'Mentoring',
    location: 'East Palo Alto Middle School',
    description: 'One-on-one academic and social-emotional support'
  },
  { 
    id: 'shift-9',
    date: getFutureDate(24), 
    time: '9am-12pm', 
    spotsLeft: 6, 
    type: 'Classroom Support',
    location: 'Eastside San José Elementary',
    description: 'Morning tutoring and academic support'
  },
  { 
    id: 'shift-10',
    date: getFutureDate(28), 
    time: '10am-2pm', 
    spotsLeft: 4, 
    type: 'Mentoring',
    location: 'East Palo Alto Middle School',
    description: 'Academic support and tutoring sessions'
  },
  { 
    id: 'shift-11',
    date: getFutureDate(30), 
    time: '1pm-4pm', 
    spotsLeft: 5, 
    type: 'After-School Program',
    location: 'San José High School',
    description: 'Homework help and study skills workshops'
  },
  { 
    id: 'shift-12',
    date: getFutureDate(35), 
    time: '9am-1pm', 
    spotsLeft: 8, 
    type: 'Classroom Support',
    location: 'Eastside San José Elementary',
    description: 'Math and reading intervention support'
  }
]

export const getShiftsByDate = (dateString) => {
  return shifts.filter(shift => shift.date === dateString)
}

export const getNextAvailableDate = () => {
  const today = new Date().toISOString().split('T')[0]
  const futureShifts = shifts.filter(shift => shift.date >= today && shift.spotsLeft > 0)
  if (futureShifts.length > 0) {
    return futureShifts[0].date
  }
  return null
}

