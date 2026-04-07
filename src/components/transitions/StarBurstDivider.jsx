import React from 'react'

const StarBurstDivider = ({ topColor = '#ffffff', bottomColor = '#F7F7F7' }) => {
  return (
    <div className="relative w-full h-32 overflow-hidden" style={{ background: topColor }}>
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, ${topColor}, ${bottomColor})`
        }}
      >
        {/* Star Burst SVG */}
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full"
        >
          <defs>
            <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF6B6B" />
              <stop offset="50%" stopColor="#FFD93D" />
              <stop offset="100%" stopColor="#FF8E53" />
            </linearGradient>
          </defs>
          {/* Star shape */}
          <path
            d="M600,120 L620,60 L680,60 L630,20 L650,0 L600,40 L550,0 L570,20 L520,60 L580,60 Z"
            fill="url(#starGradient)"
            opacity="0.3"
          />
          {/* Additional smaller stars */}
          <path
            d="M300,100 L310,70 L340,70 L320,50 L330,30 L300,50 L270,30 L280,50 L260,70 L290,70 Z"
            fill="url(#starGradient)"
            opacity="0.2"
          />
          <path
            d="M900,100 L910,70 L940,70 L920,50 L930,30 L900,50 L870,30 L880,50 L860,70 L890,70 Z"
            fill="url(#starGradient)"
            opacity="0.2"
          />
        </svg>
      </div>
    </div>
  )
}

export default StarBurstDivider

