import React from 'react'

const AmeriCorpsLogo = ({ className = "h-10" }) => {
  return (
    <div className="flex items-center">
      <div className="bg-gray-100 rounded px-1.5 py-0.5">
        <img 
          src="/AC_State-Logo_CA.png"
          alt="AmeriCorps California"
          className={className}
        />
      </div>
    </div>
  )
}

export default AmeriCorpsLogo

