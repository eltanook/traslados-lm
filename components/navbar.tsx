"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X, Phone } from "lucide-react"
import { useTheme } from "next-themes"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, resolvedTheme } = useTheme()
  
  const currentTheme = theme === "system" ? resolvedTheme : theme
  const logoSrc = currentTheme === "dark" ? "/logo2.png" : "/logo1.png"

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-start h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logoSrc}
              alt="Traslados L.M."
              width={180}
              height={60}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 ml-auto">
            <Link href="/" className="text-sm font-medium hover:text-brand-orange transition-colors">
              Inicio
            </Link>
            <Link href="/calculadora" className="text-sm font-medium hover:text-brand-orange transition-colors">
              Viajes
            </Link>
            <Link href="/contacto" className="text-sm font-medium hover:text-brand-orange transition-colors">
              Contacto
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4 ml-8">
            <ThemeToggle />
            <Button size="sm" className="bg-brand-orange hover:bg-brand-orange/90 text-white" asChild>
              <Link href="https://wa.link/2214773262" target="_blank">
                Enviar mensaje
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t py-4">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-sm font-medium hover:text-brand-orange transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </Link>
              <Link
                href="/calculadora"
                className="text-sm font-medium hover:text-brand-orange transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Viajes
              </Link>
              <Link
                href="/contacto"
                className="text-sm font-medium hover:text-brand-orange transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </Link>
              <Button size="sm" className="bg-brand-orange hover:bg-brand-orange/90 text-white w-fit" asChild>
                <Link href="https://wa.link/2214773262" target="_blank">
                  Enviar mensaje
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
