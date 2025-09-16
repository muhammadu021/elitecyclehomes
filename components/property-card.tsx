import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bed, Bath, Square } from "lucide-react"

interface PropertyCardProps {
  name: string
  bedrooms: number
  bathrooms: number
  sqm: number
  image: string
  borderColor?: string
}

export function PropertyCard({
  name,
  bedrooms,
  bathrooms,
  sqm,
  image,
  borderColor = "border-black", // Default to black border
}: PropertyCardProps) {
  return (
    <Card
      className={`h-full overflow-hidden transition-all duration-500 ease-out sm:hover:transform sm:hover:-translate-y-2 sm:hover:scale-[1.02] 
        shadow-md sm:hover:shadow-2xl border-2 border-black rounded-xl bg-white/80 backdrop-blur-sm
        sm:hover:bg-white group cursor-pointer flex flex-col`}
    >
      <div className="aspect-[4/3] overflow-hidden rounded-t-xl flex-shrink-0">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-full h-full object-cover object-center transition-transform duration-500 sm:group-hover:scale-110"
        />
      </div>
      <CardContent className="p-2 sm:p-3 space-y-2 flex-1 flex flex-col items-center text-center">
        <div className="w-full">
          <h3 className="text-base sm:text-lg font-semibold text-foreground capitalize group-hover:text-primary transition-colors duration-300 leading-tight">
            {name}
          </h3>
        </div>

        <div className="flex justify-center items-center gap-2 text-muted-foreground text-sm group-hover:text-primary transition-colors duration-300 whitespace-nowrap">
          <Square className="w-3 h-3 sm:w-4 sm:h-4 opacity-80" />
          <span aria-label={`${sqm} square meters`}>
            <span className="font-semibold text-foreground group-hover:text-primary/90 mr-1">
              {Number.isFinite(sqm as number) ? sqm.toLocaleString() : String(sqm)}
            </span>
            <span className="text-muted-foreground">sqm</span>
          </span>
        </div>

      </CardContent>
    </Card>
  )
}
