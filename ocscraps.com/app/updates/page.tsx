import Link from "next/link"
import { ArrowLeft, CalendarDays, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Sample updates data
const updates = [
  {
    id: 1,
    title: "NEW MIXTAPE OUT NOW",
    date: "May 15, 2024",
    content:
      "Our latest mixtape 'AN OC SCRAPS MIXTAPE' is finally here! Stream it now on all platforms or grab a physical copy from our merch store. This mixtape represents a new direction for us, blending our signature sound with experimental elements. We've been working on this for the past year and can't wait for you all to hear it.\n\nThe mixtape features 8 tracks including our singles 'SCRAP HEAP' and 'NEON WASTELAND'. Special thanks to everyone who supported us during the creation process.",
    image: "/placeholder.svg?height=800&width=1200",
  },
  {
    id: 2,
    title: "SUMMER TOUR DATES ANNOUNCED",
    date: "April 28, 2024",
    content:
      "We're hitting the road this summer! Check out the tour dates below and grab your tickets before they sell out. We'll be visiting 15 cities across the country, bringing our new mixtape to life on stage.\n\nJune 10 - Los Angeles, CA\nJune 12 - San Francisco, CA\nJune 15 - Portland, OR\nJune 17 - Seattle, WA\nJune 20 - Denver, CO\nJune 23 - Chicago, IL\nJune 25 - Detroit, MI\nJune 27 - Toronto, ON\nJune 30 - New York, NY\nJuly 2 - Boston, MA\nJuly 5 - Philadelphia, PA\nJuly 7 - Washington, DC\nJuly 10 - Atlanta, GA\nJuly 12 - Miami, FL\nJuly 15 - Austin, TX",
    image: "/placeholder.svg?height=800&width=1200",
  },
  {
    id: 3,
    title: "NEW MERCH DROP",
    date: "April 10, 2024",
    content:
      "Fresh merch just landed in our store. Limited quantities available, so don't sleep on this drop! The new collection includes t-shirts, hoodies, caps, and accessories featuring artwork from our upcoming mixtape.\n\nAll items are made with high-quality materials and printed locally. Orders over $50 ship free within the continental US. International shipping is available.",
    image: "/placeholder.svg?height=800&width=1200",
  },
  {
    id: 4,
    title: "STUDIO SESSION HIGHLIGHTS",
    date: "March 25, 2024",
    content:
      "We've been in the studio putting the finishing touches on our new mixtape. Check out some behind-the-scenes photos from our recording sessions. It's been an intense but rewarding process, and we can't wait to share the results with you all.\n\nSpecial thanks to our producer Alex Thompson for pushing us to new creative heights and to the entire studio team for their hard work and dedication.",
    image: "/placeholder.svg?height=800&width=1200",
  },
  {
    id: 5,
    title: "INTERVIEW WITH MUSIC MAGAZINE",
    date: "March 10, 2024",
    content:
      "We recently sat down with Underground Music Magazine to discuss our upcoming mixtape, creative process, and future plans. The interview covers our journey as a collective, the evolution of our sound, and what fans can expect from our new material.\n\nYou can read the full interview on their website or pick up a copy of the March issue at your local record store.",
    image: "/placeholder.svg?height=800&width=1200",
  },
]

export default function UpdatesPage() {
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
          <h1 className="text-4xl font-black ml-4 text-yellow-400">UPDATES</h1>
        </div>

        <div className="grid gap-8">
          {updates.map((update) => (
            <Card
              key={update.id}
              className="bg-gray-900 border-gray-800 overflow-hidden hover:border-yellow-500 transition-colors"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="overflow-hidden">
                  <img
                    src={update.image || "/placeholder.svg"}
                    alt={update.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="flex flex-col p-6">
                  <CardHeader className="px-0 pt-0">
                    <div className="flex items-center text-gray-400 mb-2">
                      <CalendarDays className="h-4 w-4 mr-2" />
                      <CardDescription>{update.date}</CardDescription>
                    </div>
                    <CardTitle className="text-2xl text-yellow-400">{update.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="px-0 flex-grow">
                    <p className="text-gray-300 whitespace-pre-line">
                      {update.content.length > 200 ? `${update.content.substring(0, 200)}...` : update.content}
                    </p>
                  </CardContent>
                  <div className="mt-4">
                    <Button variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-950">
                      Read More <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
