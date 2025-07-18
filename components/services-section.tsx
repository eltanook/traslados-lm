"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plane, MapPin, Clock, Users, ArrowRight, ArrowLeftRight, Ship } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const services = [
  {
    id: "ezeiza",
    origin: "La Plata",
    destination: "Ezeiza",
    description:
      "Traslado privado disponible las 24 horas hacia el Aeropuerto Internacional de Ezeiza. Reserva flexible y atención personalizada para vuelos internacionales.",
    features: ["Monitoreo de vuelos", "Asistencia con equipaje", "Tiempo de espera incluido", "Conductores bilingües"],
    duration: "60-90 min",
    availability: "24/7",
    price: "$70.000",
    icon: Plane,
    destinationFull: "Aeropuerto Internacional de Ezeiza, Buenos Aires, Argentina",
  },
  {
    id: "aeroparque",
    origin: "La Plata",
    destination: "Aeroparque",
    description:
      "Servicio privado desde cualquier punto de La Plata hacia Aeroparque Jorge Newbery. Ideal para viajes de placer o negocios con vuelos domésticos.",
    features: [
      "Servicio puerta a puerta",
      "Seguimiento de vuelos",
      "Espera sin costo adicional",
      "Vehículos ejecutivos",
    ],
    duration: "45-60 min",
    availability: "24/7",
    price: "$65.000",
    icon: Plane,
    popular: false,
    destinationFull: "Aeropuerto Jorge Newbery Airfield, Buenos Aires, Argentina",
  },
  {
    id: "terminal-cruceros",
    origin: "La Plata",
    destination: "Terminal de Cruceros",
    description:
      "Traslado directo desde La Plata hacia la Terminal de Cruceros. Perfecto para viajes en crucero con comodidad y puntualidad.",
    features: [
      "Traslado directo al puerto",
      "Asistencia con equipaje",
      "Conocimiento de horarios",
      "Vehículos amplios",
    ],
    duration: "50-70 min",
    availability: "24/7",
    price: "$60.000",
    icon: Ship,
    popular: false,
    destinationFull: "Terminal de Cruceros Puerto Madero, Buenos Aires, Argentina",
  },
  {
    id: "terminal-buquebus",
    origin: "La Plata",
    destination: "Terminal de Buquebus",
    description:
      "Traslado directo desde La Plata hacia la Terminal de Buquebus. Ideal para viajes en ferry hacia Uruguay con comodidad y puntualidad.",
    features: [
      "Traslado directo al puerto",
      "Asistencia con equipaje",
      "Conocimiento de horarios",
      "Vehículos amplios",
    ],
    duration: "50-70 min",
    availability: "24/7",
    price: "$60.000",
    icon: Ship,
    popular: false,
    destinationFull: "Terminal de Buquebus Puerto Madero, Buenos Aires, Argentina",
  },
]

export function ServicesSection() {
  const router = useRouter()
  const [toggleStates, setToggleStates] = useState<{[key: string]: boolean}>({})

  const handleToggle = (serviceId: string) => {
    setToggleStates(prev => ({
      ...prev,
      [serviceId]: !prev[serviceId]
    }))
  }

  const handleCalculatePrice = (service: any) => {
    const isReversed = toggleStates[service.id]
    let originId = "la-plata"
    let destId = ""
    if (service.destination === "Ezeiza") destId = "ezeiza"
    else if (service.destination === "Aeroparque") destId = "aeroparque"
    else if (service.destination === "Terminal de Cruceros") destId = "terminal-cruceros"
    else if (service.destination === "Terminal de Buquebus") destId = "terminal-buquebus"
    // Si está invertido, swappear
    if (isReversed) {
      [originId, destId] = [destId, originId]
    }
    if (originId && destId) {
      router.push(`/calculadora?origin=${originId}&destination=${destId}`)
    } else {
      router.push('/calculadora')
    }
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-heading">
            Nuestros <span className="text-brand-orange">Servicios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ofrecemos traslados privados seguros y confiables a los principales destinos. Cada servicio está diseñado
            para brindarte la mejor experiencia.
          </p>
        </div>

        <div className="space-y-8">
          {services.map((service, index) => {
            const isReversed = toggleStates[service.id]
            const currentOrigin = isReversed ? service.destination : service.origin
            const currentDestination = isReversed ? service.origin : service.destination
            
            return (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="grid lg:grid-cols-3 gap-0">
                  {/* Contenido principal */}
                  <div className="lg:col-span-2 p-8">
                    <CardHeader className="p-0 mb-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-3 rounded-full bg-brand-orange/10">
                            <service.icon className="h-6 w-6 text-brand-orange" />
                          </div>
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <div className="flex items-center bg-muted/50 rounded-lg p-2">
                                <div className="w-36 text-center">
                                  <span className="text-lg font-semibold">{currentOrigin}</span>
                                </div>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => handleToggle(service.id)}
                                  className="h-8 w-8 p-0 mx-2 hover:bg-brand-orange/10 transition-colors flex-shrink-0"
                                  title="Cambiar dirección del viaje"
                                >
                                  <ArrowLeftRight className="h-4 w-4 text-brand-orange" />
                                </Button>
                                <div className="w-56 text-center">
                                  <span className="text-lg font-semibold">{currentDestination}</span>
                                </div>
                              </div>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">
                              💡 Click en la flecha para cambiar dirección del viaje
                            </p>
                          </div>
                        </div>
                      </div>
                      <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                    </CardHeader>

                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="font-semibold mb-3">Características incluidas:</h4>
                          <ul className="space-y-2">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-sm">
                                <div className="w-1.5 h-1.5 bg-brand-orange rounded-full" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-4">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-brand-orange" />
                            <span className="text-sm">Duración: {service.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-brand-orange" />
                            <span className="text-sm">Disponible: {service.availability}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </div>

                  {/* Panel lateral */}
                  <div className="bg-muted/50 p-8 flex flex-col justify-center">
                    <div className="text-center mb-6">
                      <p className="text-sm text-muted-foreground mb-2">Precio</p>
                      <p className="text-3xl font-bold text-brand-orange">{service.price}</p>
                      <p className="text-xs text-muted-foreground mt-1">Peajes incluídos</p>
                    </div>

                    <div className="space-y-3">
                      <Button
                        className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white"
                        onClick={() => handleCalculatePrice(service)}
                      >
                        Reservar Viaje
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>

                      <Button variant="outline" className="w-full bg-transparent" asChild>
                        <a href="https://wa.me/5492212227966" target="_blank" rel="noopener noreferrer">
                          Consulta por WhatsApp
                        </a>
                      </Button>
                    </div>

                    <p className="text-xs text-muted-foreground text-center mt-4">
                      Reserva con anticipación para garantizar disponibilidad
                    </p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
