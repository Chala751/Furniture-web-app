import React from 'react'
import { Button } from '../componentes/ui/button'
import { Card, CardContent } from '../componentes/ui/card'
import { Truck, Star, RefreshCcw, Quote } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      {/* Section 1 */}
      <section className="bg-[#F1E0C6] text-[#6B4F3C] py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Discover Timeless <span className="text-[#F1C40F]">Furniture</span>
            </h1>
            <p className="mb-8 text-lg">
              Make your home a stylish haven with our hand-picked collection of beautifully crafted furniture.
            </p>
            <Link to="/shop">
              <Button className="bg-[#6B4F3C] text-white hover:bg-[#5A3F30] px-6 py-2 cursor-pointer">
                Shop Now
              </Button>
            </Link>
          </div>
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
        {/* Wave divider bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
          <svg className="relative block w-[calc(100%+1.3px)] h-[80px]" viewBox="0 0 1200 80" preserveAspectRatio="none">
            <path d="M0,0 C300,80 900,0 1200,80 L1200,0 L0,0 Z" fill="#fff9f3" />
          </svg>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="bg-[#fff9f3] text-[#6B4F3C] pt-20 pb-28 relative z-10">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
          {[{
            icon: <Truck className="mx-auto mb-3 text-[#6B4F3C]" size={36} />,
            title: "Free Delivery",
            desc: "Enjoy fast and free delivery on all orders, no matter the size."
          }, {
            icon: <Star className="mx-auto mb-3 text-[#F1C40F]" size={36} />,
            title: "Premium Quality",
            desc: "Crafted from the finest materials for lasting beauty and comfort."
          }, {
            icon: <RefreshCcw className="mx-auto mb-3 text-[#6B4F3C]" size={36} />,
            title: "Easy Returns",
            desc: "Changed your mind? No worries — returns are simple and hassle-free."
          }].map((item, index) => (
            <Card key={index} className="bg-white border border-[#ecd9c6] shadow-md rounded-xl p-6 hover:shadow-xl hover:scale-105 transition-all">
              {item.icon}
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-[#8b6d5a]">{item.desc}</p>
            </Card>
          ))}
        </div>

        {/* Wave divider bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg className="relative block w-[calc(100%+1.3px)] h-[80px]" viewBox="0 0 1200 80" preserveAspectRatio="none">
            <path d="M0,0 C300,80 900,0 1200,80 L1200,0 L0,0 Z" fill="#fffdfb" />
          </svg>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-[#fffdfb] text-center py-20 relative z-10">
        <Quote className="mx-auto text-[#F1C40F]" size={40} />
        <h2 className="text-2xl font-semibold mt-6 text-[#6B4F3C]">What Our Customers Say</h2>
        <Card className="mt-8 mx-auto max-w-xl bg-[#F1E0C6] border-none shadow-md p-6 rounded-xl">
          <CardContent>
            <p className="text-[#6B4F3C] italic">
              “I absolutely love the furniture I bought from FurniStyle. It’s stylish, durable, and fits perfectly with my home aesthetic.”
            </p>
            <p className="mt-4 font-semibold text-[#8b6d5a]">— Selam A., Adama</p>
          </CardContent>
        </Card>

        {/* Wave divider bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
          <svg className="relative block w-[calc(100%+1.3px)] h-[80px]" viewBox="0 0 1200 80" preserveAspectRatio="none">
            <path d="M0,0 C300,80 900,0 1200,80 L1200,0 L0,0 Z" fill="#F1E0C6" />
          </svg>
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-[#F1E0C6] text-[#6B4F3C] py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <Card className="bg-white shadow-lg rounded-xl overflow-hidden">
            <CardContent className="p-0">
              <img
                src="./src/assets/hero furniture2.jpg"
                alt="Modern Furniture"
                className="w-full h-[350px] object-cover"
              />
            </CardContent>
          </Card>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Discover Timeless <span className="text-[#F1C40F]">Furniture</span>
            </h1>
            <p className="mb-8 text-lg">
              Make your home a stylish haven with our hand-picked collection of beautifully crafted furniture.
            </p>
            <Link to="/shop">
              <Button className="bg-[#6B4F3C] text-white hover:bg-[#5A3F30] px-6 py-2 cursor-pointer">
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
