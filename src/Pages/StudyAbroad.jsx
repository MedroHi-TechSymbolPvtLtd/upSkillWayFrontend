import React, { useState } from 'react';
import { Search, CheckCircle, Users, GraduationCap, CreditCard, Home, Calculator, Star, FileText, Building2, Award, TrendingUp, Plane, UserCircle, FileCheck, Wallet, MapPin, HeadphonesIcon, Phone, Send, Plus, X, ChevronRight } from 'lucide-react';
import Study from "../components/Study/Study";
import Studyimg from "../assets/Images/Study.png";
import Testimonial from "../components/home/Testimonials"
import Study1 from "../assets/Images/Study1.png";
import Study2 from "../assets/Images/Study2.png";
import Study3 from "../assets/Images/Study3.png";
import Study4 from "../assets/Images/Study4.png";
import illustration from "../assets/Images/Illustration.png";
import sitting from "../assets/Images/sitting.png";
import sit from "../assets/Images/sittig3.png";


const Main = () => {
  const [isCountryModalOpen, setIsCountryModalOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [isDegreeModalOpen, setIsDegreeModalOpen] = useState(false);
  const [selectedDegree, setSelectedDegree] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [selectedSubject, setSelectedSubject] = useState('All Subjects');
  const [selectedDuration, setSelectedDuration] = useState('All Duration');

  // Demo programs data
  const programsData = [
    {
      id: 1,
      title: 'Master of Business Administration',
      university: 'Harvard Business School, USA',
      location: 'USA',
      subject: 'Business',
      duration: '2 Years',
      type: 'Full-time',
      tuition: '$73,440/year',
      status: 'Open',
      category: 'postgraduate'
    },
    {
      id: 2,
      title: 'Bachelor of Computer Science',
      university: 'MIT, USA',
      location: 'USA',
      subject: 'Computer Science',
      duration: '4 Years',
      type: 'Full-time',
      tuition: '$53,450/year',
      status: 'Open',
      category: 'undergraduate'
    },
    {
      id: 3,
      title: 'Master of Data Science',
      university: 'Stanford University, USA',
      location: 'USA',
      subject: 'Data Science',
      duration: '2 Years',
      type: 'Full-time',
      tuition: '$54,315/year',
      status: 'Open',
      category: 'postgraduate'
    },
    {
      id: 4,
      title: 'Summer Business Program',
      university: 'London Business School, UK',
      location: 'UK',
      subject: 'Business',
      duration: '3 Months',
      type: 'Part-time',
      tuition: '$8,500/program',
      status: 'Open',
      category: 'short-term'
    },
    {
      id: 5,
      title: 'Fulbright Scholarship Program',
      university: 'Various Universities, USA',
      location: 'USA',
      subject: 'Various',
      duration: '2 Years',
      type: 'Full-time',
      tuition: 'Fully Funded',
      status: 'Open',
      category: 'scholarship'
    },
    {
      id: 6,
      title: 'Bachelor of Engineering',
      university: 'University of Cambridge, UK',
      location: 'UK',
      subject: 'Engineering',
      duration: '3 Years',
      type: 'Full-time',
      tuition: '$37,500/year',
      status: 'Open',
      category: 'undergraduate'
    },
    {
      id: 7,
      title: 'Master of Arts in Design',
      university: 'Royal College of Art, UK',
      location: 'UK',
      subject: 'Design',
      duration: '2 Years',
      type: 'Full-time',
      tuition: '$29,000/year',
      status: 'Open',
      category: 'postgraduate'
    },
    {
      id: 8,
      title: 'Intensive Language Program',
      university: 'Sorbonne University, France',
      location: 'France',
      subject: 'Languages',
      duration: '6 Months',
      type: 'Part-time',
      tuition: '$4,200/program',
      status: 'Open',
      category: 'short-term'
    },
    {
      id: 9,
      title: 'Chevening Scholarship',
      university: 'Various Universities, UK',
      location: 'UK',
      subject: 'Various',
      duration: '1 Year',
      type: 'Full-time',
      tuition: 'Fully Funded',
      status: 'Open',
      category: 'scholarship'
    }
  ];

  // Filter programs based on selected filters
  const filteredPrograms = programsData.filter(program => {
    const matchesCategory = selectedFilter === 'all' || selectedFilter === program.category;
    const matchesLocation = selectedLocation === 'All Locations' || program.location === selectedLocation;
    const matchesSubject = selectedSubject === 'All Subjects' || program.subject === selectedSubject;
    const matchesDuration = selectedDuration === 'All Duration' || program.duration === selectedDuration;
    
    return matchesCategory && matchesLocation && matchesSubject && matchesDuration;
  });

  // Get unique locations, subjects, and durations for dropdowns
  const locations = ['All Locations', ...new Set(programsData.map(p => p.location))];
  const subjects = ['All Subjects', ...new Set(programsData.map(p => p.subject))];
  const durations = ['All Duration', ...new Set(programsData.map(p => p.duration))];

  const countries = [
    {
      name: 'United Kingdom',
      flag: '🇬🇧',
      buttonText: 'Explore UK Programs',
      buttonColor: 'bg-yellow-400 hover:bg-yellow-500'
    },
    {
      name: 'United States',
      flag: '🇺🇸',
      buttonText: 'Find US Universities',
      buttonColor: 'bg-yellow-400 hover:bg-yellow-500'
    },
    {
      name: 'Canada',
      flag: '🇦🇪',
      buttonText: 'Explore Canadian Universities',
      buttonColor: 'bg-yellow-400 hover:bg-yellow-500'
    },
    {
      name: 'Europe',
      flag: '🇪🇺',
      buttonText: 'Discover European Programs',
      buttonColor: 'bg-yellow-400 hover:bg-yellow-500'
    },
    {
      name: 'Australia',
      flag: '🇦🇺',
      buttonText: 'Explore Australian Courses',
      buttonColor: 'bg-yellow-400 hover:bg-yellow-500'
    },
    {
      name: 'Australia',
      flag: '🇦🇺',
      buttonText: 'Explore Australian Courses',
      buttonColor: 'bg-yellow-400 hover:bg-yellow-500'
    },
    {
      name: 'New Zealand',
      flag: '🇳🇿',
      buttonText: 'View New Zeland Programs',
      buttonColor: 'bg-yellow-400 hover:bg-yellow-500'
    }
  ];

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsCountryModalOpen(false);
    // You can add navigation or other logic here
    console.log('Selected country:', country);
  };

  const handleDegreeSelect = (degree) => {
    setSelectedDegree(degree);
    setIsDegreeModalOpen(false);
    console.log('Selected degree:', degree);
  };

  

  

  return (
    <main className="min-h-screen bg-white">
      {/* Country Selection Modal */}
      {isCountryModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto relative">
            {/* Close button */}
            <button
              onClick={() => setIsCountryModalOpen(false)}
              className="absolute top-4 left-4 z-10 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>

            {/* Modal Header */}
            <div className="text-center pt-16 pb-8 px-6">
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                Choose Your Study Destination
              </h2>
            </div>

            {/* Countries Grid */}
            <div className="px-6 pb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {countries.map((country, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
                  >
                    {/* Flag Circle */}
                    <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center mb-4 text-5xl">
                      {country.flag}
                    </div>

                    {/* Country Name */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {country.name}
                    </h3>

                    {/* Action Button */}
                    <button
                      onClick={() => handleCountrySelect(country.name)}
                      className={`w-full ${country.buttonColor} text-black font-semibold py-3 px-6 rounded-lg transition-colors duration-300`}
                    >
                      {country.buttonText}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Degree Selection Modal */}
      {isDegreeModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
            {/* Close button */}
            <button
              onClick={() => setIsDegreeModalOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Header */}
            <div className="text-center pt-16 pb-12 px-6">
              <h2 className="text-4xl font-bold text-[#8B7EC8] mb-8">
                Which degree do you wish to pursue?
              </h2>

              {/* Degree Options */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12">
                {/* Bachelors */}
                <div 
                  onClick={() => handleDegreeSelect('Bachelors')}
                  className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#FF6B9D] to-[#C147E9] flex items-center justify-center mb-4 shadow-lg">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#4FC3F7] to-[#29B6F6] flex items-center justify-center">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Bachelors</h3>
                </div>

                {/* Masters */}
                <div 
                  onClick={() => handleDegreeSelect('Masters')}
                  className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#FF6B9D] to-[#C147E9] flex items-center justify-center mb-4 shadow-lg">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#4FC3F7] to-[#29B6F6] flex items-center justify-center">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Masters</h3>
                </div>

                {/* MBA */}
                <div 
                  onClick={() => handleDegreeSelect('MBA')}
                  className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#FF6B9D] to-[#C147E9] flex items-center justify-center mb-4 shadow-lg">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#4FC3F7] to-[#29B6F6] flex items-center justify-center">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">MBA</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative bg-white py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto relative">
          {/* Shadow - positioned behind image */}
          <div className="absolute left-[862.31px] top-[186.09px] w-[559.32px] h-[707.86px] bg-gradient-to-l from-[rgba(253,177,31,0.6)] to-[rgba(93,56,222,0.6)] opacity-60 blur-[58.1664px] hidden lg:block"></div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start mt-16 sm:mt-18 md:mt-20">
            <div className="space-y-6 sm:space-y-8">
              {/* Heading */}
              <div className="mb-6 sm:mb-8 md:mb-10">
                <h1 className="font-['Plus_Jakarta_Sans'] text-[48px] leading-[66px] font-extrabold text-[#18181B]">
                  Transform Your Future:{" "}
                    <span className="text-[#FDB11F]">Study Abroad</span> With
                  <br /> Confidence
                </h1>
              </div>

              {/* Description */}
              <p className="font-['Plus_Jakarta_Sans'] text-base leading-[26px] font-normal text-[#52525B]">
                Discover world-class education opportunities and unlock your potential with our comprehensive study abroad programs.
              </p>
              
              {/* Form */}
              <div className="bg-white flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 border border-[#A1A1AA] rounded-lg p-2 sm:p-3">
                <div className="bg-white rounded-lg px-3 sm:px-4 py-2 sm:py-3 shadow-sm flex-1">
                  <button
                    onClick={() => setIsCountryModalOpen(true)}
                    className="bg-transparent border-none text-black font-medium text-sm sm:text-base w-full text-left flex items-center justify-between"
                  >
                    <span>{selectedCountry || 'Select Country'}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="bg-white rounded-lg px-3 sm:px-4 py-2 sm:py-3 shadow-sm flex-1">
                  <button
                    onClick={() => setIsDegreeModalOpen(true)}
                    className="bg-transparent border-none text-black font-medium text-sm sm:text-base w-full text-left flex items-center justify-between"
                  >
                    <span>{selectedDegree || 'Select Program'}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                <button className="text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold bg-gradient-to-r from-[#FDB11F] to-[#5D38DE] text-sm sm:text-base w-full sm:w-auto">
                  Search Programs
                </button>
              </div>

              {/* Stats Cards */}
              <div className="relative pt-4 min-h-[173px]">
                {/* Card 1 - 50+ Countries */}
                <div className="absolute left-0 top-0 w-[268.27px] h-[79px] bg-white border border-[#E4E4E7] rounded-[20px] shadow-[drop-shadow(-2px_5px_100px_rgba(0,0,0,0.23))] p-4 flex items-center gap-3">
                  <div className="w-[21px] h-[19px] flex items-center justify-center flex-shrink-0">
                    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-['Plus_Jakarta_Sans'] text-xl leading-7 font-semibold text-[#18181B] tracking-[-0.2px]">
                      50+ Countries
                    </div>
                    <div className="font-['Plus_Jakarta_Sans'] text-xl leading-7 font-normal text-black/40 tracking-[-0.2px]">
                      Global opportunities
                    </div>
                  </div>
                </div>

                {/* Card 2 - 10,000+ Students */}
                <div className="absolute left-[306px] top-[-5px] w-[268px] h-[83.22px] bg-white border border-[#E4E4E7] rounded-[20px] shadow-[drop-shadow(-2px_5px_100px_rgba(0,0,0,0.23))] p-4 flex items-center gap-3">
                  <div className="w-[19px] h-[19px] flex items-center justify-center flex-shrink-0">
                    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-['Plus_Jakarta_Sans'] text-xl leading-7 font-semibold text-[#18181B] tracking-[-0.2px]">
                      10,000+ Students
                    </div>
                    <div className="font-['Plus_Jakarta_Sans'] text-xl leading-7 font-normal text-black/40 tracking-[-0.2px]">
                      Success stories
                    </div>
                  </div>
                </div>

                {/* Card 3 - 1000+ Universities */}
                <div className="absolute left-[156px] top-[90px] w-[268px] h-[83.22px] bg-white border border-[#E4E4E7] rounded-[20px] shadow-[drop-shadow(-2px_5px_100px_rgba(0,0,0,0.23))] p-4 flex items-center gap-3">
                  <div className="w-[21px] h-[20px] flex items-center justify-center flex-shrink-0">
                    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-['Plus_Jakarta_Sans'] text-xl leading-7 font-semibold text-[#18181B] tracking-[-0.2px]">
                      1000+ Universities
                    </div>
                    <div className="font-['Plus_Jakarta_Sans'] text-xl leading-7 font-normal text-black/40 tracking-[-0.2px]">
                      Partner institutions
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] lg:w-[475px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[607px]">
                {/* Image container with black background and white border */}
                <div className="absolute left-0 top-0 w-full h-full bg-[#0B0B0B] border border-white rounded-[15px] overflow-hidden">
                  <img 
                    src={Studyimg}
                    alt="Group of diverse students"
                    className="w-full h-full object-cover"
                    style={{ transform: 'matrix(-1, 0, 0, 1, 0, 0)' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="font-['Plus_Jakarta_Sans'] text-[48px] leading-[66px] font-extrabold text-[#18181B] -ml-[670px]">
          Popular Study <span className="text-[#FDB11F]">Destination</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-4 sm:mt-6 -ml-[730px]">
            Explore world-class education opportunities across the globel.            </p>
          </div>
        </div>
      </section>
      <Study className="-mt-9"/>

      {/* Find Your Perfect Program */}
      <section className="py-12 sm:py-10 md:py-20 px-4 bg-white relative">
        <div className="max-w-[1280px] mx-auto relative">
          {/* Decorative vectors */}

          {/* Heading Section */}
          <div className="mb-8">
          <h2 className="font-['Plus_Jakarta_Sans'] text-[48px] leading-[66px] font-extrabold text-[#18181B]">
          Find <span className='text-[#FDB11F]'>Your Perfect </span> Program
            </h2>
            <p className="font-['Plus_Jakarta_Sans'] text-base leading-[26px] font-normal text-[#52525B]">
            Explore world-class education opportunities across the globe.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 w-full max-w-[1216px] mb-8">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`h-[48px] px-6 rounded-full flex items-center justify-center gap-2 whitespace-nowrap transition-all ${
                selectedFilter === 'all'
                  ? 'bg-[#FBB03B] text-white shadow-[0px_4px_6px_rgba(0,0,0,0.1),0px_10px_15px_rgba(0,0,0,0.1)]'
                  : 'bg-[#F3F4F6] text-[#374151] hover:bg-[#E5E7EB]'
              }`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className={selectedFilter === 'all' ? 'stroke-white' : 'stroke-[#374151]'}>
                <path d="M3 3h18v18H3z" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 9h6v6H9z" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-['Inter'] text-base leading-[19px] font-semibold">All Courses</span>
            </button>

            <button
              onClick={() => setSelectedFilter('undergraduate')}
              className={`h-[48px] px-6 rounded-full flex items-center justify-center gap-2 whitespace-nowrap transition-all ${
                selectedFilter === 'undergraduate'
                  ? 'bg-[#FBB03B] text-white shadow-[0px_4px_6px_rgba(0,0,0,0.1),0px_10px_15px_rgba(0,0,0,0.1)]'
                  : 'bg-[#F3F4F6] text-[#374151] hover:bg-[#E5E7EB]'
              }`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className={selectedFilter === 'undergraduate' ? 'stroke-white' : 'stroke-[#374151]'}>
                <path d="M8.33 3L8.33 9" strokeWidth="1.67" strokeLinecap="round"/>
                <path d="M16.67 3L16.67 9" strokeWidth="1.67" strokeLinecap="round"/>
                <path d="M12.5 9L12.5 15" strokeWidth="1.67" strokeLinecap="round"/>
              </svg>
              <span className="font-['Inter'] text-base leading-[19px] font-semibold">Undergraduate</span>
            </button>

            <button
              onClick={() => setSelectedFilter('postgraduate')}
              className={`h-[48px] px-6 rounded-full flex items-center justify-center gap-2 whitespace-nowrap transition-all ${
                selectedFilter === 'postgraduate'
                  ? 'bg-[#FBB03B] text-white shadow-[0px_4px_6px_rgba(0,0,0,0.1),0px_10px_15px_rgba(0,0,0,0.1)]'
                  : 'bg-[#F3F4F6] text-[#374151] hover:bg-[#E5E7EB]'
              }`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className={selectedFilter === 'postgraduate' ? 'stroke-white' : 'stroke-[#374151]'}>
                <path d="M8.34 5L8.34 10" strokeWidth="1.67" strokeLinecap="round"/>
                <path d="M15.67 5L15.67 10" strokeWidth="1.67" strokeLinecap="round"/>
                <path d="M12 10L12 15" strokeWidth="1.67" strokeLinecap="round"/>
                <path d="M8.5 15L15.5 15" strokeWidth="1.67" strokeLinecap="round"/>
              </svg>
              <span className="font-['Inter'] text-base leading-[19px] font-semibold">Postgraduate</span>
            </button>

            <button
              onClick={() => setSelectedFilter('short-term')}
              className={`h-[48px] px-6 rounded-full flex items-center justify-center gap-2 whitespace-nowrap transition-all ${
                selectedFilter === 'short-term'
                  ? 'bg-[#FBB03B] text-white shadow-[0px_4px_6px_rgba(0,0,0,0.1),0px_10px_15px_rgba(0,0,0,0.1)]'
                  : 'bg-[#F3F4F6] text-[#374151] hover:bg-[#E5E7EB]'
              }`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className={selectedFilter === 'short-term' ? 'stroke-white' : 'stroke-[#374151]'}>
                <path d="M6 2L6 8" strokeWidth="1.67" strokeLinecap="round"/>
                <path d="M12 2L12 8" strokeWidth="1.67" strokeLinecap="round"/>
                <path d="M18 2L18 8" strokeWidth="1.67" strokeLinecap="round"/>
                <path d="M8 13L16 13" strokeWidth="1.67" strokeLinecap="round"/>
              </svg>
              <span className="font-['Inter'] text-base leading-[19px] font-semibold">Short-Term</span>
            </button>

            <button
              onClick={() => setSelectedFilter('scholarship')}
              className={`h-[48px] px-6 rounded-full flex items-center justify-center gap-2 whitespace-nowrap transition-all ${
                selectedFilter === 'scholarship'
                  ? 'bg-[#FBB03B] text-white shadow-[0px_4px_6px_rgba(0,0,0,0.1),0px_10px_15px_rgba(0,0,0,0.1)]'
                  : 'bg-[#F3F4F6] text-[#374151] hover:bg-[#E5E7EB]'
              }`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className={selectedFilter === 'scholarship' ? 'stroke-white' : 'stroke-[#374151]'}>
                <path d="M6 2L18 2" strokeWidth="1.67" strokeLinecap="round"/>
                <path d="M12 10L12 18" strokeWidth="1.67" strokeLinecap="round"/>
              </svg>
              <span className="font-['Inter'] text-base leading-[19px] font-semibold">Scholarship Programs</span>
            </button>
          </div>

          {/* Dropdown Selects */}
          <div className="relative w-full max-w-[1216px] h-[48px] mb-8">
            <select 
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="absolute left-0 top-0 w-[394.66px] h-[48px] bg-white border border-[#D1D5DB] rounded-lg pl-[21px] pr-10 font-['Plus_Jakarta_Sans'] text-base leading-5 font-medium text-[#4B5563] focus:outline-none focus:ring-2 focus:ring-[#FBB03B] cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%234B5563%22%20d%22M6%209L1%204h10z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_12px_center]"
            >
              {locations.map((location, index) => (
                <option key={index} value={location}>{location}</option>
              ))}
            </select>

            <select 
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="absolute left-[410.66px] top-0 w-[394.67px] h-[48px] bg-white border border-[#D1D5DB] rounded-lg pl-[13.34px] pr-10 font-['Plus_Jakarta_Sans'] text-base leading-5 font-medium text-[#4B5563] focus:outline-none focus:ring-2 focus:ring-[#FBB03B] cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%234B5563%22%20d%22M6%209L1%204h10z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_12px_center]"
            >
              {subjects.map((subject, index) => (
                <option key={index} value={subject}>{subject}</option>
              ))}
            </select>

            <select 
              value={selectedDuration}
              onChange={(e) => setSelectedDuration(e.target.value)}
              className="absolute left-[821.33px] top-0 w-[394.66px] h-[48px] bg-white border border-[#D1D5DB] rounded-lg pl-[14.67px] pr-10 font-['Plus_Jakarta_Sans'] text-base leading-5 font-medium text-[#4B5563] focus:outline-none focus:ring-2 focus:ring-[#FBB03B] cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%234B5563%22%20d%22M6%209L1%204h10z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_12px_center]"
            >
              {durations.map((duration, index) => (
                <option key={index} value={duration}>{duration}</option>
              ))}
            </select>
          </div>

          {/* Program Cards Grid */}
          <div className="relative w-full max-w-[1216px] min-h-[554px] mb-8">
            {filteredPrograms.length > 0 ? (
              filteredPrograms.slice(0, 6).map((program, index) => {
                // Calculate position for each card
                const row = Math.floor(index / 3);
                const col = index % 3;
                const leftPositions = [0, 413.33, 826.66];
                const topPositions = [0, 289];
                const cardWidths = ['389.33px', '389.33px', '389.34px'];
                
                return (
                  <div
                    key={program.id}
                    className="absolute h-[265px] bg-white shadow-[0px_4px_6px_rgba(0,0,0,0.1),0px_10px_15px_rgba(0,0,0,0.1)] rounded-xl p-6 cursor-pointer hover:shadow-xl transition-shadow"
                    style={{
                      left: `${leftPositions[col]}px`,
                      top: `${topPositions[row]}px`,
                      width: cardWidths[col]
                    }}
                  >
                    <div className="relative w-full h-[48px] mb-4">
                      <div className="absolute left-0 top-0 w-12 h-12 bg-[rgba(251,176,59,0.1)] rounded-lg flex items-center justify-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FBB03B" strokeWidth="2">
                          <path d="M8.34 5L8.34 10" strokeLinecap="round"/>
                          <path d="M15.67 5L15.67 10" strokeLinecap="round"/>
                          <path d="M12 10L12 15" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <span className="absolute right-0 top-0 w-[55.16px] h-6 bg-[#DCFCE7] rounded-full flex items-center justify-center">
                        <span className="font-['Inter'] text-xs leading-[15px] font-semibold text-[#15803D]">{program.status}</span>
                      </span>
                    </div>
                    <h3 className="font-['Inter'] text-xl leading-6 font-bold text-[#111827] mb-2 line-clamp-2">{program.title}</h3>
                    <p className="font-['Inter'] text-sm leading-[17px] font-normal text-[#4B5563] mb-4 line-clamp-1">{program.university}</p>
                    <div className="flex gap-2 mb-4 flex-wrap">
                      <span className="px-3 py-1 bg-[#F3F4F6] rounded-full font-['Inter'] text-xs leading-[15px] font-normal text-[#374151]">{program.duration}</span>
                      <span className="px-3 py-1 bg-[#F3F4F6] rounded-full font-['Inter'] text-xs leading-[15px] font-normal text-[#374151]">{program.type}</span>
                    </div>
                    <div className="flex justify-between items-end">
                      <span className="font-['Inter'] text-sm leading-[14px] font-normal text-[#6B7280]">Tuition</span>
                      <span className="font-['Inter'] text-base leading-4 font-bold text-[#FBB03B]">{program.tuition}</span>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <p className="font-['Inter'] text-lg text-[#6B7280]">No programs found matching your filters.</p>
                <button
                  onClick={() => {
                    setSelectedLocation('All Locations');
                    setSelectedSubject('All Subjects');
                    setSelectedDuration('All Duration');
                  }}
                  className="mt-4 px-6 py-2 bg-[#FBB03B] text-white rounded-lg font-['Inter'] font-semibold hover:bg-[#E5A21C] transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>

          {/* View All Programs Button */}
          <div className="relative w-full max-w-[1216px] h-[48px]">
            <button className="absolute left-[505.39px] top-0 w-[205.22px] h-[48px] bg-[#1A1A1A] rounded-lg flex items-center justify-center font-['Inter'] text-base leading-[19px] font-semibold text-white hover:bg-[#2A2A2A] transition-colors">
              View All Programs
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Upskillway */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="inline-block mb-4 sm:mb-6">
            <h2 className="font-['Plus_Jakarta_Sans'] text-[48px] leading-[66px] font-extrabold text-[#18181B] -ml-[670px]">
            Why Choose <span className="text-[#FDB11F]">Upskillway</span>
              </h2>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-2 sm:mt-1 -ml-[730px] mb-[-10px]">
              Your trusted partner for a seamless study abroad journey
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center lg:justify-items-start">
            {/* Card 1: Expert Academic Counseling */}
            <div 
              className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col p-6 w-full max-w-[384px] lg:w-[384px]"
              style={{
                height: '254px',
                borderRadius: '12px',
                opacity: 1
              }}
            >
              <div className="w-16 h-16 bg-[#FDB11F] rounded-lg flex items-center justify-center mb-4">
                <UserCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Expert Academic Counseling
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed flex-1">
                Personalized guidance from experienced counselors to match you with the perfect program and university.
              </p>
            </div>

            {/* Card 2: Visa & Documentation Support */}
            <div 
              className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col p-6 w-full max-w-[384px] lg:w-[384px]"
              style={{
                height: '254px',
                borderRadius: '12px',
                opacity: 1
              }}
            >
              <div className="w-16 h-16 bg-[#FDB11F] rounded-lg flex items-center justify-center mb-4">
                <FileCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Visa & Documentation Support
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed flex-1">
                End-to-end assistance with visa applications, documentation, and interview preparation for 95% success rate.
              </p>
            </div>

            {/* Card 3: Accommodation Assistance */}
            <div 
              className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col p-6 w-full max-w-[384px] lg:w-[384px]"
              style={{
                height: '254px',
                borderRadius: '12px',
                opacity: 1
              }}
            >
              <div className="w-16 h-16 bg-[#FDB11F] rounded-lg flex items-center justify-center mb-4">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Accommodation Assistance
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed flex-1">
                Help finding safe and affordable housing near your university, from dorms to private apartments.
              </p>
            </div>

            {/* Card 4: Financial Planning & Scholarships */}
            <div 
              className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col p-6 w-full max-w-[384px] lg:w-[384px]"
              style={{
                height: '254px',
                borderRadius: '12px',
                opacity: 1
              }}
            >
              <div className="w-16 h-16 bg-[#FDB11F] rounded-lg flex items-center justify-center mb-4">
                <Wallet className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Financial Planning & Scholarships
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed flex-1">
                Guidance on education loans, scholarships, and financial planning to make your dreams affordable.
              </p>
            </div>

            {/* Card 5: End-to-End Guidance */}
            <div 
              className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col p-6 w-full max-w-[384px] lg:w-[384px]"
              style={{
                height: '254px',
                borderRadius: '12px',
                opacity: 1
              }}
            >
              <div className="w-16 h-16 bg-[#FDB11F] rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                End-to-End Guidance
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed flex-1">
                Complete support from university selection to landing abroad, including pre-departure orientations.
              </p>
            </div>

            {/* Card 6: 24/7 Support */}
            <div 
              className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col p-6 w-full max-w-[384px] lg:w-[384px]"
              style={{
                height: '254px',
                borderRadius: '12px',
                opacity: 1
              }}
            >
              <div className="w-16 h-16 bg-[#FDB11F] rounded-lg flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                24/7 Support
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed flex-1">
                Round-the-clock assistance whenever you need help, ensuring a smooth and stress-free experience throughout your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter / Free Counseling Banner */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-white relative">
        <div className="max-w-[1519px] mx-auto relative">
          {/* Main Container Frame */}
          <div className="relative w-full max-w-[1519px] min-h-[366px] bg-[#5D38DE] rounded-[24px] overflow-hidden">
            {/* Decorative Vectors */}
            <div className="absolute w-[323px] h-[101.62px] left-[879px] top-[297px] bg-[#6843E7] rounded hidden xl:block"></div>
            <div className="absolute w-[323px] h-[101.62px] left-[-107.87px] top-[-120.46px] bg-[#6843E7] rounded rotate-[120deg] hidden xl:block"></div>
            <div className="absolute w-[323px] h-[101.62px] left-[980px] top-[-64.49px] bg-[#6843E7] rounded rotate-[-150deg] hidden xl:block"></div>

            {/* Content Section */}
            <div className="relative z-10 px-4 sm:px-8 md:px-[80px] py-8 sm:py-12 md:py-[80px]">
              <div className="max-w-[699px]">
                {/* Heading */}
                <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl md:text-[48px] leading-tight sm:leading-[36px] font-bold text-white mb-4">
                  Ready to Start Your Journey?
                </h2>

                {/* Description */}
                <p className="font-['Inter'] text-base sm:text-lg md:text-xl leading-5 font-normal text-[rgba(255,255,255,0.9)] mb-6 sm:mb-8 max-w-[427px]">
                  Book a free counseling session with our experts today
                </p>

                {/* Button */}
                <button className="w-full sm:w-[308px] h-[54px] bg-white rounded-[80px] flex items-center justify-center font-['Inter'] text-base sm:text-lg leading-[22px] font-bold text-[#5D38DE] hover:bg-gray-100 transition-colors">
                  Schedule Free Consultation
                </button>
              </div>
            </div>

            {/* Image - positioned on the right side */}
            <div className="absolute right-0 top-0 w-[40%] sm:w-[45%] md:w-[50%] lg:w-[600px] h-full max-h-[366px] overflow-hidden opacity-80 lg:opacity-100">
              <img 
                src={sitting}
                alt="Counseling session illustration"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>  
      </section>

      {/* Student Testimonials */}

      {/* How It Works */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              How It Works
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              Your journey to studying abroad in 5 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {/* Step 1: Free Counseling Call */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative mb-4 flex justify-center">
                <div className="w-16 h-16 bg-[#FF9500] rounded-full flex items-center justify-center relative">
                  <Phone className="w-8 h-8 text-white" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 text-center">
                Free Counseling Call
              </h3>
              <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">
                Schedule a consultation with our expert counselors to discuss your goals and preferences.
              </p>
            </div>

            {/* Step 2: Profile Evaluation */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative mb-4 flex justify-center">
                <div className="w-16 h-16 bg-[#FF9500] rounded-full flex items-center justify-center relative">
                  <FileCheck className="w-8 h-8 text-white" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 text-center">
                Profile Evaluation
              </h3>
              <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">
                Comprehensive assessment of your academic background, test scores, and career aspirations.
              </p>
            </div>

            {/* Step 3: University Shortlisting */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative mb-4 flex justify-center">
                <div className="w-16 h-16 bg-[#FF9500] rounded-full flex items-center justify-center relative">
                  <div className="relative">
                    <Building2 className="w-7 h-7 text-white" />
                    <GraduationCap className="w-4 h-4 text-white absolute -top-2 left-1/2 transform -translate-x-1/2" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 text-center">
                University Shortlisting
              </h3>
              <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">
                Personalized university recommendations based on your profile and preferences.
              </p>
            </div>

            {/* Step 4: Application & Visa Assistance */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative mb-4 flex justify-center">
                <div className="w-16 h-16 bg-[#FF9500] rounded-full flex items-center justify-center relative">
                  <FileText className="w-8 h-8 text-white" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">4</span>
                  </div>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 text-center">
                Application & Visa Assistance
              </h3>
              <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">
                Complete support with applications, essays, documentation, and visa process.
              </p>
            </div>

            {/* Step 5: Pre-Departure Support */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative mb-4 flex justify-center">
                <div className="w-16 h-16 bg-[#FF9500] rounded-full flex items-center justify-center relative">
                  <Send className="w-8 h-8 text-white" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">5</span>
                  </div>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 text-center">
                Pre-Departure Support
              </h3>
              <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">
                Orientation, accommodation, travel guidance, and ongoing support.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-900 mb-6 sm:mb-8 font-semibold">
              Ready to take the first step?
            </p>
            <button className="bg-[#FF9500] text-white px-8 sm:px-12 md:px-16 py-3 sm:py-4 md:py-5 rounded-lg font-bold text-base sm:text-lg md:text-xl hover:bg-orange-600 transition-colors duration-300 shadow-lg hover:shadow-xl">
              Start Your Journey Today
            </button>
          </div>
        </div>
      </section>

      <Testimonial />

      {/* Our Services */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our <span className="text-[#FDB11F]">Services</span>
            </h2>
          </div>

          <div className="relative mx-auto w-full max-w-6xl">
            {/* Grid lines background - hidden on mobile, visible on larger screens */}
            <div className="hidden lg:block pointer-events-none select-none absolute inset-0 opacity-15">
              <div className="w-full h-full" style={{
                backgroundImage: 'linear-gradient(#111827 0 0), linear-gradient(#111827 0 0), linear-gradient(#111827 0 0)',
                backgroundPosition: '33.333% 0, 66.666% 0, 0 50%',
                backgroundSize: '1px 100%, 1px 100%, 100% 1px',
                backgroundRepeat: 'no-repeat'
              }} />
            </div>

            {/* Mobile Layout - 2 columns */}
            <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {/* Academic Counseling */}
              <div className="flex flex-col items-center justify-center text-center p-4 sm:p-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-gray-900" strokeWidth={2} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Academic Counseling</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Expert guidance on program selection, university applications, and academic requirements.
                </p>
              </div>

              {/* Visa Support */}
              <div className="flex flex-col items-center justify-center text-center p-4 sm:p-6">
                <div className="mb-2">
                  <span className="text-xs sm:text-sm font-bold text-gray-900">VISA</span>
                </div>
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-gray-900" strokeWidth={2} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Visa Support</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Comprehensive assistance with student visa applications and documentation.
                </p>
              </div>

              {/* Housing Assistance */}
              <div className="flex flex-col items-center justify-center text-center p-4 sm:p-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Building2 className="w-8 h-8 sm:w-10 sm:h-10 text-gray-900" strokeWidth={2} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Housing Assistance</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Help finding suitable accommodation options near your chosen institution.
                </p>
              </div>

              {/* Scholarship Guidance */}
              <div className="flex flex-col items-center justify-center text-center p-4 sm:p-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Award className="w-8 h-8 sm:w-10 sm:h-10 text-gray-900" strokeWidth={2} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Scholarship Guidance</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Access to exclusive scholarship opportunities and application support.
                </p>
              </div>

              {/* Financial Planning */}
              <div className="flex flex-col items-center justify-center text-center p-4 sm:p-6 sm:col-span-2">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-gray-900" strokeWidth={2} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Financial Planning</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Guidance on budgeting, scholarships, and funding opportunities.
                </p>
              </div>

              {/* Pre-Departure */}
              <div className="flex flex-col items-center justify-center text-center p-4 sm:p-6 sm:col-span-2">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Plane className="w-8 h-8 sm:w-10 sm:h-10 text-gray-900" strokeWidth={2} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Pre-Departure</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Complete support to prepare you for life abroad and ensure a smooth transition.
                </p>
              </div>
            </div>

            {/* Desktop Layout - 2x3 Grid */}
            <div className="hidden lg:grid grid-cols-3 grid-rows-2 gap-0">
              {/* Row 1 - Academic Counseling */}
              <div className="flex flex-col items-center justify-center text-center p-6 border-r border-b border-gray-300">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="w-10 h-10 text-gray-900" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Academic Counseling</h3>
                <p className="text-gray-600">
                  Expert guidance on program selection, university applications, and academic requirements.
                </p>
              </div>

              {/* Row 1 - Visa Support */}
              <div className="flex flex-col items-center justify-center text-center p-6 border-r border-b border-gray-300">
                <div className="mb-2">
                  <span className="text-sm font-bold text-gray-900">VISA</span>
                </div>
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-10 h-10 text-gray-900" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Visa Support</h3>
                <p className="text-gray-600">
                  Comprehensive assistance with student visa applications and documentation.
                </p>
              </div>

              {/* Row 1 - Housing Assistance */}
              <div className="flex flex-col items-center justify-center text-center p-6 border-b border-gray-300">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building2 className="w-10 h-10 text-gray-900" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Housing Assistance</h3>
                <p className="text-gray-600">
                  Help finding suitable accommodation options near your chosen institution.
                </p>
              </div>

              {/* Row 2 - Scholarship Guidance */}
              <div className="flex flex-col items-center justify-center text-center p-6 border-r border-gray-300">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-10 h-10 text-gray-900" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Scholarship Guidance</h3>
                <p className="text-gray-600">
                  Access to exclusive scholarship opportunities and application support.
                </p>
              </div>

              {/* Row 2 - Financial Planning */}
              <div className="flex flex-col items-center justify-center text-center p-6 border-r border-gray-300">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-10 h-10 text-gray-900" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Financial Planning</h3>
                <p className="text-gray-600">
                  Guidance on budgeting, scholarships, and funding opportunities.
                </p>
              </div>

              {/* Row 2 - Pre-Departure */}
              <div className="flex flex-col items-center justify-center text-center p-6">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Plane className="w-10 h-10 text-gray-900" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Pre-Departure</h3>
                <p className="text-gray-600">
                  Complete support to prepare you for life abroad and ensure a smooth transition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Book Free Counseling Session */}
      <BookCounselingSection />
    </main>
  );
};

// FAQ Section Component
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(3); // Question 04 is open by default

  const faqs = [
    {
      id: 1,
      question: "How do I start my study abroad journey?",
      answer: "Begin by scheduling a free counseling session with our expert counselors. They will help you understand your options, discuss your academic goals, and guide you through the entire process from university selection to visa application."
    },
    {
      id: 2,
      question: "What documents are required for university applications?",
      answer: "Typically, you'll need your academic transcripts, standardized test scores (IELTS/TOEFL, SAT/GRE/GMAT depending on the program), letters of recommendation, statement of purpose, resume/CV, and passport copies. Our team will provide a customized checklist based on your chosen universities."
    },
    {
      id: 3,
      question: "How long does the visa application process take?",
      answer: "Visa processing times vary by country, typically ranging from 4-12 weeks. We recommend starting your visa application process as soon as you receive your acceptance letter. Our visa specialists will guide you through documentation, interview preparation, and timeline management to ensure a smooth process."
    },
    {
      id: 4,
      question: "How do I search for universities that match my academic profile and preferences?",
      answer: "Use the search bar on the homepage to enter keywords related to your desired program, preferred country, or university name. You can also use the advanced search filters to narrow down results by degree level, field of study, tuition range, and location to find the perfect university match for your academic goals."
    },
    {
      id: 5,
      question: "What financial support options are available for studying abroad?",
      answer: "We provide comprehensive financial planning services including scholarship guidance, education loan assistance, and budgeting support. We help you explore merit-based scholarships, need-based aid, country-specific funding, and university grants to make your study abroad dream financially feasible."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            <span className="text-[#FF9500]">Frequently</span> asked Questions
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {/* Left Column */}
          <div className="space-y-4 sm:space-y-6">
            {faqs.slice(0, 3).map((faq, index) => (
              <div
                key={faq.id}
                className={`bg-white rounded-lg border ${
                  openIndex === index
                    ? 'border-yellow-200 shadow-md'
                    : 'border-gray-200'
                } p-4 sm:p-6 transition-all duration-300`}
              >
                <div
                  className="flex items-start justify-between cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm sm:text-base font-semibold text-gray-700">
                        {String(faq.id).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 flex-1 pt-1">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    {openIndex === index ? (
                      <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
                    ) : (
                      <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                    )}
                  </div>
                </div>
                {openIndex === index && (
                  <div className="mt-4 ml-12 sm:ml-14">
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4 sm:space-y-6">
            {faqs.slice(3).map((faq, index) => {
              const actualIndex = index + 3;
              return (
                <div
                  key={faq.id}
                  className={`bg-white rounded-lg border ${
                    openIndex === actualIndex
                      ? 'border-yellow-200 shadow-md'
                      : 'border-gray-200'
                  } p-4 sm:p-6 transition-all duration-300`}
                >
                  <div
                    className="flex items-start justify-between cursor-pointer"
                    onClick={() => toggleFAQ(actualIndex)}
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-sm sm:text-base font-semibold text-gray-700">
                          {String(faq.id).padStart(2, '0')}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 flex-1 pt-1">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      {openIndex === actualIndex ? (
                        <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
                      ) : (
                        <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                      )}
                    </div>
                  </div>
                  {openIndex === actualIndex && (
                    <div className="mt-4 ml-12 sm:ml-14">
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-[#FF9500] to-[#FFB84D] text-white px-8 sm:px-12 md:px-16 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg md:text-xl hover:opacity-90 transition-opacity duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2">
            View More
            <span className="text-xl">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

// Book Counseling Session Component
const BookCounselingSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    courseLevel: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you soon.');
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      country: '',
      courseLevel: '',
      message: ''
    });
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Book Your <span className="relative inline-block">
              <span className="text-[#FF9500] relative z-10">Free</span>
              <span className="absolute bottom-0 left-0 right-0 h-3 bg-[#FF9500] opacity-20 -rotate-1"></span>
            </span> Counseling Session
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Take the first step towards your dream of studying abroad. Our experts are here to guide you.
          </p>
        </div>

        {/* Form and Illustration */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Form Section */}
          <div className="bg-white">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {/* Full Name */}
                <div className="sm:col-span-1">
                  <label htmlFor="fullName" className="block text-sm font-semibold text-gray-900 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9500] focus:border-transparent text-gray-900 placeholder-gray-400"
                  />
                </div>

                {/* Email Address */}
                <div className="sm:col-span-1">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9500] focus:border-transparent text-gray-900 placeholder-gray-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {/* Phone Number */}
                <div className="sm:col-span-1">
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9500] focus:border-transparent text-gray-900 placeholder-gray-400"
                  />
                </div>

                {/* Country of Interest */}
                <div className="sm:col-span-1">
                  <label htmlFor="country" className="block text-sm font-semibold text-gray-900 mb-2">
                    Country of Interest <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="Select country"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9500] focus:border-transparent text-gray-900 placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Course Level */}
              <div>
                <label htmlFor="courseLevel" className="block text-sm font-semibold text-gray-900 mb-2">
                  Course Level <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="courseLevel"
                  name="courseLevel"
                  value={formData.courseLevel}
                  onChange={handleChange}
                  placeholder="Select course level"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9500] focus:border-transparent text-gray-900 placeholder-gray-400"
                />
              </div>

              {/* Additional Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Additional Message <span className="text-gray-500 text-xs">(Optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your goals, questions, or any specific requirements..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9500] focus:border-transparent text-gray-900 placeholder-gray-400 resize-none"
                />
              </div>

              {/* Privacy Statement */}
              <p className="text-sm text-gray-600">
                By submitting this form, you agree to our{' '}
                <a href="#" className="text-[#FF9500] hover:underline">Privacy Policy</a>
                {' '}and consent to be contacted by our counseling team. Your information is secure and will never be shared with third parties.
              </p>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#FF9500] text-white px-6 py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-orange-600 transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
              >
                <Send className="w-5 h-5" />
                Request Callback
              </button>
            </form>
          </div>

          {/* Illustration Section */}
          <div className=" flex items-center justify-center lg:justify-end">
            <div className="">
              <img
                src={sit}
                alt="Counseling session illustration"
                className="w-full h-auto object-contain "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;