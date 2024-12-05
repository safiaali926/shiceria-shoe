"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import { Search } from 'lucide-react';
import { Heart } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';


 function Header() {
      const [menuOpen, setMenuOpen] = useState(false);
    
      return (
        <header>
            <div className="bg-black text-white text-sm text-center py-2">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!<Link href="/contact" className="font-bold underline px-2">Shop Now</Link></div>
            <div className="flex justify-between items-center p-5 md:px-10 drop-shadow-xl">
          {/* Logo */}
          <Image src="/logo.png" width={200} height={200} alt="hero" className="mt-1 " />
    
          {/* Desktop/Tablet Navigation */}
          <nav className="hidden md:block">
            <ul className="flex gap-x-7 py-5 ">
              <li><Link href="/" className="hover:text-pink-500 px-4">Home</Link></li>
             <li><Link href="/about" className="hover:text-pink-500 px-4">Contact</Link></li>
              <li><Link href="/projects" className="hover:text-pink-500 px-4">About</Link></li>
              <li><Link href="/contact" className="hover:text-pink-500 px-4">Sign Up</Link></li>
      
            </ul>
          </nav>
    

          <div className="flex items-center space-x-4">
  {/* Search Bar */}
  <div className="flex items-center bg-gray-100 rounded-xl">
    <div className="relative">
      <input
        type="text"
        placeholder="What are you looking for?"
        className="w-full py-3 pl-4 pr-12 border border-gray-300 rounded-xl bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-200 focus:border-gray-400"
      />
      <button
        className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-800 px-4 py-2 rounded-full hover:text-pink-500 focus:outline-none"
      >
        <Search />
      </button>
    </div>
  </div>

  {/* Heart and Shopping Cart Icons */}
  <div className="flex items-center space-x-4">
    <Heart className="text-gray-800 hover:text-pink-500" />
    <ShoppingCart className="text-gray-800 hover:text-pink-500" />
  </div>
</div>

    
          {/* Mobile Hamburger Menu Button */}
          <button
            className="block md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-8 h-8 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
    
          {/* Mobile Navigation */}
          {menuOpen && (
            <nav className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-10">
              <ul className="flex flex-col items-center gap-y-5 py-5">
              <li><Link href="/" className="hover:bg-teal-400 hover:text-white rounded-2xl px-2">Home</Link></li>
             <li><Link href="/about" className="hover:bg-teal-400 hover:text-white rounded-2xl px-2">Contact</Link></li>
              <li><Link href="/projects" className="hover:bg-teal-400 hover:text-white rounded-2xl px-2">About</Link></li>
              <li><Link href="/contact" className="hover:bg-teal-400 hover:text-white rounded-2xl px-2">Sign Up</Link></li>
              </ul>
            </nav>
          )}

          
          </div>
        </header>
      );
    }
    
  
  export default Header
  
        
    