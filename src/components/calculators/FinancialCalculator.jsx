import React, { useState } from 'react'
import BayAreaSalaryTool from '../brand/BayAreaSalaryTool'

const FinancialCalculator = () => {
  const [comparisonMode, setComparisonMode] = useState(null) // null, 'internship', 'entry-job'

  const biWeeklyStipend = 1300
  const payPeriodsPerYear = 26
  const annualStipend = biWeeklyStipend * payPeriodsPerYear
  const educationAward = 6895
  const healthInsuranceValue = 4800 // Estimated annual value
  const professionalDevValue = 2000 // Estimated value
  const totalCompensation = annualStipend + educationAward + healthInsuranceValue + professionalDevValue

  const comparisons = {
    internship: {
      label: 'Unpaid Internship',
      salary: 0,
      benefits: 0,
      total: 0
    },
    'entry-job': {
      label: 'Entry-Level Job',
      salary: 35000,
      benefits: 3000,
      total: 38000
    }
  }

  const currentComparison = comparisonMode ? comparisons[comparisonMode] : null

  return (
    <section className="real-numbers-section bg-white" style={{ padding: '100px 20px' }}>
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-neutral-dark">
            The Real Numbers
          </h2>
          <p className="text-lg text-neutral-dark/80 max-w-2xl mx-auto">
            Let's break down what you actually get (no corporate speak, just facts)
          </p>
        </div>

        <div className="bg-neutral-light rounded-2xl p-6 border-l-4 border-accent shadow-lg">
          {/* Stipend Breakdown */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-neutral-dark mb-3">Bi-Weekly Stipend</h3>
            <div className="bg-white rounded-lg p-4 mb-3">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-4xl font-bold text-primary">${biWeeklyStipend.toLocaleString()}</span>
                <span className="text-lg text-neutral-dark/70">every 2 weeks</span>
              </div>
              <div className="text-sm text-neutral-dark/60">
                × {payPeriodsPerYear} pay periods = <span className="font-semibold text-neutral-dark">${annualStipend.toLocaleString()}/year</span>
              </div>
            </div>
          </div>

          {/* Benefits Breakdown */}
          <div className="grid md:grid-cols-3 gap-3 mb-6">
            <div className="bg-white rounded-lg p-3">
              <div className="text-sm text-neutral-dark/60 mb-1">Education Award</div>
              <div className="text-2xl font-bold text-accent">${educationAward.toLocaleString()}</div>
              <div className="text-xs text-neutral-dark/50 mt-1">After completing service</div>
            </div>
            <div className="bg-white rounded-lg p-3">
              <div className="text-sm text-neutral-dark/60 mb-1">Health Insurance</div>
              <div className="text-2xl font-bold text-accent">${healthInsuranceValue.toLocaleString()}</div>
              <div className="text-xs text-neutral-dark/50 mt-1">Fully covered</div>
            </div>
            <div className="bg-white rounded-lg p-3">
              <div className="text-sm text-neutral-dark/60 mb-1">Professional Development</div>
              <div className="text-2xl font-bold text-accent">${professionalDevValue.toLocaleString()}</div>
              <div className="text-xs text-neutral-dark/50 mt-1">Training & networking</div>
            </div>
          </div>

          {/* Total Compensation */}
          <div 
            className="rounded-lg p-5 mb-3 text-white"
            style={{
              background: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)'
            }}
          >
            <div className="text-sm mb-1 opacity-90">Total Compensation Value</div>
            <div className="text-5xl font-bold mb-1">${totalCompensation.toLocaleString()}</div>
            <div className="text-sm opacity-90">Stipend + Benefits + Education Award</div>
          </div>

          {/* Comparison Mode Toggle */}
          <div className="mb-3">
            <div className="text-sm font-semibold text-neutral-dark mb-2">Compare to:</div>
            <div className="flex gap-3">
              <button
                onClick={() => setComparisonMode(comparisonMode === 'internship' ? null : 'internship')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  comparisonMode === 'internship'
                    ? 'bg-primary text-white'
                    : 'bg-white text-neutral-dark border-2 border-neutral-dark/20 hover:border-primary'
                }`}
              >
                Unpaid Internship
              </button>
              <button
                onClick={() => setComparisonMode(comparisonMode === 'entry-job' ? null : 'entry-job')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  comparisonMode === 'entry-job'
                    ? 'bg-primary text-white'
                    : 'bg-white text-neutral-dark border-2 border-neutral-dark/20 hover:border-primary'
                }`}
              >
                Entry-Level Job
              </button>
            </div>
          </div>

          {/* Comparison Display */}
          {currentComparison && (
            <div className="bg-white rounded-lg p-5 border-2 border-secondary mb-5">
              <h4 className="font-bold text-neutral-dark mb-3">vs. {currentComparison.label}</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-neutral-dark/60">City Year Total</div>
                  <div className="text-2xl font-bold text-accent">${totalCompensation.toLocaleString()}</div>
                </div>
                <div>
                  <div className="text-sm text-neutral-dark/60">{currentComparison.label} Total</div>
                  <div className="text-2xl font-bold text-neutral-dark/40">${currentComparison.total.toLocaleString()}</div>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-neutral-dark/10">
                <div className="text-sm text-neutral-dark/70">
                  <strong>Difference:</strong> City Year provides{' '}
                  <span className="text-accent font-bold">
                    ${(totalCompensation - currentComparison.total).toLocaleString()} more
                  </span>{' '}
                  in total value
                </div>
              </div>
            </div>
          )}

          {/* Real Talk Note */}
          <div className="mt-4 p-4 bg-secondary/20 rounded-lg border-l-4 border-secondary">
            <p className="text-sm text-neutral-dark">
              <strong>Real talk:</strong> $1,300 every two weeks (~$33k/year) is tight in the Bay Area. 
              Most members make it work with roommates, budgeting, and sometimes side gigs. But you get health insurance 
              covered and a $6,895 education award that can go toward student loans or future education.
            </p>
          </div>
        </div>

        {/* Bay Area Salary Tool */}
        <div className="mt-12">
          <BayAreaSalaryTool />
        </div>
      </div>
    </section>
  )
}

export default FinancialCalculator

