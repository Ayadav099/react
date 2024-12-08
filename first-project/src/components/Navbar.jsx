import React from 'react'

const Navbar = () => {
  return (
    <div>
     <nav className="bg-gray-800 p-4 mb-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="text-white text-2xl font-bold">
          <a href="/">My Website</a>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-4">
          <a href="/" className="text-white hover:text-gray-400">Home</a>
          <a href="/about" className="text-white hover:text-gray-400">About</a>
          <a href="/services" className="text-white hover:text-gray-400">Services</a>
          <a href="/contact" className="text-white hover:text-gray-400">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white">
            <i className="fas fa-bars"></i> {/* FontAwesome Icon for mobile menu */}
          </button>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
