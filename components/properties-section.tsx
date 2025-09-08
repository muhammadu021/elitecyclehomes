import { PropertyCard } from "./property-card"

export function PropertiesSection() {
  const properties = [
    {
      name: "Luxury Villa Maitama",
      price: "₦450M",
      bedrooms: 5,
      bathrooms: 6,
      sqft: "4,500",
      image: "/luxury-villa-with-modern-architecture-in-maitama-a.png",
      borderColor: "border-orange-500",
    },
    {
      name: "Executive Apartment Asokoro",
      price: "₦180M",
      bedrooms: 3,
      bathrooms: 4,
      sqft: "2,800",
      image: "/executive-apartment-building-in-asokoro-abuja-with.png",
      borderColor: "border-green-500",
    },
    {
      name: "Penthouse Wuse II",
      price: "₦320M",
      bedrooms: 4,
      bathrooms: 5,
      sqft: "3,200",
      image: "/modern-penthouse-with-city-view-in-wuse-ii-abuja.png",
      borderColor: "border-purple-500",
    },
    {
      name: "Duplex Guzape",
      price: "₦275M",
      bedrooms: 4,
      bathrooms: 5,
      sqft: "3,800",
      image: "/contemporary-duplex-house-in-guzape-abuja-with-lan.png",
      borderColor: "border-blue-500",
    },
    {
      name: "Mansion Katampe",
      price: "₦650M",
      bedrooms: 6,
      bathrooms: 7,
      sqft: "6,000",
      image: "/luxury-mansion-in-katampe-abuja-with-swimming-pool.png",
      borderColor: "border-teal-500",
    },
    {
      name: "Townhouse Jahi",
      price: "₦220M",
      bedrooms: 3,
      bathrooms: 4,
      sqft: "2,500",
      image: "/modern-townhouse-in-jahi-abuja-with-contemporary-d.png",
      borderColor: "border-red-500",
    },
  ]

  return (
    <section id="properties" className="py-12 sm:py-20 bg-background scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12 gap-4 text-center">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              Find homes that perfectly match your lifestyle
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              Discover premium properties in Abuja's most prestigious neighborhoods
            </p>
          </div>
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
