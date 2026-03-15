"use client";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-blue-700 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <span className="text-xl font-bold text-blue-800">Kader <span className="text-orange-500">Duct</span></span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-600 hover:text-blue-700 font-medium transition-colors">Services</a>
            <a href="#why-us" className="text-gray-600 hover:text-blue-700 font-medium transition-colors">Why Us</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-blue-700 font-medium transition-colors">How It Works</a>
            <a href="#contact" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded-full transition-colors">
              Get a Free Quote
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-gray-600 hover:text-blue-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          <a href="#services" onClick={() => setMenuOpen(false)} className="text-gray-700 font-medium">Services</a>
          <a href="#why-us" onClick={() => setMenuOpen(false)} className="text-gray-700 font-medium">Why Us</a>
          <a href="#how-it-works" onClick={() => setMenuOpen(false)} className="text-gray-700 font-medium">How It Works</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="bg-orange-500 text-white text-center font-semibold px-5 py-2 rounded-full">
            Get a Free Quote
          </a>
        </div>
      )}
    </nav>
  );
}
