import { useEffect } from "react";
import {
  Star,
  Play,
  Users,
  Award,
  BookOpen,
  TrendingUp,
  ChevronRight,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Infinity from "../components/Animation/Infinity";
import Footer from "../components/Footer";
import business from "../assets/Images/business.png";

export default function SkillWayLanding() {
  // Add Google Font link dynamically
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <div
      className="min-h-screen relative overflow-hidden bg-white"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* Navigation */}
      <Navbar className="relative z-10 bg-transparent" />

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 overflow-hidden">
        {/* Left gradient blob - Exact Figma specs */}
 {/* Left gradient blob - Updated with #FFA800 */}
<div
  className="absolute opacity-100"
  style={{
    width: "800px",
    height: "800px",
    top: "-400px",
    left: "-400px",
    background: "radial-gradient(circle, rgba(255, 168, 0, 0.8) 0%, rgba(255, 255, 255, 0.2) 70%)",
    filter: "blur(40px)",
    transform: "rotate(45deg)",
  }}
/>
{/* Right gradient blob - Updated with #FFA800 */}
<div
  className="absolute opacity-100"
  style={{
    width: "800px",
    height: "800px",
    top: "-400px",
    right: "-400px",
    background: "radial-gradient(circle, rgba(255, 168, 0, 0.8) 0%, rgba(255, 255, 255, 0.2) 70%)",
    filter: "blur(40px)",
    transform: "rotate(-45deg)",
  }}
/>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          {/* Decorative elements */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
            <div></div>
          </div>
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
            <div className="w-1 h-16 bg-blue-400 opacity-60"></div>
          </div>

          {/* Main heading with blue border */}
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 rounded-lg transform translate-x-2 translate-y-2 opacity-60"></div>
            <div className="relative bg-white/10 backdrop-blur-sm  rounded-lg p-8">
              <h1
                className="text-4xl lg:text-6xl font-bold leading-tight mb-2 
                         bg-gradient-to-b from-[#FFA800] to-[#000000] 
                         bg-clip-text text-transparent"
              >
                Transform Your Career with
              </h1>
              <h2 className="text-4xl lg:text-6xl font-bold text-black leading-tight">
                Industry-Ready Skills
              </h2>
            </div>
          </div>

          <p className="text-lg text-[5A5A59] mb-4 max-w-2xl mx-auto leading-relaxed">
            Join{" "}
            <span className=" text-[5A5A59]  px-2 py-1 rounded font-semibold">
              15,000+
            </span>{" "}
            professionals who've{" "}
            <span className="font-semibold">accelerated</span> their careers
            through our hands-on
          </p>
          <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
            programs and industry connections.
          </p>

          {/* CTA Buttons - matching the design */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <button className="bg-[#FBB11F] text-white px-8 py-3 rounded-full text-base font-medium hover:from-orange-500 hover:to-yellow-600 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
              Register Now
              <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                <ChevronRight className="w-3 h-3" />
              </div>
            </button>
            <button className="bg-transparent text-gray-800 px-8 py-3 rounded-full text-base font-medium border border-gray-400 hover:bg-white/20 hover:backdrop-blur-sm transition-all flex items-center justify-center gap-2">
              <Play className="w-4 h-4" />
              Starting Learning
            </button>
          </div>

          {/* Three Feature Cards - matching the design exactly */}
          <div className="relative max-w-6xl mx-auto">
            {/* Connecting Lines */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 transform -translate-y-1/2 z-0"></div>
            <div className="absolute top-1/2 left-1/4 w-1/2 h-0.5 bg-gray-400 transform -translate-y-1/2 z-0"></div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-16 lg:gap-20 relative z-10">
              {/* Guaranteed Job Placement - Left Card (STRAIGHT) */}
              <div className="bg-[#F7F7F7] backdrop-blur-sm w-[280px] h-[240px] rounded-2xl p-6 shadow-[0px 4px 24px 0px #0000000F] hover:shadow-xl transition-all relative">
                <div className="absolute -top-3 left-6">
                  <div className="mt-8 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-gray-100">
                    <Star className="w-5 h-5 text-gray-800 fill-gray-800" />
                  </div>
                </div>
                <div className="mt-12">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">
                    Guaranteed Job
                    <br />
                    Placement
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    100% placement assistance with our network of 400+ hiring
                    partners
                  </p>
                </div>
              </div>

              {/* Industry Recognition - Center Card (TILTED & HIGHLIGHTED) */}
              <div className="bg-[#FFE6A1] w-[280px] h-[240px] rounded-2xl p-6 shadow-[0px 4px 24px 0px #0000000F] hover:shadow-2xl transition-all transform -rotate-[15deg] hover:-rotate-[12deg] relative z-20">
                <div className="absolute -top-3 left-6">
                  <div className="mt-8 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-gray-100">
                    <Star className="w-5 h-5 text-gray-800 fill-gray-800" />
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">
                    Industry Recognition
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Globally recognized certifications from leading tech
                    companies
                  </p>
                </div>
              </div>

              {/* Expert Mentorship - Right Card (STRAIGHT) */}
              <div className="bg-[#F7F7F7] backdrop-blur-sm w-[280px] h-[240px] rounded-2xl p-6 shadow-[0px 4px 24px 0px #0000000F] hover:shadow-xl transition-all relative">
                <div className="absolute ">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-gray-100">
                    <Star className="w-5 h-5 text-gray-800 fill-gray-800" />
                  </div>
                </div>
                <div className="mt-12">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">
                    Expert Mentorship
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Learn from industry practitioners with proven expertise
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative stars positioned like in the image */}
            <div className="absolute top-8 left-8">
            
            </div>
            <div className="absolute bottom-8 right-8">
            
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Abstract Red Fluid Line */}
      <section className="relative py-16 bg-white overflow-hidden">
        {/* Abstract Red Fluid Line - Exact Figma specs */}
        <div
          className="absolute z-0"
          style={{
            width: "1551.46px",
            height: "335.14px",
            top: "50px",
            left: "-24px",
            transform: "rotate(1.48deg)",
            opacity: 1,
          }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1552 336"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            {/* Main fluid red line */}
            <path
              d="M0 200 Q200 50 400 120 Q600 200 800 100 Q1000 50 1200 150 Q1400 250 1552 180"
              stroke="#FE513F"
              strokeWidth="5"
              fill="none"
              style={{
                filter: "drop-shadow(0px 24px 24px rgba(55, 52, 169, 0.3))",
              }}
            />
            {/* Additional flowing curves for depth */}
            <path
              d="M0 220 Q250 80 500 140 Q750 220 1000 120 Q1250 70 1552 200"
              stroke="#FE513F"
              strokeWidth="3"
              fill="none"
              opacity="0.6"
            />
            <path
              d="M0 180 Q150 30 350 100 Q550 180 750 80 Q950 30 1150 130 Q1350 230 1552 160"
              stroke="#FE513F"
              strokeWidth="2"
              fill="none"
              opacity="0.4"
            />
          </svg>
        </div>

        {/* Stats Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 z-10">
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {/* 170% Average Salary Hike */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all w-[240px] h-[120px] flex flex-col justify-center items-center">
              <div className="text-3xl font-bold text-gray-800 mb-2">170%</div>
              <div className="text-gray-600 font-bold text-[16px] text-center">
                Average Salary Hike
              </div>
            </div>

            {/* 15,000+ Students Trained */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all w-[240px] h-[120px] flex flex-col justify-center items-center">
              <div className="text-3xl font-bold text-gray-800 mb-2">
                15,000+
              </div>
              <div className="text-gray-600 font-bold text-[16px] text-center">
                Students Trained
              </div>
            </div>

            {/* 400+ Hiring Partners */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all w-[240px] h-[120px] flex flex-col justify-center items-center">
                <div className="text-3xl font-bold text-gray-800 mb-2">
                400+
              </div>
              <div className="text-gray-600 font-bold text-[16px] text-center">
                Hiring Partners
              </div>
            </div>

            {/* 4.8/5 Student Rating */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all w-[240px] h-[120px] flex flex-col justify-center items-center">
              <div className="text-3xl font-bold text-gray-800 mb-2">4.8/5</div>
              <div className="text-gray-600 font-bold text-[16px] text-center">
                Student Rating
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[56px] font-bold text-gray-900 mb-4">
              Unlock your <span className="text-amber-500">potential</span>
            </h2>
            <h3 className="text-[56px] text-gray-800 mb-8">
              With <span className="text-amber-500">transformative</span>{" "}
              programs
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find the best Program for your Growth and boosts <br /> your Confidence
              10x!
            </p>
          </div>

          {/* Category Tabs */}
          <div className=" w-[1240px] h-[48] flex flex-wrap justify-center gap-6 mb-12">
            <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors">
              <div className="w-6 h-6 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="9" y1="3" x2="9" y2="21"></line>
                </svg>
              </div>
              Developer
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-amber-500 border-b-2 border-amber-500 font-medium">
              <div className="w-6 h-6 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              popular
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors">
              <div className="w-6 h-6 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                </svg>
              </div>
              Project Manager
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors">
              <div className="w-6 h-6 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
              </div>
              Designer
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors">
              <div className="w-6 h-6 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="8" r="7"></circle>
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                </svg>
              </div>
              Accountant
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors">
              <div className="w-6 h-6 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              Human Resource
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors">
              <div className="w-6 h-6 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                  <line x1="7" y1="7" x2="7.01" y2="7"></line>
                </svg>
              </div>
              Marketing
            </button>
          </div>

          {/* Course Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Course Card 1 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src="https://placehold.co/600x400/e2f4ff/0287c3?text=Data+Science+Course"
                  alt="Data Science Course"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-0 left-0 p-4">
                  <div className="text-lg font-semibold text-gray-800">
                    Courses to Learn
                  </div>
                  <div className="text-2xl font-bold text-gray-800">
                    Data Science
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <svg
                    className="w-4 h-4 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <span className="text-sm text-gray-600 ml-1">4.8 (6)</span>
                </div>
                <h3 className="text-lg font-bold mb-2">
                  Data Science with Specialization
                </h3>
                <p className="text-sm text-gray-600 mb-4">Duration: 6 Months</p>
                <div className="flex justify-between">
                  <button className="text-sm text-gray-600 hover:text-gray-900">
                    Download Brochure
                  </button>
                  <button className="text-sm text-gray-600 hover:text-gray-900">
                    View Program
                  </button>
                </div>
              </div>
            </div>

            {/* Course Card 2 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src="https://placehold.co/600x400/e2f4ff/0287c3?text=Data+Science+Course"
                  alt="Data Science Course"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-0 left-0 p-4">
                  <div className="text-lg font-semibold text-gray-800">
                    Courses to Learn
                  </div>
                  <div className="text-2xl font-bold text-gray-800">
                    Data Science
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <svg
                    className="w-4 h-4 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <span className="text-sm text-gray-600 ml-1">4.8 (6)</span>
                </div>
                <h3 className="text-lg font-bold mb-2">
                  Data Science with Specialization
                </h3>
                <p className="text-sm text-gray-600 mb-4">Duration: 6 Months</p>
                <div className="flex justify-between">
                  <button className="text-sm text-gray-600 hover:text-gray-900">
                    Download Brochure
                  </button>
                  <button className="text-sm text-gray-600 hover:text-gray-900">
                    View Program
                  </button>
                </div>
              </div>
            </div>

            {/* Course Card 3 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src="https://placehold.co/600x400/e2f4ff/0287c3?text=Data+Science+Course"
                  alt="Data Science Course"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-0 left-0 p-4">
                  <div className="text-lg font-semibold text-gray-800">
                    Courses to Learn
                  </div>
                  <div className="text-2xl font-bold text-gray-800">
                    Data Science
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <svg
                    className="w-4 h-4 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <span className="text-sm text-gray-600 ml-1">4.8 (6)</span>
                </div>
                <h3 className="text-lg font-bold mb-2">
                  Data Science with Specialization
                </h3>
                <p className="text-sm text-gray-600 mb-4">Duration: 6 Months</p>
                <div className="flex justify-between">
                  <button className="text-sm text-gray-600 hover:text-gray-900">
                    Download Brochure
                  </button>
                  <button className="text-sm text-gray-600 hover:text-gray-900">
                    View Program
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center justify-center bg-[#FFFFFF] border-[1px] text-black px-6 py-3 rounded-full hover:bg-amber-600 transition-colors">
              View All
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </section>

    

      {/* Why Choose UpSkillWay Section */}
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title container - exactly matching your specs */}
        <div 
          className="text-center mb-16 w-[886px] h-[74px]"
          style={{ marginLeft: '255px' }} // Exact left: 355px positioning
        >
          <h2 
            className="  text-gray-900 mb-4"
            style={{
              fontFamily: 'Plus Jakarta Sans, ui-sans-serif, system-ui',
              fontWeight: 600,
              fontSize: '62px',
              lineHeight: '74px',
              letterSpacing: '0%',
                marginLeft: -130,                        
              margin: 0
            }}
          >
            Why Choose <span className=" text-amber-500">UpSkillWay</span>?
          </h2>
        </div>
             
        {/* Infinity animation container - exactly matching your specs */}
       
      </div>
    </section>
      <Infinity className="-mt-60"/>
    
       

      {/* The Process We Follow Section */}
      <section className="py-20 bg-gray-50">
        <div className="w-[1212px] h-[120px] mx-[120px] px-4 sm:px-6 lg:px-8">
          <div className="w-[1212px] h-[120px] text-center mb-16">
            <h2 className="text-[60px] font-bold text-gray-900 mb-4">
              The <span className="w-[263px] h-[120px] text-[96px] text-amber-500">Process</span> We Follow
            </h2>
          </div>

          <div className="relative">
            {/* Curved connecting lines */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 transform -translate-y-1/2 z-0"></div>
            <div className="absolute top-1/2 left-[20%] right-[20%] h-16 border-t-2 border-l-2 border-r-2 border-amber-300 rounded-t-3xl transform -translate-y-1/2 z-0"></div>

            {/* Process steps */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {/* Step 1: UpSkillWay */}
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center">
                <div className="w-20 h-20 mx-auto mb-4">
                  <img
                    src="https://placehold.co/80x80/ffffff/ff9800?text=Logo"
                    alt="UpSkillWay Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">UpSkillWay</h3>
              </div>

              {/* Step 2: Registration */}
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-amber-50 rounded-full flex items-center justify-center">
                  <img
                    src="https://placehold.co/80x80/fff8e1/ff9800?text=Register"
                    alt="Registration"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">Registration</h3>
              </div>

              {/* Step 3: Learning */}
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-amber-50 rounded-full flex items-center justify-center">
                  <img
                    src="https://placehold.co/80x80/fff8e1/ff9800?text=Learn"
                    alt="Learning"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">Learning</h3>
              </div>

              {/* Step 4: Career */}
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-amber-50 rounded-full flex items-center justify-center">
                  <img
                    src="https://placehold.co/80x80/fff8e1/ff9800?text=Career"
                    alt="Career"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">Career Success</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white mt-35">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-12">
            <span className="absolute  left-[707px] w-[138px] h-[44px] 
         rounded-[22px] border border-black 
         pt-[12px] pr-[23px] pb-[12px] pl-[23px] 
         flex gap-[10px] opacity-100">
              Testimonial
            </span>
          </div>

          <div className="w-[852px] h-[68px] ml-48 text-center mb-16">
            <h2 className="text-[54px] font-bold text-gray-900 mb-4">
              Hear What Our <span className="text-amber-500">Users</span> Are
              Saying
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-10">
              Discover the varied perspectives and experiences as users share
              their stories, highlighting the versatility of our app.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-28 ">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <div className="w-16 h-16 mx-auto mb-4 overflow-hidden rounded-full">
                <img
                  src="https://placehold.co/64x64/e0e0e0/9e9e9e?text=GH"
                  alt="Guy Hawkins"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-center font-semibold mb-1">Guy Hawkins</h3>
              <p className="text-center text-sm text-gray-500 mb-4">
                Creative Director at Amazon
              </p>
              <p className="text-gray-600 text-sm italic">
                "As a busy professional, this to-do app is a lifesaver. It
                effortlessly helps me stay organized."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <div className="w-16 h-16 mx-auto mb-4 overflow-hidden rounded-full">
                <img
                  src="https://placehold.co/64x64/e0e0e0/9e9e9e?text=DD"
                  alt="Divya"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-center font-semibold mb-1">Divyas</h3>
              <p className="text-center text-sm text-gray-500 mb-4">
                Product Designer at Stock
              </p>
              <div className="flex justify-center mb-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-4 h-4 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 text-sm italic">
                "As a busy professional, this to-do app is a lifesaver. A true
                game-changer!"
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <div className="w-16 h-16 mx-auto mb-4 overflow-hidden rounded-full">
                <img
                  src="https://placehold.co/64x64/e0e0e0/9e9e9e?text=BC"
                  alt="Bessie Cooper"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-center font-semibold mb-1">Bessie Cooper</h3>
              <p className="text-center text-sm text-gray-500 mb-4">
                UX Designer at Tokopedia
              </p>
              <p className="text-gray-600 text-sm italic">
                "As a busy professional, this to-do app is a lifesaver. It
                effortlessly helps me stay organized."
              </p>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <div className="w-16 h-16 mx-auto mb-4 overflow-hidden rounded-full">
                <img
                  src="https://placehold.co/64x64/e0e0e0/9e9e9e?text=DS"
                  alt="Darel Steward"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-center font-semibold mb-1">Darel Steward</h3>
              <p className="text-center text-sm text-gray-500 mb-4">
                Senior Manager at Google
              </p>
              <div className="flex justify-center mb-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-4 h-4 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 text-sm italic">
                "This app ensures I stay productive, no matter when I am."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vired For Business Enterprise Section */}
      <section className="py-20 bg-white">
        <div className="relative w-[1243px] h-[468px] mx-auto py-2">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#FCB11F] to-white/10 rounded-[20px] p-[3px]">
            <div className="w-full h-full bg-[#FFFFFF] rounded-[17px]">
             <div 
      className="text-red-500 font-medium mb-4 uppercase"
      style={{
        width: '558px',
        height: '48px',
        fontFamily: 'Plus Jakarta Sans, sans-serif',
        fontWeight: 500,
        fontSize: '30px',
        lineHeight: '24px',
        letterSpacing: '-0.24px',
        color: '#FF302F',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      ENTERPRISES 
    </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Vired For
                    <span className="bg-green-500 text-white px-3 py-1 rounded-md ml-2">
                      Business
                    </span>
                  </h2>

                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full border-2 border-green-500 flex items-center justify-center mr-2">
                        <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                      </div>
                      <p className="text-gray-700">
                        Gain access to world-class curriculum through
                        industry-relevant programs.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full border-2 border-green-500 flex items-center justify-center mr-2">
                        <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                      </div>
                      <p className="text-gray-700">
                        Engage in a 360-degree learning approach with both
                        online and offline initiatives.
                      </p>
                    </li>
                  </ul>

                  <div className="grid grid-cols-3 gap-4 mt-8">
      <div 
        className="bg-white p-6 rounded-[20px] shadow-lg"
        style={{
          width: '203px',
          height: '80px',
          boxShadow: '10px 29px 100px 0px rgba(0, 0, 0, 0.15)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '8px'
        }}
      >
        <div className="font-bold text-xl">100+</div>
        <div className="text-sm text-gray-600">
          Enterprise Partners
        </div>
      </div>
      
      <div 
        className="bg-white p-6 rounded-[20px] shadow-lg"
        style={{
          width: '203px',
          height: '80px',
          boxShadow: '10px 29px 100px 0px rgba(0, 0, 0, 0.15)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '8px'
        }}
      >
        <div className="font-bold text-xl">25,000+ hrs</div>
        <div className="text-sm text-gray-600">
          Live Hours Delivered
        </div>
      </div>
      
      <div 
        className="bg-white p-6 rounded-[20px] shadow-lg"
        style={{
          width: '203px',
          height: '80px',
          boxShadow: '10px 29px 100px 0px rgba(0, 0, 0, 0.15)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '8px'
        }}
      >
        <div className="font-bold text-xl">10,000+</div>
        <div className="text-sm text-gray-600">
          Employees Upskilled
        </div>
      </div>
    </div>
                </div>

                <div className="relative">
                  <div className="relative z-10">
                    <img
                      src={business}
                      alt="Business Dashboard"
                      className="rounded-lg shadow-xl"
                    />
                  </div>
                  <div className="absolute top-0 right-0 -mt-4 -mr-4">
                    <div className="text-gray-300">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <div className="text-gray-300">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4">
                    <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg">
                      <span className="text-gray-800 text-xl font-bold">+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Programs Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-12">
            <span className="inline-flex items-center px-4 py-2 bg-black text-white font-medium rounded-full">
              <span className="mr-2 w-3 h-3 bg-red-500 rounded-full"></span>
              Certificate Programs
            </span>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              All from <span className="text-amber-500">Basic</span> to{" "}
              <span className="text-amber-500">Advance</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Earn certificate from Upskillway, GDG MAD - Google Developer Group
              Mumbai, NSDC, and ITM Group of Institutions
            </p>
          </div>
          {/* Course Cards Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Course Card 1 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img
                      src="https://placehold.co/300x200/mint/white"
                      alt="Graphic Design Course"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-semibold">
                      Design
                    </div>
                    <div className="absolute top-4 right-4 bg-white text-gray-700 px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                      <span className="mr-1">₹999.00</span>
                      <span className="text-red-500 line-through text-xs">
                        ₹0
                      </span>
                    </div>
                    <div className="absolute top-4 left-4 flex space-x-1">
                      <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                        <span className="text-white text-xs">AI</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <div className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                        Beginner
                      </div>
                      <div className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                        Crash Course
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      The Complete Graphic Design for Beginners
                    </h3>
                    <div className="flex items-center mb-4">
                      <img
                        src="https://placehold.co/30x30"
                        alt="Instructor"
                        className="w-6 h-6 rounded-full mr-2"
                      />
                      <span className="text-sm text-gray-600">Wilson</span>
                      <div className="ml-auto flex items-center text-amber-500 text-sm">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="ml-1">4.5 Reviews</span>
                      </div>
                    </div>
                    <button className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800 transition-colors text-sm font-medium">
                      Enroll Now
                    </button>
                  </div>
                </div>

                {/* Course Card 2 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img
                      src="https://placehold.co/300x200/mint/white"
                      alt="Graphic Design Course"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-semibold">
                      Design
                    </div>
                    <div className="absolute top-4 right-4 bg-white text-gray-700 px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                      <span className="mr-1">₹999.00</span>
                      <span className="text-red-500 line-through text-xs">
                        ₹0
                      </span>
                    </div>
                    <div className="absolute top-4 left-4 flex space-x-1">
                      <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                        <span className="text-white text-xs">AI</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <div className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                        Beginner
                      </div>
                      <div className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                        Crash Course
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      The Complete Graphic Design for Beginners
                    </h3>
                    <div className="flex items-center mb-4">
                      <img
                        src="https://placehold.co/30x30"
                        alt="Instructor"
                        className="w-6 h-6 rounded-full mr-2"
                      />
                      <span className="text-sm text-gray-600">Wilson</span>
                      <div className="ml-auto flex items-center text-amber-500 text-sm">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="ml-1">4.5 Reviews</span>
                      </div>
                    </div>
                    <button className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800 transition-colors text-sm font-medium">
                      Enroll Now
                    </button>
                  </div>
                </div>

                {/* Course Card 3 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img
                      src="https://placehold.co/300x200/purple/white"
                      alt="JavaScript Course"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-purple-100 text-purple-600 px-2 py-1 rounded text-xs font-semibold">
                      Development
                    </div>
                    <div className="absolute top-4 right-4 bg-white text-gray-700 px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                      <span className="mr-1">₹0</span>
                    </div>
                    <div className="absolute top-4 left-4 flex space-x-1">
                      <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center">
                        <span className="text-white text-xs">JS</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <div className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                        Pro Expert
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      Learning JavaScript With Imagination
                    </h3>
                    <div className="flex items-center mb-4">
                      <img
                        src="https://placehold.co/30x30"
                        alt="Instructor"
                        className="w-6 h-6 rounded-full mr-2"
                      />
                      <span className="text-sm text-gray-600">Warren</span>
                      <div className="ml-auto flex items-center text-amber-500 text-sm">
                        <Star className="w-4 h-4 fill-current" />
                      </div>
                    </div>
                    <button className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800 transition-colors text-sm font-medium">
                      Enroll Now
                    </button>
                  </div>
                </div>

                {/* Course Card 4 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img
                      src="https://placehold.co/300x200/blue/white"
                      alt="Financial Analysis Course"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs font-semibold">
                      Business
                    </div>
                    <div className="absolute top-4 right-4 bg-white text-gray-700 px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                      <span className="mr-1">₹499.00</span>
                      <span className="text-red-500 line-through text-xs">
                        ₹0
                      </span>
                    </div>
                    <div className="absolute top-4 left-4 flex space-x-1">
                      <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                        <span className="text-white text-xs">$</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <div className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                        Financial
                      </div>
                      <div className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                        Crash Course
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      Financial Analyst Training & Investing Course
                    </h3>
                    <div className="flex items-center mb-4">
                      <img
                        src="https://placehold.co/30x30"
                        alt="Instructor"
                        className="w-6 h-6 rounded-full mr-2"
                      />
                      <span className="text-sm text-gray-600">Robert Fox</span>
                      <div className="ml-auto flex items-center text-amber-500 text-sm">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="ml-1">4.2 Reviews</span>
                      </div>
                    </div>
                    <button className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800 transition-colors text-sm font-medium">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <a
                  href="#"
                  className="inline-flex items-center text-gray-900 font-semibold hover:text-amber-500 transition-colors"
                >
                  View All Certificate Programs
                  <ChevronRight className="w-5 h-5 ml-1" />
                </a>
              </div>
            </div>
          </section>

          <div className="relative">
            <div className="absolute top-0 left-0 w-24 h-24">
              <div className="w-4 h-4 bg-amber-400 rounded-full"></div>
              <div className="w-4 h-4 bg-amber-400 rounded-full mt-4 ml-4"></div>
            </div>

            <div className="absolute bottom-0 left-0 w-24 h-24">
              <div className="w-4 h-4 bg-amber-400 rounded-full"></div>
              <div className="w-4 h-4 bg-amber-400 rounded-full mt-4 ml-4"></div>
            </div>

            <div className="absolute top-1/2 right-0 transform translate-y-1/2">
              <div className="w-32 h-32 bg-amber-200 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Discover Certification Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-gray-400 uppercase tracking-wider mb-2">
                certifications
              </div>
              <h2 className="text-5xl font-bold mb-6">
                discover
                <br />
                certification
              </h2>
              <p className="text-gray-400 mb-8">
                Elevate your career with upskillway programs, offering
                everything from foundational tech certifications to design,
                management and business-focused courses
              </p>
              <button className="flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition-colors">
                <span>Explore certificate programs</span>
                <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center ml-2">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </button>
            </div>
            <div className="relative">
              <img
                src="https://placehold.co/400x500"
                alt="Person with binoculars"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mxauto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            Frequently asked Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* FAQ Item 1 */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold flex items-center">
                  <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 font-bold">
                    01
                  </span>
                  How do I create an account on the job board?
                </h3>
                <button className="text-blue-500 hover:bg-blue-50 p-2 rounded-full">
                  <span className="text-xl font-bold">+</span>
                </button>
              </div>
            </div>

            {/* FAQ Item 2 */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold flex items-center">
                  <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 font-bold">
                    02
                  </span>
                  How do I apply for a job through the platform?
                </h3>
                <button className="text-blue-500 hover:bg-blue-50 p-2 rounded-full">
                  <span className="text-xl font-bold">+</span>
                </button>
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold flex items-center">
                  <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 font-bold">
                    03
                  </span>
                  How can I track the status of my job applications?
                </h3>
                <button className="text-blue-500 hover:bg-blue-50 p-2 rounded-full">
                  <span className="text-xl font-bold">+</span>
                </button>
              </div>
            </div>

            {/* FAQ Item 4 - Expanded */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold flex items-center">
                  <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 font-bold">
                    04
                  </span>
                  How do I create an account on the job board?
                </h3>
                <button className="text-red-500 hover:bg-red-50 p-2 rounded-full">
                  <span className="text-xl font-bold">×</span>
                </button>
              </div>
              <div className="mt-4 pl-11 text-gray-600">
                <p>
                  Use the search bar on the homepage to enter keywords related
                  to your skills, job title, or preferred location. You can also
                  use the advanced search filters to narrow down results by
                  industry, job type (full-time, part-time, freelance),
                  experience level, and more.
                </p>
              </div>
            </div>

            {/* FAQ Item 5 */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold flex items-center">
                  <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 font-bold">
                    05
                  </span>
                  Is there a cost to use the job board, and what features are
                  free?
                </h3>
                <button className="text-blue-500 hover:bg-blue-50 p-2 rounded-full">
                  <span className="text-xl font-bold">+</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Demo Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-yellow-200 to-orange-300 rounded-full opacity-20 transform translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-yellow-200 to-orange-300 rounded-full opacity-20 transform -translate-x-32 translate-y-32"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Refer Now Button */}
          <div className="mb-8">
            <button className="bg-gradient-to-r from-orange-400 to-yellow-500 text-white px-8 py-3 rounded-full font-medium hover:from-orange-500 hover:to-yellow-600 transition-all transform hover:scale-105 shadow-lg">
              Refer now →
            </button>
          </div>

          {/* Main Demo Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 relative overflow-hidden">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 rounded-3xl"></div>
            <div
              className="absolute inset-0 bg-cover bg-center rounded-3xl opacity-40"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')",
              }}
            ></div>

            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Schedule Your Personalized
                <br />
                Demo Today With Us
              </h2>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-800"
                />
                <button className="bg-white text-gray-800 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Refer & Earn Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent flex-1 max-w-32"></div>
              <div className="w-3 h-3 bg-orange-400 rounded-full mx-4"></div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mx-8">
                Refer <span className="text-orange-400">&</span> Earn
              </h2>
              <div className="w-3 h-3 bg-orange-400 rounded-full mx-4"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent flex-1 max-w-32"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Product Cards */}
            <div className="space-y-6">
              {/* MacBook Pro Card */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-4 left-4 text-sm text-gray-400">
                  MacBook Pro
                </div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">More power.</h3>
                  <h3 className="text-2xl font-bold mb-2">More performance.</h3>
                  <h3 className="text-2xl font-bold">More pro.</h3>
                </div>
                <div className="flex justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                    alt="MacBook Pro"
                    className="w-80 h-48 object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Right Side Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Bluetooth Headphones */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white relative">
                  <div className="text-sm text-gray-400 mb-2">BLUETOOTH</div>
                  <div className="text-4xl font-bold mb-1">5.1</div>
                  <div className="text-lg font-semibold mb-4">
                    <span className="text-white">STRONG</span>
                    <br />
                    <span className="text-gray-300">CONNECTIVITY</span>
                  </div>
                  <div className="flex justify-center">
                    <img
                      src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                      alt="Headphones"
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                  </div>
                </div>

                {/* Apple Watch */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white relative">
                  <div className="flex justify-center mb-4">
                    <img
                      src="https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                      alt="Apple Watch"
                      className="w-32 h-32 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Referral Process */}
            <div className="relative">
              {/* Curved Path */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 400 500"
                fill="none"
              >
                <path
                  d="M50 100 Q200 50 350 150 Q200 250 50 350 Q200 450 350 400"
                  stroke="#10b981"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="5,5"
                  opacity="0.6"
                />
              </svg>

              {/* Step 1 */}
              <div className="relative mb-16">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mr-6">
                    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Refer a Friend
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Share your unique referral link with your friends,
                      colleagues, or network.
                    </p>
                  </div>
                </div>
                <div className="absolute -right-4 top-4 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                  </svg>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative mb-16 ml-8">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mr-6">
                    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Friend Joins & Benefits
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Your friend signs up using your referral link and enjoys
                      exclusive rewards/discounts.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mr-6">
                    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      You Earn Rewards
                    </h3>
                    <p className="text-gray-600 text-sm">
                      When your friend joins, you earn rewards instantly.
                    </p>
                  </div>
                </div>
                <div className="absolute -right-4 top-4 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <button className="bg-gradient-to-r from-orange-400 to-yellow-500 text-white px-8 py-3 rounded-full font-medium hover:from-orange-500 hover:to-yellow-600 transition-all transform hover:scale-105 shadow-lg">
              Refer now →
            </button>
          </div>
        </div>
      </section>

      {/* Why Learners Trust Upskillway Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Learners Trust
              <br />
              Upskill<span className="text-orange-400">way</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Unlock your true potential with Upskillway and explore
              opportunities that fit your skills, passions, and career goals.
            </p>
          </div>

          {/* Feature Cards Layout */}
          <div className="relative">
            {/* Central Logo */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-48 h-48 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-lg flex items-center justify-center mr-2">
                      <BookOpen className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-2xl font-bold text-gray-800">
                      Upskillway
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Cards arranged in circle */}
            <div className="relative h-[600px]">
              {/* Certified Programs - Top Left */}
              <div className="absolute top-0 left-0 w-72 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <Award className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Certified</h3>
                    <h3 className="font-bold text-gray-900">Programs</h3>
                  </div>
                </div>
              </div>

              {/* Networking Opportunities - Top Right */}
              <div className="absolute top-0 right-0 w-72 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Networking</h3>
                    <h3 className="font-bold text-gray-900">Opportunities</h3>
                  </div>
                </div>
              </div>

              {/* Showcase Skill - Left */}
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-80 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <TrendingUp className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Showcase Skill</h3>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Showcase your Skill to stand out among all
                </p>
                <button className="bg-gray-900 text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800 transition-colors">
                  Starting Learning
                </button>
              </div>

              {/* Career Builder - Right */}
              <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-80 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <Award className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Career Builder</h3>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Create a professional Career using our programs
                </p>
                <button className="bg-gray-900 text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800 transition-colors">
                  Build Career
                </button>
              </div>

              {/* 100K+ Users - Bottom Left */}
              <div className="absolute bottom-0 left-0 w-72 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:translate-y-2">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">100K +</h3>
                    <p className="text-gray-600 text-sm">
                      Worldwide Active Users
                    </p>
                  </div>
                </div>
              </div>

              {/* Expert Mentorship - Bottom Right */}
              <div className="absolute bottom-0 right-0 w-72 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:translate-y-2">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <BookOpen className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Expert</h3>
                    <h3 className="font-bold text-gray-900">Mentorship</h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-br from-yellow-200 to-orange-300 rounded-full opacity-20"></div>
            <div className="absolute bottom-20 right-20 w-20 h-20 bg-gradient-to-br from-yellow-200 to-orange-300 rounded-full opacity-20"></div>
            <div className="absolute top-40 right-40 w-12 h-12 bg-gradient-to-br from-yellow-200 to-orange-300 rounded-full opacity-30"></div>
            <div className="absolute bottom-40 left-40 w-14 h-14 bg-gradient-to-br from-yellow-200 to-orange-300 rounded-full opacity-25"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
