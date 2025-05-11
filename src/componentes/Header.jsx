import React, { useState } from 'react'
import { Button } from '../componentes/ui/button'
import { ShoppingCart, Menu, X } from 'lucide-react' 

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false) 

  // Toggle the menu on button click
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="w-full border-b bg-[#F1E0C6] shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center ">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#6B4F3C] tracking-tight cursor-pointer">
          Furni<span className="text-[#edbf07]">Style</span>
        </div>

        {/* Nav Links for Large Screens */}
        <div className="hidden md:flex space-x-6 text-sm font-medium text-[#6B4F3C]">
          <Button variant="ghost" className="text-[#6B4F3C] hover:bg-[#F1C40F] cursor-pointer">
            Shop
          </Button>
          <Button variant="ghost" className="text-[#6B4F3C] hover:bg-[#F1C40F] cursor-pointer">
            About
          </Button>
          <Button variant="ghost" className="text-[#6B4F3C] hover:bg-[#F1C40F] cursor-pointer">
            Contact
          </Button>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center space-x-3 cursor-pointer">
          <Button
            variant="outline"
            size="icon"
            className="text-[#6B4F3C] border-[#6B4F3C] hover:bg-[#F1C40F]"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />} {/* Toggle between Menu and X */}
          </Button>
        </div>

        {/* Cart Icon */}
        <div className="flex items-center space-x-3 ">
          <Button
            variant="outline"
            size="icon"
            className="text-[#6B4F3C] border-[#6B4F3C] hover:bg-[#F1C40F] cursor-pointer"
          >
            <ShoppingCart size={18} />
          </Button>
        </div>
      </nav>

      {/* Mobile Menu - Shows when isMenuOpen is true */}
      <div
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-[#F1E0C6] py-4`}
      >
        <div className="flex flex-col items-center space-y-4 text-sm font-medium text-[#6B4F3C]">
          <Button variant="ghost" className="text-[#6B4F3C] hover:bg-[#F1C40F]">
            Shop
          </Button>
          <Button variant="ghost" className="text-[#6B4F3C] hover:bg-[#F1C40F]">
            About
          </Button>
          <Button variant="ghost" className="text-[#6B4F3C] hover:bg-[#F1C40F]">
            Contact
          </Button>
        </div>
      </div>
    </header>
  )
}
