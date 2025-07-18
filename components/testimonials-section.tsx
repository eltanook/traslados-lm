"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Beatriz Ruiz",
    rating: 5,
    comment:
      "Excelente servicio, muy puntual y profesional. El conductor fue muy amable y el vehículo estaba impecable. Definitivamente los recomiendo.",
    service: "La Plata - Ezeiza",
    date: "Hace 2 semanas",
  },
  {
    name: "Silvina Logroño",
    rating: 5,
    comment:
      "Perfecto para llegar al aeropuerto sin estrés. Llegaron exactamente a la hora acordada y el viaje fue muy cómodo. Volveré a contratarlos.",
    service: "La Plata - Aeroparque",
    date: "Hace 1 mes",
  },
  {
    name: "Guillermina Lanz",
    rating: 5,
    comment:
      "Servicio de primera calidad. El conductor conocía perfectamente la ruta y me ayudó con el equipaje. Muy recomendable para viajes al aeropuerto.",
    service: "La Plata - Ezeiza",
    date: "Hace 3 semanas",
  },
  {
    name: "Ignacio Echague",
    rating: 5,
    comment:
      "Contraté el servicio para un viaje de madrugada y cumplieron perfectamente. Muy serios y responsables. El precio es justo para la calidad del servicio.",
    service: "La Plata - Ezeiza",
    date: "Hace 1 semana",
  },
  {
    name: "Gerónimo Demaestri Santos",
    rating: 5,
    comment:
      "Muy profesionales y puntuales. El conductor fue muy cordial y el viaje transcurrió sin inconvenientes. Altamente recomendable.",
    service: "La Plata - Aeroparque",
    date: "Hace 1 mes",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(1)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3)
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2)
      } else {
        setItemsPerView(1)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1
        // Create circular movement
        if (next >= testimonials.length) {
          return 0
        }
        return next
      })
    }, 4000) // Move every 4 seconds

    return () => clearInterval(timer)
  }, [])

  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = 0; i < itemsPerView; i++) {
      const index = (currentIndex + i) % testimonials.length
      visible.push(testimonials[index])
    }
    return visible
  }

  const visibleTestimonials = getVisibleTestimonials()

  return (
    <section className="py-12 sm:py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-heading">
            Lo Que Dicen Nuestros <span className="text-brand-orange">Clientes</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación. Lee las experiencias reales de
            quienes ya viajaron con nosotros.
          </p>

          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 sm:h-5 w-4 sm:w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <Badge variant="secondary" className="text-xs sm:text-sm">
              5.0 • 35 reseñas en Google
            </Badge>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 ease-in-out">
            {visibleTestimonials.map((testimonial, index) => (
              <Card
                key={`${testimonial.name}-${currentIndex}-${index}`}
                className="h-60 hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <CardContent className="p-4 sm:p-6 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-3 sm:h-4 w-3 sm:w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    {/* Icono de Google */}
                    <img src="/g_de_google.png" alt="Google" className="w-5 h-5 ml-2" title="Google" />
                  </div>

                  <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed flex-1 line-clamp-4">
                    "{testimonial.comment}"
                  </p>

                  <div className="border-t pt-4 mt-auto">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-sm sm:text-base">{testimonial.name}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.service}</p>
                      </div>
                      <p className="text-xs text-muted-foreground">{testimonial.date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* Indicadores del carrusel */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full border transition-all ${currentIndex === idx ? 'bg-brand-orange border-brand-orange' : 'bg-muted border-muted-foreground/30'}`}
                aria-label={`Ir al testimonio ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
