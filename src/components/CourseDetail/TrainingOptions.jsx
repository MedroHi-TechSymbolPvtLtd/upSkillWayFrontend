import React from "react";
import { useNavigate } from "react-router-dom";
import { Rocket, BookOpen, Users } from "lucide-react";

// Default icon mapping
const getIconForTraining = (name, imageUrl) => {
  if (imageUrl) {
    return <img src={imageUrl} alt={name} className="w-10 h-10 mx-auto mb-4 object-contain" onError={(e) => e.target.style.display = 'none'} />;
  }
  
  const nameLower = name?.toLowerCase() || '';
  if (nameLower.includes('bootcamp') || nameLower.includes('online')) {
    return <Rocket className="w-10 h-10 text-[#3E5BA4] mx-auto mb-4" />;
  } else if (nameLower.includes('self') || nameLower.includes('paced')) {
    return <BookOpen className="w-10 h-10 text-[#3E5BA4] mx-auto mb-4" />;
  } else if (nameLower.includes('corporate') || nameLower.includes('team')) {
    return <Users className="w-10 h-10 text-[#3E5BA4] mx-auto mb-4" />;
  }
  return <Rocket className="w-10 h-10 text-[#3E5BA4] mx-auto mb-4" />;
};

export default function TrainingOptions({ course }) {
  const navigate = useNavigate();
  
  // Use API data or fallback to default
  const trainingOptions = course?.trainingOptions || [
    {
      name: "Online Bootcamp",
      price: 14990,
      currency: "INR",
      descriptionPoints: [
        "Flexi Pass Enabled",
        "90 days of flexible access",
        "Live online classroom training",
        "3 months of course duration",
        "Tools covered: Power BI",
        "Certification included",
        "Internship / live projects"
      ]
    },
    {
      name: "Self-Paced Learning",
      price: 9990,
      currency: "INR",
      descriptionPoints: [
        "Recorded video lectures",
        "60+ case studies",
        "Access to community discussions",
        "Certification included",
        "Dedicated account manager",
        "BI Placement assistance"
      ]
    },
    {
      name: "Corporate Training",
      price: 39990,
      currency: "INR",
      descriptionPoints: [
        "Flexi Pass Enabled",
        "90 days of flexible access",
        "Live sessions by top trainers",
        "Skills assessment at regular intervals",
        "Dedicated account manager",
        "Private cohorts available",
        "Custom dashboards"
      ]
    }
  ];

  return (
    <section id="training-options" className="w-full bg-white py-20 px-4 md:px-20 lg:-mt-30">
      
      {/* ================= HEADING ================= */}
      <h2 className="text-[36px] md:text-[44px] font-semibold text-[#3D3D3D] mb-16">
        <span className="text-[#FCB11F]">Training</span> Options
      </h2>

      {/* ================= CARDS GRID ================= */}
      <div className="flex flex-col md:flex-row justify-center gap-8 flex-wrap">

        {trainingOptions.map((option, index) => (
          <div 
            key={index}
            className="w-full md:w-[320px] bg-white border-[3px] border-[#7686A1] rounded-[24px] px-6 py-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col relative overflow-visible"
          >
            {/* Top Notch - Center */}
            <div className="absolute top-1 lg:-mt-0.5 left-1/2 -translate-x-1/2 -translate-y-[3px] w-[160px] h-[7px] bg-[#314B7E] rounded-b-[12px] z-10"></div>
            
            {/* Left Notch */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[3px] w-[7px] h-[100px] bg-[#314B7E] rounded-r-[12px] z-10"></div>
            
            {/* Right Notch */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[3px] w-[7px] h-[100px] bg-[#314B7E] rounded-l-[12px] z-10"></div>
            
            {/* Icon with background */}
            <div className="mb-6 relative z-20">
              {getIconForTraining(option.name, option.imageUrl)}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
              {option.name}
            </h3>

            {/* Subtitle */}
            <p className="text-sm text-gray-500 text-center mb-6">
              {option.description || `Ideal for ${option.name.toLowerCase()}`}
            </p>

            {/* Price */}
            <p className="text-[36px] font-bold text-[#3E5BA4] text-center mb-6">
              {option.currency === 'USD' ? '$' : '₹'}{option.price?.toLocaleString()}
            </p>

            {/* Features List */}
            <ul className="text-sm text-gray-600 space-y-3 mb-8 flex-grow">
              {option.descriptionPoints?.map((point, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-green-600 mr-2 flex-shrink-0">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <button 
              onClick={() => navigate('/contact')}
              className="w-full bg-[#3E5BA4] hover:bg-[#2d4373] text-white py-3 rounded-full text-sm font-semibold transition-colors duration-200 shadow-md"
            >
              {option.name.toLowerCase().includes('corporate') ? 'Contact Us' : 'Enroll now'}
            </button>
          </div>
        ))}

      </div>
    </section>
  );
}
