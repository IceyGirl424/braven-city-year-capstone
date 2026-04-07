import React, { useState } from 'react'

const BayAreaSalaryTool = () => {
  const [livingSituation, setLivingSituation] = useState('roommates')
  const [hasSideGig, setHasSideGig] = useState(false)
  const [hasCarpool, setHasCarpool] = useState(false)

  const biWeeklyStipend = 1300
  const monthlyIncome = biWeeklyStipend * 2

  const expenses = {
    roommates: {
      rent: 800,
      utilities: 80,
      food: 350,
      transport: 150,
      phone: 50,
      other: 200
    },
    solo: {
      rent: 2000,
      utilities: 150,
      food: 400,
      transport: 150,
      phone: 50,
      other: 300
    },
    family: {
      rent: 0,
      utilities: 0,
      food: 200,
      transport: 150,
      phone: 50,
      other: 150
    }
  }

  const currentExpenses = expenses[livingSituation]
  const totalExpenses = Object.values(currentExpenses).reduce((a, b) => a + b, 0)
  const monthlyRemaining = monthlyIncome - totalExpenses
  const sideGigIncome = hasSideGig ? 400 : 0
  const carpoolSavings = hasCarpool ? 200 : 0
  const finalRemaining = monthlyRemaining + sideGigIncome + carpoolSavings

  return (
    <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 rounded-3xl p-8 border-2 border-primary/20">
      <h3 className="text-3xl font-black text-neutral-dark mb-6 text-center">Bay Area Reality Check</h3>
      
      <div className="mb-6">
        <label className="block text-lg font-bold text-neutral-dark mb-3">Living Situation:</label>
        <div className="flex flex-wrap gap-3">
          {['roommates', 'solo', 'family'].map((option) => (
            <button
              key={option}
              onClick={() => setLivingSituation(option)}
              className={`px-6 py-3 rounded-xl font-bold transition-all transform ${
                livingSituation === option
                  ? 'text-white scale-105 shadow-xl'
                  : 'bg-white text-neutral-dark border-2 border-neutral-dark/20 hover:border-primary'
              }`}
              style={livingSituation === option ? {
                background: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)'
              } : {}}
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={hasSideGig}
            onChange={(e) => setHasSideGig(e.target.checked)}
            className="w-5 h-5 text-primary rounded"
          />
          <span className="text-lg font-bold text-neutral-dark">Have a side gig (+$400/month)</span>
        </label>
      </div>

      <div className="mb-6 bg-accent/10 rounded-xl p-4 border-2 border-accent/30">
        <label className="flex items-center gap-3 cursor-pointer mb-2">
          <input
            type="checkbox"
            checked={hasCarpool}
            onChange={(e) => setHasCarpool(e.target.checked)}
            className="w-5 h-5 text-accent rounded"
          />
          <span className="text-lg font-bold text-neutral-dark">With Carpool Program: Save an additional $200/month</span>
        </label>
        <p className="text-sm text-neutral-dark/70 ml-8 mb-2">
          Join our carpool network to reduce transportation costs and build community connections.
        </p>
        <a 
          href="carpool.html" 
          className="ml-8 text-accent font-semibold hover:underline inline-flex items-center gap-1"
        >
          Learn more about the Carpool Program →
        </a>
      </div>

      <div className="bg-white rounded-2xl p-6 mb-0">
        <div className="space-y-3 mb-4">
          <div className="flex justify-between items-center">
            <span className="text-neutral-dark/70">Monthly Income</span>
            <span className="text-2xl font-black text-accent">${monthlyIncome.toLocaleString()}</span>
          </div>
          {hasSideGig && (
            <div className="flex justify-between items-center">
              <span className="text-neutral-dark/70">Side Gig Income</span>
              <span className="text-xl font-bold text-secondary">+${sideGigIncome}</span>
            </div>
          )}
          {hasCarpool && (
            <div className="flex justify-between items-center">
              <span className="text-neutral-dark/70">Carpool Savings</span>
              <span className="text-xl font-bold text-accent">+${carpoolSavings}</span>
            </div>
          )}
          <div className="border-t-2 border-neutral-dark/10 pt-3">
            {Object.entries(currentExpenses).map(([key, value]) => (
              <div key={key} className="flex justify-between items-center mb-2">
                <span className="text-neutral-dark/70 capitalize">{key}</span>
                <span className="font-semibold text-neutral-dark">${value}</span>
              </div>
            ))}
          </div>
          <div className="border-t-2 border-neutral-dark/10 pt-3">
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-neutral-dark">Total Expenses</span>
              <span className="text-xl font-black text-primary">${totalExpenses.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>

      {(() => {
        // Determine status: doable (green), maybe (orange), no (maroon)
        let bgGradient = 'linear-gradient(to bottom right, rgba(139, 21, 56, 0.3), rgba(139, 21, 56, 0.1))'
        let borderColor = '#8B1538'
        let textColor = '#8B1538'
        let message = 'Consider roommates or a side gig'
        
        if (finalRemaining > 300) {
          // Doable - soft green
          bgGradient = 'linear-gradient(to bottom right, rgba(144, 238, 144, 0.3), rgba(144, 238, 144, 0.1))'
          borderColor = '#90EE90'
          textColor = '#228B22'
          message = 'You can make it work! 💪'
        } else if (finalRemaining > 0) {
          // Maybe - soft pastel orange
          bgGradient = 'linear-gradient(to bottom right, rgba(255, 212, 163, 0.3), rgba(255, 212, 163, 0.1))'
          borderColor = '#FFD4A3'
          textColor = '#FF8C42'
          message = 'Tight but doable with careful budgeting'
        } else {
          // No - maroon
          bgGradient = 'linear-gradient(to bottom right, rgba(139, 21, 56, 0.3), rgba(139, 21, 56, 0.1))'
          borderColor = '#8B1538'
          textColor = '#8B1538'
          message = 'Consider roommates or a side gig'
        }
        
        return (
          <div 
            className="rounded-2xl p-6 text-center border-2"
            style={{
              background: bgGradient,
              borderColor: borderColor
            }}
          >
            <div className="text-sm font-bold text-neutral-dark/70 mb-2">Monthly Remaining</div>
            <div 
              className="text-5xl font-black mb-2"
              style={{ color: textColor }}
            >
              ${finalRemaining.toLocaleString()}
            </div>
            <p className="text-neutral-dark/80">{message}</p>
          </div>
        )
      })()}
    </div>
  )
}

export default BayAreaSalaryTool

