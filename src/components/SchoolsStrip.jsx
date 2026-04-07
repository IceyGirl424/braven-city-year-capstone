import React, { useState } from 'react'

const SchoolsStrip = () => {
  // Top schools including Ivy League and other prestigious universities
  const schools = [
    { 
      name: 'Harvard University', 
      domain: 'harvard.edu', 
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Harvard_University_shield.png',
      fallbackUrls: [
        'https://logo.clearbit.com/www.harvard.edu',
        'https://logo.clearbit.com/harvard.edu'
      ]
    },
    { 
      name: 'MIT', 
      domain: 'mit.edu', 
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/1200px-MIT_logo.svg.png',
      fallbackUrls: [
        'https://logo.clearbit.com/mit.edu',
        'https://identity.mit.edu/sites/default/files/2021-09/MIT-logo-red-gray-72x38.svg'
      ]
    },
    { name: 'Stanford University', domain: 'stanford.edu', logoUrl: 'https://logo.clearbit.com/stanford.edu' },
    { name: 'Yale University', domain: 'yale.edu', logoUrl: 'https://logo.clearbit.com/yale.edu' },
    { name: 'Princeton University', domain: 'princeton.edu', logoUrl: 'https://logo.clearbit.com/princeton.edu' },
    { name: 'Columbia University', domain: 'columbia.edu', logoUrl: 'https://logo.clearbit.com/columbia.edu' },
    { name: 'UC Berkeley', domain: 'berkeley.edu', logoUrl: 'https://logo.clearbit.com/berkeley.edu' },
    { name: 'UCLA', domain: 'ucla.edu', logoUrl: 'https://logo.clearbit.com/ucla.edu' },
    { name: 'University of Pennsylvania', domain: 'upenn.edu', logoUrl: 'https://logo.clearbit.com/upenn.edu' },
    { name: 'Cornell University', domain: 'cornell.edu', logoUrl: 'https://logo.clearbit.com/cornell.edu' },
    { name: 'Brown University', domain: 'brown.edu', logoUrl: 'https://logo.clearbit.com/brown.edu' },
    { name: 'Dartmouth College', domain: 'dartmouth.edu', logoUrl: 'https://logo.clearbit.com/dartmouth.edu' },
    { name: 'Northwestern University', domain: 'northwestern.edu', logoUrl: 'https://logo.clearbit.com/northwestern.edu' },
    { name: 'University of Chicago', domain: 'uchicago.edu', logoUrl: 'https://logo.clearbit.com/uchicago.edu' },
    { name: 'Duke University', domain: 'duke.edu', logoUrl: 'https://logo.clearbit.com/duke.edu' }
  ]

  // Component for a single school item with logo
  const SchoolItem = ({ school, index }) => {
    const [logoError, setLogoError] = useState(false)
    const [retryCount, setRetryCount] = useState(0)
    
    // Get logo URL with fallbacks for problematic domains
    const getLogoUrl = () => {
      // For Harvard and MIT, use primary logo URL first
      if (school.logoUrl) {
        if (retryCount === 0) {
          return school.logoUrl
        }
        // If retry count > 0, try fallback URLs
        if (school.fallbackUrls && retryCount > 0 && retryCount <= school.fallbackUrls.length) {
          return school.fallbackUrls[retryCount - 1]
        }
      }
      
      // Default to Clearbit for other schools
      return `https://logo.clearbit.com/${school.domain}`
    }
    
    const handleError = () => {
      // Try fallback URLs for Harvard and MIT
      if (school.fallbackUrls && retryCount < school.fallbackUrls.length) {
        setRetryCount(prev => prev + 1)
      } else {
        setLogoError(true)
      }
    }
    
    return (
      <div
        className="flex-shrink-0 flex flex-col items-center justify-center gap-1.5"
        style={{ width: '150px', padding: '0 16px', boxSizing: 'border-box' }}
      >
        <div className="h-12 w-28 flex items-center justify-center bg-white rounded-lg p-2 shadow-sm hover:shadow-md transition-shadow border border-neutral-dark/10 hover-scale relative">
          {!logoError ? (
            <img
              src={getLogoUrl()}
              alt={school.name}
              className="max-h-10 max-w-full object-contain"
              onError={handleError}
              loading="lazy"
            />
          ) : (
            <div className="text-neutral-dark/40 font-semibold text-xs text-center leading-tight">
              {school.name === 'MIT' ? 'MIT' : school.name === 'Harvard University' ? 'Harvard' : school.name.split(' ')[0]}
            </div>
          )}
        </div>
        <div className="text-neutral-dark font-medium text-xs text-center whitespace-nowrap overflow-hidden" style={{ width: '150px', textOverflow: 'ellipsis' }}>
          {school.name}
        </div>
      </div>
    )
  }

  return (
    <section className="bg-white py-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h3 className="text-xl md:text-2xl font-bold text-neutral-dark mb-2">
            Alumni continuing their education at top universities
          </h3>
        </div>
        
        {/* Alumni Banner with proper structure for seamless loop */}
        <div className="alumni-banner" style={{ overflow: 'hidden' }}>
          <div className="alumni-banner-track">
            {/* First set of schools */}
            <div className="alumni-banner-content">
              {schools.map((school, index) => (
                <SchoolItem key={`first-${index}`} school={school} index={index} />
              ))}
            </div>
            {/* DUPLICATE for seamless loop */}
            <div className="alumni-banner-content">
              {schools.map((school, index) => (
                <SchoolItem key={`second-${index}`} school={school} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .alumni-banner {
          overflow: hidden;
        }

        .alumni-banner-track {
          display: flex;
          animation: scroll-left 20s linear infinite;
          width: fit-content;
        }

        .alumni-banner-content {
          display: flex;
          gap: 3rem;
          padding-right: 3rem;
        }

        .alumni-banner-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

export default SchoolsStrip

