import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa"

export function Footer() {
  return (
    <footer className="bg-brand-graphite text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo2.png"
                alt="Traslados L.M."
                width={200}
                height={70}
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              Más de 10 años brindando servicios de traslados privados las 24 horas. Conectamos La Plata con Ezeiza,
              Aeroparque y otras ciudades con seguridad y profesionalismo.
            </p>
            <div className="flex items-center gap-2 text-brand-orange">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <span className="text-sm text-gray-300">5.0 • 35 reseñas</span>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-orange">Enlaces Rápidos</h3>
            <ul className="space-y-2 mb-6">
              <li>
                <Link href="/" className="text-gray-300 hover:text-brand-orange transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/calculadora" className="text-gray-300 hover:text-brand-orange transition-colors">
                  Viajes
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-300 hover:text-brand-orange transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
            
            {/* Redes sociales */}
            <div>
              <h4 className="text-sm font-medium text-gray-300 mb-3">Seguinos en nuestras redes</h4>
              <div className="flex gap-3">
                <Link
                  href="#"
                  className="p-2 rounded-full bg-brand-gray hover:bg-brand-orange hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook className="h-4 w-4 text-white" />
                </Link>
                <Link
                  href="#"
                  className="p-2 rounded-full bg-brand-gray hover:bg-brand-orange hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram className="h-4 w-4 text-white" />
                </Link>
                <Link
                  href="https://wa.me/5492212227966"
                  className="p-2 rounded-full bg-brand-gray hover:bg-brand-orange hover:text-white transition-colors"
                  aria-label="WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="h-4 w-4 text-white" />
                </Link>
                <Link
                  href="#"
                  className="p-2 rounded-full bg-brand-gray hover:bg-brand-orange hover:text-white transition-colors"
                  aria-label="YouTube"
                >
                  <FaYoutube className="h-4 w-4 text-white" />
                </Link>
              </div>
            </div>
          </div>

          {/* Información de contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-orange">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand-orange" />
                <span className="text-gray-300">+54 9 221 477-3262</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand-orange" />
                <span className="text-gray-300">traslados.mensajeria@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="shrink-0 h-4 w-4 text-brand-orange" />
                <span className="text-gray-300">C. 178 6158, Melchor Romero</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-brand-orange" />
                <span className="text-gray-300">Atención al cliente: 9 a 20 hs</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-gray mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm mb-2">
            © {new Date().getFullYear()} Traslados L.M. (Los Mellis). Todos los derechos reservados.
          </p>
          <p className="text-gray-500 text-xs">
            Desarrollado por{" "}
            <Link
              href="https://nexiumsolutions.online/"
              target="_blank"
              className="text-brand-orange hover:text-brand-orange/80 transition-colors"
            >
              Nexium Solutions
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
