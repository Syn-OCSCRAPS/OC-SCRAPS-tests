import { CalendarDays } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Sample updates data
const updates = [
  {
    id: 1,
    title: "NEW MIXTAPE OUT NOW",
    date: "May 15, 2024",
    content:
      "Our latest mixtape 'AN OC SCRAPS MIXTAPE' is finally here! Stream it now on all platforms or grab a physical copy from our merch store.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "SUMMER TOUR DATES ANNOUNCED",
    date: "April 28, 2024",
    content: "We're hitting the road this summer! Check out the tour dates and grab your tickets before they sell out.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "NEW MERCH DROP",
    date: "April 10, 2024",
    content: "Fresh merch just landed in our store. Limited quantities available, so don't sleep on this drop!",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export function UpdatesSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {updates.map((update) => (
        <Card
          key={update.id}
          className="bg-gray-900 border-gray-800 overflow-hidden hover:border-yellow-500 transition-colors"
        >
          <div className="overflow-hidden">
            <img
              src={update.image || "/placeholder.svg"}
              alt={update.title}
              className="w-full h-48 object-cover transition-transform hover:scale-105 duration-500"
            />
          </div>
          <CardHeader>
            <div className="flex items-center text-gray-400 mb-2">
              <CalendarDays className="h-4 w-4 mr-2" />
              <CardDescription>{update.date}</CardDescription>
            </div>
            <CardTitle className="text-yellow-400">{update.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">{update.content}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
