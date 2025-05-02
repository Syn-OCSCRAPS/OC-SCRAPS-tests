"use client"

import { useState } from "react"
import { ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Sample merchandise data
const merchItems = [
  {
    id: 1,
    name: "MIXTAPE T-SHIRT",
    price: 35,
    image: "/placeholder.svg?height=400&width=400",
    isNew: true,
  },
  {
    id: 2,
    name: "OC SCRAPS HOODIE",
    price: 65,
    image: "/placeholder.svg?height=400&width=400",
    isNew: false,
  },
  {
    id: 3,
    name: "SCRAPS CAP",
    price: 25,
    image: "/placeholder.svg?height=400&width=400",
    isNew: false,
  },
  {
    id: 4,
    name: "MIXTAPE VINYL",
    price: 30,
    image: "/placeholder.svg?height=400&width=400",
    isNew: true,
  },
]

export function MerchGrid() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {merchItems.map((item) => (
        <Card
          key={item.id}
          className="bg-black border-gray-800 overflow-hidden transition-all duration-300 hover:border-purple-500"
          onMouseEnter={() => setHoveredItem(item.id)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <div className="relative">
            <div className="overflow-hidden">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                className={`w-full aspect-square object-cover transition-transform duration-500 ${
                  hoveredItem === item.id ? "scale-110" : "scale-100"
                }`}
              />
            </div>
            {item.isNew && <Badge className="absolute top-3 right-3 bg-yellow-400 text-black font-bold">NEW</Badge>}
          </div>
          <CardContent className="pt-4">
            <h3 className="text-lg font-bold">{item.name}</h3>
            <p className="text-red-400 font-bold mt-1">${item.price}</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-gray-800 hover:bg-red-600 group">
              <ShoppingCart className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              ADD TO CART
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
