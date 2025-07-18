"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from "lucide-react"
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('https://formsubmit.co/viajelosmellis@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          _subject: `Nuevo mensaje de contacto - ${formData.name}`,
          _captcha: false
        }),
      })

      if (response.ok) {
        alert("Mensaje enviado correctamente. Te contactaremos pronto!")
        setFormData({ name: "", email: "", phone: "", message: "" })
      } else {
        throw new Error('Error al enviar el mensaje')
      }
    } catch (error) {
      console.error('Error:', error)
      alert("Error al enviar el mensaje. Por favor, intenta nuevamente o contactanos directamente por WhatsApp.")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-background py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 font-heading">Contáctanos</h1>
          <p className="text-lg sm:text-xl text-muted-foreground">Estamos disponibles 24/7 para atenderte</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Formulario */}
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <MessageSquare className="h-5 w-5 text-brand-orange" />
                  Envíanos Un Mensaje
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Completa el formulario y te responderemos a la brevedad
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 h-full flex flex-col">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Nombre Completo</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Tu nombre completo"
                        required
                        className="text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Teléfono</label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Tu número de teléfono"
                        required
                        className="text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      required
                      className="text-sm sm:text-base"
                    />
                  </div>

                  <div className="flex-1">
                    <label className="text-sm font-medium mb-2 block">Mensaje</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Cuéntanos sobre tu viaje, fechas, destino y cualquier requerimiento especial..."
                      rows={8}
                      required
                      className="text-sm sm:text-base resize-none h-full min-h-[200px]"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white mt-auto">
                    <Send className="h-4 w-4 mr-2" />
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Panel de Contacto */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Información De Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-brand-orange mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm sm:text-base">Teléfono / WhatsApp</p>
                    <p className="text-muted-foreground text-sm sm:text-base">221 222 79 66</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-brand-orange mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm sm:text-base">Email</p>
                    <p className="text-muted-foreground text-sm sm:text-base break-all">viajelosmellis@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-brand-orange mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm sm:text-base">Ubicación</p>
                    <p className="text-muted-foreground text-sm sm:text-base">62 N 1821</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-brand-orange mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm sm:text-base">Horarios de atención al cliente</p>
                    <p className="text-muted-foreground text-sm sm:text-base">9 a 20 hs.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">¿Por Qué Elegirnos?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-brand-orange rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base">Más de 10 años de experiencia</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-brand-orange rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base">Servicio 24/7</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-brand-orange rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base">Conductores profesionales</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-brand-orange rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base">Precios competitivos</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mapa */}
        <Card className="mt-6 sm:mt-8">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">Nuestra Ubicación</CardTitle>
          </CardHeader>
          <CardContent>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52549.37178073805!2d-58.04284893359375!3d-34.92145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e62b1f0085a1%3A0xbcfc44f0547312e3!2sLa%20Plata%2C%20Provincia%20de%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1ses!2sar!4v1703123456789!5m2!1ses!2sar"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg sm:h-96"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
