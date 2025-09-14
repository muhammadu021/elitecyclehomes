"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Play, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface GalleryItem {
  id: string
  type: "image" | "video"
  src: string
  thumbnail?: string
  title: string
  description: string
  date: string
  size: "small" | "medium" | "large"
}

export default function GalleryPage() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  // Complete gallery data - doubled content (24 items total)
  const galleryItems: GalleryItem[] = [
    // First set (original 12 items)
    {
      id: "1",
      type: "video",
      src: "/vid1.mp4",
      thumbnail: "/luxury-property-tour-video.png",
      title: "Luxury Villa Tour",
      description: "Take a virtual tour of our stunning Maitama villa with premium finishes",
      date: "2024-01-15",
      size: "large",
    },
    {
      id: "2",
      type: "image",
      src: "/7.jpg",
      title: "Modern Kitchen Design",
      description: "State-of-the-art kitchen with premium appliances and marble countertops",
      date: "2024-01-14",
      size: "medium",
    },
    {
      id: "3",
      type: "image",
      src: "/8.jpg",
      title: "Spa-like Bathroom",
      description: "Luxurious bathroom with rainfall shower and premium fixtures",
      date: "2024-01-13",
      size: "small",
    },
    {
      id: "4",
      type: "video",
      src: "/karsana.mp4",
      thumbnail: "/property-construction-progress.png",
      title: "Construction Progress",
      description: "Latest updates on our Guzape development project",
      date: "2024-01-12",
      size: "large",
    },
    {
      id: "5",
      type: "image",
      src: "/9.jpg",
      title: "Elegant Living Space",
      description: "Spacious living room with floor-to-ceiling windows and city views",
      date: "2024-01-11",
      size: "large",
    },
    {
      id: "6",
      type: "image",
      src: "/10.jpg",
      title: "Fully detached",
      description: "Spacious Fully Detached Homes offering privacy and premium comfort",
      date: "2024-01-10",
      size: "small",
    },
    {
      id: "7",
      type: "video",
      src: "/katampeext.mp4",
      thumbnail: "/neighborhood-aerial-view.png",
      title: "Neighborhood Overview",
      description: "Aerial view of the prestigious Asokoro neighborhood",
      date: "2024-01-09",
      size: "medium",
    },
    {
      id: "8",
      type: "image",
      src: "/11.jpg",
      title: "Master Suite",
      description: "Luxurious master bedroom with walk-in closet and en-suite bathroom",
      date: "2024-01-08",
      size: "medium",
    },
    {
      id: "9",
      type: "image",
      src: "/12.jpg",
      title: "Terrace",
      description: "Modern Terrace Homes designed for comfort, style, and secure family living in a serene neighborhood.",
      date: "2024-01-07",
      size: "small",
    },
    {
      id: "10",
      type: "image",
      src: "/13.jpg",
      title: "Dining Area",
      description: "Elegant dining space with contemporary furniture and lighting",
      date: "2024-01-06",
      size: "medium",
    },
    {
      id: "11",
      type: "video",
      src: "/katampeext1.mp4",
      thumbnail: "/14.jpg",
      title: "Luxury Property",
      description: "Premium property with modern amenities and stunning architecture",
      date: "2024-01-05",
      size: "small",
    },
    {
      id: "12",
      type: "video",
      src: "/katampehill.mp4",
      thumbnail: "/15.jpg",
      title: "Executive Home",
      description: "Executive home with premium finishes and spacious layout",
      date: "2024-01-04",
      size: "medium",
    },
    // Second set (12 additional items)
    {
      id: "13",
      type: "image",
      src: "/1.jpg",
      title: "Luxury Villa Maitama",
      description: "Premium villa with modern architecture and premium finishes",
      date: "2024-01-03",
      size: "large",
    },
    {
      id: "14",
      type: "image",
      src: "/2.jpg",
      title: "Executive Apartment",
      description: "Executive apartment with contemporary design and city views",
      date: "2024-01-02",
      size: "medium",
    },
    {
      id: "15",
      type: "image",
      src: "/3.jpg",
      title: "Penthouse Wuse II",
      description: "Luxurious penthouse with panoramic city views",
      date: "2024-01-01",
      size: "small",
    },
    {
      id: "16",
      type: "image",
      src: "/4.jpg",
      title: "Duplex Guzape",
      description: "Modern duplex with premium amenities and spacious layout",
      date: "2023-12-31",
      size: "large",
    },
    {
      id: "17",
      type: "image",
      src: "/5.jpg",
      title: "Mansion Katampe",
      description: "Luxury mansion with resort-style amenities",
      date: "2023-12-30",
      size: "medium",
    },
    {
      id: "18",
      type: "image",
      src: "/6.jpg",
      title: "Townhouse Jahi",
      description: "Contemporary townhouse perfect for families",
      date: "2023-12-29",
      size: "small",
    },
    {
      id: "19",
      type: "image",
      src: "/Fully detached.jpg",
      title: "Fully Detached Home",
      description: "Spacious fully detached home with private garden",
      date: "2023-12-28",
      size: "large",
    },
    {
      id: "20",
      type: "image",
      src: "/Terraces.jpg",
      title: "Terrace Homes",
      description: "Modern terrace homes with contemporary design",
      date: "2023-12-27",
      size: "medium",
    },
    {
      id: "21",
      type: "image",
      src: "/fullydetached.jpg",
      title: "Premium Detached",
      description: "Premium detached home with luxury finishes",
      date: "2023-12-26",
      size: "small",
    },
    {
      id: "22",
      type: "image",
      src: "/abstract-architectural-pattern-with-modern-buildin.png",
      title: "Modern Architecture",
      description: "Contemporary architectural design with clean lines",
      date: "2023-12-25",
      size: "medium",
    },
    {
      id: "23",
      type: "image",
      src: "/contemporary-duplex-house-in-guzape-abuja-with-lan.png",
      title: "Contemporary Duplex",
      description: "Contemporary duplex with landscaped surroundings",
      date: "2023-12-24",
      size: "large",
    },
    {
      id: "24",
      type: "image",
      src: "/executive-apartment-building-in-asokoro-abuja-with.png",
      title: "Executive Building",
      description: "Executive apartment building in prestigious location",
      date: "2023-12-23",
      size: "small",
    },
  ]

  const getGridClass = (size: string, index: number) => {
    // Mobile patterns (2 columns) - keep simple
    const mobilePatterns = [
      "col-span-2 row-span-2", // Large - spans full width
      "col-span-1 row-span-1", // Small
      "col-span-1 row-span-1", // Small
      "col-span-2 row-span-2", // Large
      "col-span-2 row-span-2", // Large
      "col-span-2 row-span-1", // Wide
      "col-span-1 row-span-1", // Small
      "col-span-1 row-span-1", // Small
      "col-span-1 row-span-1", // Small
      "col-span-1 row-span-1", // Small
      "col-span-1 row-span-1", // Small
      "col-span-1 row-span-1", // Small
      "col-span-2 row-span-2", // Large
      "col-span-1 row-span-1", // Small
      "col-span-1 row-span-1", // Small
      "col-span-2 row-span-2", // Large
      "col-span-2 row-span-2", // Large
      "col-span-2 row-span-1", // Wide
      "col-span-1 row-span-1", // Small
      "col-span-1 row-span-1", // Small
      "col-span-1 row-span-1", // Small
      "col-span-1 row-span-1", // Small
      "col-span-1 row-span-1", // Small
      "col-span-1 row-span-1", // Small
    ]

    // Desktop patterns - create perfect squares with 4x4 grid
    const desktopPatterns = [
      "col-span-2 row-span-2", // Large square (2x2)
      "col-span-1 row-span-1", // Small square (1x1)
      "col-span-1 row-span-1", // Small square (1x1)
      "col-span-2 row-span-2", // Large square (2x2)
      "col-span-2 row-span-2", // Large square (2x2)
      "col-span-2 row-span-1", // Wide rectangle (2x1)
      "col-span-1 row-span-1", // Small square (1x1)
      "col-span-1 row-span-1", // Small square (1x1)
      "col-span-1 row-span-1", // Small square (1x1)
      "col-span-1 row-span-1", // Small square (1x1)
      "col-span-1 row-span-1", // Small square (1x1)
      "col-span-1 row-span-1", // Small square (1x1)
      "col-span-2 row-span-2", // Large square (2x2)
      "col-span-1 row-span-1", // Small square (1x1)
      "col-span-1 row-span-1", // Small square (1x1)
      "col-span-2 row-span-2", // Large square (2x2)
      "col-span-2 row-span-2", // Large square (2x2)
      "col-span-2 row-span-1", // Wide rectangle (2x1)
      "col-span-1 row-span-1", // Small square (1x1)
      "col-span-1 row-span-1", // Small square (1x1)
      "col-span-1 row-span-1", // Small square (1x1)
      "col-span-1 row-span-1", // Small square (1x1)
      "col-span-1 row-span-1", // Small square (1x1)
      "col-span-1 row-span-1", // Small square (1x1)
    ]

    // Use mobile patterns for small screens, desktop patterns for larger screens
    return `${mobilePatterns[index] || "col-span-1 row-span-1"} lg:${desktopPatterns[index] || "col-span-1 row-span-1"}`
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Property Gallery</h1>
            <div className="w-20"></div> {/* Spacer for centering */}
          </div>
        </div>
      </div>

      {/* Gallery Content */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">Complete Property Gallery</h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Explore our complete collection of premium properties and developments
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 auto-rows-[120px] sm:auto-rows-[150px] lg:auto-rows-[200px] xl:auto-rows-[220px] mb-8 max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                className={`relative group overflow-hidden rounded-xl border-2 border-black bg-card transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer ${getGridClass(item.size, index)}`}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Media Content */}
                <div className="relative w-full h-full">
                  {item.type === "video" ? (
                    <>
                      <img 
                        src={item.thumbnail || item.src} 
                        alt={item.title} 
                        className="w-full h-full object-cover" 
                        loading="lazy"
                      />
                      {hoveredItem === item.id && (
                        <video
                          src={item.src}
                          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-100"
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="none"
                        />
                      )}
                      <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-black/50 rounded-full p-1.5 sm:p-2">
                        <Play className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>
                    </>
                  ) : (
                    <>
                      <img 
                        src={item.src || "/placeholder.svg"} 
                        alt={item.title} 
                        className="w-full h-full object-cover" 
                        loading="lazy"
                      />
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}