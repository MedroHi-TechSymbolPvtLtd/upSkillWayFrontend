import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/Images/logo (2).png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Courses', href: '#courses' },
    { name: 'College Training', href: '#college-training' },
    { name: 'Corporate Training', href: '#corporate-training' },
    { name: 'Contact Us', href: '#contact' }
  ];

  return (
    <nav className="bg-transparent absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center ">
            <div className="w-[253px] h-[55px]  bg-white -ml-32 rounded-[30px]">
              <img 
                src={logo} 
                alt="Upskillway Logo" 
                className="w-[309px] h-48 object-contain -mt-16 "
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-800 hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Register Button */}
          <div className="hidden md:block">
            <button className="bg-transparent text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-400 hover:border-b-black transition-colors duration-200 flex items-center space-x-2">
              <span>Contact Us</span>
              <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-600 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white bg-opacity-95 backdrop-blur-sm rounded-lg mt-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-800 hover:text-gray-600 block px-3 py-2 text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-2">
                <button className="w-full bg-transparent text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center space-x-2">
                  <span>Register Now</span>
                  <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;