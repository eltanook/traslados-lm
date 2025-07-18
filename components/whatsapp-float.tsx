"use client"

import { FaWhatsapp } from "react-icons/fa"
import { useState } from "react"

export function WhatsAppFloat() {
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => {
    window.open("https://wa.me/5492212227966", "_blank", "noopener,noreferrer")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex items-center justify-center w-14 h-14 bg-brand-orange hover:bg-brand-orange/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp size={28} color="#FFF" />
        
        {/* Tooltip */}
        <div 
          className={`absolute right-16 top-1/2 -translate-y-1/2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg shadow-lg whitespace-nowrap transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
          }`}
        >
          ¡Escribinos por WhatsApp!
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-800"></div>
        </div>
      </button>
    </div>
  )
} 