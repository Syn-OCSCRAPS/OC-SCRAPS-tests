import Link from "next/link"
import { ArrowLeft, Instagram, Mail, Twitter, Youtube } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function AboutPage() {
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
          <h1 className="text-4xl font-black ml-4 text-purple-500">ABOUT</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=800&width=600"
                alt="Collective Photo"
                className="w-full rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-cyan-500/30 rounded-xl"></div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-black mb-6 text-cyan-400">OUR STORY</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                OC SCRAPS emerged from the underground music scene in 2019, blending elements of hip-hop, electronic,
                and alternative rock into a sound that defies categorization.
              </p>
              <p>
                Founded by childhood friends with a shared vision of creating music without boundaries, the collective
                quickly gained attention for their energetic live performances and distinctive visual aesthetic.
              </p>
              <p>
                Since releasing their debut mixtape "FIRST CUTS" in 2020, OC SCRAPS has built a dedicated following that
                connects with their raw lyrics, experimental production, and authentic approach to artistry.
              </p>
              <p>
                The collective's latest mixtape "AN OC SCRAPS MIXTAPE" represents their most ambitious work to date,
                pushing creative boundaries while staying true to their roots.
              </p>
            </div>

            <Separator className="my-8 border-gray-800" />

            <h2 className="text-3xl font-black mb-6 text-red-500">CONNECT</h2>
            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-red-500 text-red-500 hover:bg-red-950"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-cyan-400 text-cyan-400 hover:bg-cyan-950"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-yellow-400 text-yellow-400 hover:bg-yellow-950"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-purple-500 text-purple-500 hover:bg-purple-950"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-16 border-gray-800" />

        <div className="text-center mb-12">
          <h2 className="text-3xl font-black mb-6 text-yellow-400">THE COLLECTIVE</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            OC SCRAPS is more than just a group - it's a creative collective of musicians, visual artists, and producers
            working together to create immersive artistic experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((member) => (
            <Card
              key={member}
              className="bg-gray-900 border-gray-800 overflow-hidden hover:border-purple-500 transition-colors"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={`/placeholder.svg?height=400&width=400`}
                  alt={`Member ${member}`}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="text-xl font-bold text-purple-400">MEMBER {member}</h3>
                <p className="text-gray-400">Role / Instrument</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
