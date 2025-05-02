import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import Link from "next/link"
import { Menu } from "lucide-react"

import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export const metadata: Metadata = {
  title: "OC SCRAPS - Music, Updates & Merch",
  description: "Official website for OC SCRAPS. Listen to music, check updates, and shop merch.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-black font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/80 backdrop-blur-sm">
              <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="bg-black border-gray-800">
                      <div className="flex flex-col gap-6 mt-10">
                        <Link href="/" className="text-2xl font-black text-cyan-400">
                          OC SCRAPS
                        </Link>
                        <nav className="flex flex-col gap-4">
                          <Link href="/#music" className="text-lg font-bold hover:text-red-500 transition-colors">
                            MUSIC
                          </Link>
                          <Link href="/#updates" className="text-lg font-bold hover:text-yellow-500 transition-colors">
                            UPDATES
                          </Link>
                          <Link href="/#merch" className="text-lg font-bold hover:text-cyan-400 transition-colors">
                            MERCH
                          </Link>
                          <Link href="/about" className="text-lg font-bold hover:text-purple-500 transition-colors">
                            ABOUT
                          </Link>
                        </nav>
                      </div>
                    </SheetContent>
                  </Sheet>
                  <Link href="/" className="hidden md:block text-2xl font-black text-cyan-400">
                    OC SCRAPS
                  </Link>
                </div>
                <nav className="hidden md:flex items-center gap-6">
                  <Link href="/#music" className="font-bold hover:text-red-500 transition-colors">
                    MUSIC
                  </Link>
                  <Link href="/#updates" className="font-bold hover:text-yellow-500 transition-colors">
                    UPDATES
                  </Link>
                  <Link href="/#merch" className="font-bold hover:text-cyan-400 transition-colors">
                    MERCH
                  </Link>
                  <Link href="/about" className="font-bold hover:text-purple-500 transition-colors">
                    ABOUT
                  </Link>
                </nav>
                <div>
                  <Button className="bg-red-500 hover:bg-red-600">SHOP NOW</Button>
                </div>
              </div>
            </header>
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
