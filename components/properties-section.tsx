import { PropertyCard } from "./property-card"

export function PropertiesSection() {
  const properties = [
    {
      name: "Luxury Villa Katampe Extension Amina Sale Crescent",
      bedrooms: 5,
      bathrooms: 6,
      sqft: "500",
      image: "/1.jpg",
      borderColor: "border-orange-500",
    },
    {
      name: "Fully Detached Duplex Katampe Extension Hill Top",
      bedrooms: 3,
      bathrooms: 4,
      sqft: "2,800",
      image: "/17.jpg",
      borderColor: "border-green-500",
    },
    {
      name: "Mansion Katampe Extension",
      bedrooms: 4,
      bathrooms: 5,
      sqft: "3,200",
      image: "/3.jpg",
      borderColor: "border-purple-500",
    },
    {
      name: "Executive Apartment Katampe Extension Hill Top",
      bedrooms: 4,
      bathrooms: 5,
      sqft: "3,800",
      image: "/9.jpg",
      borderColor: "border-blue-500",
    },
    {
      name: "Fully Detached Duplex Karsana",
      bedrooms: 6,
      bathrooms: 7,
      sqft: "6,000",
      image: "/11.jpg",
      borderColor: "border-teal-500",
    },
    {
      name: "Terrace Duplex Idu",
      bedrooms: 3,
      bathrooms: 4,
      sqft: "2,500",
      image: "/Terraces.jpg",
      borderColor: "border-red-500",
    },
  ]

  return (
    <section id="properties" className="py-12 sm:py-20 bg-background scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
            Find homes that perfectly match your lifestyle
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Discover premium properties in Abuja's most prestigious neighborhoods
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {properties.map((property, index) => (
            <div
              key={index}
              className="opacity-0 translate-y-8 animate-fade-in-up"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: "forwards",
              }}
            >
              <PropertyCard {...property} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
