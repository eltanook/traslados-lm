import { Card, CardContent } from "@/components/ui/card"
import { Shield, Clock, Users, Star } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Seguridad Garantizada",
    description: "Conductores profesionales con licencias al día y vehículos en perfecto estado.",
  },
  {
    icon: Clock,
    title: "Disponibilidad 24/7",
    description: "Servicio las 24 horas, los 7 días de la semana. Siempre listos para tu viaje.",
  },
  {
    icon: Users,
    title: "Atención Personalizada",
    description: "Cada cliente es único. Adaptamos nuestro servicio a tus necesidades específicas.",
  },
  {
    icon: Star,
    title: "Excelente Reputación",
    description: "Calificación de 5 estrellas en Google con más de 35 reseñas positivas.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-heading">
            ¿Por qué elegir <span className="text-brand-orange">Traslados L.M.</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ofrecemos un servicio integral que combina experiencia, profesionalismo y la tranquilidad que necesitas para
            tus viajes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-orange/10 group-hover:bg-brand-orange/20 transition-colors">
                  <feature.icon className="h-8 w-8 text-brand-orange" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
