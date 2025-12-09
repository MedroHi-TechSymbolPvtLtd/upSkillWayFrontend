import React from "react";
import { Twitter, Linkedin } from "lucide-react";

export default function Mentors({ course }) {
  // Use API data or fallback to default
  const mentors = course?.mentors || [
    {
      name: "Christina Rosetti",
      title: "Chief Financial Officer",
      bio: "Our CFO brings strategic vision and financial expertise",
      imageUrl: "https://randomuser.me/api/portraits/women/44.jpg",
      socialLinks: {
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      name: "Edgar Davids",
      title: "Chief Executive Officer",
      bio: "Our CEO leads with vision and dedication, driving innovation.",
      imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
      socialLinks: {
        twitter: "#",
        linkedin: "#"
      }
    }
  ];

  return (
    <section className="w-full bg-white py-20 px-4 md:px-20 lg:-mt-20">

      {/* ================= HEADING ================= */}
      <div className="mb-14">
        <h2 className="text-[36px] md:text-[44px] font-semibold text-[#3D3D3D] leading-tight">
          Meet our <span className="text-[#FCB11F]">mentors</span>
        </h2>
        <p className="text-gray-400 mt-1 text-sm">
          Passionate about enhancing user engagement
        </p>
      </div>

      {/* ================= MENTORS GRID ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16 justify-items-center">
        {mentors.map((mentor, index) => (
          <div 
            key={index} 
            className="w-full lg:w-[536px] h-auto lg:h-[287px] bg-gray-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 h-full">
              {/* Left Side - Info */}
              <div className="p-6 md:p-8 flex flex-col justify-center">
                {/* Title Badge */}
                <div className="inline-block mb-4">
                  <span className="bg-gray-500 px-4 py-2 rounded-full text-xs font-medium text-gray-800 shadow-sm">
                    {mentor.title}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  {mentor.name}
                </h3>

                {/* Bio */}
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                  {mentor.bio}
                </p>

                {/* Social Icons */}
                <div className="flex gap-3">
                  <a
                    href={mentor.socialLinks?.twitter || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href={mentor.socialLinks?.linkedin || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right Side - Image */}
              <div className="relative h-64 md:h-full">
                <img
                  src={mentor.imageUrl}
                  alt={mentor.name}
                  className="w-full h-full object-cover grayscale"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(mentor.name)}&size=400&background=e5e7eb&color=374151`;
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ================= BOTTOM CTA ================= */}
      <div className="flex justify-center">
        <div className="bg-[#FFD75E] rounded-full px-6 py-3 flex flex-col sm:flex-row items-center gap-4 shadow-md">
          <p className="text-sm font-medium text-black">
            Still Confused? Let us clear all your queries
          </p>
          <button className="bg-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
            Get call back
          </button>
        </div>
      </div>

    </section>
  );
}
