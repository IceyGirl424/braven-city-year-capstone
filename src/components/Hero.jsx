import React from 'react'
import HeroCarousel from './hero/HeroCarousel'
import StatTicker from './hero/StatTicker'

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      className="hero-section relative text-white flex items-center justify-center overflow-hidden -mt-6 md:-mt-10" 
      style={{ 
        minHeight: 'calc(100vh - 80px)',
        paddingTop: '80px',
        paddingBottom: '80px',
        paddingLeft: '20px',
        paddingRight: '20px'
      }}
    >
      <HeroCarousel>
        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center flex items-center justify-center" style={{ minHeight: 'calc(100vh - 160px)' }}>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-[3.5rem] font-bold mb-6 text-white max-w-[900px] mx-auto animate-fadeInUp pt-8 md:pt-12" style={{ lineHeight: '1.5' }}>
              <span className="block">Get Paid to Find Your Purpose</span>
              <span className="block">While Changing Lives</span>
            </h1>
            <p className="text-base md:text-xl mb-10 text-[#F7F7F7] leading-relaxed max-w-[800px] mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              Join 35 AmeriCorps members who are getting paid to discover their purpose while helping 1,200+ students in East San José and East Palo Alto level up.
            </p>
            
            {/* Stat Ticker */}
            <div className="mb-6 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              <StatTicker />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-8 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
              <button
                onClick={() => scrollToSection('apply')}
                className="text-white px-10 py-4 rounded-lg font-semibold text-lg border-2 border-white hover:shadow-lg hover:scale-105 transition-all shadow-xl min-h-[44px] min-w-[180px] group"
                style={{
                  background: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)',
                  fontWeight: '600'
                }}
              >
                <span className="relative z-10">Apply Now</span>
              </button>
              <button
                onClick={() => scrollToSection('calendar')}
                className="bg-white px-10 py-4 rounded-lg font-semibold text-lg border-2 border-white hover:bg-transparent hover:text-white transition-all shadow-xl min-h-[44px] min-w-[180px] group"
                style={{ color: '#1a1a1a', fontWeight: '600' }}
              >
                <span className="relative z-10">Volunteer Now</span>
              </button>
            </div>
            
            {/* Donor Note */}
            <div className="animate-fadeInUp" style={{ animationDelay: '0.7s' }}>
              <p className="text-sm md:text-base text-white/90 max-w-2xl mx-auto">
                <a 
                  href="donate.html" 
                  className="underline hover:text-white transition-colors font-semibold"
                >
                  Interested in supporting our mission?
                </a>
              </p>
            </div>
          </div>
        </div>
      </HeroCarousel>
    </section>
  )
}

export default Hero

