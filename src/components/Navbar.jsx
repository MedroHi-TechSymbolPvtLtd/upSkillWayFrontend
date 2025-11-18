import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import logo from '../assets/Images/logo (2).png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isDiscoverDropdownOpen, setIsDiscoverDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Our Courses', href: '/courses' },
    { name: 'Our Services', href: '/corporate', hasDropdown: true, dropdownType: 'services' },
    { name: 'Discover', href: '/about', hasDropdown: true, dropdownType: 'discover' }
  ];

  const servicesItems = [
    { name: 'Coding for kids', href: '/coding-for-kids' },
    { name: 'College Training', href: '/college-training' },
    { name: 'Corporate Training', href: '/corporate' },
    { name: 'Study Abroad', href: '/study' }
  ];

  const discoverItems = [
    { name: 'Refer and Earn', href: '/refer-and-earn' },
    { name: 'Blog', href: '/blog' },
    { name: 'Ebook', href: '/ebook' },
    { name: 'About', href: '/about' }
  ];

  const servicesDropdownRef = useRef(null);
  const discoverDropdownRef = useRef(null);
  
  const navigate = useNavigate();

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)) {
        setIsServicesDropdownOpen(false);
      }
      if (discoverDropdownRef.current && !discoverDropdownRef.current.contains(event.target)) {
        setIsDiscoverDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-transparent absolute top-0 left-0 w-full z-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="w-[120px] sm:w-[140px] md:w-[160px] lg:w-[170px] h-[25px] sm:h-[30px] md:h-[35px] bg-white -ml-1 sm:-ml-1.5 md:-ml-2 rounded-[20px] sm:rounded-[25px] md:rounded-[30px]">
              <img 
                src={logo} 
                alt="Upskillway Logo" 
                className="w-[309px]  sm:w-[350px] md:w-[400px] lg:w-[309px] h-[47px] sm:h-40 md:h-44 lg:h-48 object-contain -mt-12 sm:-mt-15 md:-mt-17 lg:-mt-19"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="rounded-lg px-6 py-2 flex items-center space-x-8 shadow-sm">
              {navItems.map((item) => {
                if (item.hasDropdown) {
                  const isOpen = item.dropdownType === 'services' ? isServicesDropdownOpen : isDiscoverDropdownOpen;
                  const dropdownItems = item.dropdownType === 'services' ? servicesItems : discoverItems;
                  const setIsOpen = item.dropdownType === 'services' ? setIsServicesDropdownOpen : setIsDiscoverDropdownOpen;
                  const dropdownRef = item.dropdownType === 'services' ? servicesDropdownRef : discoverDropdownRef;
                  
                  return (
                    <div key={item.name} className="relative" ref={dropdownRef}>
                      <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-800 hover:text-gray-600 text-sm font-medium transition-colors duration-200 flex items-center space-x-1"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {/* Dropdown Menu */}
                      {isOpen && (
                        <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                          <div className="py-2">
                            {dropdownItems.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                to={dropdownItem.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-50 transition-colors duration-200"
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }
                
                return item.href.startsWith("/") ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-gray-800 hover:text-gray-600 text-sm font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-800 hover:text-gray-600 text-sm font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Register Button */}
            <div className="hidden lg:block">
      <button
        onClick={() => navigate("/contact")}
        className="bg-transparent text-black px-4 xl:px-6 py-1.5 xl:py-2 rounded-full text-xs xl:text-sm font-medium hover:bg-gray-400 hover:border-b-black transition-colors duration-200 flex items-center space-x-1 xl:space-x-2"
      >
        <span>Contact Us</span>
        <div className="w-4 h-4 xl:w-5 xl:h-5 bg-orange-500 rounded-full flex items-center justify-center">
          <svg
            className="w-2.5 h-2.5 xl:w-3 xl:h-3 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </button>
    </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="block h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="block h-5 w-5 sm:h-6 sm:w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white bg-opacity-95 backdrop-blur-sm rounded-lg mt-2">
              {navItems.map((item) => {
                if (item.hasDropdown) {
                  const isOpen = item.dropdownType === 'services' ? isServicesDropdownOpen : isDiscoverDropdownOpen;
                  const dropdownItems = item.dropdownType === 'services' ? servicesItems : discoverItems;
                  const setIsOpen = item.dropdownType === 'services' ? setIsServicesDropdownOpen : setIsDiscoverDropdownOpen;
                  
                  return (
                    <div key={item.name}>
                      <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-full text-left text-gray-800 hover:text-gray-600 px-3 py-2 text-sm sm:text-base font-medium transition-colors duration-200 flex items-center justify-between"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isOpen && (
                        <div className="pl-4 mt-1 space-y-1">
                          {dropdownItems.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsOpen(false);
                              }}
                              className="block text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-normal transition-colors duration-200"
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                
                return item.href.startsWith("/") ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-800 hover:text-gray-600 block px-3 py-2 text-sm sm:text-base font-medium transition-colors duration-200"
                  > 
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-800 hover:text-gray-600 block px-3 py-2 text-sm sm:text-base font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                );
              })}
              <div className="pt-2">
                <button   onClick={() => navigate("/contact")}
                className="w-full bg-transparent text-black px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center space-x-2">
                  <span>Contact Us</span>
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-orange-500 rounded-full flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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