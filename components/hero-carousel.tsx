"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Phone, Calculator } from "lucide-react"
import Link from "next/link"

const slides = [
  {
    title: "Traslados Seguros Y Confiables",
    subtitle: "Más de 10 años conectando La Plata con Ezeiza y Aeroparque",
  },
  {
    title: "Servicio 24 Horas",
    subtitle: "Disponibles todos los días del año para llevarte a tu destino",
  },
  {
    title: "Conductores Profesionales",
    subtitle: "Experiencia y seguridad en cada viaje que realizamos",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background - mobile-friendly approach */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/hero.jpg')`,
        }}
      />

      {/* Overlay - darker in dark mode */}
      <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="p-4 sm:p-8 rounded-2xl backdrop-blur-sm">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 animate-fade-in font-heading">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto opacity-90">
            {slides[currentSlide].subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-brand-orange hover:bg-brand-orange/90 text-white px-6 sm:px-8 py-3 text-base sm:text-lg"
              asChild
            >
              <Link href="https://wa.me/5492212227966" target="_blank">
                <Phone className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
                Reservar Ahora
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-brand-graphite px-6 sm:px-8 py-3 text-base sm:text-lg bg-transparent"
              asChild
            >
              <Link href="/calculadora">
                <Calculator className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
                Ver Viajes
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
      >
        <ChevronLeft className="h-4 sm:h-6 w-4 sm:w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
      >
        <ChevronRight className="h-4 sm:h-6 w-4 sm:w-6 text-white" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-brand-orange" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
