import React from 'react'

const Logo = ({ className = "w-12 h-12" }) => {
  return (
    <svg 
      className={className}
      viewBox="0 0 200 200" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Yellow Ring */}
      <circle cx="100" cy="100" r="95" fill="#FFD166" />
      
      {/* White Background */}
      <circle cx="100" cy="100" r="85" fill="white" />
      
      {/* Triangular Pattern - 4 segments with alternating black/yellow triangles */}
      {/* Each segment has 3 black triangles pointing inward */}
      <g transform="translate(100, 100)">
        {/* Segment 1 - Top */}
        <g>
          <path d="M -30,-50 L -15,-35 L -15,-20 L -30,-35 Z" fill="black" />
          <path d="M -15,-35 L 0,-50 L 0,-35 L -15,-20 Z" fill="#FFD166" />
          <path d="M 0,-50 L 15,-35 L 15,-20 L 0,-35 Z" fill="black" />
          <path d="M 15,-35 L 30,-50 L 30,-35 L 15,-20 Z" fill="#FFD166" />
          <path d="M 30,-50 L 30,-35 L 15,-35 L 15,-20 Z" fill="black" />
        </g>
        
        {/* Segment 2 - Right */}
        <g transform="rotate(90)">
          <path d="M -30,-50 L -15,-35 L -15,-20 L -30,-35 Z" fill="black" />
          <path d="M -15,-35 L 0,-50 L 0,-35 L -15,-20 Z" fill="#FFD166" />
          <path d="M 0,-50 L 15,-35 L 15,-20 L 0,-35 Z" fill="black" />
          <path d="M 15,-35 L 30,-50 L 30,-35 L 15,-20 Z" fill="#FFD166" />
          <path d="M 30,-50 L 30,-35 L 15,-35 L 15,-20 Z" fill="black" />
        </g>
        
        {/* Segment 3 - Bottom */}
        <g transform="rotate(180)">
          <path d="M -30,-50 L -15,-35 L -15,-20 L -30,-35 Z" fill="black" />
          <path d="M -15,-35 L 0,-50 L 0,-35 L -15,-20 Z" fill="#FFD166" />
          <path d="M 0,-50 L 15,-35 L 15,-20 L 0,-35 Z" fill="black" />
          <path d="M 15,-35 L 30,-50 L 30,-35 L 15,-20 Z" fill="#FFD166" />
          <path d="M 30,-50 L 30,-35 L 15,-35 L 15,-20 Z" fill="black" />
        </g>
        
        {/* Segment 4 - Left */}
        <g transform="rotate(270)">
          <path d="M -30,-50 L -15,-35 L -15,-20 L -30,-35 Z" fill="black" />
          <path d="M -15,-35 L 0,-50 L 0,-35 L -15,-20 Z" fill="#FFD166" />
          <path d="M 0,-50 L 15,-35 L 15,-20 L 0,-35 Z" fill="black" />
          <path d="M 15,-35 L 30,-50 L 30,-35 L 15,-20 Z" fill="#FFD166" />
          <path d="M 30,-50 L 30,-35 L 15,-35 L 15,-20 Z" fill="black" />
        </g>
      </g>
      
      {/* Central Red Circle */}
      <circle cx="100" cy="100" r="25" fill="#E63946" />
      
      {/* CITY YEAR Text - overlapping the red circle */}
      <text 
        x="100" 
        y="108" 
        textAnchor="middle" 
        fill="black" 
        fontSize="18" 
        fontWeight="bold" 
        fontFamily="Arial, sans-serif"
        letterSpacing="3"
      >
        CITY YEAR
      </text>
    </svg>
  )
}

export default Logo

