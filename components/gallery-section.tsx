"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Play, ImageIcon, X } from "lucide-react"
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

export function GallerySection() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleItemClick = (item: GalleryItem) => {
    setSelectedItem(item)
  }

  const closeModal = () => {
    if (videoRef.current) {
      videoRef.current.pause()
    }
    setSelectedItem(null)
  }

  // Close modal when clicking outside content or pressing Escape
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedItem) {
        closeModal()
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (selectedItem && !target.closest('.modal-content')) {
        closeModal()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handleClickOutside)
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [selectedItem])

  // When modal opens with a video, try to autoplay with sound (user gesture from click)
  useEffect(() => {
    if (selectedItem?.type === 'video' && videoRef.current) {
      const v = videoRef.current
      v.muted = false
      const p = v.play?.()
      if (p && typeof p.then === 'function') {
        p.catch(() => {
          // If blocked, user can press play
        })
      }
    }
  }, [selectedItem])

  // Sample gallery data - in chronological order (newest first)
  const galleryItems: GalleryItem[] = [
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
    
  ]

  // Show only first 12 items (3 rows in bento layout)
  const displayedItems = galleryItems.slice(0, 12)

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
    ]

    // Use mobile patterns for small screens, desktop patterns for larger screens
    return `${mobilePatterns[index] || "col-span-1 row-span-1"} lg:${desktopPatterns[index] || "col-span-1 row-span-1"}`
  }

  return (
    <section id="gallery" className="py-12 bg-muted/30 scroll-mt-20 sm:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">Property Gallery</h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Explore our latest properties and developments through photos and virtual tours
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 auto-rows-[120px] sm:auto-rows-[150px] lg:auto-rows-[200px] xl:auto-rows-[220px] mb-8 max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto">
          {displayedItems.map((item, index) => (
            <div
              key={item.id}
              className={`relative group overflow-hidden rounded-xl border-2 border-black bg-card transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer ${getGridClass(item.size, index)}`}
              onClick={() => handleItemClick(item)}
            >
              {/* Media Content with Play Button Overlay */}
              <div className="relative w-full h-full">
                {item.type === "video" ? (
                  <div className="w-full h-full">
                    <img 
                      src={item.thumbnail || item.src} 
                      alt={item.title} 
                      className="w-full h-full object-cover" 
                      loading="lazy"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <div className="bg-black/60 hover:bg-black/70 rounded-full p-3 sm:p-4 transition-all duration-200">
                        <Play className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <img 
                    src={item.src || "/placeholder.svg"} 
                    alt={item.title} 
                    className="w-full h-full object-cover" 
                    loading="lazy"
                  />
                )}
                
                {/* Title and Description Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-2 sm:p-3 md:p-4">
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

        {/* View Full Gallery Button */}
        <div className="text-center">
          <Link href="/gallery">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              View Full Gallery
            </Button>
          </Link>
        </div>
      </div>

      {/* Modal for Full View */}
      {selectedItem && (
        <div className="fixed inset-0 bg-gray-200/60 backdrop-blur-sm z-50 flex items-start justify-center p-4 pt-16 sm:pt-20">
          <button 
            onClick={closeModal}
            className="absolute top-6 right-6 z-50 w-12 h-12 flex items-center justify-center bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
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
                <div className="rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/10">
                  <img 
                    src={selectedItem.src} 
                    alt={selectedItem.title}
                    className="block w-full h-auto max-h-[80vh] object-contain rounded-3xl"
                  />
                </div>
              </div>
            )}
            <div className="mt-4 text-center text-black px-4 pb-4">
              <h2 className="text-lg sm:text-xl font-semibold">{selectedItem.title}</h2>
              <p className="text-sm sm:text-base text-black mt-2">{selectedItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
