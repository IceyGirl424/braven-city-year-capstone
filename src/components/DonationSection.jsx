import React, { useState } from 'react'

const DonationSection = () => {
  const [selectedAmount, setSelectedAmount] = useState(null)
  const [customAmount, setCustomAmount] = useState('')

  const handleDonate = () => {
    const amount = selectedAmount || customAmount
    if (amount) {
      alert(`Thank you for your donation of $${amount}! This would normally redirect to a payment processor.`)
    }
  }

  return (
    <section id="donate" className="relative py-20 overflow-hidden">
      {/* Background Image with Fade Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80)'
        }}
      >
        {/* Fade Overlay - lighter overlay for donation section */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/85 to-white/90"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Support Students in the Bay Area
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
            Your donation helps us provide critical support to students in Eastside San José and East Palo Alto, 
            ensuring they have the resources and mentorship they need to succeed.
          </p>
          
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50">
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {[25, 50, 100, 250].map((amount) => (
                <button
                  key={amount}
                  onClick={() => {
                    setSelectedAmount(amount)
                    setCustomAmount('')
                  }}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    selectedAmount === amount
                      ? 'bg-cityyear-red text-white border-2 border-cityyear-red'
                      : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-cityyear-red'
                  }`}
                >
                  ${amount}
                </button>
              ))}
              <input
                type="number"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value)
                  setSelectedAmount(null)
                }}
                placeholder="Other amount"
                min="1"
                className="px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-cityyear-red focus:outline-none text-center w-40"
              />
            </div>
            
            <button
              onClick={handleDonate}
              className="w-full bg-cityyear-red text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cityyear-red-dark transition-all hover:shadow-lg mb-4"
            >
              Donate Today
            </button>
            
            <p className="text-sm text-gray-600">
              City Year is a 501(c)(3) nonprofit. Your gift is tax-deductible.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DonationSection

