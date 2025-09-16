"use client"
import Image from "next/image"
import { useEffect, useState } from "react"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    let ticking = false
    const update = () => {
      setShowScrollTop(window.scrollY > 320)
      ticking = false
    }
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

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
    <>
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
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              className="text-white/90 hover:text-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-md p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M6 6l12 12M18 6l-12 12" strokeWidth={2} strokeLinecap="round" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M7 12h13M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden">
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            {/* Floating panel */}
            <div className="fixed z-50 top-16 inset-x-3 rounded-2xl border border-white/10 bg-neutral-900/70 backdrop-blur-xl shadow-2xl">
              <nav className="px-3 py-2">
                <ul className="divide-y divide-white/10">
                  <li>
                    <button
                      onClick={() => scrollToSection("properties")}
                      className="w-full text-left px-3 py-4 text-white/95 text-base font-semibold tracking-wide rounded-xl hover:bg-white/5 active:bg-white/10 transition-colors"
                    >
                      Listings
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("gallery")}
                      className="w-full text-left px-3 py-4 text-white/95 text-base font-semibold tracking-wide rounded-xl hover:bg-white/5 active:bg-white/10 transition-colors"
                    >
                      Gallery
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("about")}
                      className="w-full text-left px-3 py-4 text-white/95 text-base font-semibold tracking-wide rounded-xl hover:bg-white/5 active:bg-white/10 transition-colors"
                    >
                      About
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("contact")}
                      className="w-full text-left px-3 py-4 text-white/95 text-base font-semibold tracking-wide rounded-xl hover:bg-white/5 active:bg-white/10 transition-colors"
                    >
                      Contact
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
    {/* Mobile-only scroll-to-top button (outside header to avoid containing block issues) */}
    {showScrollTop && !isMobileMenuOpen && (
      <button
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="md:hidden fixed right-4 bottom-5 z-[60] inline-flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-white border border-white/25 shadow-lg backdrop-blur-sm hover:bg-black/70 active:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 transition-colors"
        style={{ bottom: "calc(env(safe-area-inset-bottom, 0px) + 1rem)" }}
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 19V5M5.5 11.5L12 5l6.5 6.5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    )}
    </>
  )
}
