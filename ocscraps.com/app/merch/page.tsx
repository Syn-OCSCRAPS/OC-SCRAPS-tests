import Link from "next/link"
import { ArrowLeft, Filter, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample merchandise data
const merchItems = [
  // Clothing
  {
    id: 1,
    name: "MIXTAPE T-SHIRT",
    price: 35,
    image: "/placeholder.svg?height=400&width=400",
    isNew: true,
    category: "clothing",
  },
  {
    id: 2,
    name: "OC SCRAPS HOODIE",
    price: 65,
    image: "/placeholder.svg?height=400&width=400",
    isNew: false,
    category: "clothing",
  },
  {
    id: 3,
    name: "TOUR CAP",
    price: 25,
    image: "/placeholder.svg?height=400&width=400",
    isNew: false,
    category: "clothing",
  },
  {
    id: 4,
    name: "LOGO TEE",
    price: 30,
    image: "/placeholder.svg?height=400&width=400",
    isNew: false,
    category: "clothing",
  },
  // Music
  {
    id: 5,
    name: "MIXTAPE VINYL",
    price: 30,
    image: "/placeholder.svg?height=400&width=400",
    isNew: true,
    category: "music",
  },
  {
    id: 6,
    name: "FUTURE SHOCK CD",
    price: 15,
    image: "/placeholder.svg?height=400&width=400",
    isNew: false,
    category: "music",
  },
  {
    id: 7,
    name: "FIRST CUTS CASSETTE",
    price: 12,
    image: "/placeholder.svg?height=400&width=400",
    isNew: false,
    category: "music",
  },
  // Accessories
  {
    id: 8,
    name: "OC SCRAPS STICKER PACK",
    price: 8,
    image: "/placeholder.svg?height=400&width=400",
    isNew: false,
    category: "accessories",
  },
  {
    id: 9,
    name: "TOUR POSTER",
    price: 20,
    image: "/placeholder.svg?height=400&width=400",
    isNew: true,
    category: "accessories",
  },
  {
    id: 10,
    name: "MIXTAPE TOTE BAG",
    price: 18,
    image: "/placeholder.svg?height=400&width=400",
    isNew: false,
    category: "accessories",
  },
]

export default function MerchPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center mb-8">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
          </Link>
          <h1 className="text-4xl font-black ml-4 text-purple-500">MERCH</h1>
        </div>

        <Tabs defaultValue="all" className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <TabsList className="bg-gray-900">
              <TabsTrigger value="all">ALL</TabsTrigger>
              <TabsTrigger value="clothing">CLOTHING</TabsTrigger>
              <TabsTrigger value="music">MUSIC</TabsTrigger>
              <TabsTrigger value="accessories">ACCESSORIES</TabsTrigger>
            </TabsList>

            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {merchItems.map((item) => (
                <MerchCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="clothing" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {merchItems
                .filter((item) => item.category === "clothing")
                .map((item) => (
                  <MerchCard key={item.id} item={item} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="music" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {merchItems
                .filter((item) => item.category === "music")
                .map((item) => (
                  <MerchCard key={item.id} item={item} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="accessories" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {merchItems
                .filter((item) => item.category === "accessories")
                .map((item) => (
                  <MerchCard key={item.id} item={item} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

function MerchCard({ item }: { item: (typeof merchItems)[0] }) {
  return (
    <Card className="bg-black border-gray-800 overflow-hidden transition-all duration-300 hover:border-purple-500 group">
      <div className="relative">
        <div className="overflow-hidden">
          <img
            src={item.image || "/placeholder.svg"}
            alt={item.name}
            className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
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
  )
}
