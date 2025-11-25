"use client"

import { useState, useEffect } from "react"
import { Instagram } from "lucide-react"
import Image from "next/image"

const products = [
  {
    id: 1,
    name: "Styling Details",
    image: "/IMG_1857.JPG",
    price: "Coming Soon",
  },
  {
    id: 2,
    name: "Styling Details",
    image: "/IMG_1845.JPG",
    price: "Coming Soon",
  },
  {
    id: 3,
    name: "Styling Details",
    image: "/IMG_1821.JPG",
    price: "Coming Soon",
  },
  
  {
    id: 4,
    name: "Styling Details",
    image: "/IMG_1832.JPG",
    price: "Coming Soon",
  },

]

export default function ComingSoon() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="relative z-20 flex justify-between items-center p-6 md:p-8">
        <div className="flex items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview%20%2813%29-YSBxcnVsGlQs3tfEZPxd5MOAiCznlp.png"
            alt="IYI"
            width={60}
            height={40}
            className="object-contain"
          />
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm tracking-wide text-stone-600">
          <span className="opacity-50">Shop</span>
          <span className="opacity-50">About</span>
          <span className="opacity-50">Contact</span>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center px-6">
          {/* Background Product Scroller */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-white/80 z-10"></div>
            <div
              className="flex transition-transform duration-1000 ease-in-out h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {products.map((product, index) => (
                <div key={product.id} className="min-w-full h-full relative">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover opacity-20 blur-sm"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Coming Soon Content */}
          <div className="relative z-20 text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-wider text-stone-900 mb-8">
              <span className="block text-balance">COMING</span>
              <span className="block text-balance">SOON</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-600 font-light tracking-wide max-w-md mx-auto mb-12 text-pretty">
              Curating timeless pieces for the modern woman. Something beautiful is on the way.
            </p>

            {/* Instagram Link */}
            <a
              href="https://instagram.com/iyi.thebrand"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-stone-700 hover:text-stone-900 transition-colors duration-300"
            >
              <Instagram className="w-5 h-5" />
              <span className="text-sm tracking-wide font-light">@iyi.thebrand</span>
            </a>
          </div>
        </section>

        {/* Product Preview Section */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-light tracking-wide text-center text-stone-900 mb-12">
              Preview Collection
            </h2>

            {/* Product Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className={`group cursor-pointer transition-all duration-500 ${
                    index === currentIndex ? "scale-105 shadow-lg" : "hover:scale-102"
                  }`}
                >
                  <div className="aspect-[3/4] relative overflow-hidden bg-stone-50 rounded-lg">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-sm font-light tracking-wide text-stone-900 mb-1">{product.name}</h3>
                    <p className="text-xs tracking-wide text-stone-500 uppercase">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-stone-200">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-xs tracking-wide text-stone-500 uppercase mb-4">Launching Soon</p>
            <div className="w-px h-8 bg-gradient-to-b from-stone-400 to-transparent mx-auto"></div>
          </div>
        </footer>
      </main>
    </div>
  )
}
