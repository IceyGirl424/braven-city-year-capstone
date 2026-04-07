import React from 'react'

const WaveDivider = ({ flip = false, color, topColor = '#F7F7F7', bottomColor = '#ffffff', useGradient = false }) => {
  // Support legacy 'color' prop
  const effectiveTopColor = color || topColor
  const effectiveBottomColor = color || bottomColor

  return (
    <div 
      className="relative w-full h-24 overflow-hidden transition-all duration-500" 
      style={{ 
        transform: flip ? 'rotate(180deg)' : 'none',
        background: useGradient 
          ? 'linear-gradient(to bottom, #FF6B6B, #FF8E53)' 
          : `linear-gradient(to bottom, ${effectiveTopColor}, ${effectiveBottomColor})`
      }}
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
      >
        {useGradient ? (
          <>
            <defs>
              <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FF6B6B" />
                <stop offset="100%" stopColor="#FF8E53" />
              </linearGradient>
            </defs>
            <path d="M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z" fill="url(#orangeGradient)"></path>
          </>
        ) : (
          <path d="M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z" fill={flip ? effectiveBottomColor : effectiveTopColor}></path>
        )}
      </svg>
    </div>
  )
}

export default WaveDivider

