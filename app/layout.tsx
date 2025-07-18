import type React from "react"
import type { Metadata } from "next"
import { Inter, Bebas_Neue, Montserrat, Oswald, Open_Sans, Roboto } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { DynamicFavicon } from "@/components/dynamic-favicon"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const bebasNeue = Bebas_Neue({ 
  subsets: ["latin"], 
  weight: ["400"],
  variable: "--font-bebas-neue" 
})
const montserrat = Montserrat({ 
  subsets: ["latin"], 
  weight: ["400", "700", "800"],
  variable: "--font-montserrat" 
})
const oswald = Oswald({ 
  subsets: ["latin"], 
  weight: ["400", "700"],
  variable: "--font-oswald" 
})
const openSans = Open_Sans({ 
  subsets: ["latin"], 
  variable: "--font-open-sans" 
})
const roboto = Roboto({ 
  subsets: ["latin"], 
  weight: ["400", "700"],
  variable: "--font-roboto" 
})

export const metadata: Metadata = {
  title: "Traslados L.M. - Servicio de Traslados 24hs | Ezeiza - Aeroparque",
  description:
    "Servicio de traslados privados las 24 horas desde La Plata a Ezeiza, Aeroparque y Rosario. Más de 10 años de experiencia. Reserva ya tu viaje.",
  keywords: "traslados, ezeiza, aeroparque, la plata, rosario, aeropuerto, 24 horas, privado, taxi, remis, transfer, terminal de cruceros, buquebus, viajes",
  generator: 'v0.dev',
  openGraph: {
    title: "Traslados L.M. - Servicio de Traslados 24hs | Ezeiza - Aeroparque",
    description: "Servicio de traslados privados las 24 horas desde La Plata a Ezeiza, Aeroparque y Rosario. Más de 10 años de experiencia. Reserva ya tu viaje.",
    url: "https://trasladoslm.com.ar/",
    siteName: "Traslados L.M.",
    locale: "es_AR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Traslados L.M. - Servicio de Traslados 24hs | Ezeiza - Aeroparque",
    description: "Servicio de traslados privados las 24 horas desde La Plata a Ezeiza, Aeroparque y Rosario. Más de 10 años de experiencia. Reserva ya tu viaje."
  },
  alternates: {
    canonical: "https://trasladoslm.com.ar/"
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#EF6C1B" />
      </head>
      <body className={`${inter.variable} ${bebasNeue.variable} ${montserrat.variable} ${oswald.variable} ${openSans.variable} ${roboto.variable} ${inter.className}`} aria-label="Sitio web de Traslados L.M.">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <DynamicFavicon />
          <Navbar />
          <main className="pt-16" role="main">{children}</main>
          <Footer />
          <WhatsAppFloat />
        </ThemeProvider>
      </body>
    </html>
  )
}
