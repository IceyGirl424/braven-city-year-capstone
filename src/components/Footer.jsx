import React from 'react'
import Logo from './Logo'
import AmeriCorpsLogo from './AmeriCorpsLogo'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300" style={{ padding: '60px 20px 40px', marginTop: 0 }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo className="w-10 h-10" />
              <div>
                <h4 className="text-white text-lg font-semibold">City Year</h4>
                <p className="text-gray-400 text-sm">Bay Area</p>
              </div>
            </div>
            <p className="text-gray-400">Supporting students in San José and East Palo Alto</p>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="https://instagram.com/cityyearsj.sv" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="https://facebook.com/cityyear" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a></li>
              <li><a href="https://twitter.com/cityyear" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#apply" className="hover:text-white transition-colors">Apply Now</a></li>
              <li><a href="#perks" className="hover:text-white transition-colors">Benefits & Resources</a></li>
              <li><a href="#alumni" className="hover:text-white transition-colors">Alumni Stories</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Carpool</h4>
            <ul className="space-y-2">
              <li><a href="carpool.html" className="hover:text-white transition-colors">Join the Network</a></li>
              <li><a href="carpool.html#signup" className="hover:text-white transition-colors">Sign Up</a></li>
              <li><a href="carpool.html" className="hover:text-white transition-colors">Learn More</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Support Us</h4>
            <p className="text-gray-400 text-sm mb-4">
              Your donation helps us provide critical support to students in Eastside San José and East Palo Alto.
            </p>
            <a
              href="#donate"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              Donate Now
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            {/* Copyright and Address */}
            <div className="text-sm text-gray-400">
              <p className="mb-2">
                © 2024 Copyright City Year at 287 Columbus Avenue, Boston, MA 02116
              </p>
              <p>
                <a href="#" className="underline hover:text-white transition-colors">Privacy Policy</a>
              </p>
            </div>

            {/* AmeriCorps Logo */}
            <AmeriCorpsLogo className="h-10" />
          </div>

          {/* Legal Disclaimer */}
          <div className="text-xs text-gray-500 leading-relaxed text-center md:text-left">
            <p className="mb-2">
              City Year is available to all, without regard to race, color, origin, gender, political affiliation, 
              disability, sexual orientation, or religion. City Year is a US tax-exempt 501(c)(3) nonprofit organization 
              (Tax ID Number: 22-2882549). Your gift is tax-deductible as allowed by law.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

