import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ClientLogos } from "@/components/client-logos"
import { Services } from "@/components/services"
import { CaseStudies } from "@/components/case-studies"
import { Teach } from "@/components/teach"
import { Testimonials } from "@/components/testimonials"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ClientLogos />
      <Services />
      <CaseStudies />
      <Teach />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
