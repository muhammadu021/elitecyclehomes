"use client"

import { Badge } from "@/components/ui/badge"
import { Shield, Users, Award, Eye, Rocket } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export function FeaturesSection() {
  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Expert Market Knowledge",
      description:
        "Deep understanding of Abuja's luxury real estate market with over a decade of experience in premium property transactions.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Personalized Service",
      description:
        "Dedicated relationship managers who understand your unique needs and provide tailored solutions for your property journey.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trusted Professionalism",
      description:
        "Licensed and certified real estate professionals committed to transparency, integrity, and exceeding client expectations.",
    },
  ]

  const teamMembers = [
    {
      name: "Isabella Wright",
      role: "Short-Term Rental Expert",
      image: "/professional-woman-real-estate-expert.png",
    },
    {
      name: "Noah Clarke",
      role: "Eco-Friendly Property Specialist",
      image: "/professional-man-eco-property-specialist.png",
    },
    {
      name: "Benjamin Foster",
      role: "Urban Development Advisor",
      image: "/professional-man-urban-development-advisor.png",
    },
    {
      name: "Emily Chen",
      role: "Investment Property Consultant",
      image: "/professional-woman-investment-consultant.png",
    },
    {
      name: "Michael Anderson",
      role: "Vacation Rental Specialist",
      image: "/professional-man-vacation-rental-specialist.png",
    },
  ]

  const carouselRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()
  const [translateX, setTranslateX] = useState(0)
  const startTimeRef = useRef<number>(0)

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const getCardWidth = () => {
      if (window.innerWidth < 640) return 240 // Mobile: smaller cards
      if (window.innerWidth < 1024) return 264 // Tablet: medium cards
      return 288 // Desktop: full size cards
    }

    let cardWidth = getCardWidth()
    const totalWidth = teamMembers.length * cardWidth
    const animationDuration = 30000 // 30 seconds for one complete cycle
    const pixelsPerSecond = totalWidth / (animationDuration / 1000) // Calculate speed based on duration

    const handleResize = () => {
      cardWidth = getCardWidth()
    }
    window.addEventListener("resize", handleResize)

    const animate = (currentTime: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = currentTime
      }

      const elapsed = currentTime - startTimeRef.current
      const progress = ((elapsed / 1000) * pixelsPerSecond) % totalWidth
      setTranslateX(-progress)

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [teamMembers.length]) // Removed isPaused dependency

  return (
    <section id="about" className="bg-muted/30 scroll-mt-20 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <Badge variant="secondary" className="mb-4 text-xl font-medium">
            About Us
          </Badge>

          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Elite Cycle Homes Limited is a dynamic real estate company in Abuja, Nigeria, focused on creating wealth
              and security through strategic property solutions. We specialize in land acquisition, estate development,
              and real estate investment opportunities tailored to individuals, families, and institutional investors.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <motion.div 
                className="bg-card rounded-xl p-8 border-2 border-black shadow-sm hover:shadow-lg relative overflow-hidden will-change-transform backface-visibility-hidden"
                style={{
                  '--tw-shadow': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
                  '--tw-shadow-hover': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'
                } as React.CSSProperties}
                whileHover={{
                  y: -4,
                  boxShadow: 'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow-hover)'
                }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    type: 'spring',
                    stiffness: 100,
                    damping: 15
                  }
                }}
                viewport={{ once: true, margin: '-20%' }}
                transition={{
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
                <div className="flex flex-col items-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                    <Eye className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200 ease-out">
                    Our Vision
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-200 ease-out">
                  To become one of Nigeria's most trusted and innovative real estate companies, recognized for creating
                  sustainable communities, driving profitable investment opportunities, and redefining property
                  ownership across Africa.
                </p>
                <motion.div 
                  className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transform -translate-x-1/2"
                  whileHover={{ width: '80%' }}
                  transition={{ 
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                />
              </motion.div>

              <motion.div 
                className="bg-card rounded-xl p-8 border-2 border-black shadow-sm hover:shadow-lg relative overflow-hidden will-change-transform backface-visibility-hidden"
                style={{
                  '--tw-shadow': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
                  '--tw-shadow-hover': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'
                } as React.CSSProperties}
                whileHover={{
                  y: -4,
                  boxShadow: 'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow-hover)'
                }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    type: 'spring',
                    stiffness: 100,
                    damping: 15,
                    delay: 0.1
                  }
                }}
                viewport={{ once: true, margin: '-20%' }}
                transition={{
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
                <div className="flex flex-col items-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                    <Rocket className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200 ease-out">
                    Our Mission
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-200 ease-out">
                  To provide secure, transparent, and high-value real estate solutions through land acquisition, estate
                  development, and investment opportunities, while ensuring affordability, innovation, and long-term
                  growth for our clients, investors, and communities.
                </p>
                <motion.div 
                  className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transform -translate-x-1/2"
                  whileHover={{ width: '80%' }}
                  transition={{ 
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm font-medium">
            Why Choose Us
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Building dreams, creating legacies</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We combine market expertise with personalized service to help you secure the perfect investment in Abuja's
            thriving real estate market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-xl p-8 text-center group border-2 border-black shadow-sm hover:shadow-lg relative overflow-hidden will-change-transform backface-visibility-hidden"
              style={{
                '--tw-shadow': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
                '--tw-shadow-hover': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'
              } as React.CSSProperties}
              whileHover={{
                y: -4,
                boxShadow: 'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow-hover)'
              }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  type: 'spring',
                  stiffness: 100,
                  damping: 15,
                  delay: index * 0.1
                }
              }}
              viewport={{ once: true, margin: '-20%' }}
              transition={{
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* Subtle background highlight on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
              
              {/* Icon with subtle scale and color transition */}
              <motion.div 
                className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-6 mx-auto"
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: 'hsl(222.2, 47.4%, 11.2%)',
                  color: 'white'
                }}
                transition={{ 
                  type: 'spring',
                  stiffness: 400,
                  damping: 10,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                {feature.icon}
              </motion.div>
              
              <motion.h3 
                className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-200 ease-out"
              >
                {feature.title}
              </motion.h3>
              
              <motion.p 
                className="text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-200 ease-out"
              >
                {feature.description}
              </motion.p>
              
              {/* Subtle bottom border animation */}
              <motion.div 
                className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transform -translate-x-1/2"
                whileHover={{ width: '80%' }}
                transition={{ 
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1]
                }}
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-20">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 text-sm font-medium">
              Meet Our team
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
              PERSONALIZED GUIDANCE, PROVEN EXPERTISE
            </h2>
          </div>

          <div className="relative overflow-hidden">
            <div
              ref={carouselRef}
              className="flex transition-none"
              style={{
                transform: `translateX(${translateX}px)`,
                width: `${teamMembers.length * 2 * 288}px`,
              }}
            >
              {[...teamMembers, ...teamMembers].map((member, index) => (
                <div
                  key={`${member.name}-${index}`}
                  className="flex-shrink-0 w-60 sm:w-66 lg:w-72 mx-2 sm:mx-3 lg:mx-4 text-center group"
                >
                  <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square border border-black">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-semibold text-foreground text-base sm:text-lg mb-1">{member.name}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
