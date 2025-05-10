import React from 'react'
import { Button } from '../componentes/ui/button'
import { Card, CardContent } from '../componentes/ui/card'
import { Truck, Star, RefreshCcw } from 'lucide-react'

export default function Home() {
  return (
    <>
      {/* Section 1 */}
      <section className="bg-[#F1E0C6] text-[#6B4F3C] min-h-72 py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Discover Timeless <span className="text-[#F1C40F]">Furniture</span>
            </h1>
            <p className="mb-8 text-lg">
              Make your home a stylish haven with our hand-picked collection of beautifully crafted furniture.
            </p>
            <Button className="bg-[#6B4F3C] text-white hover:bg-[#5A3F30] px-6 py-2">
              Shop Now
            </Button>
          </div>

          {/* Hero Image */}
          <Card className="bg-white shadow-lg rounded-xl overflow-hidden">
            <CardContent className="p-0">
              <img
                src="./src/assets/hero furniture.jpg" 
                alt="Modern Furniture"
                className="w-full h-[350px] object-cover"
              />
            </CardContent>
          </Card>
        </div>
      </section>

     {/* Section: Features */}
<section className="bg-[#F1E0C6] text-[#6B4F3C] py-15">
  <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
    <Card className="bg-[#fff9f3] border border-[#ecd9c6] shadow-lg rounded-xl p-6 transition-all hover:shadow-xl hover:scale-105">
      <Truck className="mx-auto mb-3 text-[#6B4F3C]" size={36} />
      <h3 className="text-lg font-semibold mb-2 text-[#6B4F3C]">Free Delivery</h3>
      <p className="text-sm text-[#8b6d5a]">Enjoy fast and free delivery on all orders, no matter the size.</p>
    </Card>

    <Card className="bg-[#fff9f3] border border-[#ecd9c6] shadow-lg rounded-xl p-6 transition-all hover:shadow-xl hover:scale-105">
      <Star className="mx-auto mb-3 text-[#F1C40F]" size={36} />
      <h3 className="text-lg font-semibold mb-2 text-[#6B4F3C]">Premium Quality</h3>
      <p className="text-sm text-[#8b6d5a]">Crafted from the finest materials for lasting beauty and comfort.</p>
    </Card>

    <Card className="bg-[#fff9f3] border border-[#ecd9c6] shadow-lg rounded-xl p-6 transition-all hover:shadow-xl hover:scale-105">
      <RefreshCcw className="mx-auto mb-3 text-[#6B4F3C]" size={36} />
      <h3 className="text-lg font-semibold mb-2 text-[#6B4F3C]">Easy Returns</h3>
      <p className="text-sm text-[#8b6d5a]">Changed your mind? No worries — returns are simple and hassle-free.</p>
    </Card>
  </div>
</section>


      {/* Section 2 */}
      <section className="bg-[#F1E0C6] text-[#6B4F3C] min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <Card className="bg-white shadow-lg rounded-xl overflow-hidden">
            <CardContent className="p-0">
              <img
                src="./src/assets/hero furniture2.jpg"
                alt="Modern Furniture"
                className="w-full h-[350px] object-cover"
              />
            </CardContent>
          </Card>

          {/* Text Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Discover Timeless <span className="text-[#F1C40F]">Furniture</span>
            </h1>
            <p className="mb-8 text-lg">
              Make your home a stylish haven with our hand-picked collection of beautifully crafted furniture.
            </p>
            <Button className="bg-[#6B4F3C] text-white hover:bg-[#5A3F30] px-6 py-2">
              Shop Now
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
