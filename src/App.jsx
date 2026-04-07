import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FinancialCalculator from './components/calculators/FinancialCalculator'
import WaveDivider from './components/transitions/WaveDivider'
import DiagonalDivider from './components/transitions/DiagonalDivider'
import StarBurstDivider from './components/transitions/StarBurstDivider'
import MissionSection from './components/MissionSection'
import CalendarSection from './components/CalendarSection'
import WhyCityYear from './components/WhyCityYear'
import CityYearEffect from './components/CityYearEffect'
import VideosSection from './components/VideosSection'
import FAQAccordion from './components/faq/FAQAccordion'
import ApplySection from './components/ApplySection'
import ContactPage from './components/ContactPage'
import Footer from './components/Footer'
import ProgressTracker from './components/progress/ProgressTracker'

function App() {
  const [showContact, setShowContact] = useState(false)

  // Check if we're on contact page from URL hash
  React.useEffect(() => {
    if (window.location.hash === '#contact') {
      setShowContact(true)
    }
    const handleHashChange = () => {
      setShowContact(window.location.hash === '#contact')
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  if (showContact) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <ContactPage />
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <WaveDivider topColor="#F7F7F7" bottomColor="#F7F7F7" />
      <FinancialCalculator />
      <DiagonalDivider direction="right" topColor="#F7F7F7" bottomColor="#ffffff" useGradient={true} />
      <MissionSection />
      <StarBurstDivider topColor="#ffffff" bottomColor="#F7F7F7" />
      <div className="text-center py-8 bg-gradient-to-b from-white to-neutral-light/30">
        <p className="text-lg font-semibold text-neutral-dark/70 italic max-w-2xl mx-auto">
          "Ready to make a difference? Start with a 4-hour volunteer shift."
        </p>
      </div>
      <CalendarSection />
      <WaveDivider flip topColor="#F7F7F7" bottomColor="#ffffff" useGradient={true} />
      <WhyCityYear />
      <div className="relative h-24 overflow-hidden bg-gradient-to-b from-white via-primary/10 to-neutral-light/30">
        <svg viewBox="0 0 1200 120" className="absolute bottom-0 w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF6B6B" />
              <stop offset="50%" stopColor="#FF8E53" />
              <stop offset="100%" stopColor="#FF6B6B" />
            </linearGradient>
          </defs>
          <path d="M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z" fill="url(#waveGradient)" opacity="0.3"></path>
        </svg>
      </div>
      <DiagonalDivider direction="right" topColor="#F7F7F7" bottomColor="#F7F7F7" useGradient={true} />
      <CityYearEffect />
      <StarBurstDivider topColor="#F7F7F7" bottomColor="#ffffff" />
      <VideosSection id="stories" />
      <WaveDivider topColor="#ffffff" bottomColor="#F7F7F7" useGradient={true} />
      <FAQAccordion />
      <DiagonalDivider direction="left" topColor="#F7F7F7" bottomColor="#ffffff" useGradient={true} />
      <ApplySection />
      <Footer />
      <ProgressTracker />
    </div>
  )
}

export default App

