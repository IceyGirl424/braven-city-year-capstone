import React, { useState } from 'react'
import Logo from './Logo'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  const goToHome = () => {
    // If we're on the contact page, navigate back to home
    if (window.location.hash === '#contact') {
      window.location.hash = ''
      // Trigger hashchange event to update App state
      window.dispatchEvent(new HashChangeEvent('hashchange'))
    } else {
      // Otherwise, just scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end h-20 pb-2">
            {/* Logo that extends into hero */}
            <button
              onClick={goToHome}
              className="flex items-end hover:opacity-80 transition-opacity relative z-10"
            >
              <div className="relative -mb-6 md:-mb-10">
                <Logo className="w-20 h-20 md:w-28 md:h-28" />
              </div>
            </button>
          
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={goToHome}
              className="text-gray-700 hover:text-cityyear-red font-medium transition-colors"
            >
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-cityyear-red font-medium transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('perks')} className="text-gray-700 hover:text-cityyear-red font-medium transition-colors">
              Benefits
            </button>
            <button onClick={() => scrollToSection('calendar')} className="text-gray-700 hover:text-cityyear-red font-medium transition-colors">
              Volunteer
            </button>
            <button onClick={() => scrollToSection('stories')} className="text-gray-700 hover:text-cityyear-red font-medium transition-colors">
              Stories
            </button>
            <a 
              href="carpool.html"
              className="text-gray-700 hover:text-cityyear-red font-medium transition-colors"
            >
              Carpool
            </a>
            <a 
              href="#contact"
              className="text-gray-700 hover:text-cityyear-red font-medium transition-colors"
            >
              Contact
            </a>
            <button 
              onClick={() => scrollToSection('donate')} 
              className="bg-cityyear-red text-white px-6 py-2 rounded-lg font-semibold hover:bg-cityyear-red-dark transition-colors"
            >
              Donate
            </button>
          </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex flex-col space-y-1.5"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-gray-700 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-700 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-700 transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              <button 
                onClick={goToHome}
                className="block w-full text-left text-gray-700 hover:text-cityyear-red font-medium"
              >
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-700 hover:text-cityyear-red font-medium">
                About
              </button>
              <button onClick={() => scrollToSection('perks')} className="block w-full text-left text-gray-700 hover:text-cityyear-red font-medium">
                Benefits
              </button>
              <button onClick={() => scrollToSection('calendar')} className="block w-full text-left text-gray-700 hover:text-cityyear-red font-medium">
                Volunteer
              </button>
              <button onClick={() => scrollToSection('stories')} className="block w-full text-left text-gray-700 hover:text-cityyear-red font-medium">
                Stories
              </button>
              <a 
                href="carpool.html"
                className="block w-full text-left text-gray-700 hover:text-cityyear-red font-medium"
              >
                Carpool
              </a>
              <a 
                href="#contact"
                className="block w-full text-left text-gray-700 hover:text-cityyear-red font-medium"
              >
                Contact
              </a>
              <button 
                onClick={() => scrollToSection('donate')} 
                className="block w-full bg-cityyear-red text-white px-6 py-2 rounded-lg font-semibold text-center"
              >
                Donate
              </button>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}

export default Navbar

