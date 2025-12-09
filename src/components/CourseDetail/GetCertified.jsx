import React from "react";


// ✅ Certificate image import (Vite safe)
import certificateImg from "../../assets/Images/certificate2.png";
import medal from "../../assets/Images/medal.png";

export default function GetCertified({ course }) {
  return (
    <section className="w-full bg-white pb-20 px-4 md:px-20">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* ================= LEFT CONTENT ================= */}
        <div>
          {/* Heading */}
          <h2 className="text-[34px] md:text-[42px] font-semibold text-[#1E1E1E] mb-6 flex items-center gap-2">
            Get <span className="text-[#FDB11F]">Certified</span>{" "}
            <img src={medal} alt="medal" className="inline-block w-10 h-10 md:w-12 md:h-12" />
          </h2>

          {/* Subheading */}
          <h3 className="text-[16px] font-medium text-[#3D3D3D] mb-3">
            {course?.title || 'Full Stack Development with AI Course'}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-sm mb-6">
            You will be able to generate the certificate for course of completion:
          </p>

          {/* Bullet Points */}
          <ul className="list-disc pl-5 text-sm text-gray-600 mb-12 space-y-2 lg:mt-15">
            <li>After watching 70% of videos</li>
            <li>After completing 70% in Quiz & Assignment</li>
          </ul>

          {/* Footer Note */}
          <p className="text-gray-400 text-xs leading-relaxed max-w-[520px] mb-10 lg:mt-15">
            The above criteria is only for getting the course completion certificate. 
            For details regarding Job Assistance criteria, please refer to the FAQs
          </p>

          
        </div>
        

        {/* ================= RIGHT CERTIFICATE IMAGE ================= */}
        <div className="flex justify-center md:justify-end">
          <img
            src={certificateImg}
            alt="Certificate"
            className="w-full max-w-[520px] rounded-xl border border-orange-400"
          />
        </div>
        

      </div>
     
    </section>
  );
}
