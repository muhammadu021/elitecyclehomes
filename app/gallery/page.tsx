"use client"

import { useState, useEffect, useRef, useCallback } from "react"
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
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleItemClick = (item: GalleryItem) => {
    setSelectedItem(item)
  }

  // Handle modal close with cleanup
  const closeModal = () => {
    // Pause video if it's playing
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
    setSelectedItem(null)
    // Re-enable body scroll
    document.body.style.overflow = 'auto'
  }

  // Handle modal state and event listeners
  useEffect(() => {
    if (!selectedItem) return

    // Disable body scroll when modal is open
    document.body.style.overflow = 'hidden'

    // Handle click outside
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as HTMLElement
      if (selectedItem && !target.closest('.modal-content')) {
        closeModal()
      }
    }

    // Handle escape key
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedItem) {
        closeModal()
      }
    }

    // Add event listeners
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside, { passive: true })
    document.addEventListener('keydown', handleEscape)

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'auto'
    }
  }, [selectedItem, closeModal])

  // When modal opens with a video, try to autoplay with sound (user gesture from click)
  useEffect(() => {
    if (selectedItem?.type === 'video' && videoRef.current) {
      const v = videoRef.current
      v.muted = false
      const p = v.play?.()
      if (p && typeof p.then === 'function') {
        p.catch(() => {
          // If autoplay with sound is blocked, do nothing; user can press play
        })
      }
    }
  }, [selectedItem])

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
      {/* Updated Header to match main site */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Back Button */}
            <Link href="/" className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="font-medium"></span>
            </Link>
            
            {/* Page Title */}
            <h1 className="text-xl font-medium text-white">Property Gallery</h1>
            
            {/* Spacer to center the title */}
            <div className="w-[136px]"></div>
          </div>
        </div>
      </header>

      {/* Add padding to account for fixed header */}
      <div className="pt-16">
        {/* Gallery Content */}
        <section className="py-12 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 auto-rows-[120px] sm:auto-rows-[150px] lg:auto-rows-[200px] xl:auto-rows-[220px] mb-8 max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto">
              {galleryItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`relative group overflow-hidden rounded-xl border-2 border-black bg-card transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer ${getGridClass(item.size, index)}`}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  onClick={() => handleItemClick(item)}
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
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-black/50 rounded-full p-3 sm:p-4">
                            <Play className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                          </div>
                        </div>
                      </>
                    ) : (
                      <img 
                        src={item.src || "/placeholder.svg"} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                        loading="lazy"
                      />
                    )}
                    
                    {/* Hover Overlay - Title only on mobile, full description on hover (desktop) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-2 sm:p-3 md:p-4">
                      <h3 className="font-medium text-xs sm:text-sm md:text-base text-white">{item.title}</h3>
                      {/* Hide description on mobile, show on hover for desktop */}
                      <p className="hidden md:block text-xs sm:text-sm text-white/80 mt-1 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modal for Full View */}
        {selectedItem && (
          <div className="fixed inset-0 bg-gray-200/60 backdrop-blur-sm z-50 flex items-start justify-center p-4 pt-16 sm:pt-20">
              <button 
                onClick={(e) => {
                  e.stopPropagation()
                  closeModal()
                }}
                className="absolute top-6 right-6 z-50 w-12 h-12 flex items-center justify-center bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Close"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            
            <div className="modal-content max-w-4xl w-full max-h-[90vh] bg-transparent">
              {selectedItem.type === 'video' ? (
                <div className="relative w-full max-h-[80vh] flex items-center justify-center">
                  <div className="rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/10">
                    <video
                      ref={videoRef}
                      src={selectedItem.src}
                      className="no-controls block w-full h-auto max-h-[80vh] object-contain rounded-3xl"
                      playsInline
                      autoPlay
                      muted={false}
                      preload="metadata"
                      loop
                    />
                  </div>
                </div>
              ) : (
                <div className="relative w-full max-h-[80vh] flex items-center justify-center">
                  <div className="rounded-3xl overflow-hidden ring-1 ring-black/10 shadow-2xl">
                    <img 
                      src={selectedItem.src} 
                      alt={selectedItem.title}
                      className="block w-full h-auto max-h-[80vh] object-contain rounded-3xl"
                    />
                  </div>
                </div>
              )}
              <div className="mt-4 text-center text-white px-4 pb-4">
                <h2 className="text-lg sm:text-xl font-semibold">{selectedItem.title}</h2>
                <p className="text-sm sm:text-base text-gray-300 mt-2">{selectedItem.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}