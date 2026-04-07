import React, { useState } from 'react'

const PartnersStrip = () => {
  // Limited to 6 key partners
  const partners = [
    { name: 'Deloitte', domain: 'deloitte.com' },
    { name: 'Comcast', domain: 'comcast.com' },
    { name: 'Starbucks Foundation', domain: 'starbucks.com' },
    { name: 'NFL Inspire Change', domain: 'nfl.com' },
    { name: 'Truist', domain: 'truist.com' },
    { name: 'Vertex Foundation', domain: 'vrtx.com' }
  ]

  // Component for a single partner item with logo
  const PartnerItem = ({ partner, index }) => {
    const [logoError, setLogoError] = useState(false)
    
    return (
      <div
        key={index}
        className="flex-shrink-0 px-6 md:px-10 flex flex-col items-center justify-center gap-2 min-w-[180px]"
      >
        <div className="h-16 w-32 flex items-center justify-center bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow border border-neutral-dark/10 hover-scale">
          {!logoError ? (
            <img
              src={`https://logo.clearbit.com/${partner.domain}`}
              alt={partner.name}
              className="max-h-12 max-w-full object-contain"
              onError={() => setLogoError(true)}
              loading="lazy"
            />
          ) : (
            <div className="text-neutral-dark/40 font-semibold text-xs text-center leading-tight">
              {partner.name.split(' ')[0]}
            </div>
          )}
        </div>
        <div className="text-neutral-dark font-medium text-sm text-center whitespace-nowrap max-w-[180px]">
          {partner.name}
        </div>
      </div>
    )
  }

  // Scrolling strip component
  const ScrollingStrip = ({ partners, animationDuration = 50 }) => {
    const duplicatedPartners = [...partners, ...partners, ...partners]
    
    return (
      <div className="relative">
        {/* Gradient Overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-neutral-light to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-neutral-light to-transparent z-10 pointer-events-none"></div>
        
        {/* Scrolling Container */}
        <div className="overflow-hidden">
          <div
            className="flex"
            style={{
              animation: `scrollPartners ${animationDuration}s linear infinite`,
              width: 'max-content'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.animationPlayState = 'paused'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.animationPlayState = 'running'
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <PartnerItem key={index} partner={partner} index={index} />
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className="bg-neutral-light py-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h3 className="text-xl md:text-2xl font-bold text-neutral-dark mb-2">
            Backed by organizations that open doors
          </h3>
        </div>
        <ScrollingStrip partners={partners} animationDuration={45} />
      </div>
      
      <style>{`
        @keyframes scrollPartners {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </section>
  )
}

export default PartnersStrip
