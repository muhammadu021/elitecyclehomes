"use client"
import Image from "next/image"
import { useState } from "react"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 64 // h-16 = 64px
      const elementPosition = element.offsetTop - headerHeight - 20 // Extra 20px padding

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 border-gray-200">
          {/* Logo */}
          <div className="flex flex-col items-start">
            <Image
              src="/images/elite-cycle-logo.png"
              alt="Elite Cycle Home Limited"
              width={200}
              height={60}
              className="h-10 sm:h-12 w-auto max-w-[150px] sm:max-w-[200px]"
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("properties")}
              className="font-medium hover:text-gray-600 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 text-white"
            >
              Listings
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="font-medium hover:text-gray-600 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 text-white"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="font-medium hover:text-gray-600 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 text-white"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="font-medium hover:text-gray-600 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 text-white"
            >
              Contact
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="text-white hover:text-gray-300 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-sm border-t border-white/10">
            <nav className="px-4 py-4 space-y-4">
              <button
                onClick={() => scrollToSection("properties")}
                className="block w-full text-left font-medium text-white hover:text-gray-300 transition-colors duration-200"
              >
                Listings
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="block w-full text-left font-medium text-white hover:text-gray-300 transition-colors duration-200"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left font-medium text-white hover:text-gray-300 transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left font-medium text-white hover:text-gray-300 transition-colors duration-200"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
