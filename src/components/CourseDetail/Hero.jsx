import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaDownload } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";

// ✅ Proper Vite Imports
import heroImg from "../../assets/Images/img.png";
import shareImg from "../../assets/Images/share.png";
import calendarImg from "../../assets/Images/calendar.png";
import statsImg from "../../assets/Images/stats.png";
import ellipseImg from "../../assets/Images/ellipse.png";
import groupImg from "../../assets/Images/Group.png";

export default function Hero({ course }) {
  const navigate = useNavigate();
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = course?.title || 'Check out this course!';
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`,
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
  };
  return (
    <div>
      {/* ================= HERO SECTION ================= */}
      <div className="bg-[#fff7f3] mt-3 rounded-4xl mx-2 sm:mx-4 md:mx-8 rounded-b-[40px] px-4 md:px-16 pt-10 md:pt-20 pb-24 relative overflow-hidden">
        
        {/* Back Button */}
        <div className="flex items-center gap-2 text-sm text-gray-700 mb-6 cursor-pointer">
          <IoIosArrowBack size={18} /> Back
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* LEFT CONTENT */}
          <div className="z-10 text-center md:text-left">
            <span className="inline-block mb-2 px-4 py-1 bg-white rounded-full text-sm">
              Never stop learning
            </span>

            <h1 className="text-[32px] sm:text-[42px] md:text-[64px] text-[#3D3D3D] font-semibold leading-tight mb-4">
              {course?.title || 'Full Stack development with Ai'}
            </h1>

            <p className="text-gray-600 max-w-2xl mb-3 mx-auto md:mx-0">
              {course?.shortDescription || course?.description || 'Become a certified Full Stack Engineer with our Offline Full Stack Web Development Program.'}
            </p>

            {/* Share icon */}
            <button 
              onClick={() => setIsShareModalOpen(true)}
              className="mb-6 text-orange-500 text-xl mx-auto md:mx-0 block hover:opacity-80 transition-opacity"
            >
              <img src={shareImg} alt="share" />
            </button>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mb-8">
              <button 
                onClick={() => {
                  const element = document.getElementById('training-options');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="bg-orange-500 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors"
              >
                View Training option
              </button>

              <button 
                onClick={() => navigate('/contact')}
                className="bg-orange-500 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors"
              >
                Book demo
              </button>

              <button className="bg-white border border-orange-400 text-orange-500 p-3 rounded-lg hover:bg-orange-50 transition-colors">
                <FaDownload />
              </button>
            </div>

            {/* Explore + Reviews */}
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-6">
              <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold text-sm">
                EXPLORE PATH
              </button>

              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  <img src="https://i.pravatar.cc/100?img=1" className="w-9 h-9 rounded-full border" />
                  <img src="https://i.pravatar.cc/100?img=2" className="w-9 h-9 rounded-full border" />
                  <img src="https://i.pravatar.cc/100?img=3" className="w-9 h-9 rounded-full border" />
                </div>

                <div className="leading-tight">
                  <div className="flex items-center text-black text-sm">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                  </div>
                  <p className="text-[11px] pt-1 text-black">( 10k+ Reviews)</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex flex-col items-center md:items-end gap-6">
            <img
              src={course?.bannerImageUrl || heroImg}
              alt="Course"
              className="w-full max-w-xl rounded-2xl"
              onError={(e) => { e.target.src = heroImg; }}
            />

            {/* Stats Row */}
            <div className="flex items-center self-center gap-5 flex-wrap justify-center">
              <div className="bg-white rounded-full flex items-center gap-4 px-6 py-3">
                <img src={calendarImg} alt="calendar" />
                <div className="leading-tight">
                  <p className="font-bold text-gray-800">250k</p>
                  <p className="text-sm text-gray-500">Assisted Student</p>
                </div>
              </div>

              <div className="h-16 mt-4 flex items-center justify-center text-white rounded-full text-xl">
                <img src={statsImg} alt="stats" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM INFO BAR ================= */}
      <div className="py-8 bg-white rounded-xl grid grid-cols-2 md:grid-cols-4 text-center relative">

        <div className="relative">
          <p className="font-semibold text-[#1B2124] font-nunito text-sm md:text-base">{course?.programName || 'Job Assistance'}</p>
          <p className="text-gray-500 text-[14px] md:text-sm">Program</p>
          <span className=" md:block absolute right-0 top-1/2 -translate-y-1/2 h-10 w-[1px] bg-gray-300" />
        </div>

        <div className="relative md:pr-20">
          <p className="text-[#1B2124] font-semibold text-sm md:text-base ">{course?.durationMonths ? `${course.durationMonths} Months` : '8 Months'}</p>
          <p className="text-gray-500 text-[14px] md:text-sm">Duration</p>
          <span className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-10 w-[1px] bg-gray-300" />
        </div>

        <div className="relative md:pl-20 ">
          <p className="font-semibold text-[#1B2124] text-sm md:text-base">{course?.deliveryModes?.[0] || 'Virtual Live'}</p>
          <p className="text-gray-500  text-[14px] md:text-sm">Delivery Mode</p>
          <span className=" md:block absolute right-0 top-1/2 -translate-y-1/2 h-10 w-[1px] bg-gray-300" />
        </div>

        <div>
          <p className="font-semibold text-[#1B2124] text-sm md:text-base ">{course?.language || 'English'}</p>
          <p className="text-gray-500  text-[14px] md:text-sm">Language</p>
        </div>

        {/* Center Circle (Desktop Only) */}
        <div className="absolute left-1/2 -translate-x-1/2  bottom-[0px] z-20 hidden md:flex">
          <img src={ellipseImg} alt="ellipse" />
          <div className="absolute inset-0 flex items-center justify-center">
            <img src={groupImg} alt="play" />
          </div>
        </div>
      </div>

      {/* Share Modal */}
      {isShareModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setIsShareModalOpen(false)}
        >
          <div 
            className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-3xl p-8 sm:p-12 max-w-2xl w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsShareModalOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 text-3xl font-bold"
            >
              ×
            </button>

            {/* Title */}
            <h2 className="text-white text-3xl sm:text-4xl font-bold text-center mb-8 tracking-wide">
              SHARE ON SOCIAL MEDIA
            </h2>

            {/* Divider */}
            <div className="w-full h-0.5 bg-white mb-12"></div>

            {/* Social Media Icons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
              {/* Facebook */}
              <button
                onClick={() => handleShare('facebook')}
                className="flex flex-col items-center justify-center gap-4 group"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-300 rounded-2xl flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                  <FaFacebookF className="text-gray-700 text-3xl sm:text-4xl" />
                </div>
              </button>

              {/* Twitter */}
              <button
                onClick={() => handleShare('twitter')}
                className="flex flex-col items-center justify-center gap-4 group"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-300 rounded-2xl flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                  <FaTwitter className="text-gray-700 text-3xl sm:text-4xl" />
                </div>
              </button>

              {/* Instagram */}
              <button
                onClick={() => window.open('https://www.instagram.com/', '_blank')}
                className="flex flex-col items-center justify-center gap-4 group"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-300 rounded-2xl flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                  <FaInstagram className="text-gray-700 text-3xl sm:text-4xl" />
                </div>
              </button>

              {/* YouTube */}
              <button
                onClick={() => window.open('https://www.youtube.com/', '_blank')}
                className="flex flex-col items-center justify-center gap-4 group"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-300 rounded-2xl flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                  <FaYoutube className="text-gray-700 text-3xl sm:text-4xl" />
                </div>
              </button>

              {/* WhatsApp */}
              <button
                onClick={() => handleShare('whatsapp')}
                className="flex flex-col items-center justify-center gap-4 group sm:col-start-2"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-300 rounded-2xl flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                  <FaWhatsapp className="text-gray-700 text-3xl sm:text-4xl" />
                </div>
              </button>

              {/* LinkedIn */}
              <button
                onClick={() => handleShare('linkedin')}
                className="flex flex-col items-center justify-center gap-4 group"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-300 rounded-2xl flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                  <FaLinkedinIn className="text-gray-700 text-3xl sm:text-4xl" />
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
