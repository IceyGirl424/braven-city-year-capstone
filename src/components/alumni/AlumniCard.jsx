import React, { useState } from 'react'

const AlumniCard = ({ alumni }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  const cardSize = alumni.size || 'normal'
  const isFeatured = alumni.featured || false

  return (
    <div
      className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all border-2 relative overflow-hidden h-full flex flex-col ${
        isFeatured ? 'border-primary' : 'border-neutral-dark/10'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Featured Badge */}
      {isFeatured && (
        <div className="absolute top-3 right-3 z-10 bg-primary text-white px-2 py-1 rounded-full text-xs font-bold">
          Featured
        </div>
      )}

      {/* Photo */}
      <div className="pt-6 pb-3">
        <img
          src={alumni.photo}
          alt={alumni.name}
          className="w-20 h-20 rounded-full object-cover mx-auto border-3 border-white shadow-md"
        />
      </div>

      {/* Info - Compact */}
      <div className="text-center px-4 pb-4 flex-1 flex flex-col">
        <h3 className="font-black text-lg text-neutral-dark mb-0.5">{alumni.name}</h3>
        <div className="text-xs text-neutral-dark/60 mb-1.5">Class of {alumni.year}</div>
        
        <div className="font-semibold text-sm text-primary mb-0.5">{alumni.role}</div>
        <div className="text-sm text-neutral-dark/70 mb-1.5 font-medium">{alumni.company}</div>
        
        {alumni.school && (
          <div className="text-xs text-accent font-semibold mb-1.5">
            🎓 {alumni.school}
          </div>
        )}

        {/* Salary Range - Compact */}
        {alumni.salaryRange && (
          <div className="text-xs text-neutral-dark/60 mb-2 font-semibold">
            💰 {alumni.salaryRange}
          </div>
        )}

        {/* Quote - Only on hover/expand */}
        {(isHovered || isExpanded) && alumni.quote && (
          <div className="bg-primary/5 rounded-lg p-2 mb-2 border-l-3 border-primary text-xs">
            <p className="text-xs italic text-neutral-dark/80 leading-tight">"{alumni.quote}"</p>
          </div>
        )}

        <div className="mt-auto pt-2">
          <span className="inline-block px-2.5 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full">
            {alumni.field}
          </span>
        </div>
      </div>

      {/* Hover/Click Overlay with LinkedIn */}
      {(isHovered || isExpanded) && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-primary-dark/95 backdrop-blur-sm flex flex-col items-center justify-center gap-4 rounded-xl transition-opacity z-20 p-6">
          <p className="text-white text-sm italic text-center mb-2">"{alumni.quote || 'City Year changed my life.'}"</p>
          <a
            href={alumni.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white font-semibold hover:underline bg-white/20 px-4 py-2 rounded-lg transition-all hover:bg-white/30"
            onClick={(e) => e.stopPropagation()}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            Connect on LinkedIn
          </a>
          <button 
            className="px-4 py-2 bg-white text-primary rounded-lg font-semibold hover:bg-neutral-light transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            Read Full Story
          </button>
        </div>
      )}
    </div>
  )
}

export default AlumniCard

