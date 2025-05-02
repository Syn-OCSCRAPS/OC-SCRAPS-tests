import Link from "next/link"
import { ArrowRight, Disc3, ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { MusicPlayer } from "@/components/music-player"
import { MerchGrid } from "@/components/merch-grid"
import { UpdatesSection } from "@/components/updates-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-cyan-500 to-red-600 opacity-40" />
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center mix-blend-overlay opacity-20" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">
            <span className="block text-cyan-400">OC</span>
            <span className="block -mt-4 text-red-500">SCRAPS</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">NEW MIXTAPE "AN OC SCRAPS MIXTAPE" OUT NOW</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-cyan-400 text-black hover:bg-cyan-300">
              LISTEN NOW <Disc3 className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-red-500 text-red-500 hover:bg-red-950">
              SHOP MERCH <ShoppingBag className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 text-center">
          <ArrowRight className="h-10 w-10 mx-auto animate-bounce rotate-90" />
        </div>
      </section>

      {/* Music Section */}
      <section id="music" className="py-20 bg-gradient-to-r from-black to-purple-900">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-black mb-12 text-center text-cyan-400">MUSIC</h2>
          <MusicPlayer />
          <div className="mt-12 text-center">
            <Link href="/music">
              <Button variant="link" className="text-red-400 text-lg">
                VIEW ALL TRACKS <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Updates Section */}
      <section id="updates" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-black mb-12 text-center text-yellow-400">UPDATES</h2>
          <UpdatesSection />
          <div className="mt-12 text-center">
            <Link href="/updates">
              <Button variant="link" className="text-yellow-400 text-lg">
                VIEW ALL UPDATES <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Merch Section */}
      <section id="merch" className="py-20 bg-gradient-to-r from-black to-red-900">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-black mb-12 text-center text-purple-500">MERCH</h2>
          <MerchGrid />
          <div className="mt-12 text-center">
            <Link href="/merch">
              <Button variant="link" className="text-cyan-400 text-lg">
                VIEW ALL MERCH <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <Link href="#" className="text-gray-400 hover:text-red-500">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-cyan-400">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-purple-400">
              <span className="sr-only">YouTube</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
          <p className="text-gray-400">© 2024 OC SCRAPS. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  )
}
