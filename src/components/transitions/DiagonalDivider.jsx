import React from 'react'

const DiagonalDivider = ({ direction = 'right', topColor = '#F7F7F7', bottomColor = '#ffffff', useGradient = false }) => {
  const clipPath = direction === 'right' 
    ? 'polygon(0 0, 100% 0, 100% 85%, 0 100%)'
    : 'polygon(0 0, 100% 0, 100% 100%, 0 85%)'

  const gradientStyle = useGradient
    ? `linear-gradient(to ${direction === 'right' ? 'bottom right' : 'bottom left'}, #FF6B6B, #FF8E53, #FFD93D)`
    : `linear-gradient(to ${direction === 'right' ? 'bottom right' : 'bottom left'}, ${topColor}, ${bottomColor})`

  return (
    <div 
      className="relative w-full h-32"
      style={{
        background: gradientStyle,
        clipPath: clipPath
      }}
    ></div>
  )
}

export default DiagonalDivider

