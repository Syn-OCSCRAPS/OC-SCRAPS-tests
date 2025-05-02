"use client"

import { useState } from "react"
import { Pause, Play, SkipBack, SkipForward, Volume2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

// Sample music data
const tracks = [
  {
    id: 1,
    title: "MIXTAPE INTRO",
    duration: "3:42",
    coverArt: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    title: "SCRAP HEAP",
    duration: "2:58",
    coverArt: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    title: "NEON WASTELAND",
    duration: "4:15",
    coverArt: "/placeholder.svg?height=300&width=300",
  },
]

export function MusicPlayer() {
  const [currentTrack, setCurrentTrack] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(30)

  const handlePrevTrack = () => {
    setCurrentTrack((prev) => (prev === 0 ? tracks.length - 1 : prev - 1))
  }

  const handleNextTrack = () => {
    setCurrentTrack((prev) => (prev === tracks.length - 1 ? 0 : prev + 1))
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 flex items-center justify-center">
          <div className="relative group">
            <img
              src={tracks[currentTrack].coverArt || "/placeholder.svg"}
              alt={tracks[currentTrack].title}
              className="w-full max-w-md rounded-lg shadow-2xl transform transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-cyan-500/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        <div className="p-6 flex flex-col justify-center">
          <h3 className="text-3xl font-bold mb-2 text-cyan-400">{tracks[currentTrack].title}</h3>
          <p className="text-gray-400 mb-8">From "AN OC SCRAPS MIXTAPE"</p>

          <div className="mb-6">
            <div className="flex justify-between text-sm mb-2">
              <span>1:12</span>
              <span>{tracks[currentTrack].duration}</span>
            </div>
            <Slider
              value={[progress]}
              max={100}
              step={1}
              className="cursor-pointer"
              onValueChange={(value) => setProgress(value[0])}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" onClick={handlePrevTrack}>
                <SkipBack className="h-6 w-6" />
              </Button>
              <Button
                className="bg-red-500 hover:bg-red-600 h-14 w-14 rounded-full flex items-center justify-center"
                onClick={togglePlay}
              >
                {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-1" />}
              </Button>
              <Button variant="ghost" size="icon" onClick={handleNextTrack}>
                <SkipForward className="h-6 w-6" />
              </Button>
            </div>

            <div className="flex items-center space-x-2">
              <Volume2 className="h-5 w-5 text-gray-400" />
              <Slider value={[75]} max={100} step={1} className="w-24 cursor-pointer" />
            </div>
          </div>

          <div className="mt-8">
            <h4 className="text-xl font-bold mb-4 text-yellow-400">TRACKLIST</h4>
            <ul className="space-y-3">
              {tracks.map((track, index) => (
                <li
                  key={track.id}
                  className={`flex justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                    index === currentTrack ? "bg-gray-800 text-cyan-400" : "hover:bg-gray-800/50"
                  }`}
                  onClick={() => setCurrentTrack(index)}
                >
                  <div className="flex items-center">
                    <span className="w-6 text-center mr-3">{index + 1}</span>
                    <span>{track.title}</span>
                  </div>
                  <span className="text-gray-400">{track.duration}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
