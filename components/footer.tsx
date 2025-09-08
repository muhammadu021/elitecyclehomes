import { PillButton } from "./pill-button"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary via-secondary to-accent text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 transition-all duration-700 ease-in-out hover:opacity-20">
        <img
          src="/images/hero-footer-bg.jpg"
          alt="Welcome to Abuja background"
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-in-out hover:scale-110 min-h-full"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Image
              src="/images/elite-cycle-logo.png"
              alt="Elite Cycle Home Limited"
              width={250}
              height={75}
              className="h-16 w-auto mb-6"
            />
            <p className="text-white/90 mb-6 max-w-md">
              {"Your reliable partner in Abuja’s real estate market offering secure land, modern developments, and high yield investment opportunities tailored for lasting value."}
            </p>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://www.tiktok.com/@elitecyclehomes?_t=ZS-8zJv3MhU9B2&_r=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PillButton
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
                >
                  TikTok
                </PillButton>
              </a>
              <a
                href="https://www.instagram.com/elite_cyclee?igsh=MXZpZ3JjMWNsaDRleA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PillButton
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
                >
                  Instagram
                </PillButton>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#properties" className="block">
                <PillButton
                  variant="outline"
                  className="bg-transparent border-white/50 text-white hover:bg-white hover:text-primary w-full justify-start"
                >
                  Properties
                </PillButton>
              </a>
              <a href="#about" className="block">
                <PillButton
                  variant="outline"
                  className="bg-transparent border-white/50 text-white hover:bg-white hover:text-primary w-full justify-start"
                >
                  About Us
                </PillButton>
              </a>
              <a href="#services" className="block">
                <PillButton
                  variant="outline"
                  className="bg-transparent border-white/50 text-white hover:bg-white hover:text-primary w-full justify-start"
                >
                  Services
                </PillButton>
              </a>
              <a href="#contact" className="block">
                <PillButton
                  variant="outline"
                  className="bg-transparent border-white/50 text-white hover:bg-white hover:text-primary w-full justify-start"
                >
                  Contact
                </PillButton>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Our Services</h3>
            <div className="space-y-2">
              <PillButton
                variant="outline"
                className="bg-transparent border-white/50 text-white hover:bg-white hover:text-primary w-full justify-start"
              >
                Property Sales
              </PillButton>
              <PillButton
                variant="outline"
                className="bg-transparent border-white/50 text-white hover:bg-white hover:text-primary w-full justify-start"
              >
                Construction
              </PillButton>
              <PillButton
                variant="outline"
                className="bg-transparent border-white/50 text-white hover:bg-white hover:text-primary w-full justify-start"
              >
                Investment Advisory
              </PillButton>
              <PillButton
                variant="outline"
                className="bg-transparent border-white/50 text-white hover:bg-white hover:text-primary w-full justify-start"
              >
                Property Valuation
              </PillButton>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/80 mb-4 md:mb-0">
            <p>&copy; 2024 Elite Cycle Home Limited. All rights reserved.</p>
            <p className="text-sm">RC: 8290847</p>
          </div>
          <div className="flex gap-2">
            <PillButton
              variant="outline"
              className="bg-transparent border-white/50 text-white hover:bg-white hover:text-primary"
            >
              Privacy Policy
            </PillButton>
            <PillButton
              variant="outline"
              className="bg-transparent border-white/50 text-white hover:bg-white hover:text-primary"
            >
              Terms of Service
            </PillButton>
          </div>
        </div>
      </div>
    </footer>
  )
}
