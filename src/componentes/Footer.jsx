import React from 'react'
import { Facebook, Instagram, Twitter ,Linkedin} from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-[#6B4F3C] text-white pt-16 pb-10 mt-0">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 relative z-10">
        {/* About */}
        <div>
          <h3 className="text-xl font-semibold mb-4">FurniStyle</h3>
          <p className="text-sm text-[#F1E0C6]">
            Timeless furniture, crafted for comfort and elegance. Bringing style to every room of your home.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-lg font-medium mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-[#F1E0C6]">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/shop" className="hover:underline">Shop</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-medium mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[#F1C40F] transition-colors duration-200"><Facebook size={20} /></a>
            <a href="#" className="hover:text-[#F1C40F] transition-colors duration-200"><Instagram size={20} /></a>
            <a href="#" className="hover:text-[#F1C40F] transition-colors duration-200"><Twitter size={20} /></a>
            <a href="#" className="hover:text-[#F1C40F] transition-colors duration-200"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-[#F1E0C6] border-t border-[#8b6d5a] pt-6 relative z-10">
        &copy; {new Date().getFullYear()} FurniStyle. All rights reserved.
      </div>
    </footer>
  )
}
