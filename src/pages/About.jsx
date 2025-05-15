import React from 'react'
import { Card, CardContent } from '@/componentes/ui/card'
import { motion } from 'framer-motion'
import { CheckCircle, Truck, Leaf, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

const aboutSections = [
  {
    title: 'Our Story',
    content:
      'FurniStyle was born from a passion for blending comfort and elegance. What started as a small workshop is now a beloved furniture brand serving thousands of happy homes.',
    image: './src/assets/about1.jpg',
  },
  {
    title: 'Our Mission',
    content:
      'To create quality, sustainable furniture that brings beauty and functionality to every living space.',
    image: './src/assets/about3.jpg',
  },
  {
    title: 'Our Values',
    content:
      'We stand for craftsmanship, honesty, and customer satisfaction. Every product we offer is a reflection of these values.',
    image: './src/assets/about2.jpg',
  },
]

const features = [
  {
    icon: <Truck className="text-[#6B4F3C]" size={28} />,
    title: 'Fast & Free Delivery',
    description: 'Enjoy free shipping on all orders, delivered right to your doorstep.',
  },
  {
    icon: <Leaf className="text-[#6B4F3C]" size={28} />,
    title: 'Eco-Friendly Materials',
    description: 'Our wood and fabrics are responsibly sourced to support a sustainable future.',
  },
  {
    icon: <Sparkles className="text-[#6B4F3C]" size={28} />,
    title: 'Modern Aesthetic',
    description: 'Minimalist, elegant, and versatile designs for every room.',
  },
  {
    icon: <CheckCircle className="text-[#6B4F3C]" size={28} />,
    title: 'Quality Guarantee',
    description: 'We stand behind our products with a commitment to durability and satisfaction.',
  },
]

export default function About() {
  return (
    <section className="bg-[#F1E0C6] min-h-screen py-16 px-4 md:px-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-[#6B4F3C] mb-4">About FurniStyle</h2>
        <p className="text-gray-700 text-lg">
          Discover the story, mission, and values that shape our furniture and fuel our passion.
        </p>
      </div>

      {/* About Sections with Images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
        {aboutSections.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-40 w-full object-cover rounded-t-xl"
            />
            <Card className="bg-white border-0 shadow-md rounded-b-xl flex-1">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-[#6B4F3C]">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.content}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Feature Highlights */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h3 className="text-3xl font-bold text-[#6B4F3C] mb-4">What Makes Us Unique</h3>
        <p className="text-gray-700 mb-8">
          Our commitment to quality and customer satisfaction sets us apart.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          {features.map((feature, i) => (
            <div key={i} className="flex gap-4 items-start bg-white p-5 rounded-lg shadow-sm">
              <div>{feature.icon}</div>
              <div>
                <h4 className="text-lg font-semibold text-[#6B4F3C]">{feature.title}</h4>
                <p className="text-sm text-gray-700">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <h4 className="text-2xl font-semibold text-[#6B4F3C] mb-4">
          Ready to Style Your Space?
        </h4>
        <Link to="/shop">
         <button className="bg-[#6B4F3C] text-white py-2 px-6 rounded hover:bg-[#5a3f30] transition text-sm cursor-pointer">
          Browse Our Collection
         </button>
        </Link>
      </div>
    </section>
  )
}
