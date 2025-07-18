"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"
import { useSearchParams } from "next/navigation"

interface Trip {
  id: string
  route: string
  origin: string
  destination: string
  price: number
  duration: string
}

const trips: Trip[] = [
  { id: "1", route: "La Plata → Ezeiza", origin: "la-plata", destination: "ezeiza", price: 70000, duration: "1h 30min" },
  { id: "2", route: "Ezeiza → La Plata", origin: "ezeiza", destination: "la-plata", price: 70000, duration: "1h 30min" },
  { id: "3", route: "La Plata → Aeroparque", origin: "la-plata", destination: "aeroparque", price: 65000, duration: "1h 15min" },
  { id: "4", route: "Aeroparque → La Plata", origin: "aeroparque", destination: "la-plata", price: 65000, duration: "1h 15min" },
  { id: "5", route: "La Plata → Terminal de Cruceros", origin: "la-plata", destination: "terminal-cruceros", price: 60000, duration: "1h 10min" },
  { id: "6", route: "Terminal de Cruceros → La Plata", origin: "terminal-cruceros", destination: "la-plata", price: 60000, duration: "1h 10min" },
  { id: "7", route: "La Plata → Terminal de Buquebus", origin: "la-plata", destination: "terminal-buquebus", price: 60000, duration: "1h 10min" },
  { id: "8", route: "Terminal de Buquebus → La Plata", origin: "terminal-buquebus", destination: "la-plata", price: 60000, duration: "1h 10min" },
]

const locations = [
  { id: "la-plata", name: "La Plata" },
  { id: "ezeiza", name: "Ezeiza" },
  { id: "aeroparque", name: "Aeroparque" },
  { id: "terminal-cruceros", name: "Terminal de Cruceros" },
  { id: "terminal-buquebus", name: "Terminal de Buquebus" },
]

export default function ViajesPage() {
  const [selectedOrigin, setSelectedOrigin] = useState("")
  const [selectedDestination, setSelectedDestination] = useState("")
  const searchParams = useSearchParams()

  useEffect(() => {
    const origin = searchParams.get('origin')
    const destination = searchParams.get('destination')
    if (origin) setSelectedOrigin(origin)
    if (destination) setSelectedDestination(destination)
  }, [searchParams])

  const getCurrentTrip = (): Trip | null => {
    return trips.find(trip => 
      trip.origin === selectedOrigin && trip.destination === selectedDestination
    ) || null
  }

  const currentTrip = getCurrentTrip()

  const availableOrigins = locations.filter(location => 
    trips.some(trip => trip.origin === location.id)
  )

  const availableDestinations = locations.filter(location => 
    trips.some(trip => trip.origin === selectedOrigin && trip.destination === location.id)
  )

  return (
    <div className="bg-background py-4 sm:py-6 min-h-[calc(100vh-140px)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4 sm:mb-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4 font-heading">
            Reservá Tu <span className="text-brand-orange">Viaje</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground">
            Elegí tu origen y destino. Precios fijos con peajes incluídos.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-12 gap-4 sm:gap-6 lg:min-h-[750px]">
          {/* Calculadora de precio - col-4 en desktop, full en mobile */}
          <div className="lg:col-span-4">
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-brand-orange" />
                  Calculadora de Precio
                </CardTitle>
                <CardDescription>
                  Elegí tu origen y destino para ver el precio del viaje
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 flex-1">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Origen</label>
                    <Select value={selectedOrigin} onValueChange={value => { setSelectedOrigin(value); setSelectedDestination("") }}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona origen" />
                      </SelectTrigger>
                      <SelectContent>
                        {availableOrigins.map((origin) => (
                          <SelectItem key={origin.id} value={origin.id}>
                            {origin.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Destino</label>
                    <Select value={selectedDestination} onValueChange={setSelectedDestination} disabled={!selectedOrigin}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona destino" />
                      </SelectTrigger>
                      <SelectContent>
                        {availableDestinations.map((destination) => (
                          <SelectItem key={destination.id} value={destination.id}>
                            {destination.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                {currentTrip && (
                  <div className="p-4 sm:p-6 bg-muted/50 rounded-lg space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-base sm:text-lg">{currentTrip.route}</h3>
                        <Badge variant="secondary" className="mt-1">
                          Duración: {currentTrip.duration}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-center py-4">
                      <p className="text-sm text-muted-foreground mb-2">Precio del viaje</p>
                      <p className="text-3xl sm:text-4xl font-bold text-brand-orange">
                        ${currentTrip.price.toLocaleString()}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Peajes incluídos
                      </p>
                    </div>
                    <div className="text-center p-3 sm:p-4 bg-brand-orange/10 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <strong>¿Ya conocés el precio?</strong> Podés reservar tu viaje en el panel de <span className="lg:inline">la derecha</span><span className="lg:hidden">abajo</span>.
                      </p>
                    </div>
                  </div>
                )}
                
                {selectedOrigin && selectedDestination && selectedOrigin === selectedDestination && (
                  <div className="p-3 bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800 rounded-lg">
                    <p className="text-sm text-red-600 dark:text-red-400">
                      El origen y destino no pueden ser iguales.
                    </p>
                  </div>
                )}
                
                {!currentTrip && selectedOrigin && selectedDestination && selectedOrigin !== selectedDestination && (
                  <div className="p-3 bg-yellow-50 dark:bg-yellow-950/50 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                    <p className="text-sm text-yellow-600 dark:text-yellow-400">
                      Esta ruta no está disponible. Contactanos por WhatsApp para opciones personalizadas.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Panel Calendly - col-8 en desktop, full en mobile */}
          <div className="lg:col-span-8">
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle>Coordina tu Viaje</CardTitle>
                <CardDescription>
                  Agenda una llamada rápida para coordinar todos los detalles
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 flex-1 flex flex-col">
                <div className="h-[500px] sm:h-[600px] lg:flex-1 w-full">
                  <iframe
                    src="https://calendly.com/traslados-mensajeria/reserva-tu-viaje?month=2025-07"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    title="Calendly - Coordinar viaje"
                    className="rounded-b-lg"
                    style={{ minHeight: 500 }}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
