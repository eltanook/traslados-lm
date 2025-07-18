import { HeroCarousel } from "@/components/hero-carousel"
import { AboutSection } from "@/components/about-section"
import { FeaturesSection } from "@/components/features-section"
import { ServicesSection } from "@/components/services-section"
import { TestimonialsSection } from "@/components/testimonials-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroCarousel />
      <AboutSection />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialsSection />
    </main>
  )
}
