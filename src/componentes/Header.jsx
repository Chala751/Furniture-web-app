import React, { useState } from 'react'
import { Button } from '../componentes/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/componentes/ui/dropdown-menu'
import { ShoppingCart, Menu, X, User } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="w-full border-b bg-[#F1E0C6] shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#6B4F3C] tracking-tight cursor-pointer">
          <Link to="/">
            Furni<span className="text-[#edbf07]">Style</span>
          </Link>
        </div>

        {/* Nav Links for Large Screens */}
        <div className="hidden md:flex space-x-6 text-sm font-medium text-[#6B4F3C]">
          <Link to="/">
            <Button variant="ghost" className="text-[#6B4F3C] hover:bg-[#F1C40F] cursor-pointer">
              Home
            </Button>
          </Link>
          <Link to="/shop">
            <Button variant="ghost" className="text-[#6B4F3C] hover:bg-[#F1C40F] cursor-pointer">
              Shop
            </Button>
          </Link>
          <Link to="/about">
            <Button variant="ghost" className="text-[#6B4F3C] hover:bg-[#F1C40F] cursor-pointer">
              About
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="ghost" className="text-[#6B4F3C] hover:bg-[#F1C40F] cursor-pointer">
              Contact
            </Button>
          </Link>
        </div>

        {/* Cart + User Icons */}
        <div className="flex items-center space-x-3">
          {/* Cart */}
          <Button
            variant="outline"
            size="icon"
            className="text-[#6B4F3C] border-[#6B4F3C] hover:bg-[#F1C40F] cursor-pointer"
          >
            <ShoppingCart size={18} />
          </Button>

          {/* User Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="text-[#6B4F3C] border-[#6B4F3C] hover:bg-[#F1C40F] cursor-pointer"
              >
                <User size={18} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white shadow-lg rounded-md p-2">
              <DropdownMenuItem asChild>
                <Link to="/login" className="text-sm text-[#6B4F3C] w-full px-2 py-1 hover:bg-[#f3e3c4] rounded">
                  Login
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/register" className="text-sm text-[#6B4F3C] w-full px-2 py-1 hover:bg-[#f3e3c4] rounded">
                  Register
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Hamburger for Mobile */}
        <div className="md:hidden flex items-center space-x-3 cursor-pointer">
          <Button
            variant="outline"
            size="icon"
            className="text-[#6B4F3C] border-[#6B4F3C] hover:bg-[#F1C40F] cursor-pointer"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-[#F1E0C6] py-4`}>
        <div className="flex flex-col items-center space-y-4 text-sm font-medium text-[#6B4F3C]">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <Button variant="ghost" className="text-[#6B4F3C] hover:bg-[#F1C40F] cursor-pointer">
              Home
            </Button>
          </Link>
          <Link to="/shop" onClick={() => setIsMenuOpen(false)}>
            <Button variant="ghost" className="text-[#6B4F3C] hover:bg-[#F1C40F] cursor-pointer">
              Shop
            </Button>
          </Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>
            <Button variant="ghost" className="text-[#6B4F3C] hover:bg-[#F1C40F] cursor-pointer">
              About
            </Button>
          </Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
            <Button variant="ghost" className="text-[#6B4F3C] hover:bg-[#F1C40F] cursor-pointer">
              Contact
            </Button>
          </Link>
          <Link to="/login" onClick={() => setIsMenuOpen(false)}>
            <Button variant="ghost" className="text-[#6B4F3C] hover:bg-[#F1C40F] cursor-pointer">
              Login
            </Button>
          </Link>
          <Link to="/register" onClick={() => setIsMenuOpen(false)}>
            <Button variant="ghost" className="text-[#6B4F3C] hover:bg-[#F1C40F] cursor-pointer">
              Register
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
