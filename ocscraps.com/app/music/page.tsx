import Link from "next/link"
import { ArrowLeft, Disc3, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

// Sample albums data
const albums = [
  {
    id: 1,
    title: "AN OC SCRAPS MIXTAPE",
    year: "2024",
    cover: "/placeholder.svg?height=500&width=500",
    tracks: [
      "INTRO",
      "SCRAP HEAP",
      "NEON WASTELAND",
      "MIXTAPE FLOW",
      "MIDNIGHT DRIVE",
      "LOST BOYS",
      "FUTURE SHOCK",
      "OUTRO",
    ],
  },
  {
    id: 2,
    title: "FUTURE SHOCK",
    year: "2022",
    cover: "/placeholder.svg?height=500&width=500",
    tracks: ["FUTURE SHOCK", "DIGITAL DREAMS", "ANALOG LOVE", "STATIC", "SIGNAL", "NOISE", "TRANSMISSION"],
  },
  {
    id: 3,
    title: "FIRST CUTS",
    year: "2020",
    cover: "/placeholder.svg?height=500&width=500",
    tracks: ["FIRST CUTS", "YOUNG SCRAPS", "NIGHT VISION", "DAYBREAK", "SUNSET", "MOONLIGHT", "DAWN"],
  },
]

export default function MusicPage() {
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
          <h1 className="text-4xl font-black ml-4 text-red-500">DISCOGRAPHY</h1>
        </div>

        <div className="grid gap-12">
          {albums.map((album) => (
            <div key={album.id} className="grid md:grid-cols-2 gap-8">
              <div className="relative group">
                <img
                  src={album.cover || "/placeholder.svg"}
                  alt={album.title}
                  className="w-full rounded-xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-cyan-500/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div>
                <Card className="bg-gray-900 border-gray-800 h-full">
                  <CardHeader>
                    <CardDescription className="text-gray-400">{album.year}</CardDescription>
                    <CardTitle className="text-3xl font-black text-cyan-400">{album.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-xl font-bold mb-4 text-red-400">TRACKLIST</h3>
                    <ol className="space-y-2">
                      {album.tracks.map((track, index) => (
                        <li
                          key={index}
                          className="flex justify-between p-2 hover:bg-gray-800 rounded-lg transition-colors"
                        >
                          <div className="flex items-center">
                            <span className="w-6 text-center mr-3 text-gray-400">{index + 1}</span>
                            <span>{track}</span>
                          </div>
                          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-cyan-400">
                            <Disc3 className="h-4 w-4 mr-2" />
                            Play
                          </Button>
                        </li>
                      ))}
                    </ol>
                  </CardContent>
                  <CardFooter className="flex gap-4">
                    <Button className="bg-red-500 hover:bg-red-600">
                      <Disc3 className="h-4 w-4 mr-2" />
                      Stream Album
                    </Button>
                    <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-950">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Buy Album
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              <Separator className="col-span-2 border-gray-800" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
