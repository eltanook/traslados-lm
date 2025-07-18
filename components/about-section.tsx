import { Button } from "@/components/ui/button"
import { Shield, Clock, Users, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function AboutSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold mb-4 font-heading">
                Sobre <span className="text-brand-orange">Traslados L.M.</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Con más de 10 años de experiencia en el sector, somos una empresa familiar dedicada a brindar servicios
                de traslados privados las 24 horas del día. Nos especializamos en conectar La Plata con los principales
                aeropuertos de Buenos Aires: Ezeiza y Aeroparque Jorge Newbery.
              </p>
              <p className="text-muted-foreground mb-6">
                Nuestro compromiso es ofrecer un servicio de calidad, con conductores profesionales capacitados,
                vehículos espaciosos y cómodos, y la tranquilidad que necesitas para llegar a tiempo a tu destino.
                Entendemos que cada viaje es importante, por eso nos adaptamos a tus horarios y necesidades específicas.
              </p>
              <p className="text-muted-foreground mb-8">
                Trabajamos con una flota moderna y bien mantenida, garantizando tu seguridad y comodidad en cada
                trayecto. Nuestros conductores conocen perfectamente las rutas y están preparados para cualquier
                eventualidad, asegurando que llegues puntual a tu destino.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <Shield className="h-8 w-8 text-brand-orange" />
                <div>
                  <p className="font-semibold">Seguridad</p>
                  <p className="text-sm text-muted-foreground">Garantizada</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-8 w-8 text-brand-orange" />
                <div>
                  <p className="font-semibold">Puntualidad</p>
                  <p className="text-sm text-muted-foreground">24/7</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-8 w-8 text-brand-orange" />
                <div>
                  <p className="font-semibold">Experiencia</p>
                  <p className="text-sm text-muted-foreground">+10 años</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Award className="h-8 w-8 text-brand-orange" />
                <div>
                  <p className="font-semibold">Calidad</p>
                  <p className="text-sm text-muted-foreground">5 estrellas</p>
                </div>
              </div>
            </div>

            <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white" asChild>
              <Link href="/contacto">Contactanos</Link>
            </Button>
          </div>

          {/* Imagen */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/about.webp"
                alt="Vehículo de Traslados L.M."
                width={500}
                height={600}
                className="object-cover w-full h-[600px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-orange/20 to-transparent" />
            </div>

            {/* Stats overlay */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-brand-graphite p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <p className="text-3xl font-bold text-brand-orange">10+</p>
                <p className="text-sm text-muted-foreground">Años de experiencia</p>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white dark:bg-brand-graphite p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <p className="text-3xl font-bold text-brand-orange">24/7</p>
                <p className="text-sm text-muted-foreground">Servicio disponible</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
