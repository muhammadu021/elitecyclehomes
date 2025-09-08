import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PropertiesSection } from "@/components/properties-section"
import { GallerySection } from "@/components/gallery-section"
import { FeaturesSection } from "@/components/features-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <PropertiesSection />
      <GallerySection />
      <FeaturesSection />
      <ContactSection />
      <Footer />
      
      {/* WhatsApp Widget */}
      <WhatsAppWidget 
        phoneNumber="2349132757701" 
        message="Hello! I'm interested in your properties. Can you help me?"
        companyName="Elite Cycle Homes"
      />
    </main>
  )
}
